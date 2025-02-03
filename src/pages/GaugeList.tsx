import { GaugeTable } from "@/components/GaugeTable";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function GaugeList() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gauge List</h1>
        <Button asChild>
          <Link to="/gauge/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Gauge
          </Link>
        </Button>
      </div>
      <GaugeTable />
    </div>
  );
}