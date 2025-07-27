import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const DecisionAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadModel = () => {
    const link = document.createElement('a')
    link.href = 'https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsHub/EcqLMvzq3AJOscmUT8SIC38BFT2E5y0uuENqFjJXB5uolQ?e=pWjwCj'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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
          <h1 className="text-4xl font-bold text-heading mb-4">
            Decision Analysis Model for Venture Capital Investments
          </h1>

          {/* Sub-headline */}
          <h2 className="text-2xl text-heading mb-8">
            Content: Model, Introduction and Complete Guidance
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Decision Analysis Model for Venture Capital Investments
              </CardTitle>
              <CardDescription>
                Systematic Decision Assessment of Startup Life Stages for Investment Decisions via Probability-Weighted Multiple on Investment (PWMOI)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={downloadModel}
              >
                Open Model
              </Button>
              <p className="text-xs text-slate-500 text-center">
                ✨ Free access • No registration • Use immediately in your browser
              </p>
            </CardContent>
          </Card>

          {/* Introduction Headline */}
          <h3 className="text-xl font-bold text-heading mb-6">Decision Analysis Model for Venture Capital Investments Introduction</h3>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Decision Analysis for Venture Capital Model transforms Clint Korver's framework¹ into a systematic risk assessment and probability-weighted analysis tool for venture capital investment decisions. The model decomposes startup risk into discrete life-stages and levels of successful competitive outcomes. This structured framework enables investors and entrepreneurs to make informed investment decisions under significant uncertainty.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Risk-Centric Approach</strong>: Unlike traditional valuation methods that focus on financial projections, this decision analysis framework recognises that startup success depends on systematically overcoming sequential risk hurdles across Early Stage, Growth Stage, and Expansion Stage development.¹ ² The model enables users to assess specific risk factors within each startup life stage and estimate stage-by-stage success probabilities through systematic risk decomposition.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Six-Scenario Framework</strong>: For startups that successfully navigate all life stages, the model evaluates competitive positioning outcomes (Market Leader, Challenger, Also-ran) to generate six defined scenario outcomes: three success scenarios based on competitive position, plus three failure scenarios corresponding to each life stage. Each scenario receives a calculated probability based on the underlying risk assessments.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Probability-Weighted Analysis</strong>: The framework combines scenario probabilities with corresponding exit valuations to calculate probability-weighted multiple on investment (PWMOI).¹ Exit valuations for success scenarios can be estimated via other startup valuation models in the toolbox, whilst this model focuses on systematic probability assessment and scenario generation. This model does not consider time to exit or discount rates unlike most other startup valuation approaches.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Making investing decisions via a structured assessments methodology in forms that can be easily discussed and tested with logic and evidence, driving clarity of thought through a disciplined process.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: Venture capital investors and entrepreneurs seeking deeper understanding and risk assessment of business models.
            </p>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="text-xl font-bold text-heading">
                Complete Decision Analysis Model Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Overview and Strategic Framework</h3>
                    <p className="leading-relaxed mb-4">
                      The Decision Analysis for Venture Capital Model transforms Clint Korver's framework¹ into a systematic risk assessment and probability-weighted analysis tool for venture capital investment decisions. The model decomposes startup risk into discrete life-stages and levels of successful competitive outcomes. This structured framework enables investors and entrepreneurs to make informed investment decisions under significant uncertainty.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Unlike traditional valuation methods that aggregate uncertainty into discount rates, this decision analysis framework explicitly models the sequential nature of startup risk. Companies must successfully overcome specific challenges at each development stage whilst building competitive advantages that determine their ultimate market position and exit valuation.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Core Philosophy</strong>: The model operates on the principle that "the goal is not 'the right answer'—the goal is to apply intuition intelligently to an investment and to guide useful, decision-focused conversations."¹ By structuring judgement and quantifying intuition in forms that can be easily discussed and tested with logic and evidence, the framework drives clarity of thought through disciplined analysis.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is the Decision Analysis for Venture Capital Model?</h3>
                    <p className="leading-relaxed mb-4">
                      The Decision Analysis for Venture Capital Model is a risk assessment framework that transforms venture capital investment evaluation from intuitive judgement to systematic analysis. The model addresses the fundamental challenge that "venture is a terrible learning environment" where "the average venture capitalist only makes a few decisions a year, and it takes years to see if these decisions result in good or bad outcomes."¹
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Sequential Risk Framework</h3>
                    <p className="leading-relaxed mb-4">
                      The model structures startup risk assessment across three critical development stages, recognising that companies must successfully overcome all risks at each stage to progress:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">1. Early Stage Risks (Seed Stage)</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Market Risk</strong>: Product-market fit validation, customer need verification, early market traction</li>
                          <li><strong>Product Risk</strong>: MVP development, technical feasibility, product iteration capability</li>
                          <li><strong>Team Risk</strong>: Founder capability, execution track record, team completeness</li>
                          <li><strong>Financial Risk</strong>: Access to seed funding, basic operational capital requirements</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">2. Growth Stage Risks (Series A)</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Market Risk</strong>: Scalable customer acquisition, market expansion potential, competitive positioning</li>
                          <li><strong>Product Risk</strong>: Product scalability, reliability at scale, feature development capability</li>
                          <li><strong>Team Risk</strong>: Management team buildout, organisational development, execution scaling</li>
                          <li><strong>Financial Risk</strong>: Series A funding environment, growth capital access</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">3. Expansion Stage Risks (Series B+)</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Market Risk</strong>: Market expansion, competitive response, market share defence</li>
                          <li><strong>Product Risk</strong>: Feature development, product quality, technological advancement</li>
                          <li><strong>Team Risk</strong>: Organisational scaling, talent acquisition, operational complexity</li>
                          <li><strong>Financial Risk</strong>: Path to profitability, late-stage funding, sustainable unit economics</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Competitive Positioning Assessment</h3>
                    <p className="leading-relaxed mb-4">
                      For companies that successfully navigate all three life-stage risks, the model evaluates competitive positioning outcomes that determine exit valuation multiples:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Market Leader</strong>: Dominant market position with sustainable competitive advantages (25% baseline probability)</li>
                      <li><strong>Challenger</strong>: Strong competitive position with significant market share (50% baseline probability)</li>
                      <li><strong>Also-ran</strong>: Viable business with limited competitive advantages (25% baseline probability)</li>
                    </ul>
                    <p className="leading-relaxed mt-3">
                      Users can adjust these probabilities based on specific market dynamics, competitive advantages, and business model characteristics.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <p className="leading-relaxed mb-4">
                      Conventional venture capital evaluation suffers from optimism bias and relies heavily on discount rates to account for uncertainty. As Korver notes, "Most people rely on heuristics to simplify the complex task of assessing probabilities and forecasting value when faced with uncertainties, but whilst 'in general, these heuristics are quite useful'...sometimes they lead to severe and systematic errors.'"¹
                    </p>
                    <p className="leading-relaxed mb-4">
                      The framework addresses specific decision-making biases including representativeness (pattern-matching without statistical sensitivity), confirmation bias (seeking information that confirms preconceptions), and anchoring (over-relying on single factors). By forcing explicit probability assignments with supporting rationale, the model creates systematic checks against these biases.
                    </p>
                    <p className="leading-relaxed mb-4">
                      Studies demonstrate that scenario-based approaches provide superior decision support compared to single-point estimates, enabling more informed resource allocation and risk assessment across diverse business trajectories.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Venture Capital Investors</h4>
                        <p className="leading-relaxed">Systematic evaluation with portfolio construction methodology, investment analysis and explicit risk assessment for consistent framework across diverse opportunities. Decision support with analytical foundations for investment decision-making with systematic evaluation criteria and due diligence resource allocation toward highest-impact areas.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Institutional Investors</h4>
                        <p className="leading-relaxed">Due diligence frameworks with early-stage investment analysis, probability-weighted return expectations and systematic risk documentation for regulatory requirements. Analysis with analytical tools for transaction support and client advisory services for venture capital allocations.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Entrepreneurs</h4>
                        <p className="leading-relaxed">Investor understanding with decision-making process comprehension, critical risk factor identification for business development prioritisation and business thinking demonstration. Strategic planning with explicit risk assessment enabling targeted strategies for overcoming specific challenges at each development stage.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does the Decision Analysis for Venture Capital Model Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Excel Implementation Framework</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>User Interface Standards</strong>: Colour-coded Excel system with yellow cells for user inputs, white cells for calculated values, and grey cells with bold text for key results.
                        </p>
                        <p className="leading-relaxed mb-3">
                          <strong>Worksheet Protection</strong>: All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                        </p>
                        <p className="leading-relaxed mb-3">
                          <strong>Risk Assessment Workflow</strong>: Clear visual progression from Early Stage through Growth Stage to Expansion Stage risks with automatic compound probability calculations and integrated competitive assessment.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Real-Time Analysis</strong>: Dynamic calculation engines with built-in formula verification ensure consistent and accurate probability assignments with immediate PWMOI sensitivity analysis.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Risk Assessment Methodology</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>Probability Assignment Process</strong>: Users assign success probabilities (0-100%) to each of the four risk factors within each of the three life stages. Each probability represents the likelihood that the company will successfully overcome that specific risk based on: Company-specific analysis and due diligence findings, industry benchmarks and comparable company performance, market conditions and competitive dynamics, management team track record and execution capability.
                        </p>
                        <p className="leading-relaxed mb-3">
                          <strong>Systematic Risk Decomposition</strong>: Rather than making intuitive overall assessments, users must explicitly evaluate each risk component. This decomposition forces consideration of factors that might otherwise be overlooked whilst preventing overweighting of particularly salient risks.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Compound Risk Calculation</strong>: Stage success probability equals the product of individual risk probabilities within that stage. This multiplication reflects the reality that failure in any single risk area can prevent stage progression, making risk mitigation across all factors essential for startup success.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Six-Scenario Generation</h4>
                        <div className="bg-slate-100 p-4 rounded-lg">
                          <p className="font-semibold mb-2">Mathematical Framework:</p>
                          <ol className="list-decimal pl-6 space-y-1 text-base">
                            <li>Market Leader Success: Early Success × Growth Success × Expansion Success × Market Leader Probability</li>
                            <li>Challenger Success: Early Success × Growth Success × Expansion Success × Challenger Probability</li>
                            <li>Also-ran Success: Early Success × Growth Success × Expansion Success × Also-ran Probability</li>
                            <li>Early Stage Failure: 1 - Early Stage Success</li>
                            <li>Growth Stage Failure: Early Success × (1 - Growth Success)</li>
                            <li>Expansion Stage Failure: Early Success × Growth Success × (1 - Expansion Success)</li>
                          </ol>
                          <p className="mt-3 text-base">Probability Validation: The sum of all scenario probabilities must equal 100%, providing mathematical consistency and ensuring outcome coverage.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">PWMOI Calculation Framework</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>Core Formula</strong>: PWMOI = Σ(Scenario Probability × Scenario Multiple on Investment)
                        </p>
                        <p className="leading-relaxed mb-3">
                          <strong>Exit Valuation Integration</strong>: Success scenarios require exit valuation estimates that users obtain from other valuation models: Market Leader (Premium exit multiples reflecting dominant market position), Challenger (Market-rate exit multiples for strong competitive position), Also-ran (Discount exit multiples for viable but limited businesses), Failure Scenarios (Zero return on investment).
                        </p>
                        <p className="leading-relaxed">
                          <strong>Time and Discount Rate Considerations</strong>: This model does not incorporate time to exit or discount rates, focusing purely on PWMOI. Users must consider this when benchmarking with valuations from other models.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Mathematical Foundation</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>Probability Calculations</strong>: Probability mathematics with compound risk calculations that reflect the sequential nature of startup development and risk mitigation requirements.
                        </p>
                        <p className="leading-relaxed">
                          <strong>PWMOI Analysis</strong>: Probability-weighted return calculations enabling systematic risk assessment and investment opportunity ranking based on risk-adjusted return expectations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Integration with Valuation Models</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Complementary Framework Design</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>Separation of Concerns</strong>: The model specialises in probability assessment whilst relying on other valuation models for exit value estimation. This design prevents analytical complexity whilst maintaining systematic risk evaluation and valuation consistency.
                        </p>
                        <p className="leading-relaxed mb-3">
                          <strong>Methodology Flexibility</strong>: Users can apply any preferred valuation models to generate exit values for PWMOI calculation, maintaining consistency with existing investment processes.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Cross-Validation Opportunities</strong>: PWMOI results provide validation checks for other valuation methods, highlighting cases where detailed financial analysis may be inconsistent with systematic risk assessment.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Scenario Translation Process</h4>
                        <p className="leading-relaxed mb-3">
                          <strong>Risk-to-Valuation Bridge</strong>: Users translate probability-based scenarios into assumption sets for detailed valuation models: Market Leader success informs optimistic scenario assumptions, Challenger success guides base case valuation parameters, Also-ran success provides conservative scenario inputs.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Assumption Documentation</strong>: Systematic risk assessment provides documented rationale for valuation scenario selection, improving analytical transparency and supporting investment committee review processes.
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
                          <p><strong>Subjectivity in Probability Assessment</strong>: Despite systematic structure, probability assignments remain subjective and susceptible to cognitive biases including overconfidence, anchoring, and availability heuristics that can affect analytical accuracy.</p>
                          <p><strong>Static Analysis Framework</strong>: The model provides point-in-time assessment rather than dynamic risk evolution analysis as companies develop and market conditions change, requiring regular updates for accuracy.</p>
                          <p><strong>Scenario Coverage Constraints</strong>: The six-scenario framework may not capture all possible outcomes, particularly black swan events, regulatory disruptions, or macroeconomic shocks that affect entire startup ecosystems.</p>
                          <p><strong>Valuation Methodology Dependence</strong>: PWMOI quality depends on exit valuation accuracy from other models, making results sensitive to valuation methodology choices and assumption quality across different analytical approaches.</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Best Practices</h4>
                        <div className="space-y-3">
                          <p><strong>Independent Validation</strong>: Use multiple independent assessments to reduce individual bias in probability assignments. Korver emphasises using specific techniques such as "back casting" where assessors explain what would cause surprisingly good or bad outcomes.</p>
                          <p><strong>Assumption Documentation</strong>: Maintain detailed rationale for all probability assignments with supporting evidence including market research, comparable company analysis, expert opinions, and industry benchmarks for analytical credibility.</p>
                          <p><strong>Sensitivity Analysis</strong>: Conduct systematic testing across wide probability ranges to understand PWMOI sensitivity to key assumptions and identify critical risk factors requiring additional due diligence attention and validation.</p>
                          <p><strong>Regular Updates</strong>: Reassess probabilities as new information becomes available, market conditions evolve, and companies progress through development stages to maintain analytical accuracy and relevance.</p>
                          <p><strong>Cross-Model Validation</strong>: Compare PWMOI results with other valuation approaches to ensure consistency and identify potential analytical gaps or assumption conflicts that require resolution.</p>
                          <p><strong>Bias Awareness</strong>: Acknowledge systematic biases in startup evaluation, including optimism bias, confirmation bias, and representativeness bias. Use structured frameworks to counteract these tendencies through explicit analytical checks.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                    <div className="text-sm space-y-1">
                      <p>¹ Korver, Clint, "Applying Decision Analysis to Venture Investing," Kauffman Fellows Journal, Volume 3 (2012)</p>
                      <p>² Sahlman, William A., "A Method for Valuing High-Risk, Long-Term Investments," Harvard Business School (2009)</p>
                      <p>³ Howard, Ronald A., "Decision Analysis: Practice and Promise," Management Science (1988)</p>
                      <p>⁴ Damodaran, Aswath, "Investment Valuation: Tools and Techniques for Determining the Value of Any Asset," John Wiley & Sons (2012)</p>
                      <p>⁵ National Venture Capital Association, "NVCA 2024 Yearbook" (2024)</p>
                      <p>⁶ Cambridge Associates, "US Private Equity Index and Selected Benchmark Statistics" (2024)</p>
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

export default DecisionAnalysis;