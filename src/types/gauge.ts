export interface Gauge {
  id: string;
  // Basic Information
  name: string;
  type: GaugeType;
  manufacturer: string;
  modelNumber: string;
  serialNumber: string;
  purchaseDate: string;
  warranty: string;
  receivedDate: string;

  // Specification Details
  measurementRange: string;
  resolution: string;
  accuracy: string;
  unitsOfMeasurement: string;

  // Calibration Information
  calibrationDate: string;
  nextCalibrationDue: string;
  calibrationCertificateNumber: string;
  calibrationInterval: string;
  calibrationProcedure: string;
  calibratedBy: string;

  // Maintenance Information
  maintenanceSchedule: string;
  lastMaintenanceDate: string;
  nextMaintenanceDate: string;
  maintenanceHistory: MaintenanceRecord[];

  // Location and Custody
  currentLocation: string;
  department: string;
  custodian: string;

  // Status and Condition
  status: GaugeStatus;
  condition: GaugeCondition;

  // Documentation
  userManual: string;
  notes: string;

  // Financial Information
  purchasePrice?: number;
  depreciation?: number;
  warrantyPeriod?: string;
}

export type GaugeType = 
  | "Thread"
  | "Ring"
  | "Plain"
  | "Plug"
  | "Vernier"
  | "Pressure"
  | "Temperature"
  | "Micrometer"
  | "Other";

export type GaugeStatus = 
  | "Active"
  | "Inactive"
  | "Maintenance"
  | "Calibration"
  | "Retired";

export type GaugeCondition = 
  | "Good"
  | "Fair"
  | "Needs Repair"
  | "Out of Calibration"
  | "Damaged";

export interface MaintenanceRecord {
  id: string;
  date: string;
  description: string;
  performedBy: string;
  cost?: number;
}