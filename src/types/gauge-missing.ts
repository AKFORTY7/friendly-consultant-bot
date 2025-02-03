export interface GaugeMissingReport {
  id: string;
  gaugeId: string;
  dateReportedMissing: string;
  reportedBy: string;
  lastKnownLocation: string;
  lastCustodian: string;
  lastCalibrationDate: string;
  lastUsageDate: string;
  possibleCause: string;
  searchEfforts: string;
  notificationsIssued: string;
  additionalInfo?: string;
  status: "missing" | "found";
  // Found details
  dateFound?: string;
  foundBy?: string;
  foundLocation?: string;
  conditionWhenFound?: string;
  recoveryActions?: string;
  updatedCustodian?: string;
  updatedLocation?: string;
  followupRequired?: string;
  documentationUpdated?: boolean;
  notes?: string;
}