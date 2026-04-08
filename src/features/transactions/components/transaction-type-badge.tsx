"use client";

import { Badge } from "@/components/ui/badge";
import { TransactionType } from "@/types/api.types";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TransactionTypeBadgeProps {
  type: TransactionType;
}

export function TransactionTypeBadge({ type }: TransactionTypeBadgeProps) {
  const config = {
    income: {
      label: "Receita",
      variant: "success" as const,
      icon: TrendingUp,
    },
    expense: {
      label: "Despesa",
      variant: "danger" as const,
      icon: TrendingDown,
    },
  };

  const { label, variant, icon: Icon } = config[type];

  return (
    <Badge variant={variant} className="gap-1">
      <Icon className="h-3 w-3" />
      {label}
    </Badge>
  );
}
