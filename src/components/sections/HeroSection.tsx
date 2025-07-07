import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, ArrowRight } from "lucide-react";

const HeroSection = () => {

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Badge className="mb-6 bg-green-100 text-green-800 border-green-200" variant="outline">
          Beta Access Granted
        </Badge>
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Facing complex <span style={{ color: 'rgb(50, 100, 150)' }}>financial decisions?</span>
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Empower businesses facing complex financial choices to make better decisions with an intuitive, business-minded Financial Decision Model toolbox and expert consulting services.
        </p>
        
        {/* Welcome Message */}
        <Card className="max-w-md mx-auto mb-12 shadow-lg border-slate-200">
          <CardContent className="pt-6">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium text-slate-900">Welcome to Beta Access</span>
              </div>
              <p className="text-sm text-slate-600">
                You now have access to the Financial Decision Model toolbox. 
                Explore our tools and start making better financial decisions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;