import { IssueGaugeForm } from "@/components/IssueGaugeForm";

const IssueGauge = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary">Issue Gauge</h1>
        <p className="text-muted-foreground">
          Issue a gauge to a user or department
        </p>
      </div>
      <IssueGaugeForm />
    </div>
  );
};

export default IssueGauge;