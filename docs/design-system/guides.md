# 📐 Guias de Uso

Guias e boas práticas para usar o Design System.

## 🎨 Guia de Uso de Cores

### Regras

1. **Cores Primárias**: Use para CTAs e elementos de destaque
   ```tsx
   <Button className="bg-primary-500 hover:bg-primary-600">
     Clique aqui
   </Button>
   ```

2. **Cores Semânticas**: Use apenas para feedback
   ```tsx
   <Badge variant="destructive">Erro</Badge>
   <Badge className="bg-success-500">Sucesso</Badge>
   ```

3. **Acessibilidade**: Mantenha contraste adequado (WCAG AA mínimo)
   - Texto escuro em fundo claro
   - Texto claro em fundo escuro
   - Evite cores muito próximas

### Exemplos

```tsx
// ✅ Bom: Contraste adequado
<div className="bg-primary-500 text-white">Texto claro</div>

// ❌ Ruim: Contraste insuficiente
<div className="bg-primary-300 text-primary-400">Texto difícil de ler</div>
```

---

## 📝 Guia de Tipografia

### Hierarquia

- **`h1`**: Títulos principais (Hero, seções principais)
  ```tsx
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
    Título Principal
  </h1>
  ```

- **`h2`**: Subtítulos de seção
  ```tsx
  <h2 className="text-3xl md:text-4xl font-bold">
    Subtítulo
  </h2>
  ```

- **`h3`**: Subtítulos de subseção
  ```tsx
  <h3 className="text-2xl font-semibold">
    Subseção
  </h3>
  ```

- **`p`**: Texto corrido
  ```tsx
  <p className="text-base leading-relaxed">
    Texto corrido com espaçamento adequado
  </p>
  ```

- **`small`**: Texto auxiliar, legendas
  ```tsx
  <small className="text-sm text-muted-foreground">
    Texto auxiliar
  </small>
  ```

### Boas Práticas

1. Use tamanhos responsivos
2. Mantenha line-height adequado para legibilidade
3. Use pesos de fonte consistentes

---

## 📏 Guia de Espaçamento

### Padrões

#### Espaçamento entre seções
```tsx
<Section className="py-12 md:py-16 lg:py-20">
  {/* Conteúdo */}
</Section>
```

#### Espaçamento interno de cards
```tsx
<Card className="p-4 md:p-6">
  {/* Conteúdo */}
</Card>
```

#### Gap em grids
```tsx
<Grid cols={1} colsMd={2} colsLg={3} gap={4} className="md:gap-6 lg:gap-8">
  {/* Itens */}
</Grid>
```

### Sistema de Espaçamento

- Use valores do sistema (4, 6, 8, 12, 16, etc.)
- Evite valores arbitrários
- Mantenha consistência entre componentes similares

---

## 🧩 Guia de Componentes

### Estrutura Padrão

Todos os componentes seguem esta estrutura:

```typescript
// 1. Imports
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

// 2. Variantes com CVA
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { ... },
      size: { ... }
    },
    defaultVariants: { ... }
  }
)

// 3. Props interface
export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // props específicas
}

// 4. Componente
export const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"
```

### Boas Práticas

1. **Sempre use `cn()`**: Para combinar classes
2. **Use `forwardRef`**: Quando necessário para refs
3. **Defina `displayName`**: Para debugging
4. **Documente props**: Com JSDoc
5. **Mantenha acessibilidade**: Use roles e ARIA quando necessário

---

## 🎯 Padrões de Layout

### Layout Completo de Seção

```tsx
<Section>
  <Container>
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">Título</h2>
      <p className="text-muted-foreground">Descrição</p>
    </div>
    
    <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
      {/* Itens */}
    </Grid>
  </Container>
</Section>
```

### Header com Navegação

```tsx
<Section as="header">
  <Container>
    <Flex justify="between" align="center">
      <Logo />
      <Navigation />
    </Flex>
  </Container>
</Section>
```

### Card Grid

```tsx
<Section>
  <Container>
    <Grid cols={1} colsMd={2} colsLg={4} gap={8}>
      {items.map(item => (
        <FeatureCard
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </Grid>
  </Container>
</Section>
```

---

## ♿ Acessibilidade

### Regras Importantes

1. **Contraste**: Mínimo WCAG AA (4.5:1 para texto normal)
2. **Foco**: Sempre visível e claro
3. **Semântica**: Use tags HTML corretas
4. **ARIA**: Use quando necessário, mas prefira HTML semântico
5. **Navegação por teclado**: Todos os componentes interativos devem ser acessíveis

### Exemplos

```tsx
// ✅ Bom: Botão acessível
<Button aria-label="Fechar modal">
  <X />
</Button>

// ✅ Bom: Link semântico
<a href="/sobre" aria-label="Sobre o projeto">
  Sobre
</a>

// ❌ Ruim: Div clicável sem semântica
<div onClick={handleClick}>Clique aqui</div>
```

---

## 🚀 Performance

### Boas Práticas

1. **Lazy Loading**: Use para imagens e componentes pesados
2. **Code Splitting**: Separe componentes grandes
3. **Memoização**: Use `React.memo` quando apropriado
4. **Otimização de Imagens**: Use Next.js Image

```tsx
// ✅ Bom: Imagem otimizada
import Image from 'next/image'

<Image
  src="/image.jpg"
  alt="Descrição"
  width={400}
  height={400}
  loading="lazy"
/>
```

---

## 📱 Responsividade

### Breakpoints

- **sm**: 640px (mobile grande)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (desktop grande)
- **2xl**: 1536px (desktop extra grande)

### Mobile First

Sempre comece pelo mobile e adicione breakpoints maiores:

```tsx
// ✅ Bom: Mobile first
<div className="text-base md:text-lg lg:text-xl">
  Texto responsivo
</div>

// ❌ Ruim: Desktop first
<div className="text-xl lg:text-base">
  Texto não responsivo
</div>
```

---

## 🎨 Customização

### Quando Customizar

1. **Cores**: Use variáveis CSS do tema
2. **Espaçamento**: Use tokens do design system
3. **Componentes**: Estenda, não modifique diretamente

### Exemplo de Customização

```tsx
// ✅ Bom: Estender com className
<Button className="bg-custom-color hover:bg-custom-color-dark">
  Customizado
</Button>

// ❌ Ruim: Modificar componente base
// Não modifique componentes em src/components/ui/
```

---

**Última atualização**: 2024
