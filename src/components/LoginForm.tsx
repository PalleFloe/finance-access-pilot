import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Lock } from "lucide-react";

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password");
      setIsLoading(false);
      return;
    }

    // Check password
    if (password === "FDM_BETA") {
      // Store login state
      localStorage.setItem("fdm_beta_access", "true");
      localStorage.setItem("fdm_user_email", email);
      
      // Track successful login
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'login', {
          method: 'beta_access',
          success: true
        });
      }
      
      onLogin();
    } else {
      // Track failed login attempt
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'login', {
          method: 'beta_access',
          success: false
        });
      }
      
      setError("Invalid credentials");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-6">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Lock className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Financial Decision Models</h1>
            </div>
          </div>
          <p className="text-slate-600">Beta Access Required</p>
        </div>

        <Card className="shadow-lg border-slate-200">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>Access Beta</span>
            </CardTitle>
            <CardDescription>
              Enter your credentials to access the Financial Decision Model toolbox
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Beta Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter beta password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Access Beta"}
              </Button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-200 text-center text-sm text-slate-600">
              <p>Already have access? Enter your credentials above.</p>
              <p className="mt-1">
                Need access? Email{" "}
                <a 
                  href="mailto:palle@financialdecisionmodels.com" 
                  className="text-primary hover:text-primary/90"
                >
                  palle@financialdecisionmodels.com
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;