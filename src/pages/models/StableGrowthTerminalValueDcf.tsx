import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const StableGrowthTerminalValueDcf = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    window.open(sharePointUrl, '_blank', 'width=1200,height=800');
  };

  const handleDownload = () => {
    if (!user) {
      navigate('/auth');
      return;
    }
    openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EUeSxYZEREdOs1R2_0A3aCMBk_w4aOC8xnxwZUWDIx8VKg?e=eTe0Vp&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Stable Growth - Terminal Value DCF Model - Investment Analysis | Financial Decision Models</title>
        <meta name="description" content="Stable Growth DCF analysis with terminal value focus for perpetual asset evaluation. Growth rate sensitivity and comprehensive valuation analysis. Excel tool for long-term investments." />
      </Helmet>
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="text-[12px] mb-4">
            Home &gt; Toolbox &gt; Investment Analysis &gt; Stable Growth - Terminal Value DCF Model
          </div>

          <Link 
            to="/toolbox/investment-analysis"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Investment Analysis
          </Link>

          {/* Page Title */}
          <h1 className="text-[20px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
            Stable Growth - Terminal Value DCF Model
          </h1>
          
          {/* Strategic Purpose Paragraph */}
          <p className="text-lg mb-8">
            Stable Growth DCF Analysis: Perpetual Value Asset Evaluation with Terminal Value Focus and Growth Rate Sensitivity
          </p>

          {/* Three Tier Buttons */}
          <div className="tier-actions max-w-md mx-auto space-y-3 mb-12">
            <Button 
              onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EeRY_3bf6h9AiY1VNFHDg10BFUZVbK8McsBzLEGvezaCaQ?e=R1iM3z&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
              className="w-full h-11 rounded-md px-8" 
              variant="brand-green" 
              size="lg"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Online & Free
            </Button>
            
            <Button 
              onClick={handleDownload}
              className="w-full h-11 rounded-md px-8" 
              variant="outline" 
              size="lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Register to Download
            </Button>
          </div>

          {/* Quick Access Guide */}
          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <h4 className="text-[14px] font-bold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
              Quick Access Guide
            </h4>
            <ul className="text-[12px] space-y-2">
              <li><strong>Online & Free:</strong> Click to preview this model instantly in your browser</li>
              <li><strong>Register to Download:</strong> Free registration gives you download access to all models</li>
            </ul>
          </div>

          {/* Content Structure */}
          <div className="prose max-w-4xl mx-auto px-6">
            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              What Is the Stable Growth - Terminal Value DCF Model?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Stable Growth - Terminal Value DCF Model provides comprehensive analysis for assets and businesses with predictable long-term growth patterns and significant terminal value components. This model focuses on mature businesses, infrastructure assets, and investments where the majority of value derives from stable, perpetual cash flows beyond the explicit projection period.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Unlike finite-life models, this implementation emphasizes terminal value calculation through perpetual growth assumptions, making it ideal for established businesses, utility investments, and assets with sustainable competitive advantages that generate continuing value beyond detailed forecast periods.
            </p>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              Why Was It Developed?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Many valuable assets generate the majority of their worth through long-term, stable cash flows that extend well beyond reasonable explicit forecasting periods. Traditional finite-life models inadequately capture this terminal value, while simple perpetuity formulas lack the sensitivity analysis necessary for robust investment decision-making.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              This model addresses the critical need for sophisticated terminal value analysis that properly reflects long-term business economics, growth sustainability, and competitive position whilst providing comprehensive sensitivity testing across key terminal assumptions.
            </p>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              Who Benefits?
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Equity Investors:</strong> Fund managers and analysts evaluating mature businesses, utility companies, and established enterprises where terminal value represents the majority of total valuation.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Infrastructure Investment Teams:</strong> Asset managers focused on long-term infrastructure investments, regulated utilities, and assets with stable, predictable cash flow characteristics.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Corporate Development Professionals:</strong> M&A specialists and strategic planning teams evaluating acquisition targets and strategic investments requiring sophisticated terminal value analysis.
              </p>
            </div>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              How Does the Stable Growth - Terminal Value DCF Model Work?
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Excel Implementation Framework
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Perpetual Growth System:</strong> Stable growth projection with sophisticated terminal value calculations and comprehensive sensitivity analysis across growth rate assumptions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Terminal Value Focus:</strong> Detailed analysis of perpetual cash flows with multiple terminal value methodologies and growth rate sustainability assessment.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Sensitivity Integration:</strong> Comprehensive scenario testing across terminal growth rates, discount rates, and margin assumptions to understand valuation drivers.
                </p>
              </div>
              
              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Financial Projection Structure
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Stable Cash Flow Modeling:</strong> Consistent growth assumptions appropriate for mature businesses with established market positions and predictable operational patterns.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Terminal Period Analysis:</strong> Detailed examination of long-term growth sustainability, competitive position maintenance, and operational efficiency assumptions.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39())'}}>
                  Growth Rate Sensitivity Analysis
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Comprehensive testing of terminal growth rate assumptions with economic growth constraints, industry maturity considerations, and competitive sustainability analysis across multiple scenarios.
                </p>
              </div>
            </div>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              Key Limitations & Best Practices
            </h2>
            <div className="space-y-4">
              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Key Limitations
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Terminal Growth Assumptions:</strong> Long-term growth rate estimates highly uncertain and significantly impact valuation, requiring extensive sensitivity analysis and conservative assumptions.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Competitive Position Sustainability:</strong> Assumes maintenance of competitive advantages and market position over extended periods, which may not reflect market dynamics and technological change.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Best Practices
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Conservative Growth Rates:</strong> Use terminal growth rates that do not exceed long-term economic growth expectations and are supported by industry analysis and competitive position assessment.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Multiple Validation Methods:</strong> Cross-validate terminal value calculations using exit multiple approaches and comparable company analysis to ensure reasonable valuation outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StableGrowthTerminalValueDcf;