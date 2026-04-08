# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2026-04-08

### 🎉 Release Inicial

Primeira versão completa do FinTrack - Dashboard Financeiro Moderno.

### ✨ Adicionado

#### Dashboard
- Cards de resumo financeiro com indicadores de tendência
- Gráfico de visão geral mensal (receitas vs despesas)
- Gráfico de despesas por categoria (pizza)
- Sistema de filtros (mês/ano)
- Skeleton loading states
- Dados mockados realistas (6 meses)

#### Transações
- Tabela completa de transações (30+ registros)
- Sistema de filtros avançado (tipo, status, categoria, mês)
- Busca em tempo real por descrição/categoria
- Cards de estatísticas (receitas, despesas, saldo)
- Badges coloridos para tipo e status
- Formatação brasileira (BRL, datas)
- Empty state para lista vazia
- Botão "Limpar Filtros"

#### Componentes UI
- Button (5 variantes)
- Card (componente composto)
- Input com validação
- Select estilizado
- Table completa
- Badge (6 variantes)
- Skeleton (3 variantes)
- EmptyState
- SectionHeader
- Label

#### Arquitetura
- Estrutura baseada em features/domínios
- Hooks customizados (useDashboardData, useTransactions)
- Services com simulação de API
- Validação com Zod
- React Query para cache
- TypeScript forte
- Utilitários para formatação

#### Documentação
- README.md completo
- ARCHITECTURE.md detalhado
- CONTRIBUTING.md com guidelines
- LICENSE (MIT)
- .env.example
- CHANGELOG.md

### 🛠 Técnico

- **Framework**: Next.js 14.1 (App Router)
- **Biblioteca UI**: React 18.2
- **Linguagem**: TypeScript 5.3
- **Estilização**: Tailwind CSS 3.4
- **Data Fetching**: @tanstack/react-query 5.28
- **Validação**: Zod 3.22
- **Gráficos**: Recharts 2.12
- **Ícones**: Lucide React 0.344
- **Datas**: date-fns 3.3

### 📊 Estatísticas

- **Componentes**: 30+
- **Hooks**: 2 customizados
- **Services**: 2 (dashboard, transactions)
- **Utilitários**: 10+ funções
- **Mocks**: 30 transações realistas
- **Schemas**: 4 schemas Zod
- **Linhas de código**: ~3000+

---

## [Unreleased]

### Planejado para Futuras Versões

#### v1.1.0
- [ ] Dark mode
- [ ] Responsividade aprimorada para tablets
- [ ] Animações de transição

#### v1.2.0
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Gráficos adicionais
- [ ] Filtros salvos

#### v2.0.0
- [ ] Backend real (Node.js + PostgreSQL)
- [ ] Autenticação (NextAuth.js)
- [ ] CRUD completo de transações
- [ ] Upload de comprovantes
- [ ] API REST completa

#### v3.0.0
- [ ] Multi-usuário
- [ ] Metas financeiras
- [ ] Alertas e notificações
- [ ] Dashboard personalizado
- [ ] Integrações com bancos

---

## Tipos de Mudanças

- **Adicionado** - para novas funcionalidades
- **Modificado** - para mudanças em funcionalidades existentes
- **Obsoleto** - para funcionalidades que serão removidas
- **Removido** - para funcionalidades removidas
- **Corrigido** - para correção de bugs
- **Segurança** - para correções de vulnerabilidades

---

**Formato do versionamento**: MAJOR.MINOR.PATCH

- **MAJOR**: Mudanças incompatíveis na API
- **MINOR**: Novas funcionalidades mantendo compatibilidade
- **PATCH**: Correções de bugs mantendo compatibilidade
