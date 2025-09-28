import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const FinancialFundamentals = () => {
  usePageVisitTracking('page:/toolbox/financial-fundamentals');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const models = [
    {
      name: "Simple Present Value Calculator",
      bulletPoints: [
        "Calculate NPV for 5 cash flow types",
        "Compare payment structures",
        "Understand compounding impact"
      ],
      href: "/toolbox/financial-fundamentals/present-value-calculator",
      status: "available",
    },
    {
      name: "Simple Cost of Capital Calculator",
      bulletPoints: [
        "Calculate WACC (CAPM + debt)",
        "Determine DCF discount rates",
        "Optimize financing structure"
      ],
      href: "/toolbox/financial-fundamentals/cost-of-capital-calculator",
      status: "available",
    },
    {
      name: "Standard Types of DCF Models",
      bulletPoints: [
        "Choose Flexible/Three Stage/Stable Growth",
        "Compare DCF methodologies",
        "Create value driver scenarios"
      ],
      href: "/toolbox/financial-fundamentals/dcf-models",
      status: "available",
    },
    {
      name: "Financial Ratio Calculator",
      bulletPoints: [
        "Calculate key financial ratios",
        "Track 3-year performance trends",
        "Prepare company analysis"
      ],
      href: "/toolbox/financial-fundamentals/financial-ratio-calculator",
      status: "available",
    },
    {
      name: "Simple Earning Growth Estimator",
      bulletPoints: [
        "Estimate growth (ROC × Reinvestment)",
        "Separate existing vs new growth",
        "Validate business plan assumptions"
      ],
      href: "/toolbox/financial-fundamentals/earning-growth-estimator",
      status: "available",
    },
    {
      name: "Simple Project Scenario Model",
      bulletPoints: [
        "Evaluate Downside/Base/Upside scenarios",
        "Calculate NPV/IRR with sensitivity",
        "Make capital allocation decisions"
      ],
      href: "/toolbox/financial-fundamentals/project-scenario-model",
      status: "available",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Financial Fundamentals - Academic Models | Financial Decision Models</title>
        <meta name="description" content="Essential financial modeling tools: DCF models, cost of capital calculator, financial ratios, scenario analysis. Academic-quality Excel models for learning and business analysis. Free online access available." />
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto">
          <Link 
            to="/toolbox" 
            className="inline-flex items-center text-slate-600 hover:text-brand-blue mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Toolbox
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Financial Fundamental Models
          </h1>
            <h2 className="text-2xl md:text-3xl text-brand-blue mb-6">
            Simple Academic Financial Analysis Tools: Essential Models for Learning Core Valuation and Decision-Making Principles
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            These simple academic financial models, inspired by the foundational work of Professor Aswath Damodaran, provide students, professionals, and curious learners with essential financial analysis tools that demonstrate core valuation and decision-making principles taught in leading business schools worldwide.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {models.map((model) => (
              <Link key={model.name} to={model.href} className="group">
                <Card className="shadow-lg border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full min-h-[240px] cursor-pointer" style={{ backgroundColor: '#326496' }}>
                  {model.status === "coming soon" && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge className="bg-orange-500 text-white border-orange-400 shadow-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  {model.status === "contact" && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge className="bg-orange-500 text-white border-orange-400 shadow-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="flex-grow p-6">
                    <CardTitle className="text-2xl font-semibold mb-3" style={{ color: '#FFB445' }}>
                      <span>{model.name}</span>
                    </CardTitle>
                    <div className="flex-grow text-lg leading-[1.4] font-normal" style={{ color: 'rgba(255, 180, 69, 0.8)' }}>
                      {model.bulletPoints.map((point, index) => (
                        <div key={index} className="my-1">• {point}</div>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* Comprehensive Content Section */}
          <div className="max-w-4xl space-y-8">
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
      <Footer />
    </div>
  );
};

export default FinancialFundamentals;