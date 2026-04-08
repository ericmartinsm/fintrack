export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: unknown;
}

export type TransactionType = "income" | "expense";
export type TransactionStatus = "paid" | "pending" | "canceled";

export type TransactionCategory =
  | "Moradia"
  | "Alimentação"
  | "Transporte"
  | "Lazer"
  | "Saúde"
  | "Educação"
  | "Salário"
  | "Freelance"
  | "Investimentos"
  | "Assinaturas"
  | "Outros";
