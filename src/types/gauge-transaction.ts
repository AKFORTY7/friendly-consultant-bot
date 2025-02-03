import { GaugeCondition } from './gauge';

export interface GaugeTransaction {
  id: string;
  gaugeId: string;
  issuedTo: string;
  issueDate: string;
  expectedReturnDate: string;
  purpose: string;
  locationOfUse: string;
  conditionAtIssue: GaugeCondition;
  calibrationStatus: string;
  returnDate?: string;
  receivedBy?: string;
  conditionAfterUse?: string;
  calibrationCheckRequired?: boolean;
  maintenanceRequired?: boolean;
  projectCompletion?: string;
  issuesEncountered?: string;
  status: TransactionStatus;
}

export type TransactionStatus = "issued" | "returned" | "overdue";