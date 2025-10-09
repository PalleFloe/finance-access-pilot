
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, ExternalLink, BarChart3, FileText, Users, HelpCircle, Wrench } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

const RiskFactorSummation = () => {
  // Track page visit automatically
  usePageVisitTracking('Risk Factor Summation Model');

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Risk Factor Summation - Startup Risk Assessment | Financial Decision Models</title>
        <meta name="description" content="Risk factor summation model for comprehensive startup risk assessment. Excel tool evaluates multiple risk factors with weighted scoring methodology. Professional risk analysis for investment decisions." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Risk Factor Summation Model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Risk Factor Summation method adjusts a base valuation by considering various risk factors associated with the startup."
              }
            },{
              "@type": "Question",
              "name": "Why Use the Risk Factor Summation Model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "This methodology provides a systematic approach to evaluate and quantify the impact of multiple risk factors on startup valuation."
              }
            }]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.financialdecisionmodels.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Toolbox",
                "item": "https://www.financialdecisionmodels.com/toolbox"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Startup Valuations",
                "item": "https://www.financialdecisionmodels.com/toolbox/startup-valuations"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Risk Factor Summation"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <section className="py-12">
        <div className="container text-center">
          <div className="mb-8">
            <Link to="/toolbox/startup-valuations" className="inline-flex items-center text-slate-600 hover:text-primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Startup Valuations
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-shrink-0 max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[275px]">
                <CardHeader>
                  <CardTitle>Risk Factor Summation</CardTitle>
                  <CardDescription>
                    Content: Model, Introduction and Complete Guidance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5">
                  <Button 
                    className="w-full text-lg"
                    variant="model-blue"
                    onClick={() => {
                      const link = document.createElement('a')
                      link.href = 'https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EcqLMvzq3AJOscmUT8SIC38ByR-4fKgBeOB2Ta4Tm9nX4g?e=jL0hxL'
                      link.target = '_blank'
                      document.body.appendChild(link)
                      link.click()
                      document.body.removeChild(link)
                    }}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Online & View
                  </Button>
                  
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EcqLMvzq3AJOscmUT8SIC38ByR-4fKgBeOB2Ta4Tm9nX4g?e=jL0hxL"
                    modelName="Risk Factor Summation"
                    className="w-full"
                  />

                  <div className="relative">
                    <Button 
                      disabled 
                      className="w-full text-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                    >
                      Download & Own
                    </Button>
                    <div className="absolute -top-3 -right-3 z-20">
                      <Badge className="bg-orange-500 text-white border-orange-400 shadow-lg transition-colors hover:bg-[hsl(var(--brand-green))] hover:border-[hsl(var(--brand-green))]">
                        <Clock className="w-3 h-3 mr-1" />
                        Coming Soon
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-md">
              <ModelInfoPanel />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
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
        </div>
      </section>
    </div>
  );
};

export default RiskFactorSummation;
