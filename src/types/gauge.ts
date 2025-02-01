export interface Gauge {
  id: string;
  serialNo: string;
  controlNo: string;
  status: "Active" | "Inactive";
  type: string;
  manufacturer: string;
  location: string;
  nextCalibration: string;
}