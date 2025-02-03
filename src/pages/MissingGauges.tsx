import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MissingGaugesList } from "@/components/missing-gauges/MissingGaugesList";
import { ReportMissingForm } from "@/components/missing-gauges/ReportMissingForm";
import { UpdateFoundForm } from "@/components/missing-gauges/UpdateFoundForm";

export default function MissingGauges() {
  const [activeTab, setActiveTab] = useState("list");

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Missing/Found Gauges</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">Missing Gauges List</TabsTrigger>
          <TabsTrigger value="report">Report Missing</TabsTrigger>
          <TabsTrigger value="found">Update Found</TabsTrigger>
        </TabsList>
        
        <TabsContent value="list" className="space-y-4">
          <MissingGaugesList />
        </TabsContent>
        
        <TabsContent value="report">
          <ReportMissingForm />
        </TabsContent>
        
        <TabsContent value="found">
          <UpdateFoundForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}