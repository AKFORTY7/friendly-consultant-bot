import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export function GaugeForm() {
  return (
    <div className="space-y-8">
      {/* Gauge Status */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">Gauge Status</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Last Calibration</Label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <Label>Next Calibration Due</Label>
            <Input type="date" />
          </div>
        </div>
      </div>

      {/* Gauge Information */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">Gauge Information</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Gauge ID</Label>
              <Input placeholder="Enter Gauge ID" />
            </div>
            <div className="space-y-2">
              <Label>Control No.</Label>
              <Input placeholder="Enter Control Number" />
            </div>
            <div className="space-y-2">
              <Label>Serial No.</Label>
              <Input placeholder="Enter Serial Number" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type1">Type 1</SelectItem>
                  <SelectItem value="type2">Type 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Manufacturer</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select manufacturer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mfg1">Manufacturer 1</SelectItem>
                  <SelectItem value="mfg2">Manufacturer 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Model</Label>
              <Input placeholder="Enter Model" />
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Information */}
      <div className="rounded-lg border bg-card p-6">
        <h2 className="mb-4 text-lg font-semibold">Gauge Assignment</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Location</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="loc1">Location 1</SelectItem>
                <SelectItem value="loc2">Location 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Assignee</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select assignee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user1">User 1</SelectItem>
                <SelectItem value="user2">User 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
}