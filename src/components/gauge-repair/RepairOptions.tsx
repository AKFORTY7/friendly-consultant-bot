import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";

interface RepairOptionsProps {
  repairCost: number;
  underWarranty: boolean;
  requiresCalibration: boolean;
  onRepairCostChange: (value: number) => void;
  onUnderWarrantyChange: (checked: boolean) => void;
  onRequiresCalibrationChange: (checked: boolean) => void;
}

export function RepairOptions({
  repairCost,
  underWarranty,
  requiresCalibration,
  onRepairCostChange,
  onUnderWarrantyChange,
  onRequiresCalibrationChange,
}: RepairOptionsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="repairCost">Repair Cost</Label>
        <Input
          id="repairCost"
          type="number"
          value={repairCost}
          onChange={(e) => onRepairCostChange(Number(e.target.value))}
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="underWarranty"
          checked={underWarranty}
          onCheckedChange={onUnderWarrantyChange}
        />
        <Label htmlFor="underWarranty">Under Warranty</Label>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="requiresCalibration"
          checked={requiresCalibration}
          onCheckedChange={onRequiresCalibrationChange}
        />
        <Label htmlFor="requiresCalibration">Requires Calibration</Label>
      </div>
    </>
  );
}