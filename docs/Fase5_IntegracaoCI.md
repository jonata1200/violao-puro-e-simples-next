# Fase 5: Testes de Integração/E2E e CI

Garantia de que os fluxos principais do usuário funcionam ponta a ponta e automação de verificações.

## Objetivos
- [ ] Configurar Playwright para testes E2E
- [ ] Automatizar testes via GitHub Actions
- [ ] Garantir que o build de produção não quebra

## Checklist de Ações

### 1. Setup Playwright
- [ ] Executar `npm init playwright@latest`
  - Browser: Chromium, Firefox, Webkit
  - GitHub Actions: Yes
- [ ] Configurar `playwright.config.ts`
  - Base URL local e de preview

### 2. Cenários de Teste E2E
Criar testes na pasta `e2e/` ou `tests/`:
- [ ] **Home Page**: Verificar carregamento da Hero, presença de seções chave (Benefícios, Módulos)
- [ ] **Navegação**: Testar links do Header e Footer
- [ ] **Formulários**: Testar preenchimento e submissão (mockada de sucesso)
- [ ] **Fluxo de Vídeo**: Verificar se o player renderiza (se possível sem reprodução real pesada)

### 3. Integração Contínua (CI)
- [ ] Revisar workflow gerado `.github/workflows/playwright.yml`
- [ ] Adicionar step de Linting e Type Check no workflow
- [ ] Adicionar step de Testes Unitários (`npm run test`) antes dos testes E2E

## Critérios de Aceitação
- Pipeline do GitHub Actions passa (Lint, Build, Unit Test, E2E)
- Relatórios de teste do Playwright gerados corretamente
