# Fase 3: Componentes Complexos e Padrões

Foco na composição de interfaces mais ricas e formulários, consolidando o Design System.

## Objetivos
- [ ] Padronizar Formulários (React Hook Form + Zod + UI Components)
- [ ] Padronizar Seções de Landing Page
- [ ] Implementar Feedback visual (Toasts, Alerts)

## Checklist de Ações

### 1. Padrão de Formulários
- [ ] Instalar componentes de form: `npx shadcn@latest add form`
- [ ] Instalar `sonner` ou `toast` para notificações
- [ ] Refatorar qualquer formulário de contato/captura existente para usar `<Form>` + `zod` schema

### 2. Refatoração de Seções (Organismos)
Refatorar componentes grandes (`src/components/*Section.tsx`) para serem composições limpas:
- [ ] **HeroSection**: Usar Tipografia padronizada e Botões do DS
- [ ] **FaqSection**: Implementar usando componente `Accordion`
- [ ] **TestimonialsSection**: Implementar usando `Carousel` ou Grid de `Cards`
- [ ] **Footer**: Padronizar links e espaçamentos

### 3. Ícones e Assets
- [ ] Padronizar uso de `lucide-react` (tamanho e stroke width consistentes)
- [ ] Otimizar carregamento de imagens (Next/Image) nos componentes

## Critérios de Aceitação
- Formulários validados e estilizados consistentemente
- Seções da Landing Page utilizam componentes do Design System, reduzindo CSS customizado
