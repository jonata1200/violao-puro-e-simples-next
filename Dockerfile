# Estágio 1: Build
# ------------------
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Estágio 2: Produção (Runner)
# ---------------------------
FROM node:20-alpine AS runner

WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia a saída 'standalone' do estágio de build.
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# Copia a pasta 'public' com as imagens (logo, gezo, etc).
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# ========================================================================
# AQUI ESTÁ A CORREÇÃO CRUCIAL
# Copia os arquivos estáticos (CSS, JS do cliente, fontes) para a imagem final.
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# ========================================================================

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "server.js"]