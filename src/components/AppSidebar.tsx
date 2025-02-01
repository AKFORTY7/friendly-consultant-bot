import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Settings,
  Gauge,
  Calendar,
  MessageCircle,
  Home,
  X,
} from "lucide-react";

export function AppSidebar() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hello! How can I help you today?", isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages((prev) => [...prev, { text: inputMessage, isBot: false }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! I'll help you with that.",
          isBot: true,
        },
      ]);
    }, 1000);
    setInputMessage("");
  };

  return (
    <Sidebar className="border-r border-gray-200 bg-primary text-white">
      <SidebarHeader className="p-4">
        <h2 className="text-xl font-bold">Tespa Consultancy</h2>
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-2 p-2">
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-primary/50"
          >
            <Home className="mr-2 h-5 w-5" />
            Dashboard
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-primary/50"
          >
            <Gauge className="mr-2 h-5 w-5" />
            Gauges
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-primary/50"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Calibration
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-white hover:bg-primary/50"
          >
            <Settings className="mr-2 h-5 w-5" />
            Settings
          </Button>
        </nav>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Button
          variant="secondary"
          className="w-full justify-start"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Chat Support
        </Button>
      </SidebarFooter>

      {/* Chatbot Panel */}
      {isChatOpen && (
        <div className="fixed bottom-0 right-0 h-[500px] w-[350px] rounded-t-lg bg-white shadow-xl">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-semibold text-gray-800">Chat Support</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsChatOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <ScrollArea className="h-[380px] p-4">
            <div className="space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${
                    msg.isBot ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`rounded-lg px-4 py-2 ${
                      msg.isBot
                        ? "bg-gray-100 text-gray-800"
                        : "bg-primary text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-4">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </div>
        </div>
      )}
    </Sidebar>
  );
}