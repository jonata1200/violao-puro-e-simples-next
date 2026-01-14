# 🎨 Design System - Documentação

Bem-vindo à documentação do Design System do projeto Violão Puro e Simples.

## 📚 Índice

- [Tokens](./tokens.md) - Documentação completa dos tokens de design
- [Componentes](./components/) - Documentação dos componentes
- [Guias de Uso](./guides.md) - Guias e boas práticas

## 🎯 Visão Geral

O Design System foi criado para garantir:

- **Consistência**: Visual e comportamento uniforme em toda a aplicação
- **Escalabilidade**: Facilita adição de novos componentes
- **Manutenibilidade**: Centraliza estilos e padrões
- **Acessibilidade**: Todos os componentes seguem WCAG 2.1 AA

## 🚀 Início Rápido

### Usando Componentes de Layout

```tsx
import { Container, Section, Grid, Flex } from '@/design-system/components/layout'

<Section>
  <Container>
    <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
      {/* Conteúdo */}
    </Grid>
  </Container>
</Section>
```

### Usando Componentes de Padrões

```tsx
import { StatCard, FeatureCard } from '@/design-system/components/patterns'

<StatCard value="40+" label="Anos de Experiência" />
<FeatureCard icon={Guitar} title="Música Popular" description="Aprenda a tocar" />
```

### Usando Componentes UI

```tsx
import { Button, Card, Badge } from '@/components/ui'

<Button variant="default">Clique aqui</Button>
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
</Card>
```

## 📖 Documentação Completa

Consulte os documentos específicos para mais detalhes:

- [Tokens de Design](./tokens.md)
- [Componentes de Layout](./components/layout.md)
- [Componentes de Padrões](./components/patterns.md)
- [Componentes UI](./components/ui.md)
- [Guias de Uso](./guides.md)

---

**Última atualização**: 2024
