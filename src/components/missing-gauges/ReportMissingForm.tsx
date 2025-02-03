import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  gaugeId: z.string().min(1, "Gauge ID is required"),
  lastKnownLocation: z.string().min(1, "Last known location is required"),
  lastCustodian: z.string().min(1, "Last custodian is required"),
  possibleCause: z.string().min(1, "Possible cause is required"),
  searchEfforts: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export function ReportMissingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gaugeId: "",
      lastKnownLocation: "",
      lastCustodian: "",
      possibleCause: "",
      searchEfforts: "",
      additionalInfo: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Missing gauge reported successfully");
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="gaugeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Gauge ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter gauge ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="lastKnownLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Known Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter last known location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="lastCustodian"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Custodian</FormLabel>
              <FormControl>
                <Input placeholder="Enter last custodian" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="possibleCause"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Possible Cause</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter possible cause" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="searchEfforts"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Search Efforts</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe search efforts" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="additionalInfo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter any additional information" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit Report</Button>
      </form>
    </Form>
  );
}