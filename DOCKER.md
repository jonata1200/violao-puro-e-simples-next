# 🐳 Documentação Docker - Violão Puro e Simples

## 📋 Melhorias Implementadas

### 1. **Dockerfile Otimizado com Multi-Stage Build**

O Dockerfile foi reestruturado em **3 estágios** para máxima eficiência:

#### **Estágio 1: Dependências (deps)**
- Separa a instalação de dependências do código
- Instala `libc6-compat` para compatibilidade com pacotes nativos
- Usa `npm ci` em vez de `npm install` para instalações mais rápidas e determinísticas
- Cria duas cópias de node_modules: produção e completa (com devDependencies)
- **Benefício**: Cache de dependências mais eficiente

#### **Estágio 2: Build (builder)**
- Copia apenas as dependências necessárias do estágio anterior
- Define `NEXT_TELEMETRY_DISABLED=1` para desabilitar telemetria
- Executa o build do Next.js com todas as otimizações
- **Benefício**: Build isolado e otimizado

#### **Estágio 3: Produção (runner)**
- Imagem final **mínima** com apenas o necessário para rodar
- Cria usuário não-root (`nextjs:nodejs`) para **segurança**
- Define todas as variáveis de ambiente necessárias
- Adiciona **healthcheck** integrado
- **Benefício**: Imagem final pequena (~150MB) e segura

### 2. **Arquivo .dockerignore Completo**

Criado para evitar copiar arquivos desnecessários para a imagem Docker:

```
✅ Ignora: node_modules, .next, .git, .env, logs, cache
✅ Reduz: Tempo de build e tamanho da imagem
✅ Aumenta: Segurança (não copia .env acidentalmente)
```

### 3. **Health Check Endpoint**

Criado endpoint `/api/health` que:
- Retorna status 200 quando a aplicação está saudável
- Fornece timestamp e uptime
- Integrado ao healthcheck do Docker
- Útil para orquestradores (Kubernetes, Docker Swarm)

### 4. **Docker Compose**

Arquivo `docker-compose.yml` para facilitar o uso:
- Configuração de rede isolada
- Restart automático
- Healthcheck configurado
- Variáveis de ambiente organizadas

### 5. **Variáveis de Ambiente**

Arquivo `.env.example` como template para configuração.

---

## 🚀 Como Usar

### Opção 1: Docker direto

```bash
# Build da imagem
docker build -t violao-puro-e-simples .

# Rodar o container
docker run -p 3000:3000 violao-puro-e-simples
```

### Opção 2: Docker Compose (Recomendado)

```bash
# Build e rodar em background
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar
docker-compose down
```

### Verificar Health

```bash
# Via curl
curl http://localhost:3000/api/health

# Via navegador
# Acesse: http://localhost:3000/api/health
```

---

## 📊 Comparação: Antes vs Depois

| Aspecto | Antes | Depois |
|---------|-------|--------|
| **Estágios** | 2 | 3 (otimizado) |
| **Cache de deps** | ❌ Básico | ✅ Avançado |
| **Segurança** | ⚠️ Usuário root | ✅ Usuário não-root |
| **Healthcheck** | ❌ Não tinha | ✅ Integrado |
| **.dockerignore** | ❌ Não existia | ✅ Completo |
| **Telemetria** | ⚠️ Ativa | ✅ Desabilitada |
| **Variáveis env** | ⚠️ Básicas | ✅ Completas |
| **Docker Compose** | ❌ Não tinha | ✅ Criado |

---

## 🔒 Segurança

### Melhorias de Segurança Implementadas:

1. **Usuário não-root**: Aplicação roda como `nextjs` (UID 1001)
2. **.dockerignore**: Evita copiar arquivos sensíveis (.env, .git)
3. **Multi-stage build**: Imagem final não contém ferramentas de build
4. **Telemetria desabilitada**: Sem envio de dados para Next.js
5. **Imagem Alpine**: Base mínima reduz superfície de ataque

---

## 🎯 Otimizações de Performance

### 1. **Cache em Camadas**
- Dependências são copiadas primeiro
- Código só é copiado depois
- Se o código mudar, dependências usam cache

### 2. **npm ci vs npm install**
- `npm ci` é 2-3x mais rápido
- Garante instalação determinística
- Limpa node_modules antes de instalar

### 3. **Standalone Output**
- Next.js gera apenas o necessário
- Reduz tamanho da imagem final
- Melhora tempo de inicialização

---

## 📦 Tamanho da Imagem

```bash
# Ver tamanho da imagem
docker images violao-puro-e-simples

# Esperado: ~120-150MB (Alpine base)
# Anterior: ~200-250MB (sem otimizações)
```

---

## 🐛 Troubleshooting

### Problema: Imagem muito grande
```bash
# Verifique se o .dockerignore está funcionando
docker build -t test --progress=plain . 2>&1 | grep "node_modules"
# Não deve mostrar cópia de node_modules
```

### Problema: Healthcheck falhando
```bash
# Verifique os logs
docker logs <container-id>

# Teste o endpoint manualmente
docker exec <container-id> wget -O- http://localhost:3000/api/health
```

### Problema: Build lento
```bash
# Limpe o cache do Docker
docker builder prune

# Rebuild do zero
docker build --no-cache -t violao-puro-e-simples .
```

---

## 🔄 CI/CD

### Exemplo GitHub Actions

```yaml
name: Docker Build

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t violao-puro-e-simples .
      
      - name: Test health endpoint
        run: |
          docker run -d -p 3000:3000 --name test violao-puro-e-simples
          sleep 10
          curl -f http://localhost:3000/api/health || exit 1
```

---

## 📚 Recursos Adicionais

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Multi-stage Builds](https://docs.docker.com/build/building/multi-stage/)

---

## ✅ Checklist de Deploy

- [ ] Variáveis de ambiente configuradas (.env)
- [ ] Build da imagem concluído sem erros
- [ ] Healthcheck retornando 200
- [ ] Aplicação acessível na porta 3000
- [ ] Logs não mostram erros
- [ ] Tamanho da imagem razoável (<200MB)
- [ ] Usuário não-root verificado
- [ ] .dockerignore funcionando corretamente

---

**Criado em**: Janeiro 2026  
**Versão**: 2.0 (Otimizado)
