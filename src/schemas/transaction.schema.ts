import { z } from "zod";

export const transactionSchema = z.object({
  id: z.string(),
  description: z.string(),
  category: z.string(),
  date: z.string(),
  value: z.number(),
  type: z.enum(["income", "expense"]),
  status: z.enum(["paid", "pending", "canceled"]),
});

export const transactionsResponseSchema = z.object({
  transactions: z.array(transactionSchema),
  total: z.number(),
});

export type Transaction = z.infer<typeof transactionSchema>;
export type TransactionsResponse = z.infer<typeof transactionsResponseSchema>;
