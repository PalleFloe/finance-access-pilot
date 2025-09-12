import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
    openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ESPxX1oplpdOqJHTXTOyqMwBzUKjyDHCll44KCQmivCPuw?e=u5p871&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Flexible Year by Year DCF Model - Investment Analysis | Financial Decision Models</title>
        <meta name="description" content="Dynamic DCF analysis with year-by-year projections and terminal value options. Flexible growth rates and comprehensive sensitivity analysis. Try free online, download full version." />
      </Helmet>
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-[12px] mb-4">
            Home &gt; Toolbox &gt; Investment Analysis &gt; Flexible Year by Year DCF Model
          </div>

          <h1 className="text-[20px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
            Flexible Year by Year DCF Model
          </h1>

          <p className="text-lg mb-8">
            Flexible DCF Analysis: Dynamic Year-by-Year Projections with Variable Growth Rates and Terminal Value Options
          </p>

          {/* Model Card */}
          <div className="bg-white rounded-lg border shadow-lg p-6 max-w-md mx-auto mb-12">
            <h3 className="text-xl font-semibold mb-4 text-center" style={{color: 'hsl(209, 49%, 39%)'}}>
              Flexible Year by Year DCF Model
            </h3>
            
            <div className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EY78ilnaxydIr8BatvSPcZYB3tX9beQ6CJQRnrWGP5qcbg?e=9685oH&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
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
            <h3 className="mb-6">Flexible Year by Year DCF Model Introduction</h3>
            
            <div className="prose prose-slate max-w-none mb-8">
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                The Flexible Year by Year DCF Model provides comprehensive investment analysis through customisable annual projections. Unlike simplified constant-growth models, this framework allows different growth rates, margins, and cost structures for each year of the forecast period, reflecting real-world business dynamics.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Dynamic Flexibility</strong>: Users can adjust revenue growth rates, variable cost percentages, and operational expenses independently for each forecast year. This granular control enables realistic modelling of business cycles, market maturation, and operational improvements over time.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Terminal Value Integration</strong>: The model includes Gordon Growth terminal value calculations for businesses continuing beyond the explicit forecast period, with clear presentation of terminal value's contribution to total firm value.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Strategic Purpose</strong>: Enable detailed investment analysis with year-by-year flexibility, support strategic planning with realistic growth trajectories, and provide comprehensive valuation with terminal value options.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                <strong>Target Users</strong>: Business leaders evaluating strategic investments, project managers planning complex initiatives, and finance teams requiring detailed projection capabilities.
              </p>
            </div>

            {/* Collapsible Section */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="complete-guide">
                <AccordionTrigger className="text-xl font-bold text-heading">
                  Complete Flexible Year by Year DCF Model Guide
                </AccordionTrigger>
                <AccordionContent className="prose prose-slate max-w-none">
                  <div className="space-y-6 text-slate-600">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-3">What Is the Flexible Year by Year DCF Model?</h3>
                      <p className="leading-relaxed mb-4">
                        The Flexible Year by Year DCF Model enables detailed cash flow projections with complete control over annual assumptions. This approach recognises that businesses rarely maintain constant growth rates or margins, instead experiencing varying performance across different periods.
                      </p>
                      <div>
                        <h4 className="font-semibold text-heading mb-2">Core Analytical Framework:</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Year-by-year revenue growth estimates (rather than single growth rate)</li>
                          <li>Variable cost percentages estimated annually</li>
                          <li>Year-by-year operational expense growth estimates</li>
                          <li>Investment, depreciation and working capital estimated annually</li>
                          <li>Terminal value calculation using Gordon Growth methodology</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                      <p className="leading-relaxed mb-4">
                        Traditional DCF models often oversimplify by assuming constant growth rates and margins. Real businesses experience fluctuating performance - rapid early growth followed by maturation, margin improvements from scale efficiencies, or temporary setbacks requiring recovery periods.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-heading">Business Leaders</h4>
                          <p className="leading-relaxed">Strategic decisions to evaluate major capital investments with varying return profiles, resource allocation to compare projects with different cash flow patterns.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading">Project Leaders / Investment Managers</h4>
                          <p className="leading-relaxed">Detailed planning to model specific operational scenarios with annual granularity, performance tracking to establish benchmarks for investment monitoring.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading">Finance Teams</h4>
                          <p className="leading-relaxed">Investment analysis to provide detailed valuations for complex opportunities, business partnering to support decision-makers with flexible modelling.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-heading">Key Limitations:</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Internal investments focus: Designed for projects within existing corporate structure</li>
                            <li>Forecast reliability: Projections beyond 3-5 years become increasingly uncertain</li>
                            <li>Terminal value sensitivity: Often represents 50-75% of total value</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-heading">Best Practices:</h4>
                          <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Use conservative terminal growth rates</li>
                            <li>Test sensitivity to key assumptions</li>
                            <li>Focus detail on near-term years where visibility is higher</li>
                            <li>Document assumption rationale</li>
                            <li>Validate against comparable internal projects</li>
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

export default FlexibleYearByYearDcf;