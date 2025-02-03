import { Gauge } from "@/types/gauge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface GaugeDetailsProps {
  gauge: Gauge;
}

export function GaugeDetails({ gauge }: GaugeDetailsProps) {
  const sections = [
    {
      title: "Basic Information",
      fields: [
        { label: "Name", value: gauge.name },
        { label: "Type", value: gauge.type },
        { label: "Manufacturer", value: gauge.manufacturer },
        { label: "Model Number", value: gauge.modelNumber },
        { label: "Serial Number", value: gauge.serialNumber },
        { label: "Purchase Date", value: gauge.purchaseDate },
        { label: "Warranty", value: gauge.warranty },
        { label: "Received Date", value: gauge.receivedDate },
      ],
    },
    {
      title: "Specification Details",
      fields: [
        { label: "Measurement Range", value: gauge.measurementRange },
        { label: "Resolution", value: gauge.resolution },
        { label: "Accuracy", value: gauge.accuracy },
        { label: "Units of Measurement", value: gauge.unitsOfMeasurement },
      ],
    },
    {
      title: "Calibration Information",
      fields: [
        { label: "Calibration Date", value: gauge.calibrationDate },
        { label: "Next Calibration Due", value: gauge.nextCalibrationDue },
        { label: "Certificate Number", value: gauge.calibrationCertificateNumber },
        { label: "Calibration Interval", value: gauge.calibrationInterval },
        { label: "Calibration Procedure", value: gauge.calibrationProcedure },
        { label: "Calibrated By", value: gauge.calibratedBy },
      ],
    },
    {
      title: "Location and Custody",
      fields: [
        { label: "Current Location", value: gauge.currentLocation },
        { label: "Department", value: gauge.department },
        { label: "Custodian", value: gauge.custodian },
      ],
    },
    {
      title: "Status and Condition",
      fields: [
        { label: "Status", value: gauge.status },
        { label: "Condition", value: gauge.condition },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <Card key={section.title}>
          <CardHeader>
            <CardTitle>{section.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.fields.map((field) => (
                <div key={field.label} className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    {field.label}
                  </p>
                  <p className="text-sm">{field.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Maintenance History */}
      <Card>
        <CardHeader>
          <CardTitle>Maintenance History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {gauge.maintenanceHistory.map((record) => (
              <div key={record.id} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{record.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {record.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">By: {record.performedBy}</p>
                    {record.cost && (
                      <p className="text-sm text-muted-foreground">
                        Cost: ${record.cost}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Documentation and Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Documentation and Notes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                User Manual
              </p>
              <p className="text-sm">{gauge.userManual}</p>
            </div>
            <Separator />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Notes</p>
              <p className="text-sm">{gauge.notes}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Information */}
      {(gauge.purchasePrice || gauge.depreciation || gauge.warrantyPeriod) && (
        <Card>
          <CardHeader>
            <CardTitle>Financial Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gauge.purchasePrice && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Purchase Price
                  </p>
                  <p className="text-sm">${gauge.purchasePrice}</p>
                </div>
              )}
              {gauge.depreciation && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Depreciation
                  </p>
                  <p className="text-sm">${gauge.depreciation}</p>
                </div>
              )}
              {gauge.warrantyPeriod && (
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Warranty Period
                  </p>
                  <p className="text-sm">{gauge.warrantyPeriod}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}