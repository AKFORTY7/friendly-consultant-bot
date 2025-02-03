import { ReceiveGaugeForm } from "@/components/ReceiveGaugeForm";

const ReceiveGauge = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary">Receive Gauge</h1>
        <p className="text-muted-foreground">
          Record the return of a previously issued gauge
        </p>
      </div>
      <ReceiveGaugeForm />
    </div>
  );
};

export default ReceiveGauge;