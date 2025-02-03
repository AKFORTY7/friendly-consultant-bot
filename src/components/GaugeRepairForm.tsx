import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { GaugeIdentification } from "./gauge-repair/GaugeIdentification";
import { RepairDetails } from "./gauge-repair/RepairDetails";
import { RepairOptions } from "./gauge-repair/RepairOptions";

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
    toast({
      title: "Repair record created",
      description: "The repair record has been successfully created.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GaugeIdentification
          gaugeId={repairData.gaugeId}
          onGaugeIdChange={(value) => setRepairData({ ...repairData, gaugeId: value })}
        />

        <RepairDetails
          requestDate={repairData.requestDate}
          faultReported={repairData.faultReported}
          initiationDate={repairData.initiationDate}
          repairedBy={repairData.repairedBy}
          onRequestDateChange={(value) => setRepairData({ ...repairData, requestDate: value })}
          onFaultReportedChange={(value) => setRepairData({ ...repairData, faultReported: value })}
          onInitiationDateChange={(value) => setRepairData({ ...repairData, initiationDate: value })}
          onRepairedByChange={(value) => setRepairData({ ...repairData, repairedBy: value })}
        />

        <RepairOptions
          repairCost={repairData.repairCost}
          underWarranty={repairData.underWarranty}
          requiresCalibration={repairData.requiresCalibration}
          onRepairCostChange={(value) => setRepairData({ ...repairData, repairCost: value })}
          onUnderWarrantyChange={(checked) => setRepairData({ ...repairData, underWarranty: checked })}
          onRequiresCalibrationChange={(checked) => setRepairData({ ...repairData, requiresCalibration: checked })}
        />
      </div>

      <Button type="submit" className="w-full">Create Repair Record</Button>
    </form>
  );
}