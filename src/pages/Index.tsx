import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { GaugeForm } from "@/components/GaugeForm";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Gauge Management</h1>
            <p className="text-gray-500">
              View and manage gauge information and calibration details
            </p>
          </div>
          <GaugeForm />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;