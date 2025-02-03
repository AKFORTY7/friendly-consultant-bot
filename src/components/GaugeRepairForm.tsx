import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export function GaugeRepairForm() {
  const [repairData, setRepairData] = useState({
    gaugeId: "",
    requestDate: "",
    faultReported: "",
    initiationDate: "",
    repairedBy: "",
    diagnosticFindings: "",
    actionsTaken: "",
    repairCost: 0,
    underWarranty: false,
    requiresCalibration: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    toast({
      title: "Repair record created",
      description: "The repair record has been successfully created.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="gaugeId">Gauge ID</Label>
          <Input
            id="gaugeId"
            value={repairData.gaugeId}
            onChange={(e) => setRepairData({ ...repairData, gaugeId: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="requestDate">Request Date</Label>
          <Input
            id="requestDate"
            type="date"
            value={repairData.requestDate}
            onChange={(e) => setRepairData({ ...repairData, requestDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="faultReported">Fault Reported</Label>
          <Textarea
            id="faultReported"
            value={repairData.faultReported}
            onChange={(e) => setRepairData({ ...repairData, faultReported: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="initiationDate">Initiation Date</Label>
          <Input
            id="initiationDate"
            type="date"
            value={repairData.initiationDate}
            onChange={(e) => setRepairData({ ...repairData, initiationDate: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="repairedBy">Repaired By</Label>
          <Input
            id="repairedBy"
            value={repairData.repairedBy}
            onChange={(e) => setRepairData({ ...repairData, repairedBy: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="repairCost">Repair Cost</Label>
          <Input
            id="repairCost"
            type="number"
            value={repairData.repairCost}
            onChange={(e) => setRepairData({ ...repairData, repairCost: Number(e.target.value) })}
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="underWarranty"
            checked={repairData.underWarranty}
            onCheckedChange={(checked) => setRepairData({ ...repairData, underWarranty: checked })}
          />
          <Label htmlFor="underWarranty">Under Warranty</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="requiresCalibration"
            checked={repairData.requiresCalibration}
            onCheckedChange={(checked) => setRepairData({ ...repairData, requiresCalibration: checked })}
          />
          <Label htmlFor="requiresCalibration">Requires Calibration</Label>
        </div>
      </div>

      <Button type="submit" className="w-full">Create Repair Record</Button>
    </form>
  );
}