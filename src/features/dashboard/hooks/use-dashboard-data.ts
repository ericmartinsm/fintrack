"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  fetchDashboardData,
  fetchDashboardSummary,
  fetchMonthlyData,
  fetchCategoryExpenses,
} from "@/services/api/dashboard.service";
import { DashboardFilters } from "@/features/dashboard/types/dashboard.types";

export function useDashboardData() {
  const [filters, setFilters] = useState<DashboardFilters>({});

  const {
    data: dashboardData,
    isLoading: isDashboardLoading,
    error: dashboardError,
  } = useQuery({
    queryKey: ["dashboard", filters],
    queryFn: async () => {
      const response = await fetchDashboardData();
      return response.data;
    },
  });

  const {
    data: summary,
    isLoading: isSummaryLoading,
  } = useQuery({
    queryKey: ["dashboard-summary", filters],
    queryFn: fetchDashboardSummary,
  });

  const {
    data: monthlyData,
    isLoading: isMonthlyLoading,
  } = useQuery({
    queryKey: ["dashboard-monthly", filters],
    queryFn: fetchMonthlyData,
  });

  const {
    data: categoryExpenses,
    isLoading: isCategoryLoading,
  } = useQuery({
    queryKey: ["dashboard-categories", filters],
    queryFn: fetchCategoryExpenses,
  });

  return {
    dashboardData,
    summary,
    monthlyData,
    categoryExpenses,
    filters,
    setFilters,
    isLoading: isDashboardLoading || isSummaryLoading || isMonthlyLoading || isCategoryLoading,
    isSummaryLoading,
    isMonthlyLoading,
    isCategoryLoading,
    error: dashboardError,
  };
}
