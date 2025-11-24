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
import financialRatioPreview from "@/assets/financial-ratio-preview.png";

const FinancialRatioCalculator = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Financial Ratio Calculator');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Financial Ratio Calculator');
    console.log('openModel: FinancialRatioCalculator ->', sharePointUrl);
    const win = window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (!win) console.warn('window.open was blocked by the browser');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Financial Ratio Calculator - Comprehensive Financial Analysis | Financial Decision Models</title>
        <meta name="description" content="Comprehensive financial ratio calculator with 30+ ratios across profitability, efficiency, leverage, and market valuation. Excel model for financial statement analysis. Try free online or download." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/financial-ratio-calculator" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Financial Ratio Calculator - Comprehensive Financial Analysis | Financial Decision Models" />
        <meta property="og:description" content="Comprehensive financial ratio calculator with 30+ ratios across profitability, efficiency, leverage, and market valuation. Excel model for financial statement analysis. Try free online or download." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/financial-ratio-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Decision Models" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Financial Ratio Calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Financial Ratio Calculator is a comprehensive analytical tool that computes key financial ratios across four critical categories: Investment Returns, Profitability, Efficiency, and Market Valuation."
              }
            },{
              "@type": "Question",
              "name": "Why Use the Financial Ratio Calculator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Financial ratio analysis is fundamental to understanding business performance, enabling assessment across multiple dimensions and comparative analysis between companies."
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
                "name": "Financial Ratio Calculator"
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
            Financial Ratio Calculator
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Comprehensive Financial Analysis: Investment Returns, Profitability, Efficiency, and Market Valuation Ratios
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 w-full max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Financial Ratio Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ER7RkBdB_1lPoeUV2EJUCAQBbHGABly0QNq3UKTaT12mug?e=EZcabR&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ER7RkBdB_1lPoeUV2EJUCAQBbHGABly0QNq3UKTaT12mug?e=EZcabR&download=1"
                    modelName="Financial Ratio Calculator"
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
                      src={financialRatioPreview} 
                      alt="Financial Ratio Calculator Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-none">
            <h3 className="text-xl font-semibold mb-4">What Is the Financial Ratio Calculator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Financial Ratio Calculator is a comprehensive analytical tool that computes key financial ratios across four critical categories: Investment Returns, Profitability, Efficiency, and Market Valuation. This model provides instant calculation and interpretation of over 20 essential financial ratios used in business analysis and investment decision-making.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use the Financial Ratio Calculator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Financial ratio analysis is fundamental to understanding business performance:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Performance evaluation:</strong> Assess company performance across multiple dimensions</li>
              <li><strong>Comparative analysis:</strong> Compare companies within the same industry or against benchmarks</li>
              <li><strong>Trend analysis:</strong> Track performance changes over time</li>
              <li><strong>Investment decisions:</strong> Support stock selection and portfolio management</li>
              <li><strong>Credit analysis:</strong> Evaluate creditworthiness and financial stability</li>
              <li><strong>Management assessment:</strong> Identify areas for operational improvement</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">How Does the Financial Ratio Calculator Work?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The calculator is organized into four comprehensive categories:
            </p>

            <h4 className="text-lg font-semibold mb-3">Investment Returns Ratios</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Return on Assets (ROA) - measures asset utilization efficiency</li>
              <li>Return on Equity (ROE) - evaluates returns to shareholders</li>
              <li>Return on Invested Capital (ROIC) - assesses capital allocation effectiveness</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Profitability Ratios</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Gross Profit Margin - measures production efficiency</li>
              <li>Operating Margin - evaluates operational profitability</li>
              <li>Net Profit Margin - assesses overall profitability</li>
              <li>EBITDA Margin - analyzes operating performance</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Efficiency Ratios</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Asset Turnover - measures asset utilization</li>
              <li>Inventory Turnover - evaluates inventory management</li>
              <li>Receivables Turnover - assesses collection efficiency</li>
              <li>Working Capital Efficiency - analyzes short-term asset management</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Market Valuation Ratios</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Price-to-Earnings (P/E) - compares market price to earnings</li>
              <li>Price-to-Book (P/B) - relates market value to book value</li>
              <li>Enterprise Value ratios - comprehensive valuation metrics</li>
              <li>Dividend Yield - measures income return to investors</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="text-lg leading-relaxed mb-4">
              This tool is essential for financial analysts, investors, lenders, and business managers. However, users should remember that ratios are most meaningful when compared to industry benchmarks and historical trends. Single-period ratios may not capture cyclical variations or one-time events that could distort analysis.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Palepu, K. G., Healy, P. M., & Peek, E. (2019). Business Analysis and Valuation: Using Financial Statements. Cengage Learning. • White, G. I., Sondhi, A. C., & Fried, D. (2003). The Analysis and Use of Financial Statements. Wiley.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialRatioCalculator;