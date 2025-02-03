import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { GaugeTransaction } from "@/types/gauge-transaction";
import { toast } from "sonner";

export function ReceiveGaugeForm() {
  const [formData, setFormData] = useState<Partial<GaugeTransaction>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Receive form submitted:", formData);
    toast.success("Gauge received successfully");
  };

  const handleChange = (field: keyof GaugeTransaction, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Return Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Gauge ID</Label>
            <Input
              placeholder="Enter gauge ID"
              onChange={(e) => handleChange("gaugeId", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Return Date</Label>
            <Input
              type="date"
              onChange={(e) => handleChange("returnDate", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Received By</Label>
            <Input
              placeholder="Enter receiver name"
              onChange={(e) => handleChange("receivedBy", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Post-Use Condition</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Condition After Use</Label>
            <Textarea
              placeholder="Describe condition"
              onChange={(e) => handleChange("conditionAfterUse", e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="calibration-check"
              onCheckedChange={(checked) =>
                handleChange("calibrationCheckRequired", checked)
              }
            />
            <Label htmlFor="calibration-check">Calibration Check Required</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="maintenance-required"
              onCheckedChange={(checked) =>
                handleChange("maintenanceRequired", checked)
              }
            />
            <Label htmlFor="maintenance-required">Maintenance Required</Label>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Usage Report</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Project/Task Completion</Label>
            <Textarea
              placeholder="Enter completion details"
              onChange={(e) => handleChange("projectCompletion", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Issues Encountered</Label>
            <Textarea
              placeholder="Describe any issues"
              onChange={(e) => handleChange("issuesEncountered", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">Receive Gauge</Button>
      </div>
    </form>
  );
}