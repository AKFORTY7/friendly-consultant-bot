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
  foundLocation: z.string().min(1, "Found location is required"),
  foundBy: z.string().min(1, "Found by is required"),
  conditionWhenFound: z.string().min(1, "Condition is required"),
  recoveryActions: z.string().optional(),
  notes: z.string().optional(),
});

export function UpdateFoundForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gaugeId: "",
      foundLocation: "",
      foundBy: "",
      conditionWhenFound: "",
      recoveryActions: "",
      notes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Found gauge updated successfully");
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
          name="foundLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Found Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter found location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="foundBy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Found By</FormLabel>
              <FormControl>
                <Input placeholder="Enter who found the gauge" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="conditionWhenFound"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Condition When Found</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the condition" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="recoveryActions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Recovery Actions</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe recovery actions taken" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Enter any additional notes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">Submit Update</Button>
      </form>
    </Form>
  );
}