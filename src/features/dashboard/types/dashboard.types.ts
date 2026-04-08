import { Summary, MonthlyData, CategoryExpense, DashboardData } from "@/schemas/dashboard.schema";

export type { Summary, MonthlyData, CategoryExpense, DashboardData };

export interface DashboardFilters {
  month?: string;
  year?: string;
}
