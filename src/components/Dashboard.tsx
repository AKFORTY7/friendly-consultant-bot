import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GaugeTable } from "./GaugeTable";

export function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Gauges Section */}
      <section>
        <h2 className="text-xl font-semibold text-primary mb-4 bg-primary/10 p-2 rounded">Gages</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">2</CardTitle>
              <CardDescription className="text-center">ACTIVE GAGES</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-right">
                <button className="text-sm text-primary hover:underline">Details</button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">1</CardTitle>
              <CardDescription className="text-center">INACTIVE GAGES</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-right">
                <button className="text-sm text-primary hover:underline">Details</button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">1</CardTitle>
              <CardDescription className="text-center">SCHEDULED</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-right">
                <button className="text-sm text-primary hover:underline">Details</button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">0</CardTitle>
              <CardDescription className="text-center">UNSCHEDULED</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-right">
                <button className="text-sm text-primary hover:underline">Details</button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">0</CardTitle>
              <CardDescription className="text-center">OVERDUE</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">1</CardTitle>
              <CardDescription className="text-center">DUE 30 DAYS</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">1</CardTitle>
              <CardDescription className="text-center">DUE 60 DAYS</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">0</CardTitle>
              <CardDescription className="text-center">DUE 90 DAYS</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Gauge Table */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Gauge List</h2>
          <GaugeTable />
        </div>
      </section>

      {/* Account Section */}
      <section>
        <h2 className="text-xl font-semibold text-primary mb-4 bg-primary/10 p-2 rounded">Account</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">1</CardTitle>
              <CardDescription className="text-center">ACCOUNT USERS</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm text-muted-foreground">OF 5</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">0.3</CardTitle>
              <CardDescription className="text-center">STORAGE USED</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm text-muted-foreground">OF 5.0 MB (6.25 %)</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">2</CardTitle>
              <CardDescription className="text-center">GAGES USED</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm text-muted-foreground">OF 25</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-center">0</CardTitle>
              <CardDescription className="text-center">RECORDS USED</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-center text-sm text-muted-foreground">OF UNLIMITED</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}