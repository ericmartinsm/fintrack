"use client";

import { useDashboardData } from "@/features/dashboard/hooks/use-dashboard-data";
import { SummaryCard } from "@/features/dashboard/components/summary-card";
import { MonthlyOverviewChart } from "@/features/dashboard/components/monthly-overview-chart";
import { ExpensesCategoryChart } from "@/features/dashboard/components/expenses-category-chart";
import { DashboardFilters } from "@/features/dashboard/components/dashboard-filters";
import { mapSummaryToCards } from "@/features/dashboard/utils/dashboard-mappers";
import { SectionHeader } from "@/components/ui/section-header";
import { Wallet, TrendingUp, TrendingDown, PiggyBank } from "lucide-react";

const ICONS = [Wallet, TrendingUp, TrendingDown, PiggyBank];

export function DashboardView() {
  const {
    summary,
    monthlyData,
    categoryExpenses,
    filters,
    setFilters,
    isSummaryLoading,
    isMonthlyLoading,
    isCategoryLoading,
  } = useDashboardData();

  const summaryCards = summary ? mapSummaryToCards(summary) : [];

  return (
    <div className="space-y-8">
      {/* Filters Section */}
      <section>
        <SectionHeader
          title="Filtros"
          description="Personalize a visualização dos seus dados financeiros"
          className="mb-4"
        />
        <DashboardFilters filters={filters} onFiltersChange={setFilters} />
      </section>

      {/* Summary Cards Section */}
      <section>
        <SectionHeader
          title="Resumo Financeiro"
          description="Visão geral das suas finanças"
          className="mb-4"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summaryCards.map((card, index) => (
            <SummaryCard
              key={card.title}
              title={card.title}
              value={card.value}
              icon={ICONS[index]}
              variant={card.variant}
              trend={card.trend}
              isLoading={isSummaryLoading}
            />
          ))}
        </div>
      </section>

      {/* Charts Section */}
      <section>
        <SectionHeader
          title="Análise Gráfica"
          description="Acompanhe a evolução das suas finanças"
          className="mb-4"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <MonthlyOverviewChart
            data={monthlyData || []}
            isLoading={isMonthlyLoading}
          />
          <ExpensesCategoryChart
            data={categoryExpenses || []}
            isLoading={isCategoryLoading}
          />
        </div>
      </section>
    </div>
  );
}
