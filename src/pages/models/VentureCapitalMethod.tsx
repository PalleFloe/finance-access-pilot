import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calculator, FileText, Users, HelpCircle, Wrench } from "lucide-react";
import Header from "@/components/Header";

const VentureCapitalMethod = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/toolbox/startup-valuations" className="inline-flex items-center text-slate-700 hover:text-blue-600">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to Start-up Valuations
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200" variant="outline">
            Venture Capital Method
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Estimate Pre-Money Valuation
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            The Venture Capital Method is used to determine the pre-money valuation of a startup based on the expected return on investment (ROI) required by venture capitalists.
          </p>
        </div>
      </section>

      {/* Model Overview Section */}
      <section className="py-8 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Model Overview</CardTitle>
              <CardDescription>Key components and assumptions of the Venture Capital Method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Calculator className="w-5 h-5 text-blue-600" />
                <p className="text-slate-700">
                  <strong>Post-Money Valuation:</strong> The valuation of the company immediately after the venture capitalist's investment.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-green-600" />
                <p className="text-slate-700">
                  <strong>Required ROI:</strong> The minimum return on investment that the venture capitalist expects to receive.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-indigo-600" />
                <p className="text-slate-700">
                  <strong>Terminal Value:</strong> The estimated value of the company at the end of the investment horizon.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-8 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">How to Use This Model</CardTitle>
              <CardDescription>Step-by-step guidance for estimating pre-money valuation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Step 1:</strong> Estimate the terminal value of the company at the end of the investment horizon.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Step 2:</strong> Determine the required ROI based on the risk profile of the startup.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Step 3:</strong> Calculate the post-money valuation using the formula: Post-Money Valuation = Terminal Value / Required ROI.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <HelpCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">
                  <strong>Step 4:</strong> Estimate the pre-money valuation by subtracting the investment amount from the post-money valuation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Assumptions Section */}
      <section className="py-8 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Key Assumptions</CardTitle>
              <CardDescription>Important assumptions to consider when using the Venture Capital Method</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Wrench className="w-5 h-5 text-purple-600" />
                <p className="text-slate-700">
                  <strong>Terminal Value:</strong> The accuracy of the terminal value estimate significantly impacts the valuation.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="w-5 h-5 text-purple-600" />
                <p className="text-slate-700">
                  <strong>Required ROI:</strong> The required ROI should reflect the specific risks associated with the startup.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Wrench className="w-5 h-5 text-purple-600" />
                <p className="text-slate-700">
                  <strong>Investment Amount:</strong> The investment amount should be realistic and aligned with the startup's funding needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg border-slate-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700">
                The Venture Capital Method provides an estimated valuation and should be used as one factor in the overall investment decision-making process.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-slate-400 mb-4">
              © 2024 Financial Decision Models. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VentureCapitalMethod;
