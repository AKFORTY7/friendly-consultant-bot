import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { GaugeTransaction } from "@/types/gauge-transaction";
import { toast } from "sonner";

export function IssueGaugeForm() {
  const [formData, setFormData] = useState<Partial<GaugeTransaction>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Issue form submitted:", formData);
    toast.success("Gauge issued successfully");
  };

  const handleChange = (field: keyof GaugeTransaction, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Issue Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Gauge ID</Label>
            <Input
              placeholder="Enter gauge ID"
              onChange={(e) => handleChange("gaugeId", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Issued To</Label>
            <Input
              placeholder="Enter recipient name"
              onChange={(e) => handleChange("issuedTo", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Issue Date</Label>
            <Input
              type="date"
              onChange={(e) => handleChange("issueDate", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Expected Return Date</Label>
            <Input
              type="date"
              onChange={(e) => handleChange("expectedReturnDate", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Usage Information</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Purpose of Use</Label>
            <Textarea
              placeholder="Enter purpose"
              onChange={(e) => handleChange("purpose", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Location of Use</Label>
            <Input
              placeholder="Enter location"
              onChange={(e) => handleChange("locationOfUse", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">Issue Gauge</Button>
      </div>
    </form>
  );
}