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
import ModelInternalLinks from "@/components/ModelInternalLinks";
import perpetuityExitPreview800 from "@/assets/perpetuity-exit-preview-800.webp";
import perpetuityExitPreview400 from "@/assets/perpetuity-exit-preview-400.webp";
import perpetuityExitPreviewPng from "@/assets/perpetuity-exit-preview.png";
import { getFaqJson } from "@/seo/faqs";
import { getModelSoftwareJson } from "@/seo/modelSoftwareSchema";

const PerpetuityExitValuation = () => {
  const { trackOnlineOpen } = useAnalytics();
  const faqJson = getFaqJson("model-perpetuity-exit");
  const softwareJson = getModelSoftwareJson({
    name: "Perpetuity Exit Valuation Model",
    description: "Excel perpetuity exit valuation model. Free online preview and downloadable template with full guidance.",
    url: "https://www.financialdecisionmodels.com/toolbox/investment-analysis/perpetuity-exit-valuation-model",
    imageUrl: "https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png"
  });
  
  // Track page visit automatically
  usePageVisitTracking('Perpetuity & Exit Valuation Models');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Perpetuity & Exit Valuation Models');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Perpetuity & Exit Valuation Models - Quick Startup Analysis | Financial Decision Models</title>
        <meta name="description" content="Perpetuity and exit valuation models for quick startup analysis. Four Excel approaches: simple perpetuity, growing perpetuity, two-phase growth, and exit value. Try free online or download." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/startup-valuations/perpetuity-exit-models" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Perpetuity & Exit Valuation Models - Quick Startup Analysis | Financial Decision Models" />
        <meta property="og:description" content="Perpetuity and exit valuation models for quick startup analysis. Four Excel approaches: simple perpetuity, growing perpetuity, two-phase growth, and exit value. Try free online or download." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/startup-valuations/perpetuity-exit-models" />
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
                "name": "Perpetuity & Exit Valuation Models",
                "item": "https://www.financialdecisionmodels.com/toolbox/startup-valuations/perpetuity-exit-models"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Perpetuity & Exit Valuation Models",
            "description": "Four Excel approaches for quick startup analysis: simple perpetuity, growing perpetuity, two-phase growth, and exit value.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": ["Windows", "macOS"],
            "softwareHelp": "https://www.financialdecisionmodels.com/toolbox/startup-valuations/perpetuity-exit-models",
            "image": "https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png",
            "url": "https://www.financialdecisionmodels.com/toolbox/startup-valuations/perpetuity-exit-models",
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
      
      <div className="py-12">
        <div className="container mx-auto">
          <Link 
            to="/toolbox/startup-valuations"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Startup Valuations
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Perpetuity & Exit Valuation Models
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Simple Perpetuity Models: Quick & Flexible Approaches to Valuation with Scenario-Based Sensitivity and Value Driver Analysis
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 w-full max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Perpetuity & Exit Valuation Models
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                <Button 
                  onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EUzTQlqL07xEpyztUGqkXbcB6yuZjafRcMbnRel2PyBtDg?e=1rB65D&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                  variant="model-blue"
                  className="w-full text-lg"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Online & View
                </Button>
                <DownloadButton 
                  sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EUzTQlqL07xEpyztUGqkXbcB6yuZjafRcMbnRel2PyBtDg?e=1rB65D&download=1"
                  modelName="Perpetuity & Exit Valuation Models"
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
                      src={perpetuityExitPreviewPng}
                      srcSet={`${perpetuityExitPreview400} 400w, ${perpetuityExitPreview800} 800w`}
                      sizes="(max-width: 768px) 400px, 800px"
                      alt="Perpetuity & Exit Valuation Models Preview" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Introduction Headline */}
          <h3 className="mb-6">Professional Perpetuity & Exit Valuation Models Introduction</h3>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Perpetuity & Exit Valuation Models provide straightforward analysis that enables users to understand the impact of key value drivers on business valuation.¹ ² Through three simple perpetuity models and a complementary exit value model, these tools deliver immediate insights into how cash flow, growth assumptions, exit timing and multiples, and investment decisions affect net present value across multiple scenarios.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Value Driver Focus</strong>: Unlike complex valuation frameworks, these models emphasise sensitivity analysis that shows users how changing growth rates, exit multiples, or investment timing impacts valuation.¹ ² The three-scenario structure (Downside Case, Base Case, Upside Case) enables quick assessment of valuation ranges under different assumptions.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Simplicity</strong>: The models balance analytical rigour with usability, providing the Gordon Growth foundation¹ ² essential for perpetuity analysis, whilst maintaining the simplicity necessary for rapid scenario testing and strategic decision support.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Enable quick perpetuity analysis through multiple approaches, provide immediate value driver sensitivity insights through scenario-based testing, and support strategic investment decisions with simple yet robust NPV calculations.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: Entrepreneurs, investors and financial advisors for validation and sensitivity understanding of perpetuity valuation approaches.
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
                    Complete Perpetuity & Exit Valuation Models Guide
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
                      The Perpetuity & Exit Valuation Models provide straightforward analysis that enables users to understand the impact of key value drivers on business valuation. Through three simple perpetuity models and a complementary exit value model, these tools deliver immediate insights into how cash flow, growth assumptions, exit timing and multiples, and investment decisions affect net present value across multiple scenarios.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Value Driver Focus</strong>: Unlike complex valuation frameworks, these models emphasise sensitivity analysis that shows users exactly how changing growth rates, exit multiples, or investment timing impacts valuation. The three-scenario structure (Downside Case, Base Case, Upside Case) enables quick assessment of valuation ranges under different assumptions.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Simplicity</strong>: The models balance analytical rigour with usability, providing the Gordon Growth foundation¹ ² essential for perpetuity analysis, whilst maintaining the simplicity necessary for rapid scenario testing and strategic decision support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Are the Perpetuity & Exit Valuation Models?</h3>
                    <p className="leading-relaxed mb-4">
                      The Perpetuity & Exit Valuation Models are designed for simple valuation analysis with immediate value driver insights. The suite includes three perpetuity-based approaches and one exit-based approach, each using consistent three-scenario analysis (Downside Case, Base Case, Success Case) to demonstrate how key assumptions impact net present value.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Four-Model Framework</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Common Features Across All Models:</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-base">
                          <li>Discount rate input for all NPV calculations</li>
                          <li>Three-scenario analysis (Downside Case, Base Case, Success Case)</li>
                          <li>Flexible exit year selection (1-10 years) for analysis period</li>
                          <li>Funding (Investment) with timing options</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">Specific Features for Each Model:</h4>
                        <div className="space-y-3 ml-4">
                          <p><strong><FinancialTerm term="NPV">NPV</FinancialTerm> of Perpetuity</strong>: Simple perpetuity model with no growth assumption.</p>
                          <p><strong><FinancialTerm term="NPV">NPV</FinancialTerm> of Growing Perpetuity</strong>: Gordon Growth perpetuity model with single growth rate assumption, demonstrates impact of consistent growth on perpetual value.</p>
                          <p><strong><FinancialTerm term="NPV">NPV</FinancialTerm> of Two-Phase Growing Perpetuity</strong>: Perpetuity model with distinct growth phases, models transition from high growth to lower mature growth rate.</p>
                          <p><strong><FinancialTerm term="NPV">NPV</FinancialTerm> of Exit Value</strong>: Simple exit-based valuation calculation, direct comparison alternative to perpetuity approaches.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Were These Models Developed?</h3>
                    <p className="leading-relaxed mb-4">
                      Traditional complex valuation analysis often obscures the relationship between key assumptions and outcomes. These models address this by providing immediate visibility into how growth rates, exit timing and multiples, and investment amounts and timing drive NPV results.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Users need to understand which assumptions most significantly impact valuations to make informed strategic decisions. The models provide immediate feedback on assumption sensitivity and value driver relationships.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-3">
                      <p><strong>Entrepreneurs and Startups</strong>: Business validation with sensitivity testing for business plan validation and strategic analysis of growth drivers, decision support with valuation impact of funding levels and timing.</p>
                      <p><strong>Investors and Advisors</strong>: Rapid assessment with quick perpetuity valuation for investment analysis with consistent methodology.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Do the Perpetuity & Exit Models Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Excel Implementation Framework</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>User Interface Standards</strong>: Colour-coded Excel system with yellow cells for user inputs, white cells for calculated values, and grey cells with bold text for key results across all four models.
                        </p>
                        <p className="leading-relaxed mb-3">
                          <strong>Worksheet Protection</strong>: All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                        </p>
                        <p className="leading-relaxed mb-3">
                          <strong>Integrated Analysis</strong>: Consistent three-scenario framework across all models with investment timing and <FinancialTerm term="NPV">NPV</FinancialTerm> impact calculations for analysis.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Real-Time Calculations</strong>: Dynamic updates as users modify assumptions, enabling immediate understanding of value driver sensitivity and scenario impact.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">Core Calculation Methods</h4>
                        <div className="bg-slate-100 p-4 rounded-lg space-y-2">
                          <p><strong><FinancialTerm term="NPV">NPV</FinancialTerm> of Perpetuity Model</strong>: Simple Perpetuity Foundation using Value = Cash Flow ÷ Discount Rate with scenario-based sensitivity analysis.</p>
                          <p><strong><FinancialTerm term="NPV">NPV</FinancialTerm> of Growing Perpetuity Model</strong>: Gordon Growth Foundation applying Value = Cash Flow ÷ (Discount Rate - Growth Rate) with growth rate sensitivity testing.</p>
                          <p><strong><FinancialTerm term="NPV">NPV</FinancialTerm> of Two-Phase Growing Perpetuity Model</strong>: Growth modelling with initial high-growth phase transitioning to mature growth rates for realistic valuation analysis.</p>
                          <p><strong><FinancialTerm term="NPV">NPV</FinancialTerm> of Exit Value Model</strong>: Direct exit approach using simple <FinancialTerm term="NPV">NPV</FinancialTerm> calculation based on exit value assumptions with timing flexibility and Discount Rate.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Mathematical Foundation</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>Perpetuity Calculations</strong>: Perpetuity valuations incorporating Gordon Growth methodology¹ ² with appropriate mathematical foundations for reliable analysis.
                        </p>
                        <p className="leading-relaxed mb-3">
                          <strong><FinancialTerm term="NPV">NPV</FinancialTerm> Integration</strong>: Net present value calculations that account for investment timing, cash flow patterns, and discount rate applications across different scenarios.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Sensitivity Analysis</strong>: Built-in sensitivity testing that shows immediate impact of assumption changes on valuation results across all four approaches.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Visualisation</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>Valuation Range Charts</strong>: Visual presentation of NPV results across Downside, Base Case, and Success scenarios with clear value driver identification.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Comparative Analysis</strong>: Side-by-side comparison across different perpetuity approaches enabling cross-validation and assumption testing.
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
                          <p><strong>Simplified Assumptions</strong>: Models use streamlined cash flow projections focusing on valuation analysis rather than detailed operational forecasting, requiring realistic assumption setting.</p>
                          <p><strong>Scenario Dependency</strong>: Results depend heavily on realistic assumption setting across the three scenarios, making assumption quality critical for meaningful analysis.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Best Practices</h4>
                        <div className="space-y-3">
                          <p><strong>Assumption Credibility</strong>: Use realistic growth rate assumptions to maintain credibility with stakeholders and avoid systematic optimism bias in projections.</p>
                          <p><strong>Sensitivity Testing</strong>: Test sensitivity across wide assumption ranges to understand valuation impact and identify critical value drivers requiring attention.</p>
                          <p><strong>Cross-Validation</strong>: Compare results across different perpetuity models to validate assumptions and ensure analytical consistency.</p>
                          <p><strong>Documentation</strong>: Document scenario assumptions with supporting market research and present results as ranges rather than point estimates.</p>
                          <p><strong>Strategic Integration</strong>: Use models as part of valuation analysis rather than standalone decision-making tools for optimal results.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                    <div className="text-sm space-y-1">
                      <p>¹ Gordon, Myron J., and Eli Shapiro, "Capital Equipment Analysis: The Required Rate of Profit," Management Science (1956)</p>
                      <p>² Gordon, Myron J., "The Investment, Financing, and Valuation of the Corporation," Review of Economics and Statistics (1962)</p>
                      <p>³ Damodaran, Aswath, "Investment Valuation: Tools and Techniques for Determining the Value of Any Asset," John Wiley & Sons (2012)</p>
                      <p>⁴ McKinsey & Company, "Valuation: Measuring and Managing the Value of Companies," John Wiley & Sons (2020)</p>
                    </div>
                  </div>
                </div>
              </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <ModelInternalLinks 
            categoryName="Investment Analysis Models"
            categoryUrl="/toolbox/investment-analysis"
            relatedModels={[
              { name: "Three Stage DCF Model", url: "/toolbox/investment-analysis/three-stage-dcf-model" },
              { name: "Decision Analysis Model", url: "/toolbox/investment-analysis/decision-analysis-model" },
              { name: "Cost of Capital Calculator", url: "/toolbox/investment-analysis/cost-of-capital-calculator" }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default PerpetuityExitValuation;