import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface RepairDetailsProps {
  requestDate: string;
  faultReported: string;
  initiationDate: string;
  repairedBy: string;
  onRequestDateChange: (value: string) => void;
  onFaultReportedChange: (value: string) => void;
  onInitiationDateChange: (value: string) => void;
  onRepairedByChange: (value: string) => void;
}

export function RepairDetails({
  requestDate,
  faultReported,
  initiationDate,
  repairedBy,
  onRequestDateChange,
  onFaultReportedChange,
  onInitiationDateChange,
  onRepairedByChange,
}: RepairDetailsProps) {
  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="requestDate">Request Date</Label>
        <Input
          id="requestDate"
          type="date"
          value={requestDate}
          onChange={(e) => onRequestDateChange(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="faultReported">Fault Reported</Label>
        <Textarea
          id="faultReported"
          value={faultReported}
          onChange={(e) => onFaultReportedChange(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="initiationDate">Initiation Date</Label>
        <Input
          id="initiationDate"
          type="date"
          value={initiationDate}
          onChange={(e) => onInitiationDateChange(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="repairedBy">Repaired By</Label>
        <Input
          id="repairedBy"
          value={repairedBy}
          onChange={(e) => onRepairedByChange(e.target.value)}
          required
        />
      </div>
    </>
  );
}