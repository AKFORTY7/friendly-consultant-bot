import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import {
  Home,
  ArrowUpCircle,
  ArrowDownCircle,
  Settings,
  ClipboardList,
  Wrench,
  AlertTriangle,
} from "lucide-react";

const menuItems = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Issue Gauge", icon: ArrowUpCircle, path: "/issue" },
  { title: "Receive Gauge", icon: ArrowDownCircle, path: "/receive" },
  { title: "Repair Gauge", icon: Wrench, path: "/repair" },
  { title: "Gauge List", icon: ClipboardList, path: "/gauges" },
  { title: "Missing/Found", icon: AlertTriangle, path: "/missing-gauges" },
  { title: "Settings", icon: Settings, path: "/settings" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}