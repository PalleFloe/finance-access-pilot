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

  const downloadModel = async (modelFileName: string) => {
    try {
      const { data } = supabase.storage
        .from('excel-models')
        .getPublicUrl(modelFileName)
      
      if (data?.publicUrl) {
        const link = document.createElement('a')
        link.href = data.publicUrl
        link.download = modelFileName
        link.target = '_blank'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    } catch (error) {
      console.error('Download error:', error)
      alert('Error downloading model. Please try again.')
    }
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
            Decision Analysis for Venture Capital Investments
          </h1>

          {/* Sub-headline */}
          <h2 className="text-2xl text-heading mb-8">
            Systematic Decision Assessment of Startup Life Stages for Investment Decisions via Probability-Weighted Multiple on Investment (PWMOI)
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Decision Analysis for Venture Capital Investments
              </CardTitle>
              <CardDescription>
                Systematic risk assessment with scenario analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => downloadModel('Startup Decision Analysis for MOI (Multiple On Investment) V5.xlsm')}
              >
                Open Model
              </Button>
            </CardContent>
          </Card>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              The Professional Decision Analysis for Venture Capital Model transforms venture capital investment evaluation from intuitive judgment to systematic analysis. Inspired by Clint Korver's framework, this model decomposes startup risk into discrete life-stages and competitive outcome levels, enabling investors and entrepreneurs to make informed investment decisions under extreme uncertainty.
            </p>
            
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Risk-Centric Approach</strong>: Systematic risk assessment across Early Stage, Growth Stage, and Expansion Stage development with stage-by-stage success probability evaluation
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Six-Scenario Framework</strong>: Three success scenarios (Market Leader, Challenger, Also-ran) plus three failure scenarios with calculated probabilities based on underlying risk assessments
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Probability-Weighted Analysis</strong>: Combines scenario probabilities with exit valuations to calculate probability-weighted multiple on investment (PWMOI)
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                <strong>Strategic Decision Support</strong>: Making investing decisions via structured assessment methodology that can be easily discussed and tested with logic and evidence
              </p>
            </div>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="text-xl font-bold text-heading">
                Complete Decision Analysis Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is This Model?</h3>
                    <p className="text-base leading-relaxed mb-4">
                      The Professional Decision Analysis for Venture Capital Model is a sophisticated risk assessment framework that transforms venture capital investment evaluation from intuitive judgment to systematic analysis. The model addresses the fundamental challenge that 'venture is a terrible learning environment' where 'the average venture capitalist only makes a few decisions a year, and it takes years to see if these decisions result in good or bad outcomes.'
                    </p>
                    
                    <h4 className="font-semibold text-heading mt-4 mb-2">Key Features</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sequential Risk Framework across three critical development stages</li>
                      <li>Systematic probability assignment for each risk factor</li>
                      <li>Six-scenario generation with mathematical consistency</li>
                      <li>PWMOI calculation framework</li>
                      <li>Integration with other valuation models for exit value estimation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <div className="space-y-3">
                      <p>
                        <strong>Traditional Approach Limitations</strong>: Conventional venture capital evaluation suffers from optimism bias and relies heavily on discount rates to account for uncertainty
                      </p>
                      <p>
                        <strong>Cognitive Bias Mitigation</strong>: Addresses specific decision-making biases including representativeness, confirmation bias, and anchoring
                      </p>
                      <p>
                        <strong>Learning Acceleration</strong>: Structured approach enables faster learning about venture capital practice
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-3">
                      <p><strong>Venture Capital Investors</strong>: Systematic evaluation methodology for portfolio construction and investment committee analysis</p>
                      <p><strong>Institutional Investors</strong>: Due diligence framework for early-stage investments with probability-weighted return expectations</p>
                      <p><strong>Entrepreneurs</strong>: Understanding investor decision-making processes and identifying critical risk factors</p>
                      <p><strong>Financial Advisors</strong>: Professional framework for early-stage investment analysis and client advisory services</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does It Work?</h3>
                    
                    <h4 className="font-semibold text-heading mt-4 mb-2">Risk Assessment Framework</h4>
                    <p className="mb-3"><strong>Three Development Stages</strong>:</p>
                    
                    <div className="space-y-3 pl-4">
                      <div>
                        <p className="font-medium">1. Early Stage Risks (Seed Stage)</p>
                        <ul className="list-disc pl-6 mt-1">
                          <li>Market Risk: Product-market fit validation, customer need verification</li>
                          <li>Product Risk: MVP development, technical feasibility</li>
                          <li>Team Risk: Founder capability, execution track record</li>
                          <li>Financial Risk: Access to seed funding, operational capital requirements</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="font-medium">2. Growth Stage Risks (Series A)</p>
                        <ul className="list-disc pl-6 mt-1">
                          <li>Market Risk: Scalable customer acquisition, market expansion potential</li>
                          <li>Product Risk: Product scalability, reliability at scale</li>
                          <li>Team Risk: Management team buildout, organizational development</li>
                          <li>Financial Risk: Series A funding environment, growth capital access</li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="font-medium">3. Expansion Stage Risks (Series B+)</p>
                        <ul className="list-disc pl-6 mt-1">
                          <li>Market Risk: Market expansion, competitive response</li>
                          <li>Product Risk: Feature development, technological advancement</li>
                          <li>Team Risk: Organizational scaling, talent acquisition</li>
                          <li>Financial Risk: Path to profitability, late-stage funding</li>
                        </ul>
                      </div>
                    </div>

                    <h4 className="font-semibold text-heading mt-6 mb-2">Competitive Positioning Assessment</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Market Leader</strong>: Dominant market position (25% baseline probability)</li>
                      <li><strong>Challenger</strong>: Strong competitive position (50% baseline probability)</li>
                      <li><strong>Also-ran</strong>: Viable business with limited advantages (25% baseline probability)</li>
                    </ul>

                    <h4 className="font-semibold text-heading mt-6 mb-2">Six-Scenario Generation</h4>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Market Leader Success</li>
                      <li>Challenger Success</li>
                      <li>Also-ran Success</li>
                      <li>Early Stage Failure</li>
                      <li>Growth Stage Failure</li>
                      <li>Expansion Stage Failure</li>
                    </ol>

                    <p className="mt-4"><strong>PWMOI Formula</strong>: PWMOI = Σ(Scenario Probability × Scenario Multiple on Investment)</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                    
                    <h4 className="font-semibold text-heading mt-4 mb-2">Key Limitations</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Subjectivity in Probability Assessment</strong>: Despite systematic structure, probability assignments remain subjective</li>
                      <li><strong>Static Analysis Framework</strong>: Point-in-time assessment rather than dynamic risk evolution analysis</li>
                      <li><strong>Scenario Coverage Constraints</strong>: Six-scenario framework may not capture all possible outcomes</li>
                      <li><strong>Valuation Methodology Dependence</strong>: PWMOI quality depends on exit valuation accuracy from other models</li>
                    </ul>

                    <h4 className="font-semibold text-heading mt-4 mb-2">Best Practices</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use multiple independent assessments to reduce individual bias</li>
                      <li>Maintain detailed rationale for all probability assignments with supporting evidence</li>
                      <li>Conduct systematic testing across wide probability ranges</li>
                      <li>Regular updates as new information becomes available</li>
                      <li>Cross-model validation with other valuation approaches</li>
                      <li>Bias awareness and structured analytical checks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                    <div className="text-sm text-slate-500 space-y-1">
                      <p>¹ Korver, Clint, "Applying Decision Analysis to Venture Investing," Kauffman Fellows Journal</p>
                      <p>² Sahlman, William A., "A Method for Valuing High-Risk, Long-Term Investments," Harvard Business School</p>
                      <p>³ Howard, Ronald A., "Decision Analysis: Practice and Promise," Management Science</p>
                      <p>⁴ National Venture Capital Association, "NVCA 2024 Yearbook"</p>
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