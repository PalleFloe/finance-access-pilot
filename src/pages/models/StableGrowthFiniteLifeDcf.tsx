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
    openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EVOzm603_HJIgv8iYaF3gEwBp2fEhSIDNCNhFb6wdeJTgA?e=MeeyO9&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Stable Growth - Finite-Life DCF Model - Investment Analysis | Financial Decision Models</title>
        <meta name="description" content="Stable Growth DCF analysis for finite-life assets with predictable revenue and terminal value calculation. Excel tool for project valuation and investment analysis." />
      </Helmet>
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/toolbox/investment-analysis"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Investment Analysis
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            Stable Growth - Finite-Life DCF Model
          </h1>

          <h2 className="mb-8">
            Stable Growth DCF Analysis: Finite-Life Asset Valuation with Predictable Revenue and Terminal Value Calculation
          </h2>

          {/* Model Card */}
          <div className="bg-white rounded-lg border shadow-lg p-6 max-w-md mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center" style={{color: 'hsl(209, 49%, 39%)'}}>
              Stable Growth - Finite-Life DCF Model
            </h3>
            
            <div className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EV98tOl_vhtMoIQk169Mr8QBoCkyy5BE8uHpxd1wuRbT8A?e=8dVhs3&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                variant="brand-green"
                size="lg"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Online & Free
              </Button>
              
              <Button 
                onClick={handleDownload}
                variant="outline"
                size="lg"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Register to Download
              </Button>
            </div>
            
            <div className="mt-6 text-sm text-gray-600">
              <h4 className="font-semibold mb-2">Quick Access Guide</h4>
              <ul className="space-y-1 text-xs">
                <li><strong>Online & Free:</strong> Click to preview this model instantly in your browser</li>
                <li><strong>Register to Download:</strong> Free registration gives you download access to all models</li>
              </ul>
            </div>
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