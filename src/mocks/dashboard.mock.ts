import { DashboardData } from "@/schemas/dashboard.schema";

export const dashboardMock: DashboardData = {
  summary: {
    totalBalance: 48750.80,
    monthlyIncome: 12500.00,
    monthlyExpenses: 8234.45,
    monthlySavings: 4265.55,
  },
  monthlyData: [
    { month: "Jan", income: 11200.00, expenses: 7850.30 },
    { month: "Fev", income: 12800.00, expenses: 8120.50 },
    { month: "Mar", income: 11500.00, expenses: 7690.20 },
    { month: "Abr", income: 13200.00, expenses: 8450.80 },
    { month: "Mai", income: 12000.00, expenses: 7920.40 },
    { month: "Jun", income: 12500.00, expenses: 8234.45 },
  ],
  categoryExpenses: [
    { category: "Moradia", value: 2800.00, percentage: 34.0 },
    { category: "Alimentação", value: 1850.50, percentage: 22.5 },
    { category: "Transporte", value: 980.30, percentage: 11.9 },
    { category: "Lazer", value: 720.00, percentage: 8.7 },
    { category: "Saúde", value: 650.00, percentage: 7.9 },
    { category: "Assinaturas", value: 389.90, percentage: 4.7 },
    { category: "Educação", value: 520.00, percentage: 6.3 },
    { category: "Outros", value: 323.75, percentage: 4.0 },
  ],
};
