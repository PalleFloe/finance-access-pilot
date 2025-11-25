import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import FinancialTerm from "@/components/FinancialTerm";
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
        <>Calculate <FinancialTerm term="NPV">NPV</FinancialTerm> for 5 cash flow types</>,
        "Payment and compounding impact",
        "Perpetuity and exit timing impact on valuation"
      ],
      href: "/toolbox/financial-fundamentals/present-value-calculator",
      status: "available",
    },
    {
      name: "Simple Cost of Capital Calculator",
      bulletPoints: [
        <>Calculate <FinancialTerm term="WACC">WACC</FinancialTerm> via <FinancialTerm term="CAPM">Capital Asset Pricing Model</FinancialTerm></>,
        <>Determine discount rates for <FinancialTerm term="DCF">DCF</FinancialTerm> valuations</>,
        "Optimize financing structure"
      ],
      href: "/toolbox/financial-fundamentals/cost-of-capital-calculator",
      status: "available",
    },
    {
      name: "Standard Types of DCF Models",
      bulletPoints: [
        "Choose Flexible/Three Stage/Stable Growth",
        <>Compare <FinancialTerm term="DCF">DCF</FinancialTerm> methodologies</>,
        "Valuation including scenario modelling"
      ],
      href: "/toolbox/financial-fundamentals/dcf-models",
      status: "available",
    },
    {
      name: "Financial Ratio Calculator",
      bulletPoints: [
        "Calculate financial ratios & performance trends",
        "For profitability & return, efficiency and valuation",
        "Make analysis for company reporting"
      ],
      href: "/toolbox/financial-fundamentals/financial-ratio-calculator",
      status: "available",
    },
    {
      name: "Simple Earning Growth Estimator",
      bulletPoints: [
        <>Estimate earning growth (<FinancialTerm term="ROC">ROC</FinancialTerm> × Reinvestment)</>,
        "Phased development in Return On Capital",
        "Separate growth from existing vs new investments"
      ],
      href: "/toolbox/financial-fundamentals/earning-growth-estimator",
      status: "available",
    },
    {
      name: "Simple Project Scenario Model",
      bulletPoints: [
        "Evaluate Downside/Base/Upside scenarios",
        <>Calculate <FinancialTerm term="NPV">NPV</FinancialTerm>/<FinancialTerm term="IRR">IRR</FinancialTerm> with sensitivity analysis</>,
        "Make capital allocation and investment decisions"
      ],
      href: "/toolbox/financial-fundamentals/project-scenario-model",
      status: "available",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Financial Fundamentals Models – Cost of Capital, Present Value &amp; Ratios | Financial Decision Models</title>
        <meta name="description" content="Core financial fundamentals tools: present value calculators, cost of capital, earnings growth estimators, project scenarios and financial ratio analysis. Online tools plus downloadable Excel models with clear input guidance." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Financial Fundamentals Models – Cost of Capital, Present Value &amp; Ratios | Financial Decision Models" />
        <meta property="og:description" content="Core financial fundamentals tools: present value calculators, cost of capital, earnings growth estimators, project scenarios and financial ratio analysis. Online tools plus downloadable Excel models with clear input guidance." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Decision Models" />
        <meta property="og:locale" content="en_GB" />
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

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
              Financial Fundamental Models
            </h1>
            <h2 className="text-[28px] text-slate-600 max-w-6xl mx-auto leading-relaxed mb-6">
              Simple Academic Financial Analysis Tools: Essential Models for Learning Core Valuation and Decision-Making Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {models.map((model) => (
              <Link key={model.href} to={model.href} className="group">
                <Card className="shadow-lg border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full min-h-[240px] cursor-pointer bg-brand-blue">
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
                    <CardTitle className="text-2xl font-semibold mb-3 text-white">
                      {model.name}
                    </CardTitle>
                    <div className="flex-grow text-lg leading-[1.4] font-normal text-white/75">
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
          <div className="max-w-none space-y-8">
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