export interface GaugeRepair {
  id: string;
  gaugeId: string;
  requestDate: string;
  faultReported: string;
  initiationDate: string;
  completionDate: string;
  repairedBy: string;
  diagnosticFindings: string;
  actionsTaken: string;
  partsReplaced: string[];
  repairCost: number;
  underWarranty: boolean;
  warrantyDetails?: string;
  requiresCalibration: boolean;
  calibrationDate?: string;
  calibrationCertificateNumber?: string;
  operationalStatus: 'In Service' | 'Under Observation' | 'Out of Service';
  repairReport: string;
  supportingDocuments: string[];
  notes?: string;
}