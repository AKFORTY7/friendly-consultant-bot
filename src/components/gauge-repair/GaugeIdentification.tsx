import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface GaugeIdentificationProps {
  gaugeId: string;
  onGaugeIdChange: (value: string) => void;
}

export function GaugeIdentification({ gaugeId, onGaugeIdChange }: GaugeIdentificationProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="gaugeId">Gauge ID</Label>
      <Input
        id="gaugeId"
        value={gaugeId}
        onChange={(e) => onGaugeIdChange(e.target.value)}
        required
      />
    </div>
  );
}