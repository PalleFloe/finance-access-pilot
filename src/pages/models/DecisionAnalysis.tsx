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
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

const DecisionAnalysis = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Decision Analysis Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Decision Analysis Model');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Decision Analysis for Venture Capital - Systematic Investment Framework | Financial Decision Models</title>
        <meta name="description" content="Venture capital decision analysis model with systematic risk assessment and probability-weighted returns. Excel tool for VC investment evaluation. Try free online, download full version." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is Decision Analysis for Venture Capital?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Decision Analysis for Venture Capital is a systematic framework developed by Clint Korver for investment evaluation under extreme uncertainty."
              }
            },{
              "@type": "Question",
              "name": "Why Was Decision Analysis Developed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Traditional venture capital methods inadequately address the extreme uncertainty inherent in startup investing."
              }
            }]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.financialdecisionmodels.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Toolbox",
                "item": "https://www.financialdecisionmodels.com/toolbox"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Startup Valuations",
                "item": "https://www.financialdecisionmodels.com/toolbox/startup-valuations"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Decision Analysis"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <div className="container mx-auto py-16">
        <div className="mb-4">
          <Link 
            to="/toolbox/startup-valuations"
            className="text-[12px]"
          >
            ← Back to Startup Valuations
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Decision Model for VC Investments
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Structured decision framework using explicit probability assignments for risk and success assessment
        </p>
      </div>

      <div className="container mx-auto mb-12">
        <div className="max-w-md bg-white rounded-lg border shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
            Decision Model for VC Investments
          </h3>
          
          <div className="space-y-3">
            <Button 
              onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/Ec0xs4OOqUxMg0hLspLD-2IBuoWf79XYTff0ensV5KfEpA?e=WCqUCw&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
              className="w-full text-lg"
              variant="model-blue"
              size="lg"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Online & View
            </Button>
            
              <DownloadButton 
                sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EXocIkZrChpKrbEuRIRzN4ABBy9eqNxPQYdvl4f7yuiHDA?e=3ZGPZm"
                modelName="Decision Model for VC Investments"
              className="w-full text-lg"
            />
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <h4 className="font-semibold mb-2">Quick Access Guide</h4>
            <ul className="space-y-1 text-xs">
              <li><strong>Online & View:</strong> Instant online preview (without registration)</li>
              <li><strong>Register to Download:</strong> Free registration gives you download access to all models</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        {/* Introduction Headline */}
        <h3 className="mb-6">Decision Model for VC Investments Introduction</h3>

        {/* Short Description */}
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            The Decision Analysis for Venture Capital Model transforms Clint Korver's framework¹ into a systematic risk assessment and probability-weighted analysis tool for venture capital investment decisions. The model decomposes startup risk into discrete life stages and levels of successful competitive outcomes. This structured framework enables investors and entrepreneurs to make informed investment decisions under significant uncertainty.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed mb-4">
            <strong>Risk Decomposition Framework</strong>: Unlike traditional venture capital methods that rely on crude discount rate adjustments, this approach explicitly models business risks through systematic probability assignments. The framework structures analysis by identifying discrete stages to achieve business success and evaluating competitive position outcomes from business failure through market leadership.
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
            <AccordionTrigger className="mb-3">
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
                    <strong>Risk Decomposition Framework</strong>: Unlike traditional venture capital methods that rely on crude discount rate adjustments, this approach explicitly models business risks through systematic probability assignments. The framework structures analysis by identifying discrete stages to achieve business success and evaluating competitive position outcomes from business failure through market leadership.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">What Is Decision Analysis for Venture Capital?</h3>
                  <p className="leading-relaxed mb-4">
                    Decision Analysis for Venture Capital is a systematic framework developed by Clint Korver for investment evaluation under extreme uncertainty. The method addresses venture capital's fundamental challenge: making investment decisions with limited data and high failure rates by decomposing complex business risks into discrete, analysable components.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Risk Framework Structure</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Business Stage Risk Assessment</h4>
                      <p className="leading-relaxed mb-3">
                        The model evaluates probability of success through discrete business stages:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Technology Risk: Development and delivery of core product capabilities</li>
                        <li>Market Risk: Customer acceptance and market penetration success</li>
                        <li>Competitive Risk: Sustainable competitive position and market defence</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heading">Competitive Outcome Scenarios</h4>
                      <p className="leading-relaxed mb-3">
                        For companies that achieve business success, the model evaluates different competitive positions:
                      </p>
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Market Leader: Dominant market position with premium exit valuations</li>
                        <li>Challenger: Strong competitive position with market-rate exit valuations</li>
                        <li>Also-ran: Viable business with limited market position and discount exit valuations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Traditional venture capital methods inadequately address the extreme uncertainty inherent in startup investing. Discount rate adjustments aggregate complex risks into single variables, obscuring critical decision factors and preventing systematic risk assessment.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Decision analysis addresses these limitations through explicit risk decomposition, enabling investors to understand specific factors driving investment outcomes rather than relying on intuitive adjustments.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                  <div className="space-y-3">
                    <p><strong>Venture Capital Investors</strong>: Systematic investment evaluation with explicit risk assessment, portfolio construction insights with probability-weighted return analysis, and investment committee analysis with structured decision frameworks supporting systematic due diligence processes.</p>
                    <p><strong>Growth-Stage Entrepreneurs</strong>: Business planning with explicit risk identification and mitigation strategies, fundraising preparation with credible business cases acknowledging key uncertainties, and strategic planning with systematic evaluation of growth paths and competitive scenarios.</p>
                    <p><strong>Financial Advisors</strong>: Client advisory with structured investment analysis for venture capital exposure, transaction advisory capabilities with systematic business evaluation, and risk assessment frameworks for early-stage investment recommendations.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">How Does the Decision Analysis Model Work?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Excel Implementation Framework</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Integrated Analysis System</strong>: Single worksheet containing probability assignments, scenario modelling, and PWMOI (Probability-Weighted Multiple on Investment) calculations.
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>User Interface Standards</strong>: Colour-coded Excel inputs with yellow cells for user inputs, white cells for calculated values, and grey cells with bold text for key results.
                      </p>
                      <p className="leading-relaxed mb-3">
                        <strong>Worksheet Protection</strong>: All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Real-Time Analysis</strong>: Immediate updates as users modify probability assignments, enabling systematic sensitivity analysis across multiple risk factors simultaneously.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-heading">Probability Assignment Structure</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Stage Risk Probabilities</strong>: Users assign probability estimates for achieving success through each business stage with multiplicative risk calculation.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Competitive Position Probabilities</strong>: For successful ventures, users assign conditional probabilities for achieving different competitive outcomes with scenario-based exit valuation analysis.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">PWMOI Calculation Framework</h4>
                      <div className="bg-slate-100 p-4 rounded-lg">
                        <h5 className="font-semibold mb-2">Calculation Process for PWMOI:</h5>
                        <ol className="list-decimal pl-6 space-y-1 text-base">
                          <li>Calculate overall success probability: Multiply stage-specific success probabilities</li>
                          <li>Calculate conditional competitive outcome probabilities: Assign probability weights to Market Leader, Challenger, and Also-ran scenarios</li>
                          <li>Assign exit valuations to each competitive scenario: Market Leader (Premium multiples), Challenger (Market multiples), Also-ran (Discount multiples)</li>
                          <li>Calculate scenario-specific multiples on investment: Exit Valuation ÷ Investment Amount</li>
                          <li>Calculate PWMOI: Σ(Overall Success Probability × Competitive Scenario Probability × Scenario Multiple)</li>
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
                        <strong>Investment Decision Framework</strong>: PWMOI results enable systematic comparison of investment opportunities with explicit risk-return analysis and portfolio construction insights.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Mathematical Foundation</h4>
                      <p className="leading-relaxed mb-3">
                        <strong>Probability Theory Application</strong>: Uses conditional probability calculations and expected value analysis to evaluate investment returns under uncertainty.
                      </p>
                      <p className="leading-relaxed">
                        <strong>Risk Decomposition Mathematics</strong>: Multiplicative probability calculations for sequential stage risks with additive probability analysis for competitive outcome scenarios.
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
                        <p><strong>Probability Estimation Challenges</strong>: Requires subjective probability assignments that may not reflect actual outcome distributions, particularly for novel business models or technologies.</p>
                        <p><strong>Stage Independence Assumptions</strong>: Assumes independent stage risks that may be correlated in actual business development, potentially underestimating or overestimating overall risk levels.</p>
                        <p><strong>Exit Valuation Dependencies</strong>: Requires external valuation inputs for competitive scenarios that may be subject to market timing and comparable company limitations.</p>
                        <p><strong>Static Analysis Framework</strong>: Provides point-in-time analysis that may not capture dynamic business evolution or changing market conditions over investment horizons.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Best Practices</h4>
                      <div className="space-y-3">
                        <p><strong>Conservative Probability Assignments</strong>: Use realistic and conservative probability estimates for stage success and competitive outcomes to maintain analytical credibility and avoid systematic optimism bias.</p>
                        <p><strong>Sensitivity Analysis</strong>: Test sensitivity across key probability assignments and exit valuation assumptions to understand critical factors driving investment returns and risk assessment.</p>
                        <p><strong>Documentation Requirements</strong>: Document probability assignment rationale with supporting evidence and market data to enable validation and analytical transparency.</p>
                        <p><strong>Comparative Analysis</strong>: Use alongside other venture capital valuation methods to validate results and ensure comprehensive investment evaluation.</p>
                        <p><strong>Regular Updates</strong>: Update probability assignments and competitive scenarios as companies progress through business stages to maintain relevance and accuracy.</p>
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
  );
};

export default DecisionAnalysis;