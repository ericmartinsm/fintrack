import { Transaction, TransactionsResponse } from "@/schemas/transaction.schema";
import { TransactionType, TransactionStatus, TransactionCategory } from "@/types/api.types";

export type { Transaction, TransactionsResponse };

export interface TransactionFilters {
  type?: TransactionType | "all";
  status?: TransactionStatus | "all";
  category?: TransactionCategory | "all";
  month?: string;
  search?: string;
}

export interface TransactionFormData {
  description: string;
  category: TransactionCategory;
  date: string;
  value: number;
  type: TransactionType;
  status: TransactionStatus;
}
