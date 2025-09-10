# Violão Puro e Simples - Landing Page

> Uma landing page moderna e de alta conversão para o curso de violão de Gezo Rodrigues, construída com Next.js, TypeScript e Tailwind CSS.


## Sobre o Projeto

Este projeto é uma landing page completa, projetada para apresentar e vender o curso "Violão Puro e Simples". O foco foi criar uma experiência de usuário imersiva, rápida e visualmente atraente, com o objetivo de maximizar as conversões de visitantes em alunos.

A página guia o usuário por uma jornada, apresentando o professor, os módulos do curso, os benefícios, depoimentos em vídeo e chamadas para ação (CTAs) claras.

---

## ✨ Principais Funcionalidades

- **Player de Vídeo 100% Personalizado:** Um player de vídeo reutilizável foi construído do zero, oferecendo uma experiência de marca consistente, sem logos do YouTube.
  - Controles de Play/Pause.
  - Barra de progresso clicável.
  - Controle de volume com slider.
  - Botão para modo de tela cheia.
  - Suporte para thumbnails personalizadas ou geração automática a partir do primeiro frame do vídeo.

- **Depoimentos em Vídeo:** A seção de prova social foi modernizada para usar vídeos verticais, formato ideal para engajamento em dispositivos móveis.

- **Design Responsivo (Mobile-First):** Utilizando Tailwind CSS, a página é totalmente adaptável a qualquer tamanho de tela, de celulares a desktops.

- **Otimização para SEO:**
  - **Metadata Otimizada:** Títulos e descrições configurados no `layout.tsx` para melhor ranqueamento.
  - **Dados Estruturados (Schema.org):** Implementação de JSON-LD para o tipo "Course", ajudando os motores de busca a entenderem o conteúdo da página.

- **Integração com Google Analytics:** Configuração limpa e otimizada utilizando as melhores práticas do Next.js, com o ID de rastreamento armazenado em variáveis de ambiente.

- **Componentização com React:** A interface é dividida em componentes reutilizáveis e fáceis de manter, localizados em `src/components`.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/) (com App Router)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Analytics:** [Google Analytics](https://analytics.google.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto em seu ambiente de desenvolvimento.

### Pré-requisitos

- Node.js (versão 18.18.0 ou superior)
- npm, yarn ou pnpm

### 1. Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://[URL_DO_SEU_REPOSITORIO]
cd [NOME_DA_PASTA]
npm install
```

### 2. Configuração das Variáveis de Ambiente

Para que o Google Analytics funcione, você precisa configurar seu ID de rastreamento.

1.  Na raiz do projeto, crie um arquivo chamado `.env.local`.
2.  Copie o conteúdo do exemplo abaixo para o seu novo arquivo.

**Arquivo `.env.local`:**

```env
# Substitua G-XXXXXXXXXX pelo seu ID de medição do Google Analytics
NEXT_PUBLIC_GA_ID=G-7CQYL0VX5Q
```

**Importante:** O prefixo `NEXT_PUBLIC_` é necessário para que a variável de ambiente seja acessível no navegador.

### 3. Rodando o Servidor de Desenvolvimento

Execute o seguinte comando para iniciar o servidor:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

---

## 📁 Estrutura do Projeto

```
.
├── public/                 # Arquivos estáticos (imagens, vídeos, fontes)
│   ├── video-de-vendas.mp4
│   ├── depoimento-1.mp4
│   └── ...
├── src/
│   ├── app/                # Rotas e layouts principais do Next.js
│   │   ├── layout.tsx      # Layout raiz da aplicação
│   │   ├── page.tsx        # Página principal (Home)
│   │   └── globals.css     # Estilos globais do Tailwind
│   │
│   └── components/         # Componentes React reutilizáveis
│       ├── HeroSection.tsx
│       ├── TestimonialsSection.tsx
│       ├── CustomVideoPlayer.tsx # Nosso player de vídeo customizado
│       ├── GoogleAnalytics.tsx   # Componente para o script do GA
│       └── ...
├── .env.local              # Variáveis de ambiente (NÃO versionado)
├── next.config.ts          # Configurações do Next.js
├── tailwind.config.ts      # Configurações do Tailwind CSS
└── package.json            # Dependências e scripts do projeto
```

---

## 🚢 Deploy

A maneira mais fácil de fazer o deploy desta aplicação é usando a [Vercel Platform](https://vercel.com/new).

**Importante:** Ao fazer o deploy na Vercel, não se esqueça de adicionar a variável de ambiente `NEXT_PUBLIC_GA_ID` nas configurações do seu projeto na Vercel para que o Google Analytics funcione em produção.