"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { SkeletonTable } from "@/components/ui/skeleton";
import { EmptyState } from "@/components/ui/empty-state";
import { Transaction } from "@/features/transactions/types/transaction.types";
import { TransactionTypeBadge } from "./transaction-type-badge";
import { TransactionStatusBadge } from "./transaction-status-badge";
import { formatDate } from "@/utils/date";
import { formatCurrency } from "@/utils/currency";
import { FileText } from "lucide-react";
import { cn } from "@/utils/cn";

interface TransactionsTableProps {
  transactions: Transaction[];
  isLoading?: boolean;
}

export function TransactionsTable({ transactions, isLoading }: TransactionsTableProps) {
  if (isLoading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <SkeletonTable />
        </CardContent>
      </Card>
    );
  }

  if (transactions.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <EmptyState
            icon={<FileText className="h-8 w-8" />}
            title="Nenhuma transação encontrada"
            description="Não há transações que correspondam aos filtros selecionados. Tente ajustar os filtros ou limpar a busca."
          />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">
                    {transaction.description}
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-slate-600">
                      {transaction.category}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm text-slate-600">
                      {formatDate(transaction.date)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <TransactionTypeBadge type={transaction.type} />
                  </TableCell>
                  <TableCell>
                    <TransactionStatusBadge status={transaction.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={cn(
                        "font-semibold",
                        transaction.type === "income"
                          ? "text-success-600"
                          : "text-danger-600"
                      )}
                    >
                      {transaction.type === "income" ? "+" : ""}
                      {formatCurrency(transaction.value)}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
          <p className="text-sm text-slate-600">
            Mostrando <span className="font-medium">{transactions.length}</span>{" "}
            {transactions.length === 1 ? "transação" : "transações"}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
