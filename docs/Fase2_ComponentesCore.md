# Fase 2: Componentes Core (Atoms & Molecules)

Nesta fase, criaremos os blocos de construção fundamentais da interface, substituindo implementações ad-hoc.

## Objetivos
- [ ] Implementar componentes básicos de UI (Botões, Inputs, Cards, Tipografia)
- [ ] Garantir acessibilidade (Radix UI primitives via Shadcn)
- [ ] Refatorar componentes existentes para usar os novos átomos

## Checklist de Ações

### 1. Instalação de Componentes Primitivos
Executar instalação via Shadcn:
- [ ] `button`
- [ ] `input` / `textarea` (para formulários)
- [ ] `card` (para containers)
- [ ] `dialog` / `sheet` (se houver modais)
- [ ] `accordion` (para FAQ)
- [ ] `carousel` (para Testimonials - verificar se Shadcn tem carousel, ou usar Embla diretamente encapsulado)

### 2. Customização de Componentes
- [ ] Ajustar `border-radius` (global no globals.css ou tailwind config)
- [ ] Estilizar variantes de botões (Primary, Secondary, Ghost) condizentes com o design "Violão Puro e Simples" (provavelmente tons terrosos ou madeira?)

### 3. Primeira Rodada de Refatoração
Identificar e substituir elementos HTML puros pelos novos componentes:
- [ ] Substituir `<button>` e `<a>` estilizados por `<Button />`
- [ ] Substituir containers de card por `<Card />`

## Critérios de Aceitação
- Componentes UI básicos disponíveis em `src/components/ui`
- Estilos visuais consistentes entre os componentes
