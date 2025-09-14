import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>DCF Models - Professional Discounted Cash Flow Analysis | Financial Decision Models</title>
        <meta name="description" content="Three professional DCF valuation models: Flexible, Three-Stage, and Stable Growth approaches. Excel-based discounted cash flow analysis for business valuation. Try free online, download full versions." />
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
            Standard Types of DCF Models
          </h1>

          <h2 className="mb-8">
            Three DCF Approaches: Flexible DCF, Three Stages DCF, and Stable Growth Models
          </h2>

          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Standard Types of DCF Models
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EZDwnda3bKVNpEIPTHKJeSYBBdETLKSkiT4QIgTyJ02XxA?e=UYozDl&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                variant="brand-green"
                className="w-full text-lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Online & Free
              </Button>
              <DownloadButton 
                sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EY9GPPDe1CJAg7Odk75iyvMBULDBwtfChINbwgs7rk5f_w?e=NcehyR"
                modelName="Standard Types of DCF Models"
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
            <h3 className="text-xl font-semibold mb-4">What Are the Standard Types of DCF Models?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Standard Types of DCF Models provides three comprehensive approaches to discounted cash flow valuation. This model includes a Flexible DCF model for custom projections, a Three Stages DCF model for companies with distinct growth phases, and a Stable Growth Model for mature businesses with consistent growth patterns.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use Different DCF Model Types?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Different business situations require different DCF approaches:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Flexible DCF:</strong> Accommodates unique business models with custom cash flow projections and varying growth assumptions</li>
              <li><strong>Three Stages DCF:</strong> Perfect for companies experiencing high growth, transitional, and mature phases</li>
              <li><strong>Stable Growth Model:</strong> Ideal for mature companies with predictable, steady growth rates</li>
              <li><strong>Comprehensive analysis:</strong> Enables comparison across different valuation approaches for validation</li>
              <li><strong>Scenario planning:</strong> Supports multiple growth assumptions and sensitivity analysis</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">How Do These DCF Models Work?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Each model type employs specific methodologies tailored to different business contexts:
            </p>

            <h4 className="text-lg font-semibold mb-3">Flexible DCF Model</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Allows custom cash flow projections for each forecast period</li>
              <li>Accommodates varying growth rates, margins, and capital requirements</li>
              <li>Includes detailed working capital and capital expenditure modeling</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Three Stages DCF Model</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li><strong>Stage 1:</strong> High growth phase with elevated growth rates</li>
              <li><strong>Stage 2:</strong> Transitional phase with declining growth rates</li>
              <li><strong>Stage 3:</strong> Stable growth phase with perpetual growth assumptions</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Stable Growth Model</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Simple perpetual growth model for mature businesses</li>
              <li>Focuses on sustainable long-term growth rates</li>
              <li>Emphasizes return on invested capital and reinvestment rates</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="text-lg leading-relaxed mb-4">
              These models are fundamental tools for equity research, corporate valuation, and investment analysis. The choice of model depends on the company's lifecycle stage, industry characteristics, and available information. Users should be aware that all DCF models are sensitive to terminal value assumptions and require careful consideration of long-term growth sustainability.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Damodaran, A. (2012). Investment Valuation: Tools and Techniques for Determining the Value of Any Asset. Wiley Finance. • McKinsey & Company. (2020). Valuation: Measuring and Managing the Value of Companies. Wiley.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DcfModels;