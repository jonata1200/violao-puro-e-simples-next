# 📋 Guia de Uso

Guia completo sobre quando e como usar cada componente do design system, incluindo boas práticas e exemplos.

## 🎯 Quando Usar Cada Componente

### Componentes de Layout

#### Container
**Use quando:**
- Precisar centralizar conteúdo horizontalmente
- Quiser manter largura máxima consistente
- Precisar aplicar padding horizontal padrão

**Evite quando:**
- O conteúdo já está dentro de outro Container
- Precisar de largura total da tela

**Exemplo:**
```tsx
<Section>
  <Container>
    <h1>Título</h1>
    <p>Conteúdo centralizado</p>
  </Container>
</Section>
```

#### Section
**Use quando:**
- Precisar separar seções da página visualmente
- Quiser aplicar espaçamento vertical consistente
- Criar hierarquia visual clara

**Evite quando:**
- O espaçamento já está sendo aplicado por outro componente
- Não há necessidade de separação visual

**Exemplo:**
```tsx
<Section>
  <h2>Seção 1</h2>
</Section>
<Section>
  <h2>Seção 2</h2>
</Section>
```

#### Grid
**Use quando:**
- Precisar organizar conteúdo em colunas
- Quiser layout responsivo automático
- Tiver múltiplos itens similares (cards, features, etc.)

**Evite quando:**
- Precisar de layout flexbox com alinhamento específico
- Tiver apenas 1-2 itens que não se beneficiam de grid

**Exemplo:**
```tsx
<Grid cols={1} colsMd={2} colsLg={3} gap={6}>
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
</Grid>
```

#### Flex
**Use quando:**
- Precisar de controle fino sobre alinhamento
- Quiser layout flexbox específico
- Precisar de direção customizada (row/column)

**Evite quando:**
- Grid atende melhor à necessidade
- Não há necessidade de flexbox

**Exemplo:**
```tsx
<Flex direction="row" justify="between" align="center">
  <Logo />
  <Navigation />
</Flex>
```

### Componentes de Padrões

#### FeatureCard
**Use quando:**
- Precisar destacar características ou benefícios
- Quiser exibir features com ícone, título e descrição
- Criar seções de "Por que escolher" ou "Recursos"

**Evite quando:**
- O conteúdo não se encaixa no padrão (ícone + título + descrição)
- Precisar de mais customização visual

**Exemplo:**
```tsx
<Grid cols={1} colsMd={3} gap={6}>
  <FeatureCard
    icon={Guitar}
    title="Música Popular"
    description="Aprenda os maiores sucessos"
  />
  <FeatureCard
    icon={Video}
    title="Aulas em Vídeo"
    description="Aprenda no seu ritmo"
  />
</Grid>
```

#### ModuleCard
**Use quando:**
- Precisar exibir informações de módulos de curso
- Quiser listar conteúdo de forma organizada
- Criar páginas de programa ou currículo

**Evite quando:**
- O formato não se encaixa (número + título + lista)
- Precisar de mais flexibilidade no conteúdo

**Exemplo:**
```tsx
<Grid cols={1} colsMd={2} gap={6}>
  <ModuleCard
    number="01"
    title="Módulo 1"
    items={["Item 1", "Item 2"]}
  />
</Grid>
```

#### TestimonialCard
**Use quando:**
- Precisar exibir depoimentos em vídeo
- Quiser criar seção de social proof
- Mostrar testemunhos de clientes/alunos

**Evite quando:**
- Não há vídeo disponível
- Precisar de formato diferente (texto, áudio)

**Exemplo:**
```tsx
<Grid cols={1} colsMd={2} gap={6}>
  <TestimonialCard
    videoSrc="/videos/depoimento-1.mp4"
    aspectRatio="vertical"
  />
</Grid>
```

#### StatCard
**Use quando:**
- Precisar destacar números ou métricas
- Quiser criar seção de estatísticas
- Mostrar resultados ou conquistas

**Evite quando:**
- O número não é o foco principal
- Precisar de mais contexto visual

**Exemplo:**
```tsx
<Grid cols={2} colsMd={4} gap={4}>
  <StatCard value="500+" label="Alunos" icon={Users} />
  <StatCard value="50+" label="Cursos" icon={Book} />
</Grid>
```

#### CardWithImage
**Use quando:**
- Precisar destacar uma imagem junto com conteúdo
- Quiser criar seções "Sobre" ou perfis
- A imagem é parte importante do conteúdo

