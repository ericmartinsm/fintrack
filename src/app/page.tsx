import { DashboardView } from "@/features/dashboard/components/dashboard-view";
import { TransactionsView } from "@/features/transactions/components/transactions-view";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            FinTrack
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Gerencie suas finanças com inteligência e praticidade
          </p>
        </header>

        <div className="space-y-12">
          <DashboardView />
          
          <div className="border-t border-slate-200 pt-12">
            <TransactionsView />
          </div>
        </div>
      </div>
    </main>
  );
}
