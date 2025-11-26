import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { getFaqJson } from "@/seo/faqs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import FinancialTerm from "@/components/FinancialTerm";
import ModelInternalLinks from "@/components/ModelInternalLinks";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';
import costOfCapitalPreview800 from "@/assets/cost-of-capital-preview-800.webp";
import costOfCapitalPreview400 from "@/assets/cost-of-capital-preview-400.webp";

const CostOfCapitalCalculator = () => {
  const { trackOnlineOpen } = useAnalytics();
  const faqJson = getFaqJson("model-cost-of-capital");
  
  // Track page visit automatically
  usePageVisitTracking('Simple Cost of Capital Calculator');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Simple Cost of Capital Calculator');
    console.log('openModel: CostOfCapitalCalculator ->', sharePointUrl);
    const win = window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (!win) console.warn('window.open was blocked by the browser');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>WACC Calculator – Excel Cost of Capital Model (Free Download)</title>
        <meta name="description" content="Easy-to-use Excel WACC calculator for valuation and investment decisions. Free online preview and downloadable template with step-by-step guidance." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/cost-of-capital-calculator" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cost of Capital Calculator - WACC & CAPM Analysis | Financial Decision Models" />
        <meta property="og:description" content="WACC and cost of capital calculator using CAPM methodology. Excel model calculates cost of equity, debt, and weighted average cost of capital. Academic tool, try free online or download." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/cost-of-capital-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Decision Models" />
        <meta property="og:locale" content="en_GB" />
        
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
                "name": "Financial Fundamentals",
                "item": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Cost of Capital Calculator",
                "item": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/cost-of-capital-calculator"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Cost of Capital Calculator",
            "description": "WACC and cost of capital calculator using CAPM methodology. Calculates cost of equity, debt, and weighted average cost of capital.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": ["Windows", "macOS"],
            "softwareHelp": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/cost-of-capital-calculator",
            "image": "https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png",
            "url": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/cost-of-capital-calculator",
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
            to="/toolbox/financial-fundamentals"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Financial Fundamentals
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            WACC Calculator – Professional Excel Model
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            <FinancialTerm term="WACC">WACC</FinancialTerm> Analysis: Cost of Equity, Cost of Debt, and Weighted Average Cost of Capital Calculation
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 w-full max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Simple Cost of Capital Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ES8CsFO8b8ZAnLGVZDXxGRwBLRztELwhbnq9kpJvUX0YQA?e=c5P1l1&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ES8CsFO8b8ZAnLGVZDXxGRwBLRztELwhbnq9kpJvUX0YQA?e=c5P1l1&download=1"
                    modelName="Simple Cost of Capital Calculator"
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
                      src={costOfCapitalPreview800}
                      srcSet={`${costOfCapitalPreview400} 400w, ${costOfCapitalPreview800} 800w`}
                      sizes="(max-width: 768px) 100vw, 360px"
                      width="800"
                      height="600"
                      alt="Simple Cost of Capital Calculator Preview" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-none">
            <h3 className="text-xl font-semibold mb-4">What Is the Simple Cost of Capital Calculator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Simple Cost of Capital Calculator is a fundamental financial tool that determines a company's <FinancialTerm term="WACC">Weighted Average Cost of Capital (WACC)</FinancialTerm>. This model calculates the cost of equity, cost of debt, and combines them based on the company's capital structure to provide the overall cost of capital, which is essential for investment evaluation and corporate valuation.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use the Simple Cost of Capital Calculator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The cost of capital serves as a critical benchmark for financial decision-making:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Investment evaluation:</strong> Provides the hurdle rate for evaluating new projects and investments</li>
              <li><strong>Company valuation:</strong> Serves as the discount rate in <FinancialTerm term="DCF">DCF</FinancialTerm> models for enterprise valuation</li>
              <li><strong>Capital structure optimization:</strong> Helps determine the optimal mix of debt and equity financing</li>
              <li><strong>Performance measurement:</strong> Establishes minimum acceptable returns for value creation</li>
              <li><strong>Strategic planning:</strong> Supports long-term financial planning and capital allocation decisions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">How Does the Simple Cost of Capital Calculator Work?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The calculator employs the standard <FinancialTerm term="WACC">WACC</FinancialTerm> formula, incorporating three key components:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Cost of Equity:</strong> Calculated using the <FinancialTerm term="CAPM">Capital Asset Pricing Model (CAPM)</FinancialTerm> or other appropriate methods</li>
              <li><strong>Cost of Debt:</strong> Determined from current borrowing rates adjusted for tax benefits</li>
              <li><strong>Capital Structure Weights:</strong> Based on market values of debt and equity</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              The model accounts for the tax deductibility of interest payments, providing an after-tax cost of debt that reflects the actual economic cost to the company.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="text-lg leading-relaxed mb-4">
              This tool is essential for corporate finance professionals, investment analysts, and business valuators. However, users should recognize that <FinancialTerm term="WACC">WACC</FinancialTerm> calculations require several assumptions about market conditions, <FinancialTerm term="Beta">beta</FinancialTerm> estimates, and <FinancialTerm term="Risk Premium">risk premiums</FinancialTerm> that may vary over time. The model is most effective when used with current market data and regularly updated inputs.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Damodaran, A. (2012). Investment Valuation: Tools and Techniques for Determining the Value of Any Asset. Wiley Finance. • Koller, T., Goedhart, M., & Wessels, D. (2020). Valuation: Measuring and Managing the Value of Companies. McKinsey & Company.
            </p>
          </div>

          <ModelInternalLinks 
            categoryName="Investment Analysis Models"
            categoryUrl="/toolbox/investment-analysis"
            relatedModels={[
              { name: "Three Stage DCF Model", url: "/toolbox/investment-analysis/three-stage-dcf-model" },
              { name: "Project Scenario Model", url: "/toolbox/investment-analysis/project-scenario-model" },
              { name: "Earning Growth Estimator", url: "/toolbox/investment-analysis/earning-growth-estimator" }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CostOfCapitalCalculator;