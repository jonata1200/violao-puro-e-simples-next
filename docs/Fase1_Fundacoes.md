# Fase 1: Fundações e Setup do Design System

Esta fase foca em estabelecer a base arquitetural para o Design System e preparar o ambiente para os componentes.

## Objetivos
- [ ] Configurar alias de paths (`@/...`) no `tsconfig.json` (se necessário)
- [ ] Instalar e inicializar **Shadcn UI** para base de componentes
- [ ] Definir tokens de Design (Cores, Tipografia, Espaçamentos) no `tailwind.config.ts`
- [ ] Configurar utilitários base (`cn` helper)
- [ ] Padronizar fontes globais (Next/Font)

## Checklist de Ações

### 1. Configuração do Ambiente
- [x] Verificar e ajustar `tsconfig.json` para suportar alias `@/*` apontando para `./src/*`
- [ ] Criar pasta `src/lib`
- [ ] Executar `npx shadcn@latest init`
  - Style: Default (ou New York, a definir)
  - Color: Slate (ou a definir)
  - CSS Variables: Yes
- [ ] Confirmar criação de `components.json`
- [ ] Confirmar criação de `src/lib/utils.ts` (gerado pelo shadcn)

### 2. Design Tokens (Tailwind)
- [ ] Analisar cores atuais usadas em `src/app/globals.css` (se houver) ou hardcoded nos componentes
- [ ] Definir paleta de cores primária, secundária, de destaque e de erro no `tailwind.config.ts` (extend theme)
- [ ] Configurar tipografia (Font Family) usando `next/font/google` no `layout.tsx` e integrando ao Tailwind

### 3. Limpeza Inicial
- [ ] Remover estilos globais desnecessários em `globals.css` que conflitem com a nova base
- [ ] Garantir que o `tailwind.config.ts` inclui os paths corretos para os novos componentes Shadcn

## Critérios de Aceitação
- `npx shadcn@latest add button` funciona sem erros
- `tailwind.config.ts` possui as variaveis de cor do projeto
- Aplicação roda sem erros de build
