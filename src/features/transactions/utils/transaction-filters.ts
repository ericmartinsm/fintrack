import { Transaction } from "@/features/transactions/types/transaction.types";
import { TransactionType, TransactionStatus, TransactionCategory } from "@/types/api.types";

export function filterByType(transactions: Transaction[], type?: TransactionType | "all"): Transaction[] {
  if (!type || type === "all") return transactions;
  return transactions.filter((t) => t.type === type);
}

export function filterByStatus(
  transactions: Transaction[],
  status?: TransactionStatus | "all"
): Transaction[] {
  if (!status || status === "all") return transactions;
  return transactions.filter((t) => t.status === status);
}

export function filterByCategory(
  transactions: Transaction[],
  category?: TransactionCategory | "all"
): Transaction[] {
  if (!category || category === "all") return transactions;
  return transactions.filter((t) => t.category === category);
}

export function filterByMonth(transactions: Transaction[], month?: string): Transaction[] {
  if (!month) return transactions;
  return transactions.filter((t) => {
    const transactionMonth = t.date.substring(0, 7); // YYYY-MM
    return transactionMonth === month;
  });
}

export function filterBySearch(transactions: Transaction[], search?: string): Transaction[] {
  if (!search) return transactions;
  const searchLower = search.toLowerCase();
  return transactions.filter(
    (t) =>
      t.description.toLowerCase().includes(searchLower) ||
      t.category.toLowerCase().includes(searchLower)
  );
}

export function sortByDate(transactions: Transaction[], order: "asc" | "desc" = "desc"): Transaction[] {
  return [...transactions].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return order === "desc" ? dateB - dateA : dateA - dateB;
  });
}

export function calculateTotal(transactions: Transaction[]): number {
  return transactions.reduce((sum, t) => sum + t.value, 0);
}

export function calculateTotalByType(
  transactions: Transaction[],
  type: TransactionType
): number {
  return transactions
    .filter((t) => t.type === type)
    .reduce((sum, t) => sum + Math.abs(t.value), 0);
}

export function groupByCategory(transactions: Transaction[]): Record<string, Transaction[]> {
  return transactions.reduce((acc, transaction) => {
    const category = transaction.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(transaction);
    return acc;
  }, {} as Record<string, Transaction[]>);
}

export function getRecentTransactions(transactions: Transaction[], limit: number = 10): Transaction[] {
  return sortByDate(transactions, "desc").slice(0, limit);
}
