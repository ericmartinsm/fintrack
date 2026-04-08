"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/utils/currency";
import { cn } from "@/utils/cn";
import { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "default" | "success" | "danger" | "warning";
  isLoading?: boolean;
}

const variantStyles = {
  default: {
    icon: "bg-primary-100 text-primary-600",
    trend: "text-primary-600",
  },
  success: {
    icon: "bg-success-100 text-success-600",
    trend: "text-success-600",
  },
  danger: {
    icon: "bg-danger-100 text-danger-600",
    trend: "text-danger-600",
  },
  warning: {
    icon: "bg-warning-100 text-warning-600",
    trend: "text-warning-600",
  },
};

export function SummaryCard({
  title,
  value,
  icon: Icon,
  trend,
  variant = "default",
  isLoading,
}: SummaryCardProps) {
  if (isLoading) {
    return (
      <Card variant="elevated">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton variant="circle" className="h-10 w-10" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-8 w-32 mb-2" />
          <Skeleton className="h-3 w-20" />
        </CardContent>
      </Card>
    );
  }

  const styles = variantStyles[variant];

  return (
    <Card variant="elevated" className="transition-all hover:scale-[1.02]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">
          {title}
        </CardTitle>
        <div className={cn("rounded-lg p-2", styles.icon)}>
          <Icon className="h-5 w-5" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">
          {formatCurrency(value)}
        </div>
        {trend && (
          <p className={cn("text-xs font-medium mt-1", styles.trend)}>
            {trend.isPositive ? "+" : ""}
            {trend.value}% em relação ao mês anterior
          </p>
        )}
      </CardContent>
    </Card>
  );
}
