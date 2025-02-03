import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Edit, Trash2 } from "lucide-react";
import { Gauge } from "@/types/gauge";

interface GaugeTableRowProps {
  gauge: Gauge;
}

export function GaugeTableRow({ gauge }: GaugeTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-medium">{gauge.serialNumber}</TableCell>
      <TableCell>{gauge.name}</TableCell>
      <TableCell>{gauge.type}</TableCell>
      <TableCell>
        <Badge variant={gauge.status === "Active" ? "default" : "secondary"}>
          {gauge.status}
        </Badge>
      </TableCell>
      <TableCell>{gauge.currentLocation}</TableCell>
      <TableCell>{gauge.nextCalibrationDue}</TableCell>
      <TableCell>{gauge.custodian}</TableCell>
      <TableCell className="text-right space-x-2">
        <Button variant="ghost" size="icon">
          <Eye className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}