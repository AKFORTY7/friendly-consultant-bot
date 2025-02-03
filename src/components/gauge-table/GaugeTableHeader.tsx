import {
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function GaugeTableHeader() {
  return (
    <TableHeader>
      <TableRow className="bg-muted/50">
        <TableHead className="w-[100px]">ID</TableHead>
        <TableHead>Name</TableHead>
        <TableHead>Type</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Location</TableHead>
        <TableHead>Next Calibration</TableHead>
        <TableHead>Custodian</TableHead>
        <TableHead className="text-right">Actions</TableHead>
      </TableRow>
    </TableHeader>
  );
}