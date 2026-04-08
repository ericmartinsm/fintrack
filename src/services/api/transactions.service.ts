import { transactionsMock } from "@/mocks/transactions.mock";
import { transactionSchema, Transaction, TransactionsResponse } from "@/schemas/transaction.schema";
import { ApiResponse } from "@/types/api.types";
import { TransactionFilters } from "@/features/transactions/types/transaction.types";

const API_DELAY = 600;

async function simulateApiCall<T>(data: T, delay: number = API_DELAY): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

function applyFilters(transactions: Transaction[], filters: TransactionFilters): Transaction[] {
  let filtered = [...transactions];

  if (filters.type && filters.type !== "all") {
    filtered = filtered.filter((t) => t.type === filters.type);
  }

  if (filters.status && filters.status !== "all") {
    filtered = filtered.filter((t) => t.status === filters.status);
  }

  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter((t) => t.category === filters.category);
  }

  if (filters.month) {
    filtered = filtered.filter((t) => {
      const transactionMonth = t.date.substring(0, 7); // YYYY-MM
      return transactionMonth === filters.month;
    });
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filtered = filtered.filter((t) =>
      t.description.toLowerCase().includes(searchLower) ||
      t.category.toLowerCase().includes(searchLower)
    );
  }

  return filtered;
}

export async function fetchTransactions(
  filters?: TransactionFilters
): Promise<ApiResponse<TransactionsResponse>> {
  try {
    let transactions = transactionsMock;

    if (filters) {
      transactions = applyFilters(transactions, filters);
    }

    transactions.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const validatedTransactions = transactions.map((t) => transactionSchema.parse(t));

    const data = await simulateApiCall({
      transactions: validatedTransactions,
      total: validatedTransactions.length,
    });

    return {
      data,
      success: true,
    };
  } catch (error) {
    throw new Error("Erro ao carregar transações");
  }
}

export async function fetchTransactionById(id: string): Promise<ApiResponse<Transaction>> {
  try {
    const transaction = transactionsMock.find((t) => t.id === id);

    if (!transaction) {
      throw new Error("Transação não encontrada");
    }

    const validatedTransaction = transactionSchema.parse(transaction);
    const data = await simulateApiCall(validatedTransaction);

    return {
      data,
      success: true,
    };
  } catch (error) {
    throw new Error("Erro ao carregar transação");
  }
}

export async function fetchRecentTransactions(limit: number = 10): Promise<Transaction[]> {
  const response = await fetchTransactions();
  return response.data.transactions.slice(0, limit);
}
