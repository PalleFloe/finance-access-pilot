import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calculator, TrendingUp, Check, Clock } from "lucide-react";
import Header from "@/components/Header";

const StartupValuations = () => {
  const models = [
    {
      name: "Venture Capital Method",
      description: "Estimate pre-money valuation based on required ROI",
      href: "/toolbox/startup-valuations/venture-capital-method",
      status: "available",
    },
    {
      name: "Risk Factor Summation",
      description: "Adjust valuation based on risk factors",
      href: "/toolbox/startup-valuations/risk-factor-summation",
      status: "available",
    },
    {
      name: "Discounted Cash Flow",
      description: "Project future cash flows and discount to present value",
      href: "#",
      status: "coming soon",
    },
    {
      name: "First Chicago Method",
      description: "Combine multiple scenarios for a weighted valuation",
      href: "#",
      status: "coming soon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-blue-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Toolbox
          </Link>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">Start-up Valuations</h2>
          <p className="text-lg text-slate-600 mb-8">
            Explore our start-up valuation models to make informed investment decisions.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {models.map((model) => (
              <Card key={model.name} className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative">
                {model.status === "available" && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-green-100 text-green-800 border-green-200 shadow-sm">
                      <Check className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                )}
                {model.status === "coming soon" && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calculator className="w-5 h-5" style={{ color: 'rgb(50, 100, 150)' }} />
                    <span>{model.name}</span>
                  </CardTitle>
                  <CardDescription>{model.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={model.href}>
                    <Button variant="outline" className="w-full">
                      Explore Model
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupValuations;
