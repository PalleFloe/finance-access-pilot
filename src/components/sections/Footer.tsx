import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-4">
          
          {/* Credentials line */}
          <p className="text-xs text-muted-foreground text-center">
            Models by Palle Fløe Nielsen | Former Divisional CFO | 20+ years Business Finance
          </p>
          
          {/* Copyright */}
          <p className="text-xs text-muted-foreground/70">
            © 2024 Financial Decision Models. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;