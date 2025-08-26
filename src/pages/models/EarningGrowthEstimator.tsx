import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const EarningGrowthEstimator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadModel = () => {
    const link = document.createElement('a')
    link.href = 'https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EVW1RCNEEANCsNn-BuPXoxMBpZimPAuND0_e9g_doF3GZQ?e=EhH6Ll'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/toolbox/financial-fundamentals"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Financial Fundamentals
          </Link>

          <h1 className="mb-4">
            Simple Earning Growth Estimator
          </h1>

          <h2 className="mb-8">
            Systematic Growth Analysis: ROC-Based Earning Growth Estimation for Existing and New Investments
          </h2>

          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Simple Earning Growth Estimator
              </CardTitle>
              <CardDescription>
                Systematic Growth Analysis: ROC-Based Earning Growth Estimation for Existing and New Investments
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={downloadModel}
              >
                Open Model
              </Button>
              <p className="text-xs text-slate-500 text-center">
                ✨ Free access • No registration • Use immediately in your browser
              </p>
            </CardContent>
          </Card>

          <div className="prose prose-slate max-w-none">
            <h3 className="mb-4">What Is the Simple Earning Growth Estimator?</h3>
            <p className="leading-relaxed mb-4">
              The Simple Earning Growth Estimator is a systematic analytical tool that projects future earnings growth based on Return on Capital (ROC) and reinvestment patterns. This model distinguishes between growth from existing investments and growth from new investments, providing a comprehensive framework for understanding the drivers of sustainable earnings growth.
            </p>

            <h3 className="mb-4">Why Use the Simple Earning Growth Estimator?</h3>
            <p className="leading-relaxed mb-4">
              Understanding the sources and sustainability of earnings growth is crucial for:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Growth sustainability analysis:</strong> Determine whether current growth rates can be maintained</li>
              <li><strong>Investment quality assessment:</strong> Evaluate the return on incremental investments</li>
              <li><strong>Strategic planning:</strong> Guide capital allocation decisions and growth strategies</li>
              <li><strong>Valuation modeling:</strong> Provide realistic growth assumptions for DCF models</li>
              <li><strong>Performance forecasting:</strong> Project future earnings based on fundamental drivers</li>
              <li><strong>Competitive advantage analysis:</strong> Assess the durability of superior returns</li>
            </ul>

            <h3 className="mb-4">How Does the Simple Earning Growth Estimator Work?</h3>
            <p className="leading-relaxed mb-4">
              The model employs a systematic approach to decompose earnings growth into its fundamental components:
            </p>

            <h4 className="mb-3">Existing Investment Analysis</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Evaluates returns on current invested capital</li>
              <li>Assesses the sustainability of existing competitive advantages</li>
              <li>Considers the natural decline of returns over time</li>
            </ul>

            <h4 className="mb-3">New Investment Analysis</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Projects returns on incremental capital investments</li>
              <li>Analyzes reinvestment rates and capital allocation efficiency</li>
              <li>Considers market opportunities and competitive dynamics</li>
            </ul>

            <h4 className="mb-3">Growth Calculation Framework</h4>
            <p className="leading-relaxed mb-4">
              The model calculates growth using the fundamental relationship: <strong>Growth = Return on Capital × Reinvestment Rate</strong>. This approach provides insights into both the quality and quantity of growth, enabling more accurate long-term projections.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="leading-relaxed mb-4">
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