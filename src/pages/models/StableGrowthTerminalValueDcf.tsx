import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
        <div className="container mx-auto max-w-4xl">
          <div className="text-[12px] mb-4">
            Home &gt; Toolbox &gt; Investment Analysis &gt; Stable Growth - Terminal Value DCF Model
          </div>

          <h1 className="text-[20px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
            Stable Growth - Terminal Value DCF Model
          </h1>

          <p className="text-lg mb-8">
            Stable Growth DCF Analysis: Perpetual Value Asset Evaluation with Terminal Value Focus and Growth Rate Sensitivity
          </p>

          {/* Model Card */}
          <div className="bg-white rounded-lg border shadow-lg p-6 max-w-md mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center" style={{color: 'hsl(209, 49%, 39%)'}}>
              Stable Growth - Terminal Value DCF Model
            </h3>
            
            <div className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EeRY_3bf6h9AiY1VNFHDg10BFUZVbK8McsBzLEGvezaCaQ?e=R1iM3z&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
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

          {/* Introduction Section */}
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h3 className="mb-6">Stable Growth - Terminal Value DCF Model Introduction</h3>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                The Stable Growth Terminal Value DCF Model values ongoing business investments expected to operate indefinitely. By combining explicit forecast periods with Gordon Growth terminal values, this framework captures both near-term visibility and long-term value creation for established operations with predictable growth patterns.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Perpetual Operations Framework</strong>: Designed for investments without natural end dates - production facilities, infrastructure, ongoing services. The model properly handles ongoing capital requirements through calculated maintenance capex rates whilst avoiding the common error of recovering working capital for continuing operations.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Terminal Value Sophistication</strong>: Includes calculated maintenance capex that reduces terminal cash flows, addressing the frequent oversight of ongoing capital needs in perpetuity calculations. The "Lifecycle CAPEX %" automatically calibrates based on initial investment and forecast period requirements.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Strategic Purpose</strong>: Value investments in perpetual operations, assess facilities and infrastructure projects, and analyse long-term business improvements.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                <strong>Target Users</strong>: Business leaders evaluating long-term investments, project managers overseeing perpetual operations, and finance teams analysing ongoing business initiatives.
              </p>
            </div>

            {/* Collapsible Section */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="complete-guide">
                <AccordionTrigger className="text-xl font-bold text-heading">
                  Complete Stable Growth - Terminal Value DCF Model Guide
                </AccordionTrigger>
                <AccordionContent className="prose prose-slate max-w-none">
                  <div className="space-y-6 text-slate-600">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-3">What Is the Stable Growth - Terminal Value DCF Model?</h3>
                      <p className="leading-relaxed mb-4">
                        This model values investments that will continue operating beyond any reasonable forecast horizon. Unlike finite-life investments, these require perpetual reinvestment to maintain operations, making proper terminal value calculation critical.
                      </p>
                      <div>
                        <h4 className="font-semibold text-heading mb-2">Distinguishing Features:</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>No working capital recovery (operations continue indefinitely)</li>
                          <li>Calculated maintenance capex for realistic terminal values</li>
                          <li>Salvage value represents equipment replacement, not termination</li>
                          <li>Terminal value often represents 60-80% of total value</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                      <p className="leading-relaxed mb-4">
                        Standard DCF models often overstate terminal values by ignoring ongoing capital requirements. This model addresses this by explicitly calculating maintenance capex needs based on the business's demonstrated capital intensity during the initial investment period.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-heading">Business Leaders</h4>
                          <p className="leading-relaxed">Long-term planning to evaluate investments in perpetual operations, strategic decisions to assess facilities and infrastructure investments.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading">Project Leaders / Investment Managers</h4>
                          <p className="leading-relaxed">Operational planning to model investments transitioning to steady-state, performance benchmarking to establish long-term value creation targets.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading">Finance Teams</h4>
                          <p className="leading-relaxed">Valuation analysis with proper treatment of perpetual operations, capital planning to understand ongoing investment requirements.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-heading">Key Limitations:</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Internal investments only: Not for M&A or structure-changing transactions</li>
                            <li>Terminal value dominance: Small changes in assumptions create large value swings</li>
                            <li>Perpetuity assumption: May not suit all businesses (disruption risk)</li>
                            <li>Single growth rate: Oversimplifies long-term dynamics</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading">Best Practices:</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Benchmark maintenance capex against internal standards</li>
                            <li>Use conservative terminal growth rates</li>
                            <li>Test break-even terminal growth rate</li>
                            <li>Compare results with similar internal investments</li>
                            <li>Document perpetuity assumptions thoroughly</li>
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
      </div>
    </div>
  );
};

export default StableGrowthTerminalValueDcf;