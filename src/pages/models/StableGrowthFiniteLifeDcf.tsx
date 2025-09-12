import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="text-[12px] mb-4">
          <Link to="/">Home</Link> &gt; <Link to="/toolbox">Toolbox</Link> &gt; <Link to="/toolbox/investment-analysis">Investment Analysis</Link> &gt; Stable Growth - Finite-Life DCF Model
        </div>
        
        {/* Back Link */}
        <div className="mb-4">
          <Link to="/toolbox/investment-analysis" className="text-[12px]">
            ← Back to Investment Analysis
          </Link>
        </div>
        
        {/* Main Title */}
        <h1 className="text-[20px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
          Stable Growth - Finite-Life DCF Model
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg mb-8">
          Stable Growth DCF Analysis: Finite-Duration Project Valuation with Salvage Value Recovery and Working Capital Release
        </p>
      </div>

      {/* Centered Model Card */}
      <div className="max-w-md mx-auto mb-12">
        <div className="bg-white rounded-lg border shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
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
            
            {user ? (
              <Button 
                onClick={handleDownload}
                className="w-full bg-brand-green text-white"
                size="lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download & Free
              </Button>
            ) : (
              <Button 
                onClick={handleDownload}
                variant="outline"
                size="lg"
                className="w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Register to Download
              </Button>
            )}
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <h4 className="font-semibold mb-2">Quick Access Guide</h4>
            <ul className="space-y-1 text-xs">
              <li><strong>Online & Free:</strong> Click to preview this model instantly in your browser</li>
              <li><strong>Register to Download:</strong> Free registration gives you download access to all models</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h3 className="mb-6">Stable Growth - Finite-Life DCF Model Introduction</h3>
        
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            The Stable Growth Finite-Life DCF Model values investments with defined operational periods, such as equipment purchases, fixed-term contracts, or projects with natural endpoints. By explicitly modelling project termination with salvage value recovery and working capital release, this framework provides accurate valuation for finite-duration investments.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Finite-Life Framework</strong>: Unlike perpetual business models, this approach recognises that many investments have natural end points - equipment replacement cycles, contract expiration, or project completion. The model properly handles final-year cash flows including asset disposal and working capital recovery.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Comprehensive Sensitivity Analysis</strong>: Visual sensitivity charts show how each assumption impacts NPV and IRR, enabling users to identify critical value drivers and risk factors. The three-scenario framework tests investment viability across different market conditions.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Strategic Purpose</strong>: Value finite-life projects with proper end-period treatment, assess equipment investments with replacement cycles, and evaluate fixed-term contracts or operational improvements.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            <strong>Target Users</strong>: Business leaders assessing capital projects, project managers planning finite-duration initiatives, and finance teams evaluating time-limited investments.
          </p>
        </div>

        {/* Collapsible Section */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="complete-guide">
            <AccordionTrigger className="text-xl font-bold text-heading">
              Complete Stable Growth - Finite-Life DCF Model Guide
            </AccordionTrigger>
            <AccordionContent className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-600">
                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">What Is the Stable Growth - Finite-Life DCF Model?</h3>
                  <p className="leading-relaxed mb-4">
                    The model addresses investments that generate cash flows for specific periods before terminating. This includes equipment that requires replacement, contractual arrangements with defined terms, or operational projects with clear endpoints.
                  </p>
                  <div>
                    <h4 className="font-semibold text-heading mb-2">Core Components:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Initial investment and working capital requirements</li>
                      <li>Revenue projections with stable growth rates</li>
                      <li>Cost structure (variable and operational expenses)</li>
                      <li>Depreciation over asset lifetime</li>
                      <li>Salvage value or disposal costs at project end</li>
                      <li>Working capital recovery in final year</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Many internal investments don't continue indefinitely. Equipment becomes obsolete, contracts expire, and improvement projects reach completion. Standard perpetuity-based DCF models overvalue these investments by assuming infinite cash flows. This model provides accurate valuation by properly handling project termination.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Business Leaders</h4>
                      <p className="leading-relaxed">Capital allocation to evaluate equipment replacement decisions, strategic planning to assess fixed-term initiatives and improvements.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Project Leaders / Investment Managers</h4>
                      <p className="leading-relaxed">Project evaluation to value extraction projects with defined timelines, implementation planning to model complete project lifecycles.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Finance Teams</h4>
                      <p className="leading-relaxed">Investment analysis to properly value time-limited opportunities, risk assessment to understand sensitivity to project lifetime assumptions.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Key Limitations:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Internal focus: Designed for projects within existing operations</li>
                        <li>Assumes stable operations: May not capture operational volatility</li>
                        <li>Fixed lifetime: Doesn't model lifetime uncertainty or extension options</li>
                        <li>Simplified structure: Single tax rate, no changes to WACC</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Best Practices:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Test sensitivity to lifetime assumptions</li>
                        <li>Consider disposal cost scenarios (negative salvage)</li>
                        <li>Model working capital recovery conservatively</li>
                        <li>Validate against similar completed projects</li>
                        <li>Document salvage value assumptions carefully</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default StableGrowthFiniteLifeDcf;