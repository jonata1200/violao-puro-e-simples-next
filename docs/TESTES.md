# 🚀 Como Executar os Testes do Projeto

### Executar Todos os Testes

```bash
npm test
```

### Executar Testes em Modo Watch

Executa os testes e observa mudanças nos arquivos, reexecutando automaticamente:

```bash
npm run test:watch
```

### Executar Testes com Cobertura

Gera um relatório de cobertura de código:

```bash
npm run test:coverage
```

O relatório será gerado na pasta `coverage/` e pode ser visualizado abrindo `coverage/lcov-report/index.html` no navegador.

### Executar Testes para CI/CD

Executa os testes em modo CI com cobertura e workers limitados:

```bash
npm run test:ci
```

### Executar um Teste Específico

Para executar apenas um arquivo de teste específico:

```bash
npm test -- test/components/HeroSection.test.tsx
```

### Executar Testes por Padrão

Para executar testes que correspondem a um padrão:

```bash
npm test -- --testNamePattern="should render"
```

### Visualizar Relatório de Cobertura

Após executar `npm run test:coverage`, o relatório será gerado na pasta `coverage/` e pode ser visualizado abrindo `coverage/lcov-report/index.html` no navegador.
