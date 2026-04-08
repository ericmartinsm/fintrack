import { z } from "zod";

export const summarySchema = z.object({
  totalBalance: z.number(),
  monthlyIncome: z.number(),
  monthlyExpenses: z.number(),
  monthlySavings: z.number(),
});

export const monthlyDataSchema = z.object({
  month: z.string(),
  income: z.number(),
  expenses: z.number(),
});

export const categoryExpenseSchema = z.object({
  category: z.string(),
  value: z.number(),
  percentage: z.number(),
});

export const dashboardDataSchema = z.object({
  summary: summarySchema,
  monthlyData: z.array(monthlyDataSchema),
  categoryExpenses: z.array(categoryExpenseSchema),
});

export type Summary = z.infer<typeof summarySchema>;
export type MonthlyData = z.infer<typeof monthlyDataSchema>;
export type CategoryExpense = z.infer<typeof categoryExpenseSchema>;
export type DashboardData = z.infer<typeof dashboardDataSchema>;
