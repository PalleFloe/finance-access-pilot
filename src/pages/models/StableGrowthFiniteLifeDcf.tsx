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

const StableGrowthFiniteLifeDcf = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Stable Growth: Finite-Life DCF Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Stable Growth: Finite-Life DCF Model');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Stable Growth: Finite-Life DCF Model - Investment Analysis | Financial Decision Models</title>
        <meta name="description" content="Stable Growth DCF analysis for finite-life assets with predictable revenue and terminal value calculation. Excel tool for project valuation and investment analysis." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Stable Growth: Finite-Life DCF Model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The model addresses investments that generate cash flows for specific periods before terminating, including equipment that requires replacement."
              }
            },{
              "@type": "Question",
              "name": "Why Was the Finite-Life DCF Model Developed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many internal investments don't continue indefinitely. Standard perpetuity-based DCF models overvalue these investments by assuming infinite cash flows."
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
                "name": "Stable Growth: Finite-Life DCF Model"
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
            Stable Growth - Finite-Life <FinancialTerm term="DCF">DCF</FinancialTerm> Model
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Stable Growth <FinancialTerm term="DCF">DCF</FinancialTerm> Analysis: Finite-Life Asset Evaluation with Proper End-Period Treatment and Comprehensive Sensitivity Analysis
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Stable Growth - Finite-Life DCF Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/Ef06hfBMNWhDqdojPqaY5GIBOfLdFI-2ckzJeUrCxBU4Ug?e=mBuxKR&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EYMfvk70fDxJu3IKJUMYzfABM9Qx9qoTynBrMBvcOZleAw?e=Zugont&download=1"
                    modelName="Stable Growth: Finite-Life DCF Model"
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-md">
              <ModelInfoPanel />
            </div>
          </div>

          {/* Introduction Headline */}
          <h3 className="mb-6">Stable Growth: Finite-Life <FinancialTerm term="DCF">DCF</FinancialTerm> Model Introduction</h3>
        
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            The Stable Growth Finite-Life <FinancialTerm term="DCF">DCF</FinancialTerm> Model values investments with defined operational periods, such as equipment purchases, fixed-term contracts, or projects with natural endpoints. By explicitly modelling project termination with salvage value recovery and working capital release, this framework provides accurate valuation for finite-duration investments.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Finite-Life Framework</strong>: Unlike perpetual business models, this approach recognises that many investments have natural end points - equipment replacement cycles, contract expiration, or project completion. The model properly handles final-year cash flows including asset disposal and working capital recovery.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Comprehensive Sensitivity Analysis</strong>: Visual sensitivity charts show how each assumption impacts <FinancialTerm term="NPV">NPV</FinancialTerm> and <FinancialTerm term="IRR">IRR</FinancialTerm>, enabling users to identify critical value drivers and risk factors. The three-scenario framework tests investment viability across different market conditions.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Strategic Purpose</strong>: Value finite-life projects with proper end-period treatment, assess equipment investments with replacement cycles, and evaluate fixed-term contracts or operational improvements.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            <strong>Target Users</strong>: Business leaders assessing capital projects, project managers planning finite-duration initiatives, and finance teams evaluating time-limited investments.
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
                  Complete Stable Growth: Finite-Life <FinancialTerm term="DCF">DCF</FinancialTerm> Model Guide
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
                  <h3 className="text-xl font-bold text-heading mb-3">What Is the Stable Growth: Finite-Life <FinancialTerm term="DCF">DCF</FinancialTerm> Model?</h3>
                  <p className="leading-relaxed mb-4">
                    The model addresses investments that generate cash flows for specific periods before terminating. This includes equipment that requires replacement, contractual arrangements with defined terms, or operational projects with clear endpoints.
                  </p>
                  <div>
                    <h4 className="font-semibold text-heading mb-2">Core Components:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Initial investment and working capital requirements</li>
                      <li>Revenue projections with stable growth rates</li>
                      <li>Cost structure (variable and operational expenses)</li>
                      <li>Depreciation over asset lifetime</li>
                      <li>Salvage value or disposal costs at project end</li>
                      <li>Working capital recovery in final year</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Many internal investments don't continue indefinitely. Equipment becomes obsolete, contracts expire, and improvement projects reach completion. Standard perpetuity-based <FinancialTerm term="DCF">DCF</FinancialTerm> models overvalue these investments by assuming infinite cash flows. This model provides accurate valuation by properly handling project termination.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Business Leaders</h4>
                      <p className="leading-relaxed">Capital allocation to evaluate equipment replacement decisions, strategic planning to assess fixed-term initiatives and improvements.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Project Leaders / Investment Managers</h4>
                      <p className="leading-relaxed">Project evaluation to value extraction projects with defined timelines, implementation planning to model complete project lifecycles.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Finance Teams</h4>
                      <p className="leading-relaxed">Investment analysis to properly value time-limited opportunities, risk assessment to understand sensitivity to project lifetime assumptions.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Key Limitations:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Internal focus: Designed for projects within existing operations</li>
                        <li>Assumes stable operations: May not capture operational volatility</li>
                        <li>Fixed lifetime: Doesn't model lifetime uncertainty or extension options</li>
                        <li>Simplified structure: Single tax rate, no changes to <FinancialTerm term="WACC">WACC</FinancialTerm></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Best Practices:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Test sensitivity to lifetime assumptions</li>
                        <li>Consider disposal cost scenarios (negative salvage)</li>
                        <li>Model working capital recovery conservatively</li>
                        <li>Validate against similar completed projects</li>
                        <li>Document salvage value assumptions carefully</li>
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

export default StableGrowthFiniteLifeDcf;