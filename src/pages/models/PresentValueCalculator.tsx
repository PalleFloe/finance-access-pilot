import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

const PresentValueCalculator = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Simple Present Value Calculator');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Simple Present Value Calculator');
    console.log('openModel: PresentValueCalculator ->', sharePointUrl);
    const win = window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (!win) console.warn('window.open was blocked by the browser');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Present Value Calculator - Time Value of Money Analysis | Financial Decision Models</title>
        <meta name="description" content="Simple present value calculator for time value of money analysis. Excel model covers one-time payments, annuities, growing annuities, and perpetuities. Educational tool, try free online or download." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Simple Present Value Calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Simple Present Value Calculator is a comprehensive financial tool designed to calculate the present value of various types of cash flows."
              }
            },{
              "@type": "Question",
              "name": "Why Use the Simple Present Value Calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Present value calculations are fundamental to finance, allowing investors and analysts to compare different investment opportunities on an equal footing."
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
                "name": "Present Value Calculator"
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
            Simple Present Value Calculator
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Present Value Analysis: One-time, Annuity, Growing Annuity, Perpetuity, and Growing Perpetuity Calculations
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Simple Present Value Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EUkStcEBoOlDo9HwLrtgbwUBlXXr0a2DJb-tWnsb18tqiw?e=NtxTJE&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EUkStcEBoOlDo9HwLrtgbwUBlXXr0a2DJb-tWnsb18tqiw?e=NtxTJE&download=1"
                    modelName="Simple Present Value Calculator"
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-md">
              <ModelInfoPanel />
            </div>
          </div>

          <div className="max-w-none">
            <h3 className="text-xl font-semibold mb-4">What Is the Simple Present Value Calculator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Simple Present Value Calculator is a comprehensive financial tool designed to calculate the present value of various types of cash flows. This model supports five different calculation methods: one-time payments, annuities, growing annuities, perpetuities, and growing perpetuities, making it an essential tool for financial analysis and investment decision-making.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use the Simple Present Value Calculator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Present value calculations are fundamental to finance, allowing investors and analysts to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Compare different investment opportunities</strong> on an equal footing by converting future cash flows to today's dollars</li>
              <li><strong>Make informed capital allocation decisions</strong> by understanding the true value of future income streams</li>
              <li><strong>Evaluate bonds, annuities, and other financial instruments</strong> with predictable payment patterns</li>
              <li><strong>Assess the value of perpetual income streams</strong> such as preferred dividends or rental income</li>
              <li><strong>Account for growth in cash flows</strong> when analyzing investments with escalating returns</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">How Does the Simple Present Value Calculator Work?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The calculator employs time value of money principles to discount future cash flows back to their present value equivalent. Each calculation type serves specific scenarios:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>One-time Payment:</strong> Calculates the present value of a single future cash flow</li>
              <li><strong>Annuity:</strong> Values a series of equal payments over a specified period</li>
              <li><strong>Growing Annuity:</strong> Accounts for payments that increase at a constant growth rate</li>
              <li><strong>Perpetuity:</strong> Values an infinite series of equal payments</li>
              <li><strong>Growing Perpetuity:</strong> Values an infinite series of payments growing at a constant rate</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="text-lg leading-relaxed mb-4">
              This tool is particularly valuable for bond valuation, pension calculations, real estate analysis, and investment appraisal. However, users should be aware that the model assumes constant discount rates and, where applicable, constant growth rates, which may not reflect real-world variability.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Brealey, R. A., Myers, S. C., & Allen, F. (2020). Principles of Corporate Finance. McGraw-Hill Education. • Ross, S. A., Westerfield, R. W., & Jaffe, J. (2019). Corporate Finance. McGraw-Hill Education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentValueCalculator;