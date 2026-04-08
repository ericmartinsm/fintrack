"use client";

import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import { fetchTransactions } from "@/services/api/transactions.service";
import { TransactionFilters } from "@/features/transactions/types/transaction.types";

export function useTransactions() {
  const [filters, setFilters] = useState<TransactionFilters>({
    type: "all",
    status: "all",
    category: "all",
    month: undefined,
    search: undefined,
  });

  const {
    data: response,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["transactions", filters],
    queryFn: async () => {
      const cleanFilters = {
        ...filters,
        type: filters.type === "all" ? undefined : filters.type,
        status: filters.status === "all" ? undefined : filters.status,
        category: filters.category === "all" ? undefined : filters.category,
      };
      return await fetchTransactions(cleanFilters);
    },
  });

  const transactions = response?.data.transactions || [];
  const total = response?.data.total || 0;

  const stats = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.value, 0);

    const expenses = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + Math.abs(t.value), 0);

    const balance = income - expenses;

    return {
      income,
      expenses,
      balance,
      count: transactions.length,
    };
  }, [transactions]);

  const hasActiveFilters = useMemo(() => {
    return (
      (filters.type && filters.type !== "all") ||
      (filters.status && filters.status !== "all") ||
      (filters.category && filters.category !== "all") ||
      !!filters.month ||
      !!filters.search
    );
  }, [filters]);

  const clearFilters = () => {
    setFilters({
      type: "all",
      status: "all",
      category: "all",
      month: undefined,
      search: undefined,
    });
  };

  return {
    transactions,
    total,
    stats,
    filters,
    setFilters,
    isLoading,
    error,
    refetch,
    hasActiveFilters,
    clearFilters,
  };
}
