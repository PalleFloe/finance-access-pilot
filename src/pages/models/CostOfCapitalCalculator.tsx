import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

const CostOfCapitalCalculator = () => {
  const { trackOnlineOpen } = useAnalytics();
  
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Cost of Capital Calculator - WACC & CAPM Analysis | Financial Decision Models</title>
        <meta name="description" content="WACC and cost of capital calculator using CAPM methodology. Excel model calculates cost of equity, debt, and weighted average cost of capital. Academic tool, try free online or download." />
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            Simple Cost of Capital Calculator
          </h1>

          <h2 className="mb-8">
            WACC Analysis: Cost of Equity, Cost of Debt, and Weighted Average Cost of Capital Calculation
          </h2>

          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Simple Cost of Capital Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ERu0HmuKBFNHptyvmTdgJt8Bii1B3ugEGH0fmrgaZixlrA?e=cfz5A0&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                variant="brand-green"
                className="w-full text-lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Online & Free
              </Button>
              <DownloadButton 
                sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/Eb3e7EazzEVEvq_Keoi6eHEBV2qjvkoONyrTUErOMs3xmg?e=iKYR0g"
                modelName="Simple Cost of Capital Calculator"
                className="w-full"
              />
              <div className="mt-1 pt-1 text-xs text-muted-foreground">
                <strong className="text-primary">Quick Access Guide:</strong><br />
                <span>Click "Online & Free" for instant online preview (no registration)</span>
                <br /><span>Click "Download & Free" for browser embedded Excel with download capability (registration required)</span>
              </div>
            </CardContent>
          </Card>

          <div className="max-w-none">
            <h3 className="text-xl font-semibold mb-4">What Is the Simple Cost of Capital Calculator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Simple Cost of Capital Calculator is a fundamental financial tool that determines a company's Weighted Average Cost of Capital (WACC). This model calculates the cost of equity, cost of debt, and combines them based on the company's capital structure to provide the overall cost of capital, which is essential for investment evaluation and corporate valuation.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use the Simple Cost of Capital Calculator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The cost of capital serves as a critical benchmark for financial decision-making:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Investment evaluation:</strong> Provides the hurdle rate for evaluating new projects and investments</li>
              <li><strong>Company valuation:</strong> Serves as the discount rate in DCF models for enterprise valuation</li>
              <li><strong>Capital structure optimization:</strong> Helps determine the optimal mix of debt and equity financing</li>
              <li><strong>Performance measurement:</strong> Establishes minimum acceptable returns for value creation</li>
              <li><strong>Strategic planning:</strong> Supports long-term financial planning and capital allocation decisions</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">How Does the Simple Cost of Capital Calculator Work?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The calculator employs the standard WACC formula, incorporating three key components:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Cost of Equity:</strong> Calculated using the Capital Asset Pricing Model (CAPM) or other appropriate methods</li>
              <li><strong>Cost of Debt:</strong> Determined from current borrowing rates adjusted for tax benefits</li>
              <li><strong>Capital Structure Weights:</strong> Based on market values of debt and equity</li>
            </ul>
            <p className="text-lg leading-relaxed mb-4">
              The model accounts for the tax deductibility of interest payments, providing an after-tax cost of debt that reflects the actual economic cost to the company.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="text-lg leading-relaxed mb-4">
              This tool is essential for corporate finance professionals, investment analysts, and business valuators. However, users should recognize that WACC calculations require several assumptions about market conditions, beta estimates, and risk premiums that may vary over time. The model is most effective when used with current market data and regularly updated inputs.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Damodaran, A. (2012). Investment Valuation: Tools and Techniques for Determining the Value of Any Asset. Wiley Finance. • Koller, T., Goedhart, M., & Wessels, D. (2020). Valuation: Measuring and Managing the Value of Companies. McKinsey & Company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfCapitalCalculator;