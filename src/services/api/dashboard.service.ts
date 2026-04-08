import { dashboardMock } from "@/mocks/dashboard.mock";
import { dashboardDataSchema, DashboardData } from "@/schemas/dashboard.schema";
import { ApiResponse } from "@/types/api.types";

const API_DELAY = 800;

async function simulateApiCall<T>(data: T, delay: number = API_DELAY): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), delay);
  });
}

export async function fetchDashboardData(): Promise<ApiResponse<DashboardData>> {
  try {
    const data = await simulateApiCall(dashboardMock);
    
    const validatedData = dashboardDataSchema.parse(data);
    
    return {
      data: validatedData,
      success: true,
    };
  } catch (error) {
    throw new Error("Erro ao carregar dados do dashboard");
  }
}

export async function fetchDashboardSummary() {
  const response = await fetchDashboardData();
  return response.data.summary;
}

export async function fetchMonthlyData() {
  const response = await fetchDashboardData();
  return response.data.monthlyData;
}

export async function fetchCategoryExpenses() {
  const response = await fetchDashboardData();
  return response.data.categoryExpenses;
}
