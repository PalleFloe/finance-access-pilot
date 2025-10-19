import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';
import FinancialTerm from "@/components/FinancialTerm";
import stableGrowthTerminalPreview from "@/assets/stable-growth-terminal-preview.png";

const StableGrowthTerminalValueDcf = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Stable Growth: Terminal Value DCF Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Stable Growth: Terminal Value DCF Model');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Stable Growth: Terminal Value DCF Model - Investment Analysis | Financial Decision Models</title>
        <meta name="description" content="Stable Growth DCF analysis with terminal value focus for perpetual asset evaluation. Growth rate sensitivity and comprehensive valuation analysis. Excel tool for long-term investments." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Stable Growth: Terminal Value DCF Model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "This model values investments that will continue operating beyond any reasonable forecast horizon, requiring perpetual reinvestment to maintain operations."
              }
            },{
              "@type": "Question",
              "name": "Why Was the Terminal Value DCF Model Developed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard DCF models often overstate terminal values by ignoring ongoing capital requirements."
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
                "name": "Investment Analysis",
                "item": "https://www.financialdecisionmodels.com/toolbox/investment-analysis"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Stable Growth: Terminal Value DCF Model"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto">
          <Link 
            to="/toolbox/investment-analysis"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Investment Analysis
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Stable Growth - Terminal Value <FinancialTerm term="DCF">DCF</FinancialTerm> Model
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Stable Growth <FinancialTerm term="DCF">DCF</FinancialTerm> Analysis: Perpetual Value Asset Evaluation with Terminal Value Focus and Growth Rate Sensitivity
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Stable Growth - Terminal DCF Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EYKX_bEIrDBGjkB4rTz3e9sBVmqL6GULuTrJXAWoFZF6ZQ?e=LK1KJg&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EYKX_bEIrDBGjkB4rTz3e9sBVmqL6GULuTrJXAWoFZF6ZQ?e=LK1KJg&download=1"
                    modelName="Stable Growth: Terminal Value DCF Model"
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-md">
              <ModelInfoPanel />
            </div>

            <div className="max-w-md">
              <Card className="shadow-lg border-slate-200">
                <CardHeader className="pb-0">
                  <CardTitle>Preview of Model</CardTitle>
                </CardHeader>
                <CardContent className="pt-1">
                  <div className="w-[370px] h-[185px] overflow-hidden">
                    <img 
                      src={stableGrowthTerminalPreview} 
                      alt="Stable Growth Terminal Value DCF Model Preview" 
                      className="w-full h-full object-cover rounded-lg border border-slate-200"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Introduction Headline */}
          <h3 className="mb-6">Stable Growth: Terminal Value <FinancialTerm term="DCF">DCF</FinancialTerm> Model Introduction</h3>
        
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            The Stable Growth Terminal Value <FinancialTerm term="DCF">DCF</FinancialTerm> Model values ongoing business investments expected to operate indefinitely. By combining explicit forecast periods with Gordon Growth terminal values, this framework captures both near-term visibility and long-term value creation for established operations with predictable growth patterns.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Perpetual Operations Framework</strong>: Designed for investments without natural end dates - production facilities, infrastructure, ongoing services. The model properly handles ongoing capital requirements through calculated maintenance capex rates whilst avoiding the common error of recovering working capital for continuing operations.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Terminal Value Sophistication</strong>: Includes calculated maintenance <FinancialTerm term="CAPEX">capex</FinancialTerm> that reduces terminal cash flows, addressing the frequent oversight of ongoing capital needs in perpetuity calculations. The "Lifecycle <FinancialTerm term="CAPEX">CAPEX</FinancialTerm> %" automatically calibrates based on initial investment and forecast period requirements.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Strategic Purpose</strong>: Value investments in perpetual operations, assess facilities and infrastructure projects, and analyse long-term business improvements.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            <strong>Target Users</strong>: Business leaders evaluating long-term investments, project managers overseeing perpetual operations, and finance teams analysing ongoing business initiatives.
          </p>
        </div>

        {/* Collapsible Section */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="complete-guide" className="border-none">
            <AccordionTrigger className="w-full bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:no-underline data-[state=open]:rounded-b-none data-[state=open]:border-b-0">
              <div className="text-left w-full">
                <div className="text-sm font-semibold uppercase tracking-wide mb-1 text-slate-600">
                  Full Detailed Guide
                </div>
                <div className="text-2xl font-bold text-brand-blue">
                  Complete Stable Growth: Terminal Value <FinancialTerm term="DCF">DCF</FinancialTerm> Model Guide
                </div>
                <div className="text-base font-semibold mt-2 text-slate-600">
                  Click to expand comprehensive documentation →
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white border border-slate-200 rounded-b-lg border-t-0">
              <div className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                  <h3 className="text-xl font-bold text-heading mb-3">What Is the Stable Growth: Terminal Value <FinancialTerm term="DCF">DCF</FinancialTerm> Model?</h3>
                  <p className="leading-relaxed mb-4">
                    This model values investments that will continue operating beyond any reasonable forecast horizon. Unlike finite-life investments, these require perpetual reinvestment to maintain operations, making proper terminal value calculation critical.
                  </p>
                  <div>
                    <h4 className="font-semibold text-heading mb-2">Distinguishing Features:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>No working capital recovery (operations continue indefinitely)</li>
                      <li>Calculated maintenance <FinancialTerm term="CAPEX">capex</FinancialTerm> for realistic terminal values</li>
                      <li>Salvage value represents equipment replacement, not termination</li>
                      <li>Terminal value often represents 60-80% of total value</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Standard <FinancialTerm term="DCF">DCF</FinancialTerm> models often overstate terminal values by ignoring ongoing capital requirements. This model addresses this by explicitly calculating maintenance <FinancialTerm term="CAPEX">capex</FinancialTerm> needs based on the business's demonstrated capital intensity during the initial investment period.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Business Leaders</h4>
                      <p className="leading-relaxed">Long-term planning to evaluate investments in perpetual operations, strategic decisions to assess facilities and infrastructure investments.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Project Leaders / Investment Managers</h4>
                      <p className="leading-relaxed">Operational planning to model investments transitioning to steady-state, performance benchmarking to establish long-term value creation targets.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Finance Teams</h4>
                      <p className="leading-relaxed">Valuation analysis with proper treatment of perpetual operations, capital planning to understand ongoing investment requirements.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Key Limitations:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Internal investments only: Not for <FinancialTerm term="M&A">M&A</FinancialTerm> or structure-changing transactions</li>
                        <li>Terminal value dominance: Small changes in assumptions create large value swings</li>
                        <li>Perpetuity assumption: May not suit all businesses (disruption risk)</li>
                        <li>Single growth rate: Oversimplifies long-term dynamics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Best Practices:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Benchmark maintenance <FinancialTerm term="CAPEX">capex</FinancialTerm> against internal standards</li>
                        <li>Use conservative terminal growth rates</li>
                        <li>Test break-even terminal growth rate</li>
                        <li>Compare results with similar internal investments</li>
                        <li>Document perpetuity assumptions thoroughly</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        </div>
      </div>
    </div>
  );
};

export default StableGrowthTerminalValueDcf;