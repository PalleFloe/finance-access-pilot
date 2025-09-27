import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Helmet } from "react-helmet-async";

const Footer = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Palle Fløe Nielsen",
            "jobTitle": "Former Divisional CFO",
            "alumniOf": "Novonesis",
            "knowsAbout": [
              "Financial Modeling",
              "Investment Analysis", 
              "Business Finance",
              "Corporate Finance",
              "Valuation"
            ],
            "description": "Financial modeling expert with 20+ years in business finance",
            "url": "https://www.financialdecisionmodels.com/about"
          })}
        </script>
      </Helmet>
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
    </>
  );
};

export default Footer;