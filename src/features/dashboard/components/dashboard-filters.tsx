"use client";

import { Select } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardFilters as DashboardFiltersType } from "@/features/dashboard/types/dashboard.types";

interface DashboardFiltersProps {
  filters: DashboardFiltersType;
  onFiltersChange: (filters: DashboardFiltersType) => void;
}

const MONTHS = [
  { value: "all", label: "Todos os meses" },
  { value: "2026-01", label: "Janeiro 2026" },
  { value: "2026-02", label: "Fevereiro 2026" },
  { value: "2026-03", label: "Março 2026" },
  { value: "2026-04", label: "Abril 2026" },
  { value: "2026-05", label: "Maio 2026" },
  { value: "2026-06", label: "Junho 2026" },
];

const YEARS = [
  { value: "all", label: "Todos os anos" },
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
];

export function DashboardFilters({ filters, onFiltersChange }: DashboardFiltersProps) {
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? undefined : e.target.value;
    onFiltersChange({ ...filters, month: value });
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value === "all" ? undefined : e.target.value;
    onFiltersChange({ ...filters, year: value });
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Período
            </label>
            <Select
              options={MONTHS}
              value={filters.month || "all"}
              onChange={handleMonthChange}
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">
              Ano
            </label>
            <Select
              options={YEARS}
              value={filters.year || "all"}
              onChange={handleYearChange}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
