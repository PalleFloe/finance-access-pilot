import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import { useEffect } from "react";

const FirstChicagoValuation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>First Chicago Method - Scenario-Based Startup Valuation | Financial Decision Models</title>
        <meta name="description" content="First Chicago startup valuation model with scenario-based DCF analysis. Excel tool models downside, base, and upside cases with probability weighting. Try free online, download full version." />
      </Helmet>
      <Header />
      
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-4">
          <Link 
            to="/toolbox/startup-valuations"
            className="text-[12px]"
          >
            ← Back to Startup Valuations
          </Link>
        </div>

        <h1 className="text-[20px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
          First Chicago Valuation Model
        </h1>

        <p className="text-lg mb-8">
          Simple Scenario Based DCF Model for Startup Valuation with Exit Value based on both EBITDA and Revenue
        </p>
      </div>

      <div className="max-w-md mb-12">
        <div className="bg-white rounded-lg border shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
            First Chicago Valuation Model
          </h3>
          
          <div className="space-y-3">
            <Button 
              onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EYD8J82OTqNErjVgb7FLT7wBHd1p0R53hQjs4gZWZQBiJg?action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
              className="w-full"
              variant="brand-green"
              size="lg"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Online & Free
            </Button>
            
            <DownloadButton 
              sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EYlsAZtZS69LoWk_ONge0A4BV2efHA30RY3YINOML4cdKA?e=IL6HZM"
              modelName="First Chicago Valuation Model"
              className="w-full"
            />
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

      <div className="max-w-6xl mx-auto px-6">
        {/* Introduction Headline */}
        <h3 className="mb-6">First Chicago Valuation Model Introduction</h3>

        {/* Short Description */}
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            The First Chicago Valuation Model provides scenario-based analysis that addresses the fundamental uncertainty inherent in startup valuation.¹ ² By modelling multiple potential outcomes—downside, base and upside scenarios with probability weighting, this approach delivers robust valuations that acknowledge both upside potential and downside risks for informed investment decision-making.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Multi-Scenario Approach</strong>: Unlike single-point estimate methods that rely heavily on discount rates to account for uncertainty, the First Chicago Model explicitly models diverse business trajectories from potential failure through exceptional success.¹ ² This decomposition enables stakeholders to understand specific value drivers and risk factors rather than aggregating complex uncertainties into single numbers.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Framework</strong>: The method combines simple financial cash-flow modelling for each scenario with probability weighting across a flexible 3-5 year period and precise discount rate application to estimate net present value.¹ ³ This approach reduces the optimism bias common in traditional venture capital methods whilst providing the analytical depth necessary for institutional investment decisions.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Strategic Purpose</strong>: Establish credible valuations through explicit risk decomposition, support investment committee analysis with scenario coverage, and enable portfolio construction decisions based on probability-weighted return distributions.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            <strong>Target Users</strong>: Venture capital investors conducting systematic deal evaluation, growth-stage entrepreneurs preparing multi-scenario business cases, and financial advisors requiring early-stage valuation frameworks with explicit uncertainty acknowledgment.
          </p>
        </div>

        {/* Expandable Section */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="complete-guide">
            <AccordionTrigger className="mb-3">
              Complete First Chicago Valuation Model Guide
            </AccordionTrigger>
            <AccordionContent className="prose prose-slate max-w-none">
              <div className="space-y-6 text-slate-600">
                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Overview and Strategic Framework</h3>
                  <p className="leading-relaxed mb-4">
                    The First Chicago Valuation Model provides scenario-based analysis that addresses the fundamental uncertainty inherent in startup valuation. By modelling multiple potential outcomes—downside, base and upside scenarios with probability weighting, this approach delivers robust valuations that acknowledge both upside potential and downside risks for informed investment decision-making.
                  </p>
                  <p className="leading-relaxed mb-4">
                    <strong>Multi-Scenario Approach</strong>: Unlike single-point estimate methods that rely heavily on discount rates to account for uncertainty, the First Chicago implementation explicitly models diverse business trajectories from potential failure through exceptional success. This decomposition enables stakeholders to understand specific value drivers and risk factors rather than aggregating complex uncertainties into single numbers.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">What Is the First Chicago Valuation Model?</h3>
                  <p className="leading-relaxed mb-4">
                    The First Chicago Valuation Model is a scenario-based valuation framework originally developed by the venture capital division of First Chicago Bank in 1970.² The implementation addresses startup valuation uncertainty through multi-scenario analysis that models the full range of potential business outcomes with probability weighting and sensitivity analysis.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Three-Scenario Framework</h3>
                  <p className="leading-relaxed mb-4">
                    The method requires assigning probability weightings to each scenario, with standard allocations typically being 25% for Upside, 50% for Base Case, and 25% for Downside scenarios based on venture capital research.¹ ² These probabilities can be adjusted based on specific company circumstances and market conditions.
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-heading">Upside Scenario</h4>
                      <p className="text-base">Optimistic performance with management team expectations and favourable market conditions, revenue growth exceeding initial projections with premium exit valuations.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Base Case Scenario</h4>
                      <p className="text-base">Realistic performance representing the most likely outcome based on detailed due diligence, revenue and profitability meeting base case projections.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Downside Case Scenario</h4>
                      <p className="text-base">Conservative performance with challenges in execution or market conditions, below-projection performance with margin pressure and distressed exit scenarios.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Traditional venture capital methods suffer from optimism bias by projecting only positive outcomes and relying on discount rates to account for risk uncertainty. Professional investors require explicit understanding of both upside potential and downside risks that single-point estimates cannot address.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Studies demonstrate that scenario-based approaches provide superior decision support compared to single-point estimates, enabling more informed resource allocation and risk assessment across diverse business trajectories.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                  <div className="space-y-3">
                    <p><strong>Venture Capital Investors</strong>: Investment and Valuation analysis with risk-return presentation, systematic evaluation of multiple business trajectories and portfolio construction understanding, decision support with scenario analysis and probability-weighted return distributions for informed investment decision-making.</p>
                    <p><strong>Growth-Stage Entrepreneurs</strong>: Business planning with multi-scenario business planning, resource allocation implications and presentation of business potential with explicit risk acknowledgment, fundraising preparation with credible valuation ranges that demonstrate analytical sophistication and realistic outcome assessment.</p>
                    <p><strong>Financial Advisors</strong>: Client advisory with scenario analysis for investment decision support, valuation ranges for negotiation positioning and transaction advisory capabilities.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">How Does the First Chicago Valuation Model Work?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Excel Implementation Framework</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Three-Scenario System</strong>: Independent financial projections for Downside, Base Case, and Upside scenarios with integrated probability weighting.
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>User Interface Standards</strong>: Colour-coded Excel inputs with yellow cells for user inputs, white cells for calculated values, and grey cells with bold text for key results across all scenarios.
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>Worksheet Protection</strong>: All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Real-Time Analysis</strong>: Immediate updates as users modify assumptions, enabling scenario testing and sensitivity analysis across multiple variables simultaneously.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heading">Financial Projection Structure</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Revenue and Cost Modelling</strong>: Year-by-year projections across 3-5 year periods with variable growth assumptions, margin and costs development for each scenario.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Cash Flow Analysis</strong>: Include operating cash flow calculations and investments (Capex), but not net working capital, financing or tax elements.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Exit Value Calculation</h4>
                      <p className="leading-relaxed mb-3">
                        For each scenario, exit valuations are based on multiples for revenue and profit metrics: Exit Value = Final Year Metric × Multiple. With the Dual-Multiple Approach for both revenue-based and profit-based exit valuations, the model provides cross-validation and exit analysis across different optionalities and scenarios.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heading">Present Value Calculation and Probability Weighting</h4>
                      <div className="bg-slate-100 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Calculation Process for Weighted NPV:</h5>
                        <ol className="list-decimal pl-6 space-y-1 text-base">
                          <li>Calculate net present value (NPV) for each scenario: NPV of Forecast Period + NPV of Exit Value</li>
                          <li>Assign probability weights to each scenario (typically 25% Downside, 60% Base Case, 25% Upside, but adjustable based on user input)</li>
                          <li>Probability-weighted valuation: Expected Value = Σ(Scenario Probability × Scenario Net Present Value)</li>
                        </ol>
                        <p className="mt-3 text-base">Similar calculation process for Weighted Exit Value.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Mathematical Foundation</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>NPV Calculations</strong>: Net present value calculations incorporating appropriate discount rates for each scenario with explicit risk adjustment and temporal analysis.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Probability Weighting</strong>: Simple probability-weighted expected value calculations that enable systematic risk assessment and return distribution analysis.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Key Limitations</h4>
                      <div className="space-y-3">
                        <p><strong>Financial Projection Reliability</strong>: Financial projections typically miss estimates by huge margins for startups, making sensitivity analysis essential for meaningful insights and valuation decisions.</p>
                        <p><strong>Scenario Independence</strong>: Assumes independent scenarios and accurate probability estimation with static exit multiples that may not reflect market volatility.</p>
                        <p><strong>Modelling Complexity</strong>: Requires detailed financial projections for each scenario and potentially extensive comparable company research for exit multiple validation.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Best Practices</h4>
                      <div className="space-y-3">
                        <p><strong>Conservative Assumptions</strong>: Use realistic and conservative assumptions for base case scenarios to maintain credibility with investors and avoid systematic optimism bias.</p>
                        <p><strong>Documentation Requirements</strong>: Document scenario assumptions with supporting market data and comparable transaction evidence for analytical transparency and validation.</p>
                        <p><strong>Sensitivity Testing</strong>: Test sensitivity across key variables including exit timing, exit multiples, and discount rates to understand valuation impact and critical assumption dependencies.</p>
                        <p><strong>Range Presentation</strong>: Present results as valuation ranges with scenario context rather than single-point estimates to acknowledge inherent uncertainty in startup valuation.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                  <div className="text-sm space-y-1">
                    <p>¹ Sahlman, William A., and Daniel R. Scherlis, "A Method for Valuing High-Risk, Long-Term Investments: The 'Venture Capital Method,'" Harvard Business School Background Note 288-006 (Revised October 2009)</p>
                    <p>² Roig, Aleix, and Carlos Vicén, "Startup Valuation," HEC Paris Master Thesis (2020)</p>
                    <p>³ Tyebjee, Tyzoon T., and Albert V. Bruno, "A Model of Venture Capitalist Investment Activity," Management Science (1984)</p>
                    <p>⁴ MacMillan, Ian C., Robin Siegel, and P.N. Subba Narasimha, "Criteria Used by Venture Capitalists to Evaluate New Venture Proposals," Journal of Business Venturing (1985)</p>
                    <p>⁵ Cambridge Associates, "US Private Equity Index and Selected Benchmark Statistics" (2024)</p>
                    <p>⁶ National Venture Capital Association, "NVCA 2024 Yearbook" (2024)</p>
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

export default FirstChicagoValuation;