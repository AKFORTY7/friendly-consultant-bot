import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { GaugeMissingReport } from "@/types/gauge-missing";

const missingGauges: GaugeMissingReport[] = [
  {
    id: "1",
    gaugeId: "G001",
    dateReportedMissing: "2024-03-01",
    reportedBy: "John Doe",
    lastKnownLocation: "Lab 1",
    lastCustodian: "Jane Smith",
    lastCalibrationDate: "2024-01-15",
    lastUsageDate: "2024-02-28",
    possibleCause: "Misplaced during inventory check",
    searchEfforts: "Checked all labs and storage areas",
    notificationsIssued: "Internal memo sent to all departments",
    status: "missing",
  },
];

export function MissingGaugesList() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Gauge ID</TableHead>
            <TableHead>Date Reported</TableHead>
            <TableHead>Last Location</TableHead>
            <TableHead>Last Custodian</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {missingGauges.map((gauge) => (
            <TableRow key={gauge.id}>
              <TableCell>{gauge.gaugeId}</TableCell>
              <TableCell>{gauge.dateReportedMissing}</TableCell>
              <TableCell>{gauge.lastKnownLocation}</TableCell>
              <TableCell>{gauge.lastCustodian}</TableCell>
              <TableCell>
                <Badge variant={gauge.status === "missing" ? "destructive" : "success"}>
                  {gauge.status.toUpperCase()}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}