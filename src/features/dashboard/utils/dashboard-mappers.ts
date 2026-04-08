import { Summary, MonthlyData, CategoryExpense } from "@/features/dashboard/types/dashboard.types";

export function mapSummaryToCards(summary: Summary) {
  return [
    {
      title: "Saldo Total",
      value: summary.totalBalance,
      variant: "default" as const,
      trend: {
        value: 8.2,
        isPositive: true,
      },
    },
    {
      title: "Receitas do Mês",
      value: summary.monthlyIncome,
      variant: "success" as const,
      trend: {
        value: 12.5,
        isPositive: true,
      },
    },
    {
      title: "Despesas do Mês",
      value: summary.monthlyExpenses,
      variant: "danger" as const,
      trend: {
        value: 4.3,
        isPositive: false,
      },
    },
    {
      title: "Economia do Mês",
      value: summary.monthlySavings,
      variant: "warning" as const,
      trend: {
        value: 18.7,
        isPositive: true,
      },
    },
  ];
}

export function formatMonthlyDataForChart(data: MonthlyData[]) {
  return data.map((item) => ({
    month: item.month,
    income: item.income,
    expenses: item.expenses,
  }));
}

export function formatCategoryDataForChart(data: CategoryExpense[]) {
  return data.map((item) => ({
    category: item.category,
    value: item.value,
    percentage: item.percentage,
  }));
}

export function calculateTotalExpenses(data: CategoryExpense[]): number {
  return data.reduce((sum, item) => sum + item.value, 0);
}

export function getTopCategories(data: CategoryExpense[], limit: number = 5): CategoryExpense[] {
  return [...data]
    .sort((a, b) => b.value - a.value)
    .slice(0, limit);
}
