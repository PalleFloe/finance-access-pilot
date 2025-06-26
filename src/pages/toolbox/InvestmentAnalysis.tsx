
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, TrendingUp, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const InvestmentAnalysis = () => {
  const models = [
    {
      id: "capital-budgeting",
      name: "Capital Budgeting & Project Evaluation",
      description: "NPV, IRR, and payback analysis for capital investment decisions",
      status: "coming-soon",
      route: "/toolbox/investment-analysis/capital-budgeting"
    },
    {
      id: "portfolio-optimization",
      name: "Portfolio Optimization Models",
      description: "Modern portfolio theory and risk-return optimization tools",
      status: "coming-soon",
      route: "/toolbox/investment-analysis/portfolio-optimization"
    },
    {
      id: "real-options",
      name: "Real Options Valuation",
      description: "Advanced valuation techniques for investment flexibility and timing",
      status: "coming-soon",
      route: "/toolbox/investment-analysis/real-options"
    },
    {
      id: "mergers-acquisitions",
      name: "M&A Financial Analysis",
      description: "Comprehensive financial modeling for mergers and acquisitions",
      status: "coming-soon",
      route: "/toolbox/investment-analysis/mergers-acquisitions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Financial Decision Models</h1>
                <p className="text-sm text-slate-600">Expert Financial Consulting & Tools</p>
              </div>
            </Link>
            
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-slate-600 hover:text-blue-600">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-slate-400 mx-1" />
                  <span className="text-slate-900 font-medium">Investment Analysis</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(50, 100, 150)' }}>
            Investment Analysis Models
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Professional-grade investment analysis tools for capital allocation, project evaluation, 
            and strategic investment decisions. Built for institutional and corporate use.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {models.map((model) => (
            <Card 
              key={model.id} 
              className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative"
              style={{ backgroundColor: 'rgb(250, 250, 200)' }}
            >
              <div className="absolute -top-3 -right-3 z-10">
                <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                  <Clock className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl" style={{ color: 'rgb(50, 100, 150)' }}>
                  {model.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {model.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button variant="outline" className="w-full" disabled>
                  Coming Soon
                  <Clock className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Input Needed Section */}
        <div className="mt-16 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Content Input Needed:</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• Capital budgeting frameworks and templates</li>
            <li>• Portfolio theory implementation and examples</li>
            <li>• Real options pricing models and methodologies</li>
            <li>• M&A financial modeling best practices</li>
            <li>• Risk assessment and sensitivity analysis tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAnalysis;
