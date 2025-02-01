import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Gauge } from "@/types/gauge";

// Sample data - in a real app this would come from your database
const gauges: Gauge[] = [
  {
    id: "1",
    serialNo: "SN001",
    controlNo: "CN001",
    status: "Active",
    type: "Digital",
    manufacturer: "Mitutoyo",
    location: "Lab 1",
    nextCalibration: "2024-03-01",
  },
  {
    id: "2",
    serialNo: "SN002",
    controlNo: "CN002",
    status: "Inactive",
    type: "Analog",
    manufacturer: "Starrett",
    location: "Lab 2",
    nextCalibration: "2024-04-15",
  },
];

export function GaugeTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="w-[100px]">Serial No</TableHead>
            <TableHead>Control No</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Manufacturer</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Next Calibration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {gauges.map((gauge) => (
            <TableRow key={gauge.id}>
              <TableCell className="font-medium">{gauge.serialNo}</TableCell>
              <TableCell>{gauge.controlNo}</TableCell>
              <TableCell>
                <Badge
                  variant={gauge.status === "Active" ? "default" : "secondary"}
                >
                  {gauge.status}
                </Badge>
              </TableCell>
              <TableCell>{gauge.type}</TableCell>
              <TableCell>{gauge.manufacturer}</TableCell>
              <TableCell>{gauge.location}</TableCell>
              <TableCell className="text-right">{gauge.nextCalibration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}