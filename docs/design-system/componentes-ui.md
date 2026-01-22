# 🎨 Componentes UI

Componentes de interface básicos e reutilizáveis disponíveis em `src/components/ui/`.

## Visão Geral

Os componentes UI são componentes fundamentais construídos com base nos tokens do design system. Todos usam as variáveis CSS do tema e são totalmente customizáveis.

## Componentes Disponíveis

### Button

Botão com múltiplas variantes e tamanhos.

**Localização:** `src/components/ui/button.tsx`

**Características:**
- Variantes: `default`, `primary`, `secondary`, `outline`, `ghost`
- Tamanhos: `sm`, `md`, `lg`
- Estados: `default`, `hover`, `active`, `disabled`
- Suporte a ícones

**Exemplo:**
```tsx
import { Button } from '@/components/ui/button'

<Button variant="primary" size="md">
  Clique aqui
</Button>
```

### Input

Campo de entrada de texto com estados e validação.

**Localização:** `src/components/ui/input.tsx`

**Características:**
- Estados: `default`, `focus`, `error`, `disabled`
- Suporte a labels e placeholders
- Mensagens de erro
- Tipos: `text`, `email`, `password`, `number`, etc.

**Exemplo:**
```tsx
import { Input } from '@/components/ui/input'

<Input
  type="email"
  placeholder="seu@email.com"
  label="Email"
/>
```

### Card

Container de conteúdo com header, content e footer opcionais.

**Localização:** `src/components/ui/card.tsx`

**Características:**
- Seções: `header`, `content`, `footer`
- Variantes de estilo
- Padding configurável

**Exemplo:**
```tsx
import { Card } from '@/components/ui/card'

<Card>
  <Card.Header>
    <h3>Título do Card</h3>
  </Card.Header>
  <Card.Content>
    <p>Conteúdo do card</p>
  </Card.Content>
  <Card.Footer>
    <Button>Ação</Button>
  </Card.Footer>
</Card>
```

### Badge

Etiqueta/tag para destacar informações.

**Localização:** `src/components/ui/badge.tsx`

**Características:**
- Variantes: `default`, `primary`, `success`, `warning`, `error`
- Tamanhos: `sm`, `md`
- Suporte a ícones

**Exemplo:**
```tsx
import { Badge } from '@/components/ui/badge'

<Badge variant="primary">Novo</Badge>
<Badge variant="success">Ativo</Badge>
```

### Accordion

Acordeão expansível para organizar conteúdo.

**Localização:** `src/components/ui/accordion.tsx`

**Características:**
- Múltiplos itens
- Expansão/colapso individual ou múltipla
- Animações suaves
- Acessível (ARIA)

**Exemplo:**
```tsx
import { Accordion } from '@/components/ui/accordion'

<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>Pergunta 1</Accordion.Trigger>
    <Accordion.Content>
      Resposta para a pergunta 1
    </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Pergunta 2</Accordion.Trigger>
    <Accordion.Content>
      Resposta para a pergunta 2
    </Accordion.Content>
  </Accordion.Item>
</Accordion>
```

### Dialog

Modal/diálogo para exibir conteúdo em overlay.

**Localização:** `src/components/ui/dialog.tsx`

**Características:**
- Overlay com backdrop
- Fechamento por botão ou clique fora
- Animações de entrada/saída
- Acessível (ARIA, foco, escape)
- Tamanhos configuráveis

**Exemplo:**
```tsx
import { Dialog } from '@/components/ui/dialog'

<Dialog open={isOpen} onOpenChange={setIsOpen}>
  <Dialog.Trigger>Abrir Dialog</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Título do Dialog</Dialog.Title>
    </Dialog.Header>
    <Dialog.Body>
      Conteúdo do dialog
    </Dialog.Body>
    <Dialog.Footer>
      <Button onClick={() => setIsOpen(false)}>Fechar</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog>
```

## 🎨 Customização

Todos os componentes UI podem ser customizados usando:

1. **Props de variante e tamanho**
2. **Classes do Tailwind CSS**
3. **Variáveis CSS do tema**

### Exemplo de Customização

```tsx
// Usando props
<Button variant="primary" size="lg">Botão</Button>

// Usando classes Tailwind
<Button className="bg-custom-color hover:bg-custom-color-dark">
  Botão Customizado
</Button>

// Combinando props e classes
<Button 
  variant="outline" 
  className="border-2 border-primary-500"
>
  Botão com Borda Customizada
</Button>
```

## 🎯 Quando Usar

### Button
- Ações principais e secundárias
- Navegação entre páginas
- Submissão de formulários

### Input
- Campos de formulário
- Busca e filtros
- Entrada de dados do usuário

### Card
- Agrupamento de conteúdo relacionado
- Layouts de dashboard
- Exibição de informações estruturadas

### Badge
- Status e estados
- Tags e categorias
- Indicadores visuais

### Accordion
- FAQs e perguntas frequentes
- Conteúdo expansível
- Organização de informações hierárquicas

### Dialog
- Confirmações de ação
- Formulários modais
- Exibição de detalhes
- Avisos importantes

## ♿ Acessibilidade

Todos os componentes UI seguem as melhores práticas de acessibilidade:

- Suporte a leitores de tela (ARIA)
- Navegação por teclado
- Contraste adequado
- Foco visível
- Estados de erro claros

## 📖 Próximos Passos

- [Tokens](./tokens.md) - Entenda os valores de design usados
- [Guia de Uso](./guia-uso.md) - Aprenda boas práticas
- [Componentes de Padrões](./componentes-padroes.md) - Veja componentes compostos
