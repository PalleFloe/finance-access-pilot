import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Calculator, TrendingUp, Check, Clock } from "lucide-react";
import Header from "@/components/Header";

const StartupValuations = () => {
  const models = [
    {
      name: "SaaS Unit Economics Model",
      description: "From Customer Acquisition & Revenue to Business Model Validation & Valuation",
      href: "#",
      status: "available",
    },
    {
      name: "Venture Capital Valuation Method",
      description: "Bridging Multi-Round Financing, Exit Value, Founder's Ownership Share and Investor's Need for a Profitable Return",
      href: "/toolbox/startup-valuations/venture-capital-method",
      status: "available",
    },
    {
      name: "Berkus Valuation Model",
      description: "Pre-Revenue Valuation based on Assessment of Five Key Factors and Scenario Modelling",
      href: "#",
      status: "available",
    },
    {
      name: "First Chicago Valuation Method",
      description: "Simple Scenario Based DCF Model for Startup Valuation with Exit Value based on both EBITDA and Revenue",
      href: "#",
      status: "available",
    },
    {
      name: "Perpetuity & Exit Valuation Models",
      description: "Quick & Flexible Approaches to Valuation with Scenario-Based Sensitivity and Value Driver Analysis",
      href: "#",
      status: "available",
    },
    {
      name: "New Model?",
      description: "Miss a General Standard Model or a Customized and Specific Model to Your Needs?",
      href: "#",
      status: "contact",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-blue-600 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Toolbox
          </Link>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Professional Startup Financial Decision & Valuation Models
          </h1>
          <h2 className="text-2xl text-blue-600 mb-6">
            Comprehensive Startup Valuation Suite: Proven Methods to Estimate, Understand and Explain the Value of Startups
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Explore our start-up valuation models to make informed investment decisions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                {model.status === "contact" && (
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
                      {model.status === "contact" ? "Contact Us" : "Explore Model"}
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
