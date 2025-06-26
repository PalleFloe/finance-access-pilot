
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Calculator, Check, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const StartupValuations = () => {
  const models = [
    {
      id: "venture-capital-method",
      name: "The Venture Capital Valuation Method",
      description: "Traditional VC method using terminal value and required returns",
      status: "available",
      route: "/toolbox/startup-valuations/venture-capital-method"
    },
    {
      id: "risk-factor-summation",
      name: "Risk Factor Summation Method",
      description: "Systematic approach to startup valuation using risk assessment",
      status: "available", 
      route: "/toolbox/startup-valuations/risk-factor-summation"
    },
    {
      id: "scorecard-method",
      name: "Scorecard Valuation Method",
      description: "Comparative approach using regional and industry benchmarks",
      status: "coming-soon",
      route: "/toolbox/startup-valuations/scorecard-method"
    },
    {
      id: "dcf-startups",
      name: "DCF for Early-Stage Companies",
      description: "Modified discounted cash flow approach for startups",
      status: "coming-soon",
      route: "/toolbox/startup-valuations/dcf-startups"
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
                <Calculator className="w-6 h-6 text-white" />
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
                  <span className="text-slate-900 font-medium">Start-up Valuations</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: 'rgb(50, 100, 150)' }}>
            Start-up Valuation Models
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive collection of valuation models specifically designed for early-stage companies. 
            Each model includes detailed guidance, standardized calculations, and built-in scenario analysis.
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
                {model.status === 'available' ? (
                  <Badge className="bg-green-100 text-green-800 border-green-200 shadow-sm">
                    <Check className="w-3 h-3 mr-1" />
                    Available
                  </Badge>
                ) : (
                  <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                )}
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
                {model.status === 'available' ? (
                  <Link to={model.route}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Explore Model
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" className="w-full" disabled>
                    Coming Soon
                    <Clock className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Input Needed Section */}
        <div className="mt-16 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Content Input Needed:</h3>
          <ul className="text-blue-800 space-y-2">
            <li>• Detailed model descriptions and methodologies</li>
            <li>• Step-by-step guidance content for each model</li>
            <li>• Sample calculations and examples</li>
            <li>• Prerequisites and assumptions for each method</li>
            <li>• Industry-specific considerations and best practices</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartupValuations;
