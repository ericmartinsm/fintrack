# 💰 FinTrack - Dashboard Financeiro Moderno

<div align="center">
  
  ![Next.js](https://img.shields.io/badge/Next.js-14.1-black?style=for-the-badge&logo=next.js)
  ![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwind-css)
  
  **Dashboard financeiro profissional desenvolvido com Next.js, React e TypeScript**
  
  [Demo](#) · [Instalação](#-instalação) · [Documentação](#-estrutura-do-projeto)

</div>

---

## 📋 Sobre o Projeto

O **FinTrack** é um dashboard financeiro moderno que simula uma aplicação real de gestão financeira pessoal, no estilo fintech. O projeto foi desenvolvido com foco em **arquitetura escalável**, **componentização profissional**, **tipagem forte** e **experiência do usuário**.

Este projeto faz parte do meu portfólio técnico e demonstra domínio em:
- Arquitetura front-end baseada em features/domínios
- Gerenciamento de estado com React Query
- Validação de dados com Zod
- Design system consistente e profissional
- Boas práticas de código e organização

### 🎯 Objetivo

Demonstrar capacidade de criar aplicações front-end de **nível profissional** com código limpo, arquitetura bem pensada e atenção aos detalhes de UX/UI.

---

## ✨ Funcionalidades

### 📊 Dashboard Principal

- **Cards de Resumo Financeiro**
  - Saldo total, receitas mensais, despesas mensais e economia
  - Indicadores de tendência com percentuais
  - Ícones intuitivos e cores semânticas
  - Animações de hover

- **Gráfico de Visão Geral Mensal**
  - Comparação de receitas vs despesas por mês
  - Gráfico de barras interativo com tooltips customizados
  - Visualização de 6 meses de histórico
  - Responsivo e acessível

- **Gráfico de Despesas por Categoria**
  - Distribuição percentual em gráfico de pizza
  - 8 categorias principais (Moradia, Alimentação, Transporte, etc.)
  - Labels internos com percentuais
  - Legendas detalhadas

- **Filtros do Dashboard**
  - Filtro por período (mês/ano)
  - Interface intuitiva e responsiva

### 💳 Gestão de Transações

- **Tabela de Transações Completa**
  - Listagem com 30+ transações mockadas realistas
  - Colunas: Descrição, Categoria, Data, Tipo, Status, Valor
  - Badges coloridos para tipo e status
  - Formatação brasileira (BRL, dd/MM/yyyy)
  - Valores coloridos (verde para receitas, vermelho para despesas)

- **Sistema de Filtros Avançado**
  - Filtro por tipo (Receita/Despesa)
  - Filtro por status (Pago/Pendente/Cancelado)
  - Filtro por categoria (12 categorias disponíveis)
  - Filtro por mês
  - Busca em tempo real por descrição ou categoria
  - Botão para limpar todos os filtros

- **Estatísticas em Tempo Real**
  - Cards com total de receitas, despesas e saldo do período
  - Cálculos automáticos baseados nos filtros aplicados
  - Contador de transações filtradas

### 🎨 Experiência do Usuário

- **Estados da Interface**
  - Loading states com skeleton screens animados
  - Empty states com mensagens amigáveis
  - Tratamento de erros
  
- **Design Responsivo**
  - Mobile-first approach
  - Adaptação inteligente para tablet e desktop
  - Scroll horizontal em tabelas no mobile

- **Acessibilidade**
  - Semântica HTML adequada
  - Focus states visíveis
  - Contraste de cores apropriado

---

## 🛠 Stack Tecnológica

### Core

- **[Next.js 14.1](https://nextjs.org/)** - Framework React com App Router
- **[React 18.2](https://react.dev/)** - Biblioteca UI
- **[TypeScript 5.3](https://www.typescriptlang.org/)** - Tipagem estática

### Bibliotecas Principais

- **[@tanstack/react-query 5.28](https://tanstack.com/query)** - Data fetching e cache
- **[Zod 3.22](https://zod.dev/)** - Validação de schemas e tipagem
- **[Recharts 2.12](https://recharts.org/)** - Gráficos interativos
- **[Tailwind CSS 3.4](https://tailwindcss.com/)** - Utility-first CSS
- **[Lucide React 0.344](https://lucide.dev/)** - Ícones modernos

### Utilitários

- **[clsx](https://github.com/lukeed/clsx)** - Construção de classNames
- **[date-fns](https://date-fns.org/)** - Manipulação de datas

---

## 📁 Estrutura do Projeto

```
src/
├── app/                          # App Router do Next.js
│   ├── layout.tsx               # Layout raiz com providers
│   ├── page.tsx                 # Página principal
│   ├── providers.tsx            # React Query provider
│   └── globals.css              # Estilos globais
│
├── components/                   # Componentes UI reutilizáveis
│   └── ui/
│       ├── button.tsx           # Botão com variantes
│       ├── card.tsx             # Card e subcomponentes
│       ├── input.tsx            # Input com validação
│       ├── select.tsx           # Select estilizado
│       ├── table.tsx            # Tabela completa
│       ├── badge.tsx            # Badge com variantes
│       ├── skeleton.tsx         # Loading states
│       ├── empty-state.tsx      # Estado vazio
│       ├── section-header.tsx   # Cabeçalho de seção
│       └── label.tsx            # Label de formulário
│
├── features/                     # Features organizadas por domínio
│   ├── dashboard/
│   │   ├── components/
│   │   │   ├── summary-card.tsx
│   │   │   ├── monthly-overview-chart.tsx
│   │   │   ├── expenses-category-chart.tsx
│   │   │   ├── dashboard-filters.tsx
│   │   │   └── dashboard-view.tsx
│   │   ├── hooks/
│   │   │   └── use-dashboard-data.ts
│   │   ├── utils/
│   │   │   └── dashboard-mappers.ts
│   │   └── types/
│   │       └── dashboard.types.ts
│   │
│   └── transactions/
│       ├── components/
│       │   ├── transaction-type-badge.tsx
│       │   ├── transaction-status-badge.tsx
│       │   ├── transaction-search.tsx
│       │   ├── transaction-filters.tsx
│       │   ├── transactions-table.tsx
│       │   └── transactions-view.tsx
│       ├── hooks/
│       │   └── use-transactions.ts
│       ├── utils/
│       │   ├── transaction-filters.ts
│       │   └── transaction-formatters.ts
│       └── types/
│           └── transaction.types.ts
│
├── services/                     # Camada de serviços/API
│   └── api/
│       ├── dashboard.service.ts
│       └── transactions.service.ts
│
├── mocks/                        # Dados mockados
│   ├── dashboard.mock.ts
│   └── transactions.mock.ts
│
├── schemas/                      # Schemas Zod
│   ├── dashboard.schema.ts
│   └── transaction.schema.ts
│
├── lib/                          # Configurações de bibliotecas
│   └── query-client.ts
│
├── utils/                        # Utilitários globais
│   ├── cn.ts                    # Class name merge
│   ├── currency.ts              # Formatação de moeda
│   └── date.ts                  # Formatação de data
│
└── types/                        # Tipos globais
    └── api.types.ts
```

### 🏗 Arquitetura

O projeto segue uma **arquitetura baseada em features/domínios**, inspirada em aplicações enterprise:

- **Separação por domínio**: Cada feature (dashboard, transactions) tem sua própria pasta com componentes, hooks, utils e types
- **Components UI reutilizáveis**: Biblioteca de componentes genéricos desacoplados de lógica de negócio
- **Services isolados**: Camada de API simulada com delay para simular requisições reais
- **Validação com Zod**: Todos os dados são validados em runtime
- **Hooks customizados**: Lógica de estado e data fetching encapsulada
- **TypeScript forte**: Tipagem derivada de schemas Zod, zero `any`

---

## 🚀 Instalação

### Pré-requisitos

- Node.js 18.0 ou superior
- npm, yarn ou pnpm

### Passos

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/fintrack.git
cd fintrack
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o projeto em modo desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Abra no navegador**

Acesse [http://localhost:3000](http://localhost:3000)

### Scripts Disponíveis

```bash
npm run dev        # Inicia servidor de desenvolvimento
npm run build      # Gera build de produção
npm run start      # Inicia servidor de produção
npm run lint       # Executa ESLint
npm run type-check # Verifica tipagem TypeScript
```

---

## 🎨 Design System

### Paleta de Cores

```typescript
primary: #0ea5e9    // Azul principal
success: #22c55e    // Verde (receitas)
danger: #ef4444     // Vermelho (despesas)
warning: #f59e0b    // Amarelo (alertas)
slate: #64748b      // Cinza neutro
```

### Componentes UI

Sistema completo de componentes reutilizáveis:
- Buttons (5 variantes)
- Cards (3 variantes)
- Inputs e Selects com validação
- Tables completas
- Badges (6 variantes)
- Skeletons animados
- Empty states

---

## 🔮 Melhorias Futuras

### Features
- [ ] Autenticação com NextAuth.js
- [ ] Backend real com Node.js/PostgreSQL
- [ ] CRUD completo de transações
- [ ] Upload de comprovantes (anexos)
- [ ] Exportação para PDF/Excel
- [ ] Metas e planejamento financeiro
- [ ] Gráfico de evolução patrimonial
- [ ] Alertas e notificações
- [ ] Multi-moeda
- [ ] Dark mode

### Técnico
- [ ] Testes unitários (Jest/Testing Library)
- [ ] Testes E2E (Playwright)
- [ ] Storybook para documentação de componentes
- [ ] CI/CD com GitHub Actions
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)
- [ ] Performance optimization com React.memo
- [ ] Acessibilidade WCAG 2.1 AA

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Eric Martins**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

---

## 🙏 Agradecimentos

Projeto desenvolvido como parte do meu portfólio técnico com o objetivo de demonstrar habilidades em:
- Arquitetura front-end escalável
- React avançado e TypeScript
- Design de interfaces modernas
- Boas práticas de desenvolvimento

---

<div align="center">
  
  **⭐ Se este projeto foi útil, considere dar uma estrela!**
  
  Made with ❤️ and ☕ by Eric Martins
  
</div>
