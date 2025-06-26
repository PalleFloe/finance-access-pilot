
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Calculator, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const RiskFactorSummation = () => {
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
            
            <Link to="/toolbox/startup-valuations">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Start-up Valuations
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
                  <Link to="/toolbox/startup-valuations" className="text-slate-600 hover:text-blue-600">Start-up Valuations</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ArrowRight className="w-4 h-4 text-slate-400 mx-1" />
                  <span className="text-slate-900 font-medium">Risk Factor Summation</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Available Model</Badge>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'rgb(50, 100, 150)' }}>
            Risk Factor Summation Method
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            A systematic approach to startup valuation that adjusts a base case valuation by evaluating 
            specific risk factors. This method provides a structured framework for assessing startup risk and value.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Model Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* What Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle style={{ color: 'rgb(50, 100, 150)' }}>What is the Risk Factor Summation Method?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  The Risk Factor Summation Method starts with a base valuation (often derived from comparable companies) 
                  and systematically adjusts it by evaluating 12 key risk factors. Each factor can add, subtract, or have 
                  no impact on the final valuation.
                </p>
                <p className="text-slate-700">
                  <strong>Key Risk Factors Evaluated:</strong>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-6 space-y-1 text-slate-700">
                    <li>Management team quality</li>
                    <li>Stage of the business</li>
                    <li>Legislation/political risk</li>
                    <li>Manufacturing risk</li>
                    <li>Sales and marketing risk</li>
                    <li>Funding/capital raising risk</li>
                  </ul>
                  <ul className="list-disc pl-6 space-y-1 text-slate-700">
                    <li>Competition risk</li>
                    <li>Technology risk</li>
                    <li>Litigation risk</li>
                    <li>International risk</li>
                    <li>Reputation risk</li>
                    <li>Potential lucrative exit</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Why Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle style={{ color: 'rgb(50, 100, 150)' }}>Why Use This Method?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  This method offers several advantages for startup valuation:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li><strong>Systematic approach:</strong> Ensures all major risk factors are considered</li>
                  <li><strong>Flexibility:</strong> Can be applied to various industries and business stages</li>
                  <li><strong>Transparency:</strong> Clear documentation of valuation adjustments</li>
                  <li><strong>Comparative basis:</strong> Uses market data as starting point</li>
                  <li><strong>Risk-focused:</strong> Explicitly accounts for startup-specific risks</li>
                </ul>
              </CardContent>
            </Card>

            {/* Who Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle style={{ color: 'rgb(50, 100, 150)' }}>Who Should Use This Model?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Ideal For:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Angel investors</li>
                      <li>Early-stage VCs</li>
                      <li>Startup founders</li>
                      <li>Business valuators</li>
                      <li>Incubators/accelerators</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Best For:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Pre-revenue startups</li>
                      <li>Complex risk profiles</li>
                      <li>Due diligence processes</li>
                      <li>Portfolio companies</li>
                      <li>Investment committees</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Action Panel */}
          <div className="space-y-6">
            {/* Model Access */}
            <Card className="shadow-lg border-green-200" style={{ backgroundColor: 'rgb(250, 250, 200)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-green-600" />
                  <span style={{ color: 'rgb(50, 100, 150)' }}>Access Model</span>
                </CardTitle>
                <CardDescription>
                  Interactive risk assessment tool with scoring matrix
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Open Model
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="w-full">
                  Download Template
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Guidance Links */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle style={{ color: 'rgb(50, 100, 150)' }}>Step-by-Step Guidance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  📊 Risk Factor Scoring Guide
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🎯 Setting Base Valuations
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📈 Adjustment Methodologies
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  💼 Industry-Specific Considerations
                </Button>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle style={{ color: 'rgb(50, 100, 150)' }}>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li>• Comparable company data</li>
                  <li>• Business plan review</li>
                  <li>• Management team assessment</li>
                  <li>• Market analysis</li>
                  <li>• Risk evaluation framework</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Content Input Needed Section */}
        <div className="mt-16 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Content Input Needed for Full Implementation:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Model Components:</h4>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• Risk factor scoring matrix</li>
                <li>• Base valuation methodologies</li>
                <li>• Industry-specific adjustments</li>
                <li>• Comparable company databases</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Guidance Content:</h4>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• Risk assessment criteria</li>
                <li>• Scoring guidelines for each factor</li>
                <li>• Case studies and examples</li>
                <li>• Validation and testing approaches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskFactorSummation;
