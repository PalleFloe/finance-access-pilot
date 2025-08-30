
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, BarChart3, FileText, Users, HelpCircle, Wrench } from "lucide-react";
import Header from "@/components/Header";

const RiskFactorSummation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <Link to="/toolbox/startup-valuations" className="inline-flex items-center text-slate-600 hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Startup Valuations
            </Link>
          </div>

            <Card className="shadow-lg border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Risk Factor Summation</CardTitle>
              <CardDescription>
                Content: Model, Introduction and Complete Guidance
              </CardDescription>
              </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="w-4 h-4" />
                      <span>Model Overview</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-base text-slate-600">
                      The Risk Factor Summation method adjusts a base valuation by considering various risk factors
                      associated with the startup.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>Target Audience</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-base text-slate-600">
                      <li>Early-stage startups</li>
                      <li>Investors evaluating startup opportunities</li>
                      <li>Financial analysts</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <HelpCircle className="w-4 h-4" />
                      <span>Key Assumptions</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-base text-slate-600">
                      <li>Identification of all relevant risk factors</li>
                      <li>Accurate assessment of the impact of each risk factor</li>
                      <li>Base valuation is reasonably accurate</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Wrench className="w-4 h-4" />
                      <span>Methodology</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal list-inside text-base text-slate-600">
                      <li>Determine a base valuation using other methods.</li>
                      <li>Identify relevant risk factors.</li>
                      <li>Assign a percentage adjustment for each risk factor.</li>
                      <li>Sum the percentage adjustments.</li>
                      <li>Apply the total adjustment to the base valuation.</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-2">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => {
                    const link = document.createElement('a')
                    link.href = 'https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EcqLMvzq3AJOscmUT8SIC38ByR-4fKgBeOB2Ta4Tm9nX4g?e=jL0hxL'
                    link.target = '_blank'
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  Open Model
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  ✨ Free access • No registration • Use immediately in your browser
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-slate-50 p-4 rounded-lg mb-8 text-sm text-slate-600">
            <strong className="text-primary">Quick Access Guide:</strong><br />
            <span>Click "Online & Free" for instant online preview (no registration)</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RiskFactorSummation;
