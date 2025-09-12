import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const StableGrowthFiniteLifeDcf = () => {
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
    openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EVOzm603_HJIgv8iYaF3gEwBp2fEhSIDNCNhFb6wdeJTgA?e=MeeyO9');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Stable Growth - Finite-Life DCF Model - Investment Analysis | Financial Decision Models</title>
        <meta name="description" content="Stable Growth DCF analysis for finite-life assets with predictable revenue and terminal value calculation. Excel tool for project valuation and investment analysis." />
      </Helmet>
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <div className="text-[12px] mb-4">
            Home &gt; Toolbox &gt; Investment Analysis &gt; Stable Growth - Finite-Life DCF Model
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
            Stable Growth - Finite-Life DCF Model
          </h1>
          
          {/* Strategic Purpose Paragraph */}
          <p className="text-lg mb-8">
            Stable Growth DCF Analysis: Finite-Life Asset Valuation with Predictable Revenue and Terminal Value Calculation
          </p>

          {/* Three Tier Buttons */}
          <div className="tier-actions max-w-md mx-auto space-y-3 mb-12">
            <Button 
              onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EV98tOl_vhtMoIQk169Mr8QBoCkyy5BE8uHpxd1wuRbT8A?e=8dVhs3&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
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
              What Is the Stable Growth - Finite-Life DCF Model?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              The Stable Growth - Finite-Life DCF Model provides comprehensive analysis for assets and projects with predictable growth patterns and defined operational lifespans. This model is specifically designed for investments with stable revenue trajectories and known termination dates, such as infrastructure projects, equipment investments, and finite-resource assets.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Unlike perpetual growth models, this implementation focuses on assets with explicit end dates and residual values, making it ideal for project finance, equipment leasing, and investment analysis where terminal value represents asset liquidation rather than ongoing business operations.
            </p>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              Why Was It Developed?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Many investment opportunities involve assets with predictable cash flows but finite operational lives. Traditional perpetual growth DCF models inappropriately apply to these situations, leading to valuation errors and misguided investment decisions. Projects require specialized analysis that accounts for depreciation, asset life cycles, and terminal liquidation values.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              This model addresses the need for rigorous finite-life analysis that properly reflects asset economics, maintenance requirements, and residual value estimation whilst providing comprehensive sensitivity analysis for informed capital allocation decisions.
            </p>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              Who Benefits?
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Project Finance Professionals:</strong> Infrastructure investors and project managers evaluating capital-intensive investments with defined operational periods and predictable cash flow patterns.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Corporate Investment Teams:</strong> Capital allocation specialists assessing equipment purchases, facility investments, and operational projects requiring finite-life valuation frameworks.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Asset Management Firms:</strong> Investment professionals evaluating real estate, infrastructure, and industrial assets with stable cash flows and defined investment horizons.
              </p>
            </div>

            <h2 className="text-[18px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
              How Does the Stable Growth - Finite-Life DCF Model Work?
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Excel Implementation Framework
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Finite-Life Projection System:</strong> Cash flow modeling over defined asset life with stable growth assumptions and integrated residual value calculations.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Asset Life Management:</strong> Comprehensive depreciation modeling, maintenance cost projections, and performance degradation analysis over the asset's operational lifespan.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Terminal Value Analysis:</strong> Residual value estimation based on asset condition, market conditions, and liquidation assumptions at project termination.
                </p>
              </div>
              
              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Financial Projection Structure
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Stable Revenue Modeling:</strong> Predictable cash flow projections with consistent growth rates appropriate for mature assets and established operational patterns.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Operating Cost Analysis:</strong> Detailed maintenance and operational expense modeling with inflation adjustments and performance-based cost variations over the asset lifecycle.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39())'}}>
                  Residual Value Calculation
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Multiple approaches to terminal value including market-based residual values, book value calculations, and salvage value estimates with comprehensive sensitivity analysis across key assumptions.
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
                  <strong>Residual Value Uncertainty:</strong> Terminal asset values subject to market volatility, technological obsolescence, and condition deterioration making sensitivity analysis essential.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Maintenance Cost Escalation:</strong> Operating expenses may increase non-linearly over asset life due to performance degradation and component replacement requirements.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold mb-3" style={{color: 'hsl(209, 49%, 39%)'}}>
                  Best Practices
                </h4>
                <p className="text-lg text-slate-600 leading-relaxed mb-3">
                  <strong>Conservative Residual Values:</strong> Use conservative terminal value estimates supported by comparable asset analysis and market research to avoid overvaluation.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  <strong>Comprehensive Maintenance Modeling:</strong> Include detailed maintenance cost projections based on manufacturer recommendations and operational experience to ensure accurate cash flow analysis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StableGrowthFiniteLifeDcf;