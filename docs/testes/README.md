# 📚 Documentação de Testes

Este diretório contém documentação relacionada aos testes do projeto.

## 📋 Arquivos

- **[PADROES.md](./PADROES.md)** - Guia completo de padrões, boas práticas e convenções para escrita de testes

## 🎯 Visão Geral

O projeto utiliza:
- **Jest** como framework de testes
- **React Testing Library** para testes de componentes
- **@testing-library/user-event** para simulação de interações
- **@testing-library/jest-dom** para matchers customizados

## 📊 Status Atual

- ✅ Setup e configuração completos
- ✅ Testes de utilitários: 100% de cobertura
- ✅ Testes de componentes UI: Button completo
- ✅ Testes de componentes de seção: HeroSection, CookieBanner, CustomVideoPlayer, FaqSection
- ✅ Testes de acessibilidade implementados
- ✅ Edge cases cobertos
- ✅ CI/CD configurado (GitHub Actions)

## 🚀 Comandos

```bash
# Executar todos os testes
npm test

# Modo watch
npm run test:watch

# Com cobertura
npm run test:coverage

# Para CI/CD
npm run test:ci
```

## 📖 Recursos

- [Documento Principal de Testes](../02-TESTES-UNITARIOS.md)
- [Padrões de Teste](./PADROES.md)

---

**Última atualização**: 2024
