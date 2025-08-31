import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const FinancialFundamentals = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const models = [
    {
      name: "Simple Present Value Calculator",
      description: "Present Value Analysis: One-time, Annuity, Growing Annuity, Perpetuity, and Growing Perpetuity Calculations",
      href: "/toolbox/financial-fundamentals/present-value-calculator",
      status: "available",
    },
    {
      name: "Simple Cost of Capital Calculator",
      description: "WACC Analysis: Cost of Equity, Cost of Debt, and Weighted Average Cost of Capital Calculation",
      href: "/toolbox/financial-fundamentals/cost-of-capital-calculator",
      status: "available",
    },
    {
      name: "Simple Types of DCF Models",
      description: "Three DCF Approaches: Flexible DCF, Three Stages DCF, and Stable Growth Models",
      href: "/toolbox/financial-fundamentals/dcf-models",
      status: "available",
    },
    {
      name: "Financial Ratio Calculator",
      description: "Comprehensive Financial Analysis: Investment Returns, Profitability, Efficiency, and Market Valuation Ratios",
      href: "/toolbox/financial-fundamentals/financial-ratio-calculator",
      status: "available",
    },
    {
      name: "Simple Earning Growth Estimator",
      description: "Systematic Growth Analysis: ROC-Based Earning Growth Estimation for Existing and New Investments",
      href: "/toolbox/financial-fundamentals/earning-growth-estimator",
      status: "available",
    },
    {
      name: "Simple Project Scenario Model",
      description: "Comprehensive Project Analysis: Multi-Scenario Capital Budgeting with NPV and IRR Sensitivity Analysis",
      href: "/toolbox/financial-fundamentals/project-scenario-model",
      status: "available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link 
            to="/toolbox" 
            className="inline-flex items-center text-slate-600 hover:text-brand-blue mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Toolbox
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Simple and Foundational Financial Models
          </h1>
            <h2 className="text-2xl md:text-3xl text-brand-blue mb-6">
            Simple Academic Financial Analysis Tools: Essential Models for Learning Core Valuation and Decision-Making Principles
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            These simple academic financial models, inspired by the foundational work of Professor Aswath Damodaran, provide students, professionals, and curious learners with essential financial analysis tools that demonstrate core valuation and decision-making principles taught in leading business schools worldwide.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {models.map((model) => (
              <Card key={model.name} className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative flex flex-col h-full">
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
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl font-semibold">
                    <span>{model.name}</span>
                  </CardTitle>
                  <CardDescription className="flex-grow text-lg">{model.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={model.href}>
                    <Button variant="brand-green" size="lg" className="w-full text-lg">
                      {model.status === "contact" ? "Contact Us" : "Go to Model"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comprehensive Content Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Simple and Foundational Financial Models</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                This collection of simple academic financial models, inspired by the foundational work of Professor Aswath Damodaran at NYU Stern School of Business, provides students, professionals, and curious learners with essential financial analysis tools that demonstrate core valuation and decision-making principles. Each model represents fundamental concepts taught in leading business schools worldwide, translated into practical, user-friendly Excel implementations.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Core Design Standards</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Unlike complex professional models, these tools prioritise user friendliness over sophistication. The intention is to make clear logical links between assumptions, calculations and results. This approach helps users understand both the mechanics and the logic behind essential financial analysis techniques through hands-on experimentation with real calculations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialFundamentals;