# 🤝 Contribuindo para o FinTrack

Obrigado por considerar contribuir com o FinTrack! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Sumário

- [Código de Conduta](#código-de-conduta)
- [Como Contribuir](#como-contribuir)
- [Padrões de Código](#padrões-de-código)
- [Processo de Pull Request](#processo-de-pull-request)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Melhorias](#sugerir-melhorias)

## 📜 Código de Conduta

Este projeto adere a um código de conduta. Ao participar, espera-se que você mantenha esse código. Por favor, reporte comportamentos inaceitáveis.

## 🚀 Como Contribuir

### 1. Fork o Projeto

```bash
git clone https://github.com/seu-usuario/fintrack.git
cd fintrack
```

### 2. Crie uma Branch

```bash
git checkout -b feature/minha-feature
# ou
git checkout -b fix/meu-bugfix
```

### 3. Faça suas Alterações

- Siga os [padrões de código](#padrões-de-código)
- Adicione testes se aplicável
- Mantenha commits atômicos e descritivos

### 4. Commit suas Alterações

```bash
git commit -m "feat: adiciona nova funcionalidade X"
# ou
git commit -m "fix: corrige problema Y"
```

### 5. Push para o GitHub

```bash
git push origin feature/minha-feature
```

### 6. Abra um Pull Request

## 📏 Padrões de Código

### TypeScript

- Use tipagem forte, evite `any`
- Prefira tipos derivados de schemas Zod
- Use interfaces para props de componentes

### React

- Componentes funcionais com hooks
- Use "use client" apenas quando necessário
- Props desconstruídas com tipagem

### Estrutura de Arquivos

- Componentes em PascalCase: `SummaryCard.tsx`
- Utilitários em kebab-case: `transaction-filters.ts`
- Hooks com prefixo "use": `useDashboardData.ts`

### Nomenclatura

```typescript
// Componentes
export function MyComponent() {}

// Hooks
export function useMyHook() {}

// Tipos
export interface MyComponentProps {}

// Constantes
const MAX_ITEMS = 10;
```

### Imports

```typescript
// Externos primeiro
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

// Internos com @/
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/utils/currency";

// Tipos separados quando possível
import type { Transaction } from "@/types";
```

## 🔄 Processo de Pull Request

1. Atualize o README.md se necessário
2. Certifique-se de que o código passa no lint: `npm run lint`
3. Verifique a tipagem: `npm run type-check`
4. Teste localmente: `npm run dev`
5. Descreva suas alterações claramente no PR
6. Aguarde revisão

### Checklist do PR

- [ ] Código segue os padrões do projeto
- [ ] Commits são descritivos
- [ ] Documentação atualizada (se aplicável)
- [ ] Testes passando (quando aplicável)
- [ ] Lint e type-check sem erros

## 🐛 Reportar Bugs

Use as [GitHub Issues](https://github.com/seu-usuario/fintrack/issues) para reportar bugs.

### Ao reportar, inclua:

- **Descrição clara** do problema
- **Passos para reproduzir**
- **Comportamento esperado** vs **comportamento atual**
- **Screenshots** (se aplicável)
- **Ambiente**: SO, navegador, versão do Node

## 💡 Sugerir Melhorias

Sugestões são bem-vindas! Abra uma issue com:

- Descrição detalhada da sugestão
- Justificativa (por que seria útil)
- Exemplos ou referências (se houver)

## 📝 Convenção de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: nova funcionalidade
fix: correção de bug
docs: documentação
style: formatação, ponto e vírgula, etc
refactor: refatoração de código
test: adição ou correção de testes
chore: tarefas de build, configurações, etc
```

## 🙏 Obrigado!

Sua contribuição torna este projeto melhor para todos. Obrigado por dedicar seu tempo!

---

**Dúvidas?** Abra uma issue ou entre em contato.
