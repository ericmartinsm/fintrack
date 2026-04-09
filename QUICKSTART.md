# ⚡ Quick Start Guide - FinTrack

Guia rápido para começar a usar o FinTrack em menos de 5 minutos.

## 🚀 Início Rápido

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** 18.0 ou superior ([Download](https://nodejs.org/))
- **npm**, **yarn** ou **pnpm**

Verificar versões:
```bash
node --version  # deve ser >= 18.0
npm --version   # qualquer versão recente
```

### 2️⃣ Clone e Instale

```bash
# Clone o repositório
git clone https://github.com/ericmartinsm/fintrack.git

# Entre na pasta
cd fintrack

# Instale as dependências
npm install
```

⏱️ **Tempo estimado**: 1-2 minutos

### 3️⃣ Execute o Projeto

```bash
npm run dev
```

✅ **Pronto!** Abra [http://localhost:3000](http://localhost:3000) no navegador

⏱️ **Tempo estimado**: 10 segundos

---

## 📱 O que você verá

### Dashboard Principal

1. **Cards de Resumo** (topo)
   - Saldo Total: R$ 48.750,80
   - Receitas: R$ 12.500,00
   - Despesas: R$ 8.234,45
   - Economia: R$ 4.265,55

2. **Gráficos**
   - Visão mensal (barras)
   - Despesas por categoria (pizza)

3. **Filtros**
   - Filtrar por período
   - Filtrar por ano

### Seção de Transações

1. **Estatísticas**
   - Total de receitas
   - Total de despesas
   - Saldo do período

2. **Filtros Avançados**
   - Buscar por descrição
   - Filtrar por tipo (Receita/Despesa)
   - Filtrar por status (Pago/Pendente/Cancelado)
   - Filtrar por categoria (12 categorias)
   - Filtrar por mês

3. **Tabela de Transações**
   - 30+ transações mockadas
   - Ordenadas por data (mais recentes primeiro)

---

## 🎯 Testando as Funcionalidades

### Teste 1: Filtros do Dashboard
```
1. Role até "Filtros"
2. Selecione um mês específico
3. Observe os dados sendo atualizados (com loading)
```

### Teste 2: Busca de Transações
```
1. Role até "Transações"
2. Digite "Netflix" no campo de busca
3. Veja apenas transações relacionadas
```

### Teste 3: Filtros Múltiplos
```
1. Filtre por Tipo: "Despesas"
2. Filtre por Status: "Pago"
3. Filtre por Categoria: "Alimentação"
4. Veja as transações filtradas
5. Clique em "Limpar Filtros" para resetar
```

### Teste 4: Estados da Interface
```
1. Aplique filtros que não retornam resultados
2. Veja o "Empty State" amigável
3. Recarregue a página
4. Observe os "Skeleton Loaders"
```

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor dev

# Build
npm run build        # Gera build de produção
npm run start        # Executa build de produção

# Verificações
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript
```

---

## 📂 Estrutura Básica

```
fintrack/
├── src/
│   ├── app/              # Páginas Next.js
│   ├── components/       # Componentes UI
│   ├── features/         # Features (dashboard, transactions)
│   ├── services/         # API services
│   ├── mocks/           # Dados mockados
│   └── utils/           # Utilitários
├── public/              # Assets estáticos
└── package.json         # Dependências
```

---

## 🎨 Personalizando

### Mudar Cores

Edite `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    600: "#seu-azul",
  },
  success: {
    600: "#seu-verde",
  },
  // ...
}
```

### Adicionar Transações

Edite `src/mocks/transactions.mock.ts`:
```typescript
{
  id: "txn_031",
  description: "Sua transação",
  category: "Categoria",
  date: "2026-06-15",
  value: 100.00,
  type: "income",
  status: "paid",
}
```

### Mudar Categorias

Edite `src/types/api.types.ts`:
```typescript
export type TransactionCategory =
  | "Moradia"
  | "Alimentação"
  | "SuaCategoria"  // Adicione aqui
```

---

## ❓ Problemas Comuns

### Erro: "Module not found"
```bash
# Limpe node_modules e reinstale
rm -rf node_modules
npm install
```

### Erro: "Port 3000 is already in use"
```bash
# Use outra porta
PORT=3001 npm run dev
```

### Erro no build
```bash
# Limpe cache do Next.js
rm -rf .next
npm run build
```

---

## 📚 Próximos Passos

1. ✅ Explore o código em `src/features/`
2. ✅ Leia [ARCHITECTURE.md](ARCHITECTURE.md) para entender a estrutura
3. ✅ Veja [CONTRIBUTING.md](CONTRIBUTING.md) se quiser contribuir
4. ✅ Customize as cores e adicione suas próprias transações

---

## 🆘 Precisa de Ajuda?

- 📖 Documentação completa: [README.md](README.md)
- 🏗️ Arquitetura: [ARCHITECTURE.md](ARCHITECTURE.md)
- 🐛 Reportar bug: [Issues](https://github.com/ericmartinsm/fintrack/issues)
- 💬 Discussões: [Discussions](https://github.com/ericmartinsm/fintrack/discussions)

---

## ⭐ Gostou?

Considere dar uma estrela no projeto! Isso me motiva a continuar melhorando.

**Happy coding!** 🚀
