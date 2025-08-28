import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const VentureCapitalMethod = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    window.open(sharePointUrl, '_blank', 'width=1200,height=800');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/toolbox/startup-valuations"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Startup Valuations
          </Link>

          {/* Main Headline */}
          <h1 className="mb-4">
            Venture Capital Valuation Model
          </h1>

          {/* Sub-headline */}
          <h2 className="mb-8">
            Content: Model, Introduction and Complete Guidance
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Venture Capital Valuation Model
              </CardTitle>
              <CardDescription>
                Bridging Multi-Round Financing, Exit Value, Founder's Ownership Share and Investor's Need for a Profitable Return
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EfLYujZK2B1FjqoaOiECrI4BxqnelPGJnLqFji97vjs88g?e=MZNm0C')}
                variant="brand-green"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Online & Free
              </Button>
              <Button 
                variant="outline"
                disabled
                className="w-full bg-slate-100 text-slate-400 border-slate-300"
              >
                Download & Subscription
                <span className="ml-2 text-xs bg-slate-200 text-slate-500 px-2 py-1 rounded">Coming Soon</span>
              </Button>
            </CardContent>
          </Card>

          {/* Introduction Headline */}
          <h3 className="mb-6">Venture Capital Valuation Model Introduction</h3>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              The Venture Capital Valuation Model provides startup founders, investors, and advisors with analytical framework for informed valuation decisions for startups with typically more than one investment round.¹ ² By understanding both the investor return perspective and entrepreneur ownership implications, users can make better investment decisions, navigate negotiations successfully, and plan multi-round financing strategies with scenario analysis capabilities.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              <strong>Scenario Framework</strong>: The model builds on a base case with scenario modelling from very low through very high exit valuations, enabling stakeholders to understand return and ownership sensitivities. Users can combine exit scenarios with timing assumptions and investor requirements to conduct robust quantifiable sensitivity analysis, given the inherent high uncertainty in venture capital investing.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Establish credible valuations based on market return requirements, understand the economic logic behind investor ownership demands, and model dilution scenarios to optimise founder retention through dual-model analysis with scenario planning that serves both investor and entrepreneur perspectives.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: Venture capital investors conducting systematic deal evaluation, growth-stage entrepreneurs preparing multi-scenario business cases, and financial advisors requiring early-stage valuation frameworks with explicit uncertainty acknowledgment for client advisory services.
            </p>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="mb-3">
                Complete Venture Capital Valuation Method Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Overview and Strategic Framework</h3>
                    <p className="leading-relaxed mb-4">
                      The Venture Capital Valuation Model provides startup founders, investors, and advisors with analytical framework for informed valuation decisions for startups with typically more than one investment round. By understanding both the investor return perspective and entrepreneur ownership implications, users can make better investment decisions, navigate negotiations successfully, and plan multi-round financing strategies with scenario analysis capabilities.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Scenario Framework</strong>: The model builds on a base case with scenario modelling from very low through very high exit valuations, enabling stakeholders to understand return and ownership sensitivities. Users can combine exit scenarios with timing assumptions and investor requirements to conduct robust quantifiable sensitivity analysis, given the inherent high uncertainty in venture capital investing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is the Venture Capital Valuation Model?</h3>
                    <p className="leading-relaxed mb-4">
                      The Venture Capital Valuation Model provides dual analytical perspectives for venture capital transactions. The framework addresses the fundamental challenge that traditional venture capital valuation methods serve either investors exclusively (focusing solely on return calculations) or entrepreneurs exclusively (emphasising only valuation maximisation), but successful venture capital transactions require both parties to understand the economics from multiple perspectives.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Core Analytical Framework</strong>: Both models employ identical exit assumptions and work backwards through multiple funding rounds to determine current valuations, using mathematical frameworks that ensure consistency between approaches whilst providing complementary analytical perspectives.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Reverse Valuation Logic</strong>: Starting from projected exit values and timing, the models calculate current valuations by working backwards through anticipated dilution effects across multiple investment rounds. This approach grounds valuations in realistic exit expectations rather than arbitrary multiples or subjective assessments.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Multi-Round Investment Analysis</strong>: The framework accommodates complex financing structures including pre-seed, seed, Series A, B, C rounds and beyond, with tracking of ownership dilution, investment amounts, and timing effects across all funding stages.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <p className="leading-relaxed mb-4">
                      Traditional venture capital valuation methods suffer from perspective limitations that create negotiation gaps and suboptimal deal structures. Most existing frameworks serve either investors exclusively or entrepreneurs exclusively, but successful venture capital transactions require both parties to understand the economics from multiple analytical perspectives.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Venture capital negotiations often fail due to analytical misalignment where investors and entrepreneurs use different valuation frameworks, leading to extended negotiation cycles and frequently incompatible expectations. The dual-model approach addresses this communication problem by providing shared analytical infrastructure that both parties can understand and validate.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Venture Capital Investors</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Investment Decision Making</strong>: Make systematic investment decisions with return-justified valuations based on explicit scenario analysis rather than intuitive assessments, and optimise deal structures through ownership analysis across diverse market conditions.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Portfolio Construction</strong>: Evaluate investment opportunities consistently using standardised analytical frameworks that enable comparison across different stages, sectors, and risk profiles.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Due Diligence Enhancement</strong>: Conduct thorough risk-return analysis with explicit scenario testing that identifies critical assumptions requiring validation and provides investment committee presentations with analytical support.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Growth-Stage Entrepreneurs</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Fundraising Preparation</strong>: Prepare investor presentations with valuations backed by scenario analysis, and develop realistic expectations about investor ownership requirements based on market return standards rather than arbitrary preferences.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Strategic Planning</strong>: Model dilution scenarios to optimise founder ownership retention across multiple funding rounds, understand the economic logic behind investor proposals, and develop funding strategies that balance growth capital needs with ownership preservation objectives.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Negotiation Strategy</strong>: Support fundraising negotiations with analytical credibility that demonstrates understanding of venture capital economics and enables constructive discussions about valuation and terms rather than positional bargaining.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Financial Advisors</h4>
                        <p className="leading-relaxed">
                          <strong>Client Advisory Services</strong>: Provide transaction support using both analytical perspectives to serve diverse client needs, educate clients on venture capital economics, and deliver analysis with scenario planning capabilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does the Venture Capital Valuation Model Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Excel Implementation Architecture</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>User Interface Standards</strong>: Both models use colour-coded Excel systems with yellow cells for user inputs, white cells for calculated values, and grey cells with bold text highlighting key results for decision-making purposes.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Worksheet Protection</strong>: All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Real-Time Calculations</strong>: Dynamic calculation engines provide immediate updates as users modify assumptions, enabling rapid scenario testing and sensitivity analysis across multiple variables simultaneously.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Integrated Visualisation</strong>: Charts and sensitivity analyses display investment amounts, ownership percentages, and expected returns across scenarios, providing immediate visual feedback on the implications of different assumptions and deal structures.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">IRR-Driven Model Implementation</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Input Requirements</strong>: Users specify required investor IRR percentages, investment amounts, expected exit timing, and exit value scenarios across the scenario framework (Very Low through Very High exit valuations).
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Calculation Process</strong>:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 ml-4 mb-2">
                          <li>Present value calculation of exit proceeds based on investor's required IRR</li>
                          <li>Ownership percentage determination required to achieve target returns</li>
                          <li>Pre-money and post-money valuation calculations</li>
                          <li>Multi-round dilution analysis with employee option pool effects</li>
                        </ol>
                        <p className="leading-relaxed">
                          <strong>Output Analysis</strong>: The model generates required ownership percentages, current valuation ranges, and sensitivity analysis showing how changes in exit assumptions affect required investor ownership stakes.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Ownership-Driven Model Implementation</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Input Requirements</strong>: Users specify proposed investor ownership percentages, investment amounts, expected exit timing, and exit value scenarios using the same scenario framework for consistency.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Calculation Process</strong>:
                        </p>
                        <ol className="list-decimal list-inside space-y-1 ml-4 mb-2">
                          <li>Exit proceeds calculation based on proposed ownership stakes</li>
                          <li>IRR determination across all scenario outcomes</li>
                          <li>Risk-adjusted return analysis with probability weighting options</li>
                          <li>Comparative analysis against investor return requirements</li>
                        </ol>
                        <p className="leading-relaxed">
                          <strong>Output Analysis</strong>: The model calculates expected investor returns across scenarios, identifies scenarios where returns meet or exceed requirements, and provides sensitivity analysis for negotiation support.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Scenario Analysis Capabilities</h3>
                    <p className="leading-relaxed mb-4">
                      <strong>Multi-Scenario Framework</strong>: Both models use identical scenario structures (Very Low through Very High) to ensure analytical consistency whilst enabling sensitivity testing across diverse outcome possibilities.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Cross-Scenario Validation</strong>: Scenario results enable stakeholders to identify critical assumptions, test sensitivity across wide assumption ranges, and understand the implications of different exit outcomes for both investor returns and founder ownership retention.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Mathematical Foundation</h3>
                    <p className="leading-relaxed mb-4">
                      <strong>IRR Calculations</strong>: Internal rate of return calculations account for complex cash flow timing, multiple investment rounds, and exit proceeds distribution across different ownership structures.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Dilution Modelling</strong>: Mathematical models track ownership percentage changes across multiple funding rounds, including employee stock option plan effects, advisor equity grants, and conversion preferences where applicable.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Present Value Analysis</strong>: All models incorporate appropriate discount rate applications for current valuation determination, enabling comparison with other valuation methodologies and cross-validation of analytical results.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Strategic Integration with Other Valuation Models</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Complementary Framework Design</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Exit Valuation Integration</strong>: The venture capital method focuses on ownership and return analysis whilst relying on other valuation models (such as SaaS Unit Economics, First Chicago, or Perpetuity models) to generate exit value estimates for scenario analysis.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Cross-Model Validation</strong>: Results from venture capital analysis provide validation checks for other valuation approaches, highlighting cases where detailed financial projections may be inconsistent with market return requirements or ownership expectations.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Portfolio Context</strong>: The method integrates seamlessly with other models in the toolkit to provide valuation analysis that addresses multiple stakeholder perspectives and analytical requirements simultaneously.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Key Limitations</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Market Condition Assumptions</strong>: The models assume relatively stable market conditions and exit multiples over 5-7 year investment horizons, but venture capital markets experience significant volatility that can affect exit valuations substantially.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Execution Risk Exclusion</strong>: Models focus on financial analysis rather than operational execution risks, competitive responses, or management team changes that significantly impact startup success probabilities over multi-year periods.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Complex Capital Structure Limitations</strong>: The framework handles standard investment structures effectively but may require modification for complex liquidation preferences, participating preferred arrangements, or unusual governance structures that affect economic returns.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Financial Projection Reliability</strong>: Like all startup valuation methods, the approach depends on financial projections that typically miss targets by 40-60%, making scenario analysis essential but not eliminating fundamental uncertainty inherent in early-stage investing.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Best Practices</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Market Research Validation</strong>: Research recent exit multiples for specific industry sectors and stage-appropriate benchmarks to ground scenario assumptions in empirical evidence rather than arbitrary estimates or outdated comparables.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Conservative Assumption Setting</strong>: Be realistic and conservative regarding funding needs, timing requirements, employee option pool growth, and advisor equity grants to maintain credibility with experienced investors and avoid optimistic bias.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Range Presentation</strong>: Present results across multiple scenarios with explicit assumption documentation to demonstrate thorough analysis and acknowledge inherent uncertainty rather than false precision through single-point estimates.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Regular Updates and Monitoring</strong>: Document assumptions with supporting market data and update parameters as market conditions evolve, comparable transactions become available, and company circumstances change materially.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Cross-Method Validation</strong>: Compare results with other valuation approaches in the toolkit to identify potential inconsistencies and ensure analytical robustness before making significant investment or strategic decisions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                    <p className="text-sm leading-relaxed">
                      ¹ Sahlman, William A., and Daniel R. Scherlis, "A Method for Valuing High-Risk, Long-Term Investments: The 'Venture Capital Method,'" Harvard Business School Background Note 288-006 (Revised October 2009) ² Roig, Aleix, and Carlos Vicén, "Startup Valuation," HEC Paris Master Thesis (2020) ³ Tyebjee, Tyzoon T., and Albert V. Bruno, "A Model of Venture Capitalist Investment Activity," Management Science (1984) ⁴ MacMillan, Ian C., Robin Siegel, and P.N. Subba Narasimha, "Criteria Used by Venture Capitalists to Evaluate New Venture Proposals," Journal of Business Venturing (1985) ⁵ Cambridge Associates, "US Private Equity Index and Selected Benchmark Statistics" (2024) ⁶ National Venture Capital Association, "NVCA 2024 Yearbook" (2024)
                    </p>
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

export default VentureCapitalMethod;
