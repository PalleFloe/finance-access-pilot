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
import FinancialTerm from "@/components/FinancialTerm";
import ModelInternalLinks from "@/components/ModelInternalLinks";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';
import firstChicagoPreview800 from "@/assets/first-chicago-preview-800.webp";
import firstChicagoPreview400 from "@/assets/first-chicago-preview-400.webp";
import firstChicagoPreviewPng from "@/assets/first-chicago-preview.png";
import { getFaqJson } from "@/seo/faqs";
import { getModelSoftwareJson } from "@/seo/modelSoftwareSchema";

const FirstChicagoValuation = () => {
  const { trackOnlineOpen } = useAnalytics();
  const faqJson = getFaqJson("model-first-chicago");
  const softwareJson = getModelSoftwareJson({
    name: "First Chicago Valuation Model",
    description: "Scenario-based startup valuation Excel model. Free online preview and downloadable template with clear user instructions.",
    url: "https://www.financialdecisionmodels.com/toolbox/startup-valuations/first-chicago-valuation",
    imageUrl: "https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png"
  });
  
  // Track page visit automatically
  usePageVisitTracking('First Chicago Valuation Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('First Chicago Valuation Model');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>First Chicago Method - Scenario-Based Startup Valuation | Financial Decision Models</title>
        <meta name="description" content="First Chicago startup valuation model with scenario-based DCF analysis. Excel tool models downside, base, and upside cases with probability weighting. Try free online, download full version." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/startup-valuations/first-chicago-method" />
        
        {/* Open Graph */}
        <meta property="og:title" content="First Chicago Method - Scenario-Based Startup Valuation | Financial Decision Models" />
        <meta property="og:description" content="First Chicago startup valuation model with scenario-based DCF analysis. Excel tool models downside, base, and upside cases with probability weighting. Try free online, download full version." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/startup-valuations/first-chicago-method" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Decision Models" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">
          {JSON.stringify(softwareJson)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqJson)}
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
                "name": "First Chicago Method",
                "item": "https://www.financialdecisionmodels.com/toolbox/startup-valuations/first-chicago-method"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "First Chicago Valuation Model",
            "description": "Scenario-based DCF analysis for startup valuation with downside, base, and upside cases. Probability-weighted valuation approach.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": ["Windows", "macOS"],
            "softwareHelp": "https://www.financialdecisionmodels.com/toolbox/startup-valuations/first-chicago-method",
            "image": "https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png",
            "url": "https://www.financialdecisionmodels.com/toolbox/startup-valuations/first-chicago-method",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free online preview and downloadable no-macro Excel model with step-by-step user guidance."
            },
            "publisher": {
              "@type": "Organization",
              "name": "Financial Decision Models",
              "url": "https://www.financialdecisionmodels.com/"
            }
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
          First Chicago Valuation Model
        </h1>

        <p className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
          Scenario Based <FinancialTerm term="DCF">DCF</FinancialTerm> Model for Startup Valuation: Specifically focusing on Exit Value based on both Profit and Revenue
        </p>
      </div>

      <div className="container mx-auto mb-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-shrink-0 w-full max-w-md">
            <Card className="shadow-lg border-slate-200 lg:h-[240px]">
              <CardHeader className="pb-2">
                <CardTitle>
                  First Chicago Valuation Model
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pb-4 pt-6">
                <Button 
                  onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EQ09yTKjA-5Kh6OOUpdngwEB6QrrxHpPLRzOwccqkn8rkQ?e=BBessI&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                  className="w-full text-lg"
                  variant="model-blue"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Online & View
                </Button>
                
                <DownloadButton 
                  sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EQ09yTKjA-5Kh6OOUpdngwEB6QrrxHpPLRzOwccqkn8rkQ?e=BBessI&download=1"
                  modelName="First Chicago Method Model"
                  className="w-full"
                />
              </CardContent>
            </Card>
          </div>
          
          <div className="flex-shrink-0 w-full max-w-md">
            <ModelInfoPanel />
          </div>

          <div className="flex-shrink-0 w-full max-w-md">
            <Card className="shadow-lg border-slate-200 lg:h-[240px]">
              <CardHeader className="pb-0">
                <CardTitle className="text-[16px] font-bold text-brand-blue" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
                  Preview of Model
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2 pt-1">
                <div className="w-full max-w-[360px] h-[180px] overflow-hidden rounded-md flex items-center justify-center mx-auto">
                  <img 
                    src={firstChicagoPreviewPng}
                    srcSet={`${firstChicagoPreview400} 400w, ${firstChicagoPreview800} 800w`}
                    sizes="(max-width: 768px) 400px, 800px"
                    alt="First Chicago Valuation Model Preview" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Introduction Headline */}
        <h3 className="mb-6">First Chicago Valuation Model Introduction</h3>

        {/* Short Description */}
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            The First Chicago Valuation Model provides scenario-based analysis that addresses the fundamental uncertainty inherent in startup valuation.¹ ² By modelling multiple potential outcomes—downside, base and upside scenarios with probability weighting, this approach delivers robust valuations that acknowledge both upside potential and downside risks for informed investment decision-making.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Multi-Scenario Approach</strong>: Unlike single-point estimate methods that rely heavily on discount rates to account for uncertainty, the First Chicago Model explicitly models diverse business trajectories from potential failure through exceptional success.¹ ² This decomposition enables stakeholders to understand specific value drivers and risk factors rather than aggregating complex uncertainties into single numbers.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Framework</strong>: The method combines simple financial cash-flow modelling for each scenario with probability weighting across a flexible 3-5 year period and precise discount rate application to estimate net present value.¹ ³ This approach reduces the optimism bias common in traditional venture capital methods whilst providing the analytical depth necessary for institutional investment decisions.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Strategic Purpose</strong>: Establish credible valuations through explicit risk decomposition, support investment committee analysis with scenario coverage, and enable portfolio construction decisions based on probability-weighted return distributions.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>Target Users</strong>: Venture capital investors conducting systematic deal evaluation, growth-stage entrepreneurs preparing multi-scenario business cases, and financial advisors requiring early-stage valuation frameworks with explicit uncertainty acknowledgment.
          </p>
        </div>

        {/* Expandable Section */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="complete-guide" className="border-none">
            <AccordionTrigger className="w-full bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:no-underline data-[state=open]:rounded-b-none data-[state=open]:border-b-0">
              <div className="text-left w-full">
                <div className="text-sm font-semibold uppercase tracking-wide mb-1 text-slate-600">
                  Full Detailed Guide
                </div>
                <div className="text-2xl font-bold text-brand-blue">
                  Complete First Chicago Valuation Model Guide
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
                  <h3 className="text-xl font-bold text-heading mb-3">Overview and Strategic Framework</h3>
                  <p className="leading-relaxed mb-4">
                    The First Chicago Valuation Model provides scenario-based analysis that addresses the fundamental uncertainty inherent in startup valuation. By modelling multiple potential outcomes—downside, base and upside scenarios with probability weighting, this approach delivers robust valuations that acknowledge both upside potential and downside risks for informed investment decision-making.
                  </p>
                  <p className="leading-relaxed mb-4">
                    <strong>Multi-Scenario Approach</strong>: Unlike single-point estimate methods that rely heavily on discount rates to account for uncertainty, the First Chicago implementation explicitly models diverse business trajectories from potential failure through exceptional success. This decomposition enables stakeholders to understand specific value drivers and risk factors rather than aggregating complex uncertainties into single numbers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">What Is the First Chicago Valuation Model?</h3>
                  <p className="leading-relaxed mb-4">
                    The First Chicago Valuation Model is a scenario-based valuation framework originally developed by the venture capital division of First Chicago Bank in 1970.² The implementation addresses startup valuation uncertainty through multi-scenario analysis that models the full range of potential business outcomes with probability weighting and sensitivity analysis.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Three-Scenario Framework</h3>
                  <p className="leading-relaxed mb-4">
                    The method requires assigning probability weightings to each scenario, with standard allocations typically being 25% for Upside, 50% for Base Case, and 25% for Downside scenarios based on venture capital research.¹ ² These probabilities can be adjusted based on specific company circumstances and market conditions.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-heading">Upside Scenario</h4>
                      <p className="text-base">Optimistic performance with management team expectations and favourable market conditions, revenue growth exceeding initial projections with premium exit valuations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Base Case Scenario</h4>
                      <p className="text-base">Realistic performance representing the most likely outcome based on detailed due diligence, revenue and profitability meeting base case projections.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Downside Case Scenario</h4>
                      <p className="text-base">Conservative performance with challenges in execution or market conditions, below-projection performance with margin pressure and distressed exit scenarios.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Traditional venture capital methods suffer from optimism bias by projecting only positive outcomes and relying on discount rates to account for risk uncertainty. Professional investors require explicit understanding of both upside potential and downside risks that single-point estimates cannot address.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Studies demonstrate that scenario-based approaches provide superior decision support compared to single-point estimates, enabling more informed resource allocation and risk assessment across diverse business trajectories.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                  <div className="space-y-3">
                    <p><strong>Venture Capital Investors</strong>: Investment and Valuation analysis with risk-return presentation, systematic evaluation of multiple business trajectories and portfolio construction understanding, decision support with scenario analysis and probability-weighted return distributions for informed investment decision-making.</p>
                    <p><strong>Growth-Stage Entrepreneurs</strong>: Business planning with multi-scenario business planning, resource allocation implications and presentation of business potential with explicit risk acknowledgment, fundraising preparation with credible valuation ranges that demonstrate analytical sophistication and realistic outcome assessment.</p>
                    <p><strong>Financial Advisors</strong>: Client advisory with scenario analysis for investment decision support, valuation ranges for negotiation positioning and transaction advisory capabilities.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">How Does the First Chicago Valuation Model Work?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Excel Implementation Framework</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Three-Scenario System</strong>: Independent financial projections for Downside, Base Case, and Upside scenarios with integrated probability weighting.
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>User Interface Standards</strong>: Colour-coded Excel inputs with yellow cells for user inputs, white cells for calculated values, and grey cells with bold text for key results across all scenarios.
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>Worksheet Protection</strong>: All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Real-Time Analysis</strong>: Immediate updates as users modify assumptions, enabling scenario testing and sensitivity analysis across multiple variables simultaneously.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heading">Financial Projection Structure</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Revenue and Cost Modelling</strong>: Year-by-year projections across 3-5 year periods with variable growth assumptions, margin and costs development for each scenario.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Cash Flow Analysis</strong>: Include operating cash flow calculations and investments (Capex), but not net working capital, financing or tax elements.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Exit Value Calculation</h4>
                      <p className="leading-relaxed mb-3">
                        For each scenario, exit valuations are based on multiples for revenue and profit metrics: Exit Value = Final Year Metric × Multiple. With the Dual-Multiple Approach for both revenue-based and profit-based exit valuations, the model provides cross-validation and exit analysis across different optionalities and scenarios.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heading">Present Value Calculation and Probability Weighting</h4>
                      <div className="bg-slate-100 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Calculation Process for Weighted NPV:</h5>
                        <ol className="list-decimal pl-6 space-y-1 text-base">
                          <li>Calculate net present value (NPV) for each scenario: NPV of Forecast Period + NPV of Exit Value</li>
                          <li>Assign probability weights to each scenario (typically 25% Downside, 60% Base Case, 25% Upside, but adjustable based on user input)</li>
                          <li>Probability-weighted valuation: Expected Value = Σ(Scenario Probability × Scenario Net Present Value)</li>
                        </ol>
                        <p className="mt-3 text-base">Similar calculation process for Weighted Exit Value.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Mathematical Foundation</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>NPV Calculations</strong>: Net present value calculations incorporating appropriate discount rates for each scenario with explicit risk adjustment and temporal analysis.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Probability Weighting</strong>: Simple probability-weighted expected value calculations that enable systematic risk assessment and return distribution analysis.
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
                        <p><strong>Financial Projection Reliability</strong>: Financial projections typically miss estimates by huge margins for startups, making sensitivity analysis essential for meaningful insights and valuation decisions.</p>
                        <p><strong>Scenario Independence</strong>: Assumes independent scenarios and accurate probability estimation with static exit multiples that may not reflect market volatility.</p>
                        <p><strong>Modelling Complexity</strong>: Requires detailed financial projections for each scenario and potentially extensive comparable company research for exit multiple validation.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Best Practices</h4>
                      <div className="space-y-3">
                        <p><strong>Conservative Assumptions</strong>: Use realistic and conservative assumptions for base case scenarios to maintain credibility with investors and avoid systematic optimism bias.</p>
                        <p><strong>Documentation Requirements</strong>: Document scenario assumptions with supporting market data and comparable transaction evidence for analytical transparency and validation.</p>
                        <p><strong>Sensitivity Testing</strong>: Test sensitivity across key variables including exit timing, exit multiples, and discount rates to understand valuation impact and critical assumption dependencies.</p>
                        <p><strong>Range Presentation</strong>: Present results as valuation ranges with scenario context rather than single-point estimates to acknowledge inherent uncertainty in startup valuation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                  <div className="text-sm space-y-1">
                    <p>¹ Sahlman, William A., and Daniel R. Scherlis, "A Method for Valuing High-Risk, Long-Term Investments: The 'Venture Capital Method,'" Harvard Business School Background Note 288-006 (Revised October 2009)</p>
                    <p>² Roig, Aleix, and Carlos Vicén, "Startup Valuation," HEC Paris Master Thesis (2020)</p>
                    <p>³ Tyebjee, Tyzoon T., and Albert V. Bruno, "A Model of Venture Capitalist Investment Activity," Management Science (1984)</p>
                    <p>⁴ MacMillan, Ian C., Robin Siegel, and P.N. Subba Narasimha, "Criteria Used by Venture Capitalists to Evaluate New Venture Proposals," Journal of Business Venturing (1985)</p>
                    <p>⁵ Cambridge Associates, "US Private Equity Index and Selected Benchmark Statistics" (2024)</p>
                    <p>⁶ National Venture Capital Association, "NVCA 2024 Yearbook" (2024)</p>
                  </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <ModelInternalLinks 
          categoryName="Startup & Valuation Models"
          categoryUrl="/toolbox/startup-valuations"
          relatedModels={[
            { name: "SaaS Unit Economics Model", url: "/toolbox/startup-valuations/saas-unit-economics" },
            { name: "Berkus Valuation Model", url: "/toolbox/startup-valuations/berkus-valuation" },
            { name: "Venture Capital Method", url: "/toolbox/startup-valuations/venture-capital-method" }
          ]}
        />
      </div>
    </div>
  );
};

export default FirstChicagoValuation;