import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { GaugeRepairForm } from "@/components/GaugeRepairForm";

const RepairGauge = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-primary">Repair Gauge</h1>
            <p className="text-muted-foreground">Create a new repair record for a gauge</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <GaugeRepairForm />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default RepairGauge;