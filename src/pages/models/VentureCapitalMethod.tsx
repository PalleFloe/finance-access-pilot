import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

const VentureCapitalMethod = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Venture Capital Method');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Venture Capital Method');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Venture Capital Method - Professional Startup Valuation | Financial Decision Models</title>
        <meta name="description" content="Venture Capital Method startup valuation model with multi-round funding analysis. Excel tool for VC valuations with exit scenarios. Try free online, download full version." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Venture Capital Valuation Model?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "The Venture Capital Valuation Model is a systematic framework for analysing multi-round startup financing with explicit consideration of investor return requirements and entrepreneur ownership implications."
              }
            },{
              "@type": "Question",
              "name": "Why Was the Venture Capital Method Developed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Traditional valuation methods inadequately address the unique characteristics of venture capital investing: high failure rates, multiple financing rounds, and significant growth potential."
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
                "name": "Venture Capital Method"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <div className="container mx-auto py-16">
        <div className="mb-4">
          <Link 
            to="/toolbox/startup-valuations"
            className="text-[12px]"
          >
            ← Back to Startup Valuations
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Venture Capital Valuation Model
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Multi-Round Funding Analysis for Startup Valuation with Exit Scenarios and Ownership Dilution
        </p>
      </div>

      <div className="container mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <div className="flex-shrink-0 max-w-md">
            <Card className="shadow-lg border-slate-200">
              <CardHeader>
                <CardTitle>Venture Capital Valuation Model</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EYYO2e6eVcRJrUq7utm970cBafMKUt7r8oVfdVFGYwqzhQ?e=iWF4sf&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                  className="w-full text-lg"
                  variant="model-blue"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Online & View
                </Button>
                
                <DownloadButton 
                  sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ERSbyfSH8p9PsrkquqrI3h8BNaZU4juQRiM8eCbI0_RsSg?e=G9FJbp"
                  modelName="Venture Capital Valuation Model"
                  className="w-full"
                />

                <Button 
                  disabled 
                  className="w-full text-lg bg-gray-100 text-gray-500 cursor-not-allowed flex items-center justify-center"
                >
                  Download & Own
                  <Badge className="ml-2 bg-orange-500 text-white border-orange-400 shadow-lg">
                    <Clock className="w-3 h-3 mr-1" />
                    Coming Soon
                  </Badge>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex-1">
            <ModelInfoPanel />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Introduction Headline */}
        <h3 className="mb-6">Venture Capital Valuation Model Introduction</h3>

        {/* Short Description */}
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            The Venture Capital Valuation Model provides startup founders, investors, and advisors with analytical framework for informed valuation decisions for startups with typically more than one investment round.¹ ² By understanding both the investor return perspective and entrepreneur ownership implications, users can make better investment decisions, navigate negotiations successfully, and plan multi-round financing strategies with scenario analysis capabilities.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Scenario Framework</strong>: The model builds on a base case with scenario modelling from very low through very high exit valuations, enabling stakeholders to understand return and ownership sensitivities. Users can combine exit scenarios with timing assumptions and investor requirements to conduct robust quantifiable sensitivity analysis, given the inherent high uncertainty in venture capital investing.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Strategic Purpose</strong>: Navigate multi-round financing with systematic valuation analysis, optimise entrepreneur-investor alignment through explicit ownership and return analysis, and enable evidence-based negotiation positioning with scenario-based insights.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>Target Users</strong>: Growth-stage entrepreneurs planning multi-round financing strategies, venture capital investors conducting deal evaluation and portfolio analysis, and financial advisors requiring systematic venture capital valuation frameworks.
          </p>
        </div>

        {/* Expandable Section */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="complete-guide">
            <AccordionTrigger className="mb-3">
              Complete Venture Capital Valuation Method Guide
            </AccordionTrigger>
            <AccordionContent className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-600">
                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Overview and Strategic Framework</h3>
                  <p className="leading-relaxed mb-4">
                    The Venture Capital Valuation Model provides startup founders, investors, and advisors with analytical framework for informed valuation decisions for startups with typically more than one investment round. By understanding both the investor return perspective and entrepreneur ownership implications, users can make better investment decisions, navigate negotiations successfully, and plan multi-round financing strategies with scenario analysis capabilities.
                  </p>
                  <p className="leading-relaxed mb-4">
                    <strong>Scenario Framework</strong>: The model builds on a base case with scenario modelling from very low through very high exit valuations, enabling stakeholders to understand return and ownership sensitivities. Users can combine exit scenarios with timing assumptions and investor requirements to conduct robust quantifiable sensitivity analysis, given the inherent high uncertainty in venture capital investing.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">What Is the Venture Capital Valuation Model?</h3>
                  <p className="leading-relaxed mb-4">
                    The Venture Capital Valuation Model is a systematic framework for analysing multi-round startup financing with explicit consideration of investor return requirements and entrepreneur ownership implications. Originally developed by professors William Sahlman and Daniel Scherlis at Harvard Business School, the method addresses the unique challenges of valuing high-growth companies with multiple financing rounds and uncertain exit outcomes.¹ ²
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Core Methodology</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Working Backwards from Exit</h4>
                      <p className="leading-relaxed mb-3">
                        The method starts with estimated exit valuation and timing, then works backward to determine current pre-money and post-money valuations that meet investor return requirements.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heading">Required Return Integration</h4>
                      <p className="leading-relaxed mb-3">
                        Incorporates explicit investor return requirements (typically 25-50% IRR for venture capital) to calculate ownership percentages needed to achieve target returns.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Multi-Round Analysis</h4>
                      <p className="leading-relaxed mb-3">
                        Models dilution effects across multiple financing rounds, enabling entrepreneurs and investors to understand long-term ownership implications.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Traditional valuation methods inadequately address the unique characteristics of venture capital investing: high failure rates, multiple financing rounds, and significant growth potential. The Venture Capital Method provides analytical framework specifically designed for high-risk, high-return investment evaluation.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Research demonstrates that venture capital returns depend critically on exit timing and valuation, making backward-looking analysis essential for informed investment decisions and successful entrepreneur-investor alignment.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                  <div className="space-y-3">
                    <p><strong>Growth-Stage Entrepreneurs</strong>: Multi-round financing strategy with systematic valuation analysis, fundraising preparation with evidence-based negotiation positioning, and ownership planning with dilution analysis across multiple investment rounds for informed strategic decisions.</p>
                    <p><strong>Venture Capital Investors</strong>: Deal evaluation with explicit return requirement integration, portfolio analysis with systematic risk-return assessment, and investment committee analysis with scenario-based ownership and return projections for systematic investment decisions.</p>
                    <p><strong>Financial Advisors</strong>: Client advisory with venture capital valuation frameworks, transaction support for startup fundraising processes, and strategic consulting with multi-round financing analysis capabilities.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">How Does the Venture Capital Valuation Method Work?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Excel Implementation Framework</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Integrated Analysis System</strong>: Multi-scenario analysis with base case, very low, low, high, and very high exit scenarios with systematic sensitivity analysis.
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>User Interface Standards</strong>: Colour-coded Excel inputs with yellow cells for user inputs, white cells for calculated values, and grey cells with bold text for key results across all scenarios.
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>Worksheet Protection</strong>: All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Real-Time Analysis</strong>: Immediate updates as users modify exit assumptions, timing, or return requirements, enabling comprehensive sensitivity analysis across multiple variables simultaneously.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heading">Calculation Process</h4>
                      <div className="bg-slate-100 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Core Venture Capital Method Process:</h5>
                        <ol className="list-decimal pl-6 space-y-1 text-base">
                          <li>Estimate Exit Value: Project company valuation at exit (IPO, acquisition, etc.)</li>
                          <li>Determine Required Return: Set investor return requirements (typically 25-50% IRR)</li>
                          <li>Calculate Required Exit Ownership: Required Investment × (1 + Required Return)^Years = Required Exit Value</li>
                          <li>Account for Dilution: Adjust for future financing rounds to determine current ownership requirements</li>
                          <li>Calculate Pre-Money Valuation: Current Investment ÷ Post-Dilution Ownership Percentage - Current Investment</li>
                          <li>Validate with Scenarios: Test sensitivity across different exit valuations and timing assumptions</li>
                        </ol>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Scenario Analysis Framework</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Exit Valuation Scenarios</strong>: Very Low (distressed exit), Low (below-expectation performance), Base Case (realistic projection), High (strong performance), Very High (exceptional outcomes).
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>Timing Sensitivity</strong>: Analysis of how exit timing affects returns with explicit consideration of holding period implications.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Return Requirements</strong>: Flexibility to adjust required returns based on risk assessment, stage of investment, and market conditions.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Mathematical Foundation</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Present Value Calculations</strong>: Uses discounted cash flow principles adapted for venture capital's unique risk-return characteristics.
                      </p>
                      <p className="leading-relaxed">
                        <strong>IRR Analysis</strong>: Internal rate of return calculations that account for multiple cash flows and exit timing uncertainty.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Key Limitations</h4>
                      <div className="space-y-3">
                        <p><strong>Exit Valuation Dependencies</strong>: Requires accurate exit value estimates that are inherently uncertain, particularly for early-stage companies with limited comparable transaction data.</p>
                        <p><strong>Static Return Requirements</strong>: Uses fixed required return rates that may not reflect changing market conditions or evolving risk assessments over investment horizons.</p>
                        <p><strong>Simplified Dilution Assumptions</strong>: May not capture complex financing structures including convertible securities, option pools, and preferential rights.</p>
                        <p><strong>Market Timing Sensitivity</strong>: Results highly sensitive to exit timing assumptions that are difficult to predict accurately in volatile markets.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Best Practices</h4>
                      <div className="space-y-3">
                        <p><strong>Conservative Exit Assumptions</strong>: Use realistic and conservative exit valuations based on comparable companies and market conditions to maintain analytical credibility.</p>
                        <p><strong>Scenario Analysis</strong>: Test multiple exit scenarios and timing assumptions to understand sensitivity and develop robust investment strategies.</p>
                        <p><strong>Market Research Integration</strong>: Ground exit assumptions in thorough market research including comparable company analysis and transaction multiples.</p>
                        <p><strong>Regular Updates</strong>: Update assumptions regularly as companies progress and market conditions evolve to maintain relevance and accuracy.</p>
                        <p><strong>Documentation Requirements</strong>: Document all assumptions and analytical rationale to enable validation and support investment decision processes.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                  <div className="text-sm space-y-1">
                    <p>¹ Sahlman, William A., and Daniel R. Scherlis, "A Method for Valuing High-Risk, Long-Term Investments: The 'Venture Capital Method,'" Harvard Business School Background Note 288-006 (Revised October 2009) ² Roig, Aleix, and Carlos Vicén, "Startup Valuation," HEC Paris Master Thesis (2020) ³ Tyebjee, Tyzoon T., and Albert V. Bruno, "A Model of Venture Capitalist Investment Activity," Management Science (1984) ⁴ MacMillan, Ian C., Robin Siegel, and P.N. Subba Narasimha, "Criteria Used by Venture Capitalists to Evaluate New Venture Proposals," Journal of Business Venturing (1985) ⁵ Cambridge Associates, "US Private Equity Index and Selected Benchmark Statistics" (2024) ⁶ National Venture Capital Association, "NVCA 2024 Yearbook" (2024)</p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default VentureCapitalMethod;