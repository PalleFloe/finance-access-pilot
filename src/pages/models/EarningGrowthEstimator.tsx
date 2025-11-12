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
import earningGrowthPreview from "@/assets/earning-growth-preview.png";

const EarningGrowthEstimator = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Earning Growth Estimator');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Earning Growth Estimator');
    console.log('openModel: EarningGrowthEstimator ->', sharePointUrl);
    const win = window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (!win) console.warn('window.open was blocked by the browser');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Earning Growth Estimator - ROC-Based Growth Analysis | Financial Decision Models</title>
        <meta name="description" content="Earning growth estimator based on return on capital and reinvestment analysis. Excel model calculates sustainable growth rates for existing and new investments. Try free online or download." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/earning-growth-estimator" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Simple Earning Growth Estimator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Simple Earning Growth Estimator is a systematic analytical tool that projects future earnings growth based on Return on Capital (ROC) and reinvestment patterns."
              }
            },{
              "@type": "Question",
              "name": "Why Use the Simple Earning Growth Estimator?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Understanding the sources and sustainability of earnings growth is crucial for growth sustainability analysis and investment quality assessment."
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
                "name": "Earning Growth Estimator"
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
            Simple Earning Growth Estimator
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Systematic Growth Analysis: ROC-Based Earning Growth Estimation for Existing and New Investments
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 w-full max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Simple Earning Growth Estimator
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/Ecs00ik5tBFGrSrBqSJnXJwBchKiSkElyhRyQMpVTJ9Qfw?e=0LC0aD&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/Ecs00ik5tBFGrSrBqSJnXJwBchKiSkElyhRyQMpVTJ9Qfw?e=0LC0aD&download=1"
                    modelName="Simple Earning Growth Estimator"
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
                      src={earningGrowthPreview} 
                      alt="Simple Earning Growth Estimator Preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="max-w-none">
            <h3 className="text-xl font-semibold mb-4">What Is the Simple Earning Growth Estimator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Simple Earning Growth Estimator is a systematic analytical tool that projects future earnings growth based on Return on Capital (ROC) and reinvestment patterns. This model distinguishes between growth from existing investments and growth from new investments, providing a comprehensive framework for understanding the drivers of sustainable earnings growth.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use the Simple Earning Growth Estimator?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Understanding the sources and sustainability of earnings growth is crucial for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Growth sustainability analysis:</strong> Determine whether current growth rates can be maintained</li>
              <li><strong>Investment quality assessment:</strong> Evaluate the return on incremental investments</li>
              <li><strong>Strategic planning:</strong> Guide capital allocation decisions and growth strategies</li>
              <li><strong>Valuation modelling:</strong> Provide realistic growth assumptions for DCF models</li>
              <li><strong>Performance forecasting:</strong> Project future earnings based on fundamental drivers</li>
              <li><strong>Competitive advantage analysis:</strong> Assess the durability of superior returns</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">How Does the Simple Earning Growth Estimator Work?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The model employs a systematic approach to decompose earnings growth into its fundamental components:
            </p>

            <h4 className="text-lg font-semibold mb-3">Existing Investment Analysis</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Evaluates returns on current invested capital</li>
              <li>Assesses the sustainability of existing competitive advantages</li>
              <li>Considers the natural decline of returns over time</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">New Investment Analysis</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Projects returns on incremental capital investments</li>
              <li>Analyzes reinvestment rates and capital allocation efficiency</li>
              <li>Considers market opportunities and competitive dynamics</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Growth Calculation Framework</h4>
            <p className="text-lg leading-relaxed mb-4">
              The model calculates growth using the fundamental relationship: <strong>Growth = Return on Capital × Reinvestment Rate</strong>. This approach provides insights into both the quality and quantity of growth, enabling more accurate long-term projections.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="text-lg leading-relaxed mb-4">
              This tool is particularly valuable for equity analysts, corporate strategists, and long-term investors focused on sustainable growth companies. However, the model's effectiveness depends on the quality of input assumptions about future returns on capital and competitive dynamics. Users should consider industry life cycles, competitive positioning, and macroeconomic factors when applying the results.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Mauboussin, M. J., & Johnson, D. (2016). Measuring the Moat: Assessing the Magnitude and Sustainability of Value Creation. Credit Suisse Global Financial Strategies. • Damodaran, A. (2021). The Little Book of Valuation: How to Value a Company, Pick a Stock and Profit. Wiley.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningGrowthEstimator;