import { Transaction } from "@/features/transactions/types/transaction.types";
import { formatCurrency } from "@/utils/currency";
import { formatDate, formatDateLong } from "@/utils/date";

export function formatTransactionValue(transaction: Transaction): string {
  const prefix = transaction.type === "income" ? "+" : "-";
  return `${prefix} ${formatCurrency(Math.abs(transaction.value))}`;
}

export function formatTransactionDate(transaction: Transaction): string {
  return formatDate(transaction.date);
}

export function formatTransactionDateLong(transaction: Transaction): string {
  return formatDateLong(transaction.date);
}

export function getTransactionTypeLabel(type: "income" | "expense"): string {
  return type === "income" ? "Receita" : "Despesa";
}

export function getTransactionStatusLabel(status: "paid" | "pending" | "canceled"): string {
  const labels = {
    paid: "Pago",
    pending: "Pendente",
    canceled: "Cancelado",
  };
  return labels[status];
}

export function formatTransactionSummary(transaction: Transaction): string {
  return `${transaction.description} - ${formatCurrency(Math.abs(transaction.value))} (${formatDate(transaction.date)})`;
}

export function getTransactionColor(transaction: Transaction): string {
  if (transaction.status === "canceled") return "text-slate-400";
  return transaction.type === "income" ? "text-success-600" : "text-danger-600";
}

export function isExpenseTransaction(transaction: Transaction): boolean {
  return transaction.type === "expense";
}

export function isIncomeTransaction(transaction: Transaction): boolean {
  return transaction.type === "income";
}

export function isPaidTransaction(transaction: Transaction): boolean {
  return transaction.status === "paid";
}

export function isPendingTransaction(transaction: Transaction): boolean {
  return transaction.status === "pending";
}

export function isCanceledTransaction(transaction: Transaction): boolean {
  return transaction.status === "canceled";
}
