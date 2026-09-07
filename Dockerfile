# ==============================================================================
# Estágio 1: Dependências
# ==============================================================================
FROM node:20-alpine AS deps

# Instala bibliotecas necessárias para compilação de pacotes nativos
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copia apenas os arquivos de dependências para aproveitar o cache do Docker
COPY package.json package-lock.json* ./

# Instala apenas as dependências de produção
RUN npm ci --only=production && \
    # Cria uma cópia das dependências de produção
    cp -R node_modules prod_node_modules && \
    # Instala todas as dependências (incluindo dev) para o build
    npm ci

# ==============================================================================
# Estágio 2: Build
# ==============================================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia as dependências do estágio anterior
COPY --from=deps /app/node_modules ./node_modules

# Copia todo o código fonte
COPY . .

# Define variáveis de ambiente para o build
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Executa o build do Next.js
RUN npm run build

# ==============================================================================
# Estágio 3: Produção (Runner)
# ==============================================================================
FROM node:20-alpine AS runner

WORKDIR /app

# Define variáveis de ambiente de produção
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Cria usuário e grupo não-root para segurança
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copia apenas os arquivos necessários do estágio de build

# 1. Copia a saída 'standalone' (código mínimo para rodar)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# 2. Copia os arquivos estáticos (CSS, JS do cliente, fontes)
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 3. Copia a pasta 'public' com as imagens (logo, gezo, etc)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Muda para o usuário não-root
USER nextjs

# Expõe a porta da aplicação
EXPOSE 3000

# Healthcheck para verificar se o container está saudável
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

# Inicia o servidor
CMD ["node", "server.js"]