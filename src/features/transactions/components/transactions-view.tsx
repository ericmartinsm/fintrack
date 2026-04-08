"use client";

import { useTransactions } from "@/features/transactions/hooks/use-transactions";
import { TransactionsTable } from "@/features/transactions/components/transactions-table";
import { TransactionFilters } from "@/features/transactions/components/transaction-filters";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency } from "@/utils/currency";
import { FilterX } from "lucide-react";

export function TransactionsView() {
  const {
    transactions,
    stats,
    filters,
    setFilters,
    isLoading,
    hasActiveFilters,
    clearFilters,
  } = useTransactions();

  return (
    <div className="space-y-6">
      {/* Stats Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-slate-600">
              Total de Receitas
            </div>
            <div className="mt-2 text-2xl font-bold text-success-600">
              {formatCurrency(stats.income)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-slate-600">
              Total de Despesas
            </div>
            <div className="mt-2 text-2xl font-bold text-danger-600">
              {formatCurrency(stats.expenses)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-sm font-medium text-slate-600">
              Saldo do Período
            </div>
            <div
              className={`mt-2 text-2xl font-bold ${
                stats.balance >= 0 ? "text-success-600" : "text-danger-600"
              }`}
            >
              {formatCurrency(stats.balance)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters Section */}
      <section>
        <SectionHeader
          title="Filtros"
          description="Filtre e busque suas transações"
          className="mb-4"
          action={
            hasActiveFilters && (
              <Button
                variant="outline"
                size="sm"
                onClick={clearFilters}
                className="gap-2"
              >
                <FilterX className="h-4 w-4" />
                Limpar Filtros
              </Button>
            )
          }
        />
        <TransactionFilters filters={filters} onFiltersChange={setFilters} />
      </section>

      {/* Transactions Table */}
      <section>
        <SectionHeader
          title="Transações Recentes"
          description={`${stats.count} ${stats.count === 1 ? "transação encontrada" : "transações encontradas"}`}
          className="mb-4"
        />
        <TransactionsTable transactions={transactions} isLoading={isLoading} />
      </section>
    </div>
  );
}
