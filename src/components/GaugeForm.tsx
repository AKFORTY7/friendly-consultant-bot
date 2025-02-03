import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Gauge, GaugeType, GaugeStatus, GaugeCondition } from "@/types/gauge";
import { useState } from "react";

const gaugeTypes: GaugeType[] = [
  "Thread",
  "Ring",
  "Plain",
  "Plug",
  "Vernier",
  "Pressure",
  "Temperature",
  "Micrometer",
  "Other",
];

const gaugeStatuses: GaugeStatus[] = [
  "Active",
  "Inactive",
  "Maintenance",
  "Calibration",
  "Retired",
];

const gaugeConditions: GaugeCondition[] = [
  "Good",
  "Fair",
  "Needs Repair",
  "Out of Calibration",
  "Damaged",
];

export function GaugeForm() {
  const [formData, setFormData] = useState<Partial<Gauge>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: keyof Gauge, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Name/Description</Label>
            <Input
              placeholder="Enter gauge name"
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Type/Category</Label>
            <Select onValueChange={(value) => handleChange("type", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {gaugeTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Manufacturer</Label>
            <Input
              placeholder="Enter manufacturer"
              onChange={(e) => handleChange("manufacturer", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Model Number</Label>
            <Input
              placeholder="Enter model number"
              onChange={(e) => handleChange("modelNumber", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Serial Number</Label>
            <Input
              placeholder="Enter serial number"
              onChange={(e) => handleChange("serialNumber", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Purchase Date</Label>
            <Input
              type="date"
              onChange={(e) => handleChange("purchaseDate", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Specification Details */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Specification Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Measurement Range</Label>
            <Input
              placeholder="Enter measurement range"
              onChange={(e) => handleChange("measurementRange", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Resolution</Label>
            <Input
              placeholder="Enter resolution"
              onChange={(e) => handleChange("resolution", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Accuracy</Label>
            <Input
              placeholder="Enter accuracy"
              onChange={(e) => handleChange("accuracy", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Units of Measurement</Label>
            <Input
              placeholder="Enter units"
              onChange={(e) => handleChange("unitsOfMeasurement", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Calibration Information */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Calibration Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Calibration Date</Label>
            <Input
              type="date"
              onChange={(e) => handleChange("calibrationDate", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Next Calibration Due</Label>
            <Input
              type="date"
              onChange={(e) => handleChange("nextCalibrationDue", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Certificate Number</Label>
            <Input
              placeholder="Enter certificate number"
              onChange={(e) =>
                handleChange("calibrationCertificateNumber", e.target.value)
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Calibration Interval</Label>
            <Input
              placeholder="Enter interval"
              onChange={(e) => handleChange("calibrationInterval", e.target.value)}
            />
          </div>
          <div className="col-span-2 space-y-2">
            <Label>Calibration Procedure</Label>
            <Textarea
              placeholder="Enter calibration procedure"
              onChange={(e) =>
                handleChange("calibrationProcedure", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Status and Location */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Status and Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Status</Label>
            <Select onValueChange={(value) => handleChange("status", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                {gaugeStatuses.map((status) => (
                  <SelectItem key={status} value={status}>
                    {status}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Condition</Label>
            <Select onValueChange={(value) => handleChange("condition", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                {gaugeConditions.map((condition) => (
                  <SelectItem key={condition} value={condition}>
                    {condition}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Current Location</Label>
            <Input
              placeholder="Enter location"
              onChange={(e) => handleChange("currentLocation", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Department</Label>
            <Input
              placeholder="Enter department"
              onChange={(e) => handleChange("department", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Custodian</Label>
            <Input
              placeholder="Enter custodian"
              onChange={(e) => handleChange("custodian", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Documentation */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Documentation</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>User Manual Reference</Label>
            <Input
              placeholder="Enter user manual reference"
              onChange={(e) => handleChange("userManual", e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label>Notes</Label>
            <Textarea
              placeholder="Enter additional notes"
              onChange={(e) => handleChange("notes", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Financial Information */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="text-lg font-semibold mb-4">Financial Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Purchase Price</Label>
            <Input
              type="number"
              placeholder="Enter price"
              onChange={(e) =>
                handleChange("purchasePrice", parseFloat(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Depreciation</Label>
            <Input
              type="number"
              placeholder="Enter depreciation"
              onChange={(e) =>
                handleChange("depreciation", parseFloat(e.target.value))
              }
            />
          </div>
          <div className="space-y-2">
            <Label>Warranty Period</Label>
            <Input
              placeholder="Enter warranty period"
              onChange={(e) => handleChange("warrantyPeriod", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
}