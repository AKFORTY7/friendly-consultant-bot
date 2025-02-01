import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/gauge-pattern.svg')] opacity-5 bg-repeat"></div>
      </div>
      
      <Card className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-sm shadow-xl">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-primary">Tespa Consultancy</h1>
          <p className="text-muted-foreground">Sign in to access your dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="admin@tespa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground">
          <p>Demo credentials:</p>
          <p>Email: admin@tespa.com</p>
          <p>Password: admin123</p>
        </div>
      </Card>
    </div>
  );
};

export default Login;