import { Table, TableBody } from "@/components/ui/table";
import { GaugeTableHeader } from "./gauge-table/GaugeTableHeader";
import { GaugeTableRow } from "./gauge-table/GaugeTableRow";
import { Gauge } from "@/types/gauge";

const gauges: Gauge[] = [
  {
    id: "1",
    name: "Digital Caliper",
    type: "Vernier",
    manufacturer: "Mitutoyo",
    modelNumber: "DC-001",
    serialNumber: "SN001",
    purchaseDate: "2024-01-15",
    warranty: "2 years",
    receivedDate: "2024-01-20",
    measurementRange: "0-150mm",
    resolution: "0.01mm",
    accuracy: "±0.02mm",
    unitsOfMeasurement: "mm",
    calibrationDate: "2024-01-25",
    nextCalibrationDue: "2024-07-25",
    calibrationCertificateNumber: "CAL001",
    calibrationInterval: "6 months",
    calibrationProcedure: "Standard procedure A1",
    calibratedBy: "TechCal Inc.",
    maintenanceSchedule: "Monthly",
    lastMaintenanceDate: "2024-02-15",
    nextMaintenanceDate: "2024-03-15",
    maintenanceHistory: [
      {
        id: "m1",
        date: "2024-02-15",
        description: "Regular cleaning and inspection",
        performedBy: "John Doe",
      },
    ],
    currentLocation: "Lab 1",
    department: "Quality Control",
    custodian: "Jane Smith",
    status: "Active",
    condition: "Good",
    userManual: "DC001-Manual-Rev2",
    notes: "Primary inspection tool",
    purchasePrice: 599.99,
    depreciation: 100,
    warrantyPeriod: "24 months",
  },
  {
    id: "2",
    name: "Thread Gauge",
    type: "Thread",
    manufacturer: "Starrett",
    modelNumber: "TG-002",
    serialNumber: "SN002",
    purchaseDate: "2024-02-01",
    warranty: "1 year",
    receivedDate: "2024-02-05",
    measurementRange: "M1-M10",
    resolution: "0.5mm",
    accuracy: "±0.005mm",
    unitsOfMeasurement: "mm",
    calibrationDate: "2024-02-10",
    nextCalibrationDue: "2024-08-10",
    calibrationCertificateNumber: "CAL002",
    calibrationInterval: "6 months",
    calibrationProcedure: "Standard thread gauge calibration",
    calibratedBy: "MetroCal Services",
    maintenanceSchedule: "Quarterly",
    lastMaintenanceDate: "2024-02-10",
    nextMaintenanceDate: "2024-05-10",
    maintenanceHistory: [
      {
        id: "m2",
        date: "2024-02-10",
        description: "Initial inspection and calibration",
        performedBy: "Sarah Johnson",
      },
    ],
    currentLocation: "Workshop",
    department: "Production",
    custodian: "Mike Brown",
    status: "Active",
    condition: "Good",
    userManual: "TG002-Manual-Rev1",
    notes: "Used for thread inspection in production line",
    purchasePrice: 299.99,
    depreciation: 50,
    warrantyPeriod: "12 months",
  },
];

export function GaugeTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <GaugeTableHeader />
        <TableBody>
          {gauges.map((gauge) => (
            <GaugeTableRow key={gauge.id} gauge={gauge} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
