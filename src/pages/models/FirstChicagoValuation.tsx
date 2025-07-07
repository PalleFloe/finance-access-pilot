import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Calculator } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const FirstChicagoValuation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/toolbox/startup-valuations"
            className="inline-flex items-center text-slate-600 hover:text-blue-600 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Startup Valuations
          </Link>

          {/* Main Headline */}
          <h1 className="text-4xl font-bold text-heading mb-4">
            Professional First Chicago Valuation Method
          </h1>

          {/* Sub-headline */}
          <h2 className="text-2xl text-heading mb-8">
            Professional First Chicago Simple Scenario Based DCF Model for Startup Valuation with Exit Value based on both EBITDA and Revenue
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-6 h-6" style={{ color: 'rgb(50, 100, 150)' }} />
                <span>First Chicago Valuation Method</span>
              </CardTitle>
              <CardDescription>
                Scenario-based DCF model for startup valuation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Open Model
              </Button>
            </CardContent>
          </Card>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Professional First Chicago Valuation Method provides scenario-based analysis that addresses the fundamental uncertainty inherent in startup valuation. By modelling multiple potential outcomes—downside, base and success scenarios with probability weighting, this approach delivers robust valuations that acknowledge both upside potential and downside risks for informed investment decision-making.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Multi-Scenario Approach</strong>: Unlike single-point estimate methods that rely heavily on discount rates to account for uncertainty, the First Chicago implementation explicitly models diverse business trajectories from potential failure through exceptional success. This decomposition enables stakeholders to understand specific value drivers and risk factors rather than aggregating complex uncertainties into single numbers.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Professional Framework</strong>: The method combines simple financial cash-flow modelling for each scenario with probability weighting across a flexible 3-5 year period and more precise discount rate application to estimate net present value. This approach reduces the optimism bias common in traditional venture capital methods while providing the analytical depth necessary for institutional investment decisions.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Establish credible valuations through explicit risk decomposition, support investment committee analysis with comprehensive scenario coverage, and enable portfolio construction decisions based on probability-weighted return distributions.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: Venture capital investors conducting systematic deal evaluation, growth-stage entrepreneurs preparing multi-scenario business cases, and financial advisors requiring professional early-stage valuation frameworks with explicit uncertainty acknowledgment.
            </p>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="text-xl font-bold text-heading">
                Complete First Chicago Valuation Method Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is the Professional First Chicago Valuation Method?</h3>
                    <p className="leading-relaxed mb-4">
                      The Professional First Chicago Valuation Method is a scenario-based valuation framework originally developed by the venture capital division of First Chicago Bank in 1970. The implementation addresses startup valuation uncertainty through multi-scenario analysis that models the full range of potential business outcomes with professional probability weighting and sensitivity analysis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Three-Scenario Framework</h3>
                    <p className="leading-relaxed mb-4">
                      The method requires assigning probability weightings to each scenario, with standard allocations typically being 25% for Success, 50% for Base Case, and 25% for Downside scenarios based on venture capital research. These probabilities can be adjusted based on specific company circumstances and market conditions.
                    </p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-heading">Success Scenario</h4>
                        <p className="text-sm">Optimistic performance with management team expectations and favourable market conditions, revenue growth exceeding initial projections with premium exit valuations.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Base Case Scenario</h4>
                        <p className="text-sm">Realistic performance representing the most likely outcome based on detailed due diligence, revenue and profitability meeting base case projections.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Downside Case Scenario</h4>
                        <p className="text-sm">Conservative performance with challenges in execution or market conditions, below-projection performance with margin pressure and distressed exit scenarios.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <div className="space-y-3">
                      <p><strong>Single-Scenario Limitations</strong>: Traditional venture capital methods suffer from optimism bias by projecting only positive outcomes and relying on discount rates to account for risk uncertainty.</p>
                      <p><strong>Risk Assessment Requirements</strong>: Professional investors require explicit understanding of both upside potential and downside risks.</p>
                      <p><strong>Research Validation</strong>: Studies demonstrate that scenario-based approaches provide superior decision support compared to single-point estimates.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-3">
                      <p><strong>Venture Capital Investors</strong>: Investment committee analysis with comprehensive risk-return presentation, portfolio construction understanding, and systematic evaluation of multiple business trajectories.</p>
                      <p><strong>Growth-Stage Entrepreneurs</strong>: Multi-scenario business planning with resource allocation implications, professional presentation of business potential with risk acknowledgment.</p>
                      <p><strong>Financial Advisors</strong>: Professional scenario analysis for investment decision support, comprehensive valuation ranges for negotiation positioning.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does the Professional First Chicago Valuation Method Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Exit Value Calculation</h4>
                        <p className="leading-relaxed">
                          For each scenario, exit value calculations use industry-appropriate multiples applied to both revenue and EBITDA metrics: Exit Value = Final Year Metric × Industry Multiple × Scenario Adjustment.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">Present Value Calculation and Probability Weighting</h4>
                        <div className="bg-slate-100 p-4 rounded-lg">
                          <h5 className="font-semibold mb-2">Calculation Process:</h5>
                          <ol className="list-decimal pl-6 space-y-1 text-sm">
                            <li>Calculate net present value (NPV) for each scenario: NPV of Forecast Period + NPV of Exit Value</li>
                            <li>Weighted net present value (NPV) of scenarios: Expected Value = Σ(Scenario Probability × Scenario Net Present Value)</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Limitations</h3>
                    <div className="space-y-3">
                      <p><strong>Scenario Dependencies</strong>: Subjective probability assignment requiring regular validation against actual venture outcomes.</p>
                      <p><strong>Modelling Complexity</strong>: Requires financial projections for each scenario, and potentially extensive comparable company research for multiple validation.</p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FirstChicagoValuation;