import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const FlexibleYearByYearDcf = () => {
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
    openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ESPxX1oplpdOqJHTXTOyqMwBzUKjyDHCll44KCQmivCPuw?e=u5p871');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Flexible Year by Year DCF Model - Investment Analysis | Financial Decision Models</title>
        <meta name="description" content="Dynamic DCF analysis with year-by-year projections and terminal value options. Flexible growth rates and comprehensive sensitivity analysis. Try free online, download full version." />
      </Helmet>
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="text-[12px] mb-4">
            Home &gt; Toolbox &gt; Investment Analysis &gt; Flexible Year by Year DCF Model
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
            Flexible Year by Year DCF Model
          </h1>
          
          {/* Strategic Purpose Paragraph */}
          <p className="text-lg mb-8">
            Flexible DCF Analysis: Dynamic Year-by-Year Projections with Variable Growth Rates and Terminal Value Options
          </p>

          {/* Three Tier Buttons */}
          <div className="tier-actions max-w-md mx-auto space-y-3 mb-12">
            <Button 
              onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EY78ilnaxydIr8BatvSPcZYB3tX9beQ6CJQRnrWGP5qcbg?e=9685oH&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
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
            
            <Button 
              className="w-full h-11 rounded-md px-8 bg-[#f5f5f5] text-[#999] border-[#ddd] cursor-not-allowed" 
              disabled 
              size="lg"
            >
              Coming Soon - Full Ownership
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
              <li><strong>Full Ownership:</strong> Coming soon - purchase unprotected versions with commercial rights</li>
            </ul>
          </div>

          {/* Content Structure */}
          <div className="prose max-w-4xl mx-auto px-6">
            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              What Is the Flexible Year by Year DCF Model?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Flexible Year by Year DCF Model provides comprehensive discounted cash flow analysis with dynamic year-by-year projections and variable growth rate capabilities. This model accommodates businesses with changing growth patterns, seasonal variations, and complex revenue trajectories that require flexible forecasting frameworks rather than steady-state assumptions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Unlike traditional DCF models that assume constant growth rates, this implementation allows users to specify different growth rates, margins, and operational metrics for each projection year, making it ideal for businesses experiencing transition phases, market evolution, or strategic pivots that affect financial performance over time.
            </p>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              Why Was It Developed?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Traditional DCF models often oversimplify business dynamics by assuming constant growth rates and stable margins throughout the projection period. Real businesses experience variable performance due to market cycles, competitive dynamics, operational improvements, and strategic initiatives that affect financial performance differently across time periods.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              This model addresses the need for more nuanced financial analysis that reflects actual business complexity whilst maintaining analytical rigor and providing comprehensive sensitivity analysis capabilities for informed investment decision-making.
            </p>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              Who Benefits?
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Investment Professionals:</strong> Portfolio managers and analysts evaluating companies with complex growth trajectories, seasonal businesses, or firms undergoing strategic transitions requiring detailed year-by-year analysis.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Corporate Finance Teams:</strong> Business development and strategic planning professionals assessing capital allocation decisions, acquisition opportunities, and internal project valuations requiring flexible forecasting capabilities.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Financial Advisors:</strong> Investment advisors and consultants providing sophisticated valuation analysis for clients requiring detailed financial modeling with explicit assumption documentation and sensitivity testing.
              </p>
            </div>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              How Does the Flexible Year by Year DCF Model Work?
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Excel Implementation Framework
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Year-by-Year Projection System:</strong> Independent growth rates, margins, and operational metrics for each projection year with integrated terminal value calculation options.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>User Interface Standards:</strong> Color-coded Excel inputs with yellow cells for user assumptions, white cells for calculated values, and grey cells with bold text for key results and sensitivity analysis.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Real-Time Analysis:</strong> Immediate updates as users modify assumptions, enabling comprehensive scenario testing and sensitivity analysis across multiple variables simultaneously.
                </p>
              </div>
              
              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Financial Projection Structure
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Revenue and Growth Modeling:</strong> Flexible revenue projections with year-specific growth rates, seasonal adjustments, and market evolution assumptions tailored to business dynamics.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Operating Analysis:</strong> Detailed cost structure modeling with variable margin assumptions, operating leverage effects, and efficiency improvement trajectories over the projection period.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39())'}}>
                  Terminal Value Options
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Multiple terminal value methodologies including perpetual growth models, exit multiple approaches, and finite-life calculations with comprehensive sensitivity analysis across terminal assumptions.
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
                  <strong>Projection Accuracy:</strong> Year-by-year forecasts become increasingly unreliable over extended periods, making sensitivity analysis essential for meaningful insights.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Assumption Dependencies:</strong> Results highly sensitive to growth rate assumptions, terminal value estimates, and discount rate selections requiring comprehensive documentation and validation.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Best Practices
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Conservative Assumptions:</strong> Use realistic growth rate assumptions supported by market analysis and historical performance data to maintain analytical credibility.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Comprehensive Sensitivity Testing:</strong> Test sensitivity across key variables including growth rates, terminal assumptions, and discount rates to understand valuation drivers and critical dependencies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlexibleYearByYearDcf;