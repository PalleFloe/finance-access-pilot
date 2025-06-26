
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, Calculator, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const VentureCapitalMethod = () => {
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
                  <span className="text-slate-900 font-medium">Venture Capital Method</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">Available Model</Badge>
          <h1 className="text-4xl font-bold mb-4" style={{ color: 'rgb(50, 100, 150)' }}>
            The Venture Capital Valuation Method
          </h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            A systematic approach to startup valuation using terminal value projections and required investor returns. 
            This method is widely used by venture capital firms to determine pre-money and post-money valuations.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Model Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* What Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle style={{ color: 'rgb(50, 100, 150)' }}>What is the Venture Capital Method?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  The Venture Capital Method is a valuation technique that works backwards from a projected exit scenario. 
                  It calculates the current value of a startup based on its expected future value at exit (typically through 
                  an IPO or acquisition) and the required rate of return for investors.
                </p>
                <p className="text-slate-700">
                  <strong>Key Components:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Terminal value at exit (based on revenue/earnings multiples)</li>
                  <li>Time to exit (typically 5-7 years)</li>
                  <li>Required rate of return (discount rate)</li>
                  <li>Investment amount and timing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Why Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle style={{ color: 'rgb(50, 100, 150)' }}>Why Use This Method?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700">
                  This method is particularly valuable because it:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li><strong>Investor-centric:</strong> Reflects how VCs actually think about returns</li>
                  <li><strong>Exit-focused:</strong> Considers realistic exit scenarios and timelines</li>
                  <li><strong>Risk-adjusted:</strong> Incorporates high required returns for startup investments</li>
                  <li><strong>Negotiation tool:</strong> Provides framework for investment discussions</li>
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
                      <li>Venture capital firms</li>
                      <li>Angel investors</li>
                      <li>Startup founders</li>
                      <li>Investment bankers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Company Stage:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Seed to Series B</li>
                      <li>Clear exit strategy</li>
                      <li>Scalable business model</li>
                      <li>Growth potential</li>
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
                  Ready-to-use Excel model with built-in calculations
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
                  📊 How to Build the Model
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  💡 Assumptions & Best Practices  
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📈 Interpreting Results
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  ⚠️ Common Pitfalls to Avoid
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
                  <li>• Revenue/earnings projections</li>
                  <li>• Market exit multiples</li>
                  <li>• Investment timeline</li>
                  <li>• Required return targets</li>
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
                <li>• Excel template with formulas</li>
                <li>• Sample calculations and examples</li>
                <li>• Industry-specific multiples database</li>
                <li>• Sensitivity analysis frameworks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Guidance Content:</h4>
              <ul className="text-blue-800 space-y-1 text-sm">
                <li>• Step-by-step modeling instructions</li>
                <li>• Assumption-setting best practices</li>
                <li>• Results interpretation guidelines</li>
                <li>• Common mistakes and solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VentureCapitalMethod;