**Evite quando:**
- A imagem não é essencial
- Precisar de layout diferente

**Exemplo:**
```tsx
<CardWithImage
  imageSrc="/professor.jpg"
  imageAlt="Professor"
  title="Sobre o Professor"
  description="40 anos de experiência"
>
  <p>Mais informações</p>
</CardWithImage>
```

## ✅ Boas Práticas

### 1. Sempre Use Componentes do Design System

**✅ Faça:**
```tsx
import { Container, Section } from '@/design-system/components/layout'

<Section>
  <Container>
    <h1>Conteúdo</h1>
  </Container>
</Section>
```

**❌ Evite:**
```tsx
<div className="max-w-7xl mx-auto px-4 py-16">
  <h1>Conteúdo</h1>
</div>
```

### 2. Mantenha Consistência

**✅ Faça:**
- Use os mesmos componentes para casos de uso similares
- Mantenha padrões visuais consistentes
- Reutilize componentes existentes

**❌ Evite:**
- Criar componentes customizados quando um do design system já existe
- Misturar diferentes padrões para o mesmo tipo de conteúdo

### 3. Use Tokens Através do Tailwind CSS

**✅ Faça:**
```tsx
<div className="bg-primary-500 text-white p-4">
  Conteúdo
</div>
```

**❌ Evite:**
```tsx
<div style={{ backgroundColor: '#f97316', color: '#fff', padding: '16px' }}>
  Conteúdo
</div>
```

### 4. Teste Responsividade

**✅ Faça:**
- Teste em diferentes tamanhos de tela
- Use breakpoints apropriados
- Verifique comportamento em mobile, tablet e desktop

**❌ Evite:**
- Assumir que funciona em todos os dispositivos
- Usar valores fixos sem considerar responsividade

### 5. Mantenha Acessibilidade

**✅ Faça:**
- Use componentes que já incluem boas práticas de acessibilidade
- Adicione textos alternativos em imagens
- Mantenha contraste adequado
- Teste navegação por teclado

**❌ Evite:**
- Ignorar acessibilidade
- Usar apenas cores para transmitir informação
- Criar componentes inacessíveis

### 6. Organize Código com Layout Components

**✅ Faça:**
```tsx
<Section>
  <Container>
    <Grid cols={1} colsMd={3} gap={6}>
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </Grid>
  </Container>
</Section>
```

**❌ Evite:**
```tsx
<div className="py-16">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FeatureCard />
    </div>
  </div>
</div>
```

## 🔄 Padrões Comuns

### Layout de Página Típico

```tsx
<Section>
  <Container>
    <h1>Título Principal</h1>
  </Container>
</Section>

<Section>
  <Container>
    <Grid cols={1} colsMd={3} gap={6}>
      <FeatureCard />
      <FeatureCard />
      <FeatureCard />
    </Grid>
  </Container>
</Section>

<Section>
  <Container>
    <h2>Outra Seção</h2>
    <p>Conteúdo</p>
  </Container>
</Section>
```

### Seção de Estatísticas

```tsx
<Section>
  <Container>
    <Grid cols={2} colsMd={4} gap={4}>
      <StatCard value="500+" label="Alunos" icon={Users} />
      <StatCard value="50+" label="Cursos" icon={Book} />
      <StatCard value="1000+" label="Aulas" icon={Video} />
      <StatCard value="4.9" label="Avaliação" icon={Star} />
    </Grid>
  </Container>
</Section>
```

### Seção de Features

```tsx
<Section>
  <Container>
    <h2>Recursos</h2>
    <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
      <FeatureCard
        icon={Guitar}
        title="Música Popular"
        description="Aprenda os maiores sucessos"
      />
      <FeatureCard
        icon={Video}
        title="Aulas em Vídeo"
        description="Aprenda no seu ritmo"
      />
      <FeatureCard
        icon={Book}
        title="Material Completo"
        description="Conteúdo exclusivo"
      />
    </Grid>
  </Container>
</Section>
```

## 📖 Próximos Passos

- [Tokens](./tokens.md) - Revise os tokens disponíveis
- [Componentes de Layout](./componentes-layout.md) - Detalhes dos componentes estruturais
- [Componentes de Padrões](./componentes-padroes.md) - Detalhes dos componentes de padrões
- [Testes](./testes.md) - Saiba como testar componentes
