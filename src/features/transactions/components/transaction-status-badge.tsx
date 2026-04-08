"use client";

import { Badge } from "@/components/ui/badge";
import { TransactionStatus } from "@/types/api.types";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

interface TransactionStatusBadgeProps {
  status: TransactionStatus;
}

export function TransactionStatusBadge({ status }: TransactionStatusBadgeProps) {
  const config = {
    paid: {
      label: "Pago",
      variant: "success" as const,
      icon: CheckCircle2,
    },
    pending: {
      label: "Pendente",
      variant: "warning" as const,
      icon: Clock,
    },
    canceled: {
      label: "Cancelado",
      variant: "secondary" as const,
      icon: XCircle,
    },
  };

  const { label, variant, icon: Icon } = config[status];

  return (
    <Badge variant={variant} className="gap-1">
      <Icon className="h-3 w-3" />
      {label}
    </Badge>
  );
}
