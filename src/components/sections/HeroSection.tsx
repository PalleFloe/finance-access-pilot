import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowRight } from "lucide-react";

const HeroSection = () => {

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200" variant="outline">
          Coming Soon - Beta Program
        </Badge>
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Empower Your <span style={{ color: 'rgb(50, 100, 150)' }}>Financial Decisions</span>
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Make better business decisions with our intuitive, business-minded Financial Decision Model toolbox 
          and expert consulting services. Transform complex financial choices into clear, actionable strategies.
        </p>
        
        {/* Beta Access Form */}
        <Card className="max-w-md mx-auto mb-12 shadow-lg border-slate-200">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5" style={{ color: 'rgb(50, 100, 150)' }} />
              <span>Request Beta Access</span>
            </CardTitle>
            <CardDescription>
              Get access to the beta version of the Financial Decision Model toolbox. Click below to request access.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSerkEwymTLzZu9TLRfemrdk_kx3fx0Tq4KCUPBQMLFFEiC0XQ/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              Request Beta Access
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;