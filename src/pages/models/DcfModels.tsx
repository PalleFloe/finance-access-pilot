import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import FinancialTerm from "@/components/FinancialTerm";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';
import dcfModelsPreview from "@/assets/dcf-models-preview.png";

const DcfModels = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('DCF Models');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('DCF Models');
    console.log('openModel: DcfModels ->', sharePointUrl);
    const win = window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (!win) console.warn('window.open was blocked by the browser');
  };

  const openTier2Registration = (modelName: string) => {
    alert('Registration for free download coming soon!\n\nModel: ' + modelName);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>DCF Models - Professional Discounted Cash Flow Analysis | Financial Decision Models</title>
        <meta name="description" content="Three professional DCF valuation models: Flexible, Three-Stage, and Stable Growth approaches. Excel-based discounted cash flow analysis for business valuation. Try free online, download full versions." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Are the Standard Types of DCF Models?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Standard Types of DCF Models represent three fundamental approaches to business valuation that accommodate different company life cycles and growth patterns."
              }
            },{
              "@type": "Question",
              "name": "Why Use the Standard Types of DCF Models?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Different companies require different valuation approaches depending on their growth stage, operational complexity, and business model characteristics."
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
                "name": "Financial Fundamentals",
                "item": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "DCF Models"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto">
          <Link 
            to="/toolbox/financial-fundamentals"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Financial Fundamentals
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Key Types of <FinancialTerm term="DCF">DCF</FinancialTerm> Models
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Three Approaches: Fully Flexible, Staged or Stable Assumptions. Designed to value a firm
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 w-full max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Key Types of DCF Models
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ETc9AfSwzPhBn3Wppx5xYS4BQSVf2j_XC3Tmr76SyEdErg?e=M7aQhC&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ETc9AfSwzPhBn3Wppx5xYS4BQSVf2j_XC3Tmr76SyEdErg?e=M7aQhC&download=1"
                    modelName="Standard Types of DCF Models"
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
                  <div className="w-[370px] h-[185px] overflow-hidden rounded-md flex items-center justify-center mx-auto">
                    <img 
                      src={dcfModelsPreview} 
                      alt="Key Types of DCF Models Preview" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-none">
            <h3 className="text-xl font-semibold mb-4">What Are the Standard Types of <FinancialTerm term="DCF">DCF</FinancialTerm> Models?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Standard Types of <FinancialTerm term="DCF">DCF</FinancialTerm> Models represent three fundamental approaches to business valuation that accommodate different company life cycles and growth patterns. Each model uses discounted cash flow mathematics.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Flexible <FinancialTerm term="DCF">DCF</FinancialTerm> Models:</strong> Accommodates changing revenue growth rates, margin evolution, and operational assumptions across user-defined forecast periods. This approach enables detailed operational modelling while maintaining simplicity for educational understanding. Available in two variants - percentage-based (Growth and Ratio input) and absolute value-based inputs.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Three Stages <FinancialTerm term="DCF">DCF</FinancialTerm> Model:</strong> Models companies experiencing distinct multiple growth phases with different operational characteristics in each stage. This approach reflects real business development patterns while providing mathematical frameworks for valuing companies transitioning from high growth through maturation.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Stable <FinancialTerm term="Growth Rate">Growth</FinancialTerm> Model:</strong> Simplified <FinancialTerm term="DCF">DCF</FinancialTerm> approach assuming constant growth and operational characteristics, ideal for mature companies or quick valuation analysis. This model demonstrates Gordon Growth mathematics in practical business valuation contexts.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>The Framework:</strong> These models demonstrate three distinct <FinancialTerm term="DCF">DCF</FinancialTerm> approaches used in valuation, from simple stable growth models through multiple stage growth to fully flexible frameworks, implementing Professor Damodaran's approach to <FinancialTerm term="DCF">DCF</FinancialTerm> analysis¹ ².
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use the Standard Types of <FinancialTerm term="DCF">DCF</FinancialTerm> Models?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Different companies require different valuation approaches depending on their growth stage, operational complexity, and business model characteristics. This framework enables users to understand when and how to apply different <FinancialTerm term="DCF">DCF</FinancialTerm> methodologies while learning the logic and mathematical relationships that drive each approach.
            </p>

            <h3 className="text-xl font-semibold mb-4">How Do the Standard Types of <FinancialTerm term="DCF">DCF</FinancialTerm> Models Work?</h3>
            <p className="text-lg leading-relaxed mb-4">
              <strong>Integrated Worksheet Architecture:</strong> The distinct <FinancialTerm term="DCF">DCF</FinancialTerm> approaches in each model while sharing common assumptions about currency and denominational settings. This design enables direct comparison across methodologies.
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Mathematical Foundation:</strong> All models employ consistent <FinancialTerm term="DCF">DCF</FinancialTerm> mathematics while accommodating different assumption structures. <FinancialTerm term="Terminal Value">Terminal value</FinancialTerm> calculations, <FinancialTerm term="Discount Rate">discount rate</FinancialTerm> applications, and <FinancialTerm term="FCFF">free cash flow to firm (FCFF)</FinancialTerm> definitions maintain academic standards across all three approaches.
            </p>

            <h4 className="text-lg font-semibold mb-3">Flexible <FinancialTerm term="DCF">DCF</FinancialTerm> Models (Two Variants)</h4>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Flexible <FinancialTerm term="DCF">DCF</FinancialTerm> - Growth and Ratio Input:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Year 1 input for Revenue, Variable costs and <FinancialTerm term="OPEX">Operating expenses (OPEX)</FinancialTerm></li>
              <li>Year-by-year revenue growth percentages (flexible for each year)</li>
              <li>Variable costs and <FinancialTerm term="OPEX">Operating expenses (OPEX)</FinancialTerm> with independent growth rates</li>
              <li>Depreciation, <FinancialTerm term="CAPEX">investments (CapEx)</FinancialTerm>, and <FinancialTerm term="NWC">Net working capital</FinancialTerm> as ratio of Revenue</li>
            </ul>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Flexible <FinancialTerm term="DCF">DCF</FinancialTerm> - Absolute Value Input:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Absolut value input for each year for Revenue, Variable costs and <FinancialTerm term="OPEX">Operating expenses (OPEX)</FinancialTerm></li>
              <li>Absolut value input for each year for Depreciation, <FinancialTerm term="CAPEX">investments (CapEx)</FinancialTerm>, and <FinancialTerm term="NWC">Net working capital</FinancialTerm> as ratio of Revenue</li>
            </ul>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Same type Input for both:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Flexible 1-10 years forecast period with <FinancialTerm term="Terminal Value">terminal value</FinancialTerm></li>
              <li>Input for <FinancialTerm term="Discount Rate">Discount Rate</FinancialTerm> (<FinancialTerm term="WACC">WACC</FinancialTerm>) and <FinancialTerm term="FCFF">Free Cash-Flow to Firm (FCFF)</FinancialTerm> Growth in Terminal Period</li>
              <li>Tax rate applied to <FinancialTerm term="EBITDA">EBIT</FinancialTerm> with NOL carryforward capability</li>
              <li>Initial year input for Cash & Marketable Investments and Debt</li>
              <li>Clean presentation of value bridge from firm value to equity value</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Three Stages DCF Model</h4>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Growth Phase Modelling:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Stage 1: High growth phase with flexible #Years and Growth)</li>
              <li>Stage 2: Transition phase with flexible #Years and Growth)</li>
              <li>Stage 3: Mature phase (with flexible #Years and Growth)</li>
              <li>Terminal value after last year of forecast period using perpetual Cash-Flow growth</li>
            </ul>
            
            <p className="text-lg leading-relaxed mb-4">
              Phases here are typical life-cycle phases for a company, but is assumptions for each phase is 100% up to the user)
            </p>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Value driver input for each stage:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Revenue Growth Rate</li>
              <li>Variable Costs Growth Rate</li>
              <li>OPEX Growth Rate</li>
              <li>Depreciation Growth Rate</li>
              <li>Investments (CapEx) Growth Rate</li>
              <li>Net working capital as ratio of Revenue</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Stable Growth DCF Model</h4>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Streamlined Analysis:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Single set of assumptions for quick valuations</li>
              <li>Direct calculation using Gordon Growth formula</li>
              <li>Visual sensitivity charts showing impact of growth rate changes</li>
              <li>Immediate firm value calculation: FCFF₁/(r-g)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Applications:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Flexible DCF: Complex businesses with varying growth trajectories, detailed business planning, scenarios with changing margins</li>
              <li>Three Stages: High-growth companies maturing over time, technology companies transitioning to stability, businesses with predictable lifecycle patterns</li>
              <li>Stable Growth: Mature companies with predictable cash flows, quick valuations for screening purposes, educational demonstrations of DCF concepts</li>
            </ul>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Limitations:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Simplified operational assumptions exclude detailed competitive dynamics and risk analysis</li>
              <li>Financial forecasts typically miss projections by significant margins due to systematic optimism bias</li>
              <li>Models serve educational purposes and require additional analysis for comprehensive investment decision-making</li>
              <li>Terminal value often dominates total value (60-80%), making growth rate assumptions critical</li>
              <li>NOL carryforward implementation should be verified if material to analysis</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Best Practices</h3>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Model Selection:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Use Stable Growth for mature companies or quick analysis</li>
              <li>Choose Three Stages for companies with clear growth transitions</li>
              <li>Apply Flexible DCF when detailed year-by-year control is needed</li>
              <li className="ml-6">Select percentage vs. absolute inputs based on cost behavior</li>
            </ul>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Implementation Guidelines:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Start with the simplest model that captures the business dynamics</li>
              <li>Test sensitivity to terminal growth rate (must be &lt; discount rate)</li>
              <li>Document rationale for growth rate assumptions</li>
              <li>Compare results across different models for validation</li>
              <li>Be conservative with terminal value assumptions given their impact</li>
            </ul>
            
            <p className="text-lg leading-relaxed mb-4">
              <strong>Technical Notes:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>All models properly calculate Free Cash Flow to Firm (FCFF)</li>
              <li>Terminal value uses standard Gordon Growth: TV = FCFF × (1+g)/(r-g)</li>
              <li>Tax calculations can incorporate NOL carryforward</li>
              <li>Value bridge clearly shows: Firm Value - Debt + Cash = Equity Value</li>
            </ul>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> ¹ Damodaran, Aswath. "Investment Valuation: Tools and Techniques for Determining the Value of Any Asset," 3rd Edition, John Wiley & Sons (2012). ² Damodaran, Aswath. "The Dark Side of Valuation: Valuing Young, Distressed, and Complex Businesses," 2nd Edition, FT Press (2009).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DcfModels;