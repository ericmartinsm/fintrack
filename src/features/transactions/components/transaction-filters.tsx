"use client";

import { Select } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { TransactionFilters as TransactionFiltersType } from "@/features/transactions/types/transaction.types";
import { TransactionSearch } from "./transaction-search";

interface TransactionFiltersProps {
  filters: TransactionFiltersType;
  onFiltersChange: (filters: TransactionFiltersType) => void;
}

const TYPE_OPTIONS = [
  { value: "all", label: "Todos os tipos" },
  { value: "income", label: "Receitas" },
  { value: "expense", label: "Despesas" },
];

const STATUS_OPTIONS = [
  { value: "all", label: "Todos os status" },
  { value: "paid", label: "Pago" },
  { value: "pending", label: "Pendente" },
  { value: "canceled", label: "Cancelado" },
];

const CATEGORY_OPTIONS = [
  { value: "all", label: "Todas as categorias" },
  { value: "Moradia", label: "Moradia" },
  { value: "Alimentação", label: "Alimentação" },
  { value: "Transporte", label: "Transporte" },
  { value: "Lazer", label: "Lazer" },
  { value: "Saúde", label: "Saúde" },
  { value: "Educação", label: "Educação" },
  { value: "Salário", label: "Salário" },
  { value: "Freelance", label: "Freelance" },
  { value: "Investimentos", label: "Investimentos" },
  { value: "Assinaturas", label: "Assinaturas" },
  { value: "Outros", label: "Outros" },
];

const MONTH_OPTIONS = [
  { value: "all", label: "Todos os meses" },
  { value: "2026-01", label: "Janeiro 2026" },
  { value: "2026-02", label: "Fevereiro 2026" },
  { value: "2026-03", label: "Março 2026" },
  { value: "2026-04", label: "Abril 2026" },
  { value: "2026-05", label: "Maio 2026" },
  { value: "2026-06", label: "Junho 2026" },
];

export function TransactionFilters({ filters, onFiltersChange }: TransactionFiltersProps) {
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? undefined : e.target.value;
    onFiltersChange({ ...filters, type: value as any });
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? undefined : e.target.value;
    onFiltersChange({ ...filters, status: value as any });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? undefined : e.target.value;
    onFiltersChange({ ...filters, category: value as any });
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? undefined : e.target.value;
    onFiltersChange({ ...filters, month: value });
  };

  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, search: value || undefined });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="w-full">
            <TransactionSearch
              value={filters.search || ""}
              onChange={handleSearchChange}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Tipo
              </label>
              <Select
                options={TYPE_OPTIONS}
                value={filters.type || "all"}
                onChange={handleTypeChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Status
              </label>
              <Select
                options={STATUS_OPTIONS}
                value={filters.status || "all"}
                onChange={handleStatusChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Categoria
              </label>
              <Select
                options={CATEGORY_OPTIONS}
                value={filters.category || "all"}
                onChange={handleCategoryChange}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Mês
              </label>
              <Select
                options={MONTH_OPTIONS}
                value={filters.month || "all"}
                onChange={handleMonthChange}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
