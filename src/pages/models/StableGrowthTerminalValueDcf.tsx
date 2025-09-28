import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

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
            Stable Growth - Terminal Value DCF Model
          </h1>

          <h2 className="text-lg text-slate-600 leading-relaxed mb-8">
            Stable Growth DCF Analysis: Perpetual Value Asset Evaluation with Terminal Value Focus and Growth Rate Sensitivity
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Stable Growth - Terminal Value DCF Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EVlraDwwVANEgrCeb0E6GIIBECFk2Bolsc1RlTG1qzC62A?e=CIPY7h&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                variant="model-blue"
                size="lg"
                className="w-full text-lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Online & View
              </Button>
              <DownloadButton 
                sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EfA8V3EKkddAnVMlp8CBNt4B2FG8IRt85ZHD4OaQQEXrUw?e=i02xoL"
                modelName="Stable Growth: Terminal Value DCF Model"
                className="w-full"
              />
              <div className="mt-1 pt-1 text-xs text-muted-foreground">
                <strong className="text-primary">Quick Access Guide:</strong><br />
                <span>Online & View - Instant online preview (without registration)</span>
                <br /><span>Download & Use - Browser embedded Excel with download capability (required registration)</span>
              </div>
            </CardContent>
          </Card>

          {/* Introduction Headline */}
          <h3 className="mb-6">Stable Growth: Terminal Value DCF Model Introduction</h3>
        
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            The Stable Growth Terminal Value DCF Model values ongoing business investments expected to operate indefinitely. By combining explicit forecast periods with Gordon Growth terminal values, this framework captures both near-term visibility and long-term value creation for established operations with predictable growth patterns.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Perpetual Operations Framework</strong>: Designed for investments without natural end dates - production facilities, infrastructure, ongoing services. The model properly handles ongoing capital requirements through calculated maintenance capex rates whilst avoiding the common error of recovering working capital for continuing operations.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Terminal Value Sophistication</strong>: Includes calculated maintenance capex that reduces terminal cash flows, addressing the frequent oversight of ongoing capital needs in perpetuity calculations. The "Lifecycle CAPEX %" automatically calibrates based on initial investment and forecast period requirements.
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
          <AccordionItem value="complete-guide">
            <AccordionTrigger className="text-xl font-bold text-heading">
              Complete Stable Growth: Terminal Value DCF Model Guide
            </AccordionTrigger>
            <AccordionContent className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-600">
                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">What Is the Stable Growth: Terminal Value DCF Model?</h3>
                  <p className="leading-relaxed mb-4">
                    This model values investments that will continue operating beyond any reasonable forecast horizon. Unlike finite-life investments, these require perpetual reinvestment to maintain operations, making proper terminal value calculation critical.
                  </p>
                  <div>
                    <h4 className="font-semibold text-heading mb-2">Distinguishing Features:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>No working capital recovery (operations continue indefinitely)</li>
                      <li>Calculated maintenance capex for realistic terminal values</li>
                      <li>Salvage value represents equipment replacement, not termination</li>
                      <li>Terminal value often represents 60-80% of total value</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Standard DCF models often overstate terminal values by ignoring ongoing capital requirements. This model addresses this by explicitly calculating maintenance capex needs based on the business's demonstrated capital intensity during the initial investment period.
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
                        <li>Internal investments only: Not for M&A or structure-changing transactions</li>
                        <li>Terminal value dominance: Small changes in assumptions create large value swings</li>
                        <li>Perpetuity assumption: May not suit all businesses (disruption risk)</li>
                        <li>Single growth rate: Oversimplifies long-term dynamics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Best Practices:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Benchmark maintenance capex against internal standards</li>
                        <li>Use conservative terminal growth rates</li>
                        <li>Test break-even terminal growth rate</li>
                        <li>Compare results with similar internal investments</li>
                        <li>Document perpetuity assumptions thoroughly</li>
                      </ul>
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