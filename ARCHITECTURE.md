# 🏗 Arquitetura do FinTrack

Este documento descreve a arquitetura e decisões técnicas do projeto FinTrack.

## 📐 Visão Geral

O FinTrack segue uma **arquitetura baseada em features** (feature-based architecture), onde cada domínio de negócio é organizado de forma coesa e independente.

```
┌─────────────────────────────────────────────┐
│           Camada de Apresentação            │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │Dashboard │  │Transaction│  │Outras    │ │
│  │Feature   │  │Feature    │  │Features  │ │
│  └──────────┘  └──────────┘  └──────────┘ │
│                                             │
│  Components │ Hooks │ Utils │ Types        │
└─────────────────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────┐
│           Camada de Serviços                │
│                                             │
│  API Services │ Validação Zod │ Cache      │
└─────────────────────────────────────────────┘
                      ▼
┌─────────────────────────────────────────────┐
│           Camada de Dados                   │
│                                             │
│  Mocks │ Schemas │ Types Globais           │
└─────────────────────────────────────────────┘
```

## 🎯 Princípios Arquiteturais

### 1. **Separação por Domínio (Feature-Based)**

Cada feature é autocontida com:
- **Components**: Componentes específicos da feature
- **Hooks**: Lógica de estado e data fetching
- **Utils**: Funções auxiliares do domínio
- **Types**: Tipos específicos da feature

**Benefícios**:
- Facilita manutenção e escalabilidade
- Reduz acoplamento entre features
- Permite trabalho paralelo entre desenvolvedores
- Facilita testes isolados

### 2. **Componentes UI Reutilizáveis**

Biblioteca de componentes genéricos em `src/components/ui/`:
- Desacoplados de lógica de negócio
- Configuráveis via props
- Variantes consistentes
- TypeScript forte

**Benefícios**:
- DRY (Don't Repeat Yourself)
- Consistência visual
- Facilita criação de design system
- Reaproveitamento em múltiplas features

### 3. **Services Isolados**

Camada de API simulada que:
- Centraliza lógica de comunicação
- Simula latência de rede
- Valida dados com Zod
- Facilita migração para API real

**Benefícios**:
- Fácil substituição por API real
- Testes mais simples
- Tipagem garantida via Zod

### 4. **Validação em Runtime**

Uso de Zod para:
- Validar dados mockados
- Garantir integridade
- Gerar tipos TypeScript automáticos

**Benefícios**:
- Type-safety em runtime
- Menor probabilidade de bugs
- IntelliSense no editor

## 📦 Estrutura Detalhada

### Features (Dashboard)

```typescript
features/dashboard/
├── components/              # Componentes React
│   ├── summary-card.tsx    # Card de resumo
│   ├── charts/             # Gráficos (se houver múltiplos)
│   └── dashboard-view.tsx  # Componente principal
├── hooks/                  # Custom hooks
│   └── use-dashboard-data.ts
├── utils/                  # Funções auxiliares
│   └── dashboard-mappers.ts
└── types/                  # Tipos específicos
    └── dashboard.types.ts
```

### Services

```typescript
services/api/
├── dashboard.service.ts    # CRUD dashboard
└── transactions.service.ts # CRUD transações

// Padrão de service
export async function fetchDashboardData() {
  // 1. Simular delay de API
  await simulateApiCall()
  
  // 2. Validar com Zod
  const validated = schema.parse(data)
  
  // 3. Retornar tipado
  return { data: validated, success: true }
}
```

### Hooks Customizados

```typescript
// Pattern: use[Feature][Action]
useDashboardData()
useTransactions()

// Responsabilidades:
// - Gerenciar estado local
// - Integrar React Query
// - Transformar dados
// - Expor interface limpa
```

## 🔄 Fluxo de Dados

### 1. Requisição de Dados

```
Component → Hook → Service → Validation → Component
```

**Exemplo**:
```typescript
// 1. Component usa hook
const { data, isLoading } = useDashboardData()

// 2. Hook usa React Query
useQuery({
  queryKey: ['dashboard'],
  queryFn: fetchDashboardData
})

// 3. Service busca e valida
const data = await simulateApi()
return schema.parse(data) // Zod validation
```

### 2. Gerenciamento de Estado

- **Local**: `useState` para UI state (filtros, modals, etc)
- **Server**: React Query para cache e sincronização
- **Global**: Context API (quando necessário)

### 3. Cache Strategy (React Query)

```typescript
defaultOptions: {
  queries: {
    staleTime: 5 * 60 * 1000,  // 5 minutos
    refetchOnWindowFocus: false,
    retry: 1,
  },
}
```

## 🎨 Design Patterns

### Compound Components

```typescript
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>Conteúdo</CardContent>
</Card>
```

**Benefícios**: Flexibilidade e composição

### Render Props (Tooltips customizados)

```typescript
<Tooltip content={<CustomTooltip />} />
```

### Container/Presentational

- **View Components**: Lógica e orquestração
- **UI Components**: Apenas apresentação

## 🔐 Validação e Tipagem

### Schema → Type Pipeline

```typescript
// 1. Definir schema Zod
const transactionSchema = z.object({
  id: z.string(),
  value: z.number(),
  // ...
})

// 2. Inferir tipo TypeScript
type Transaction = z.infer<typeof transactionSchema>

// 3. Usar no código
const transaction: Transaction = // type-safe!
```

### Benefícios

- Single source of truth
- Runtime + compile-time safety
- Menos código duplicado

## 🚀 Performance

### Otimizações Implementadas

1. **React Query Cache**: Evita requisições desnecessárias
2. **useMemo**: Cálculos pesados (stats de transações)
3. **Skeleton Loading**: Percepção de performance
4. **Responsive Images**: (quando aplicável)

### Otimizações Futuras

- React.memo para componentes pesados
- Virtualização de listas longas
- Code splitting por rota
- Image optimization do Next.js

## 🧪 Testabilidade

### Estrutura Testável

```typescript
// ✅ Funções puras são fáceis de testar
export function calculateTotal(transactions) {
  return transactions.reduce(...)
}

// ✅ Hooks isolados
export function useTransactions() {
  // lógica testável
}

// ✅ Services mockáveis
export async function fetchData() {
  // pode ser facilmente mockado
}
```

## 📈 Escalabilidade

### Adicionando Nova Feature

```bash
# 1. Criar estrutura
src/features/nova-feature/
  ├── components/
  ├── hooks/
  ├── utils/
  └── types/

# 2. Criar service
src/services/api/nova-feature.service.ts

# 3. Criar mock
src/mocks/nova-feature.mock.ts

# 4. Criar schema
src/schemas/nova-feature.schema.ts
```

### Integrando API Real

```typescript
// Substituir em services/api/*.service.ts
- const data = await simulateApiCall(mockData)
+ const response = await fetch('/api/endpoint')
+ const data = await response.json()

// Manter validação Zod
const validated = schema.parse(data)
```

## 🔧 Ferramentas e Libs

### Por que cada uma?

| Biblioteca | Justificativa |
|------------|---------------|
| Next.js | SSR, App Router, otimizações built-in |
| React Query | Cache, refetch, estados loading/error |
| Zod | Runtime validation + types |
| Tailwind | Rapid development, consistency |
| Recharts | Gráficos declarativos e responsivos |
| date-fns | Manipulação de datas tree-shakeable |

## 🎓 Conceitos Aplicados

- ✅ Clean Architecture
- ✅ Domain-Driven Design (simplificado)
- ✅ SOLID Principles
- ✅ DRY (Don't Repeat Yourself)
- ✅ KISS (Keep It Simple, Stupid)
- ✅ Composition over Inheritance
- ✅ Single Responsibility Principle
- ✅ Open/Closed Principle (components extensíveis)

## 📚 Referências

- [Next.js Best Practices](https://nextjs.org/docs)
- [React Query Docs](https://tanstack.com/query/latest)
- [Feature-Based Architecture](https://feature-sliced.design/)
- [Clean Code by Robert Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

---

**Mantido por**: Eric Martins  
**Última atualização**: Abril 2026
