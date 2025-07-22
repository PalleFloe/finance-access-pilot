import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const BerkusValuation = () => {
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
            Professional Berkus Valuation Model
          </h1>

          {/* Sub-headline */}
          <h2 className="text-2xl text-heading mb-8">
            Risk-Based Startup Valuation: Pre-Revenue Valuation based on Assessment of Five Key Factors and Scenario Modelling
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Berkus Valuation Model
              </CardTitle>
              <CardDescription>
                Pre-revenue valuation based on risk assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => downloadModel('Berkus Valuation Models 25.07.07.xlsm')}
              >
                Open Model
              </Button>
            </CardContent>
          </Card>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Professional Berkus Valuation Model transforms Dave Berkus's risk-assessment approach into a scenario-based framework for pre-revenue startup valuation. By systematically evaluating five critical risk mitigation factors through multiple market scenarios, this model provides entrepreneurs and investors with credible valuations that address early-stage uncertainty and institutional investment requirements.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Risk-Centric Approach</strong>: Unlike traditional financial projection methods, the enhanced Berkus approach recognizes that pre-revenue startups lack reliable historical data for conventional analysis. Instead, the model focuses on systematic risk assessment across Sound Idea, Working Prototype, Quality Management Team, Strategic Relationships, and Product Rollout.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Scenario Implementation</strong>: The framework varies both maximum risk factor values and performance scores across five scenarios (Very Low through Very High), enabling comprehensive sensitivity analysis that addresses diverse market conditions and execution capabilities.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Establish credible pre-revenue valuations through systematic risk assessment, optimize resource allocation by identifying highest-impact risk mitigation activities, and support investor communications with professional scenario-based valuation ranges.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: Angel investors and early-stage VCs requiring systematic evaluation frameworks, pre-revenue entrepreneurs needing structured valuation justification, and financial advisors providing professional early-stage valuation services.
            </p>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="text-xl font-bold text-heading">
                Complete Berkus Valuation Model Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is the Professional Berkus Valuation Model?</h3>
                    <p className="leading-relaxed mb-4">
                      The Professional Berkus Valuation Model is an evolution of Dave Berkus's original risk-based valuation framework, designed for pre-revenue and early-stage startups where traditional financial metrics provide limited insight. The model operates on the principle that startup value creation occurs through systematic risk mitigation rather than financial performance optimization.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Five-Factor Risk Assessment Framework</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">1. Sound Idea (Business Risk Reduction)</h4>
                        <p className="text-base">Market opportunity validation, business model viability, competitive differentiation, and customer need verification.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">2. Working Prototype (Technology Risk Reduction)</h4>
                        <p className="text-base">Technical feasibility demonstration, intellectual property development, product development progress, and market reaction validation.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">3. Quality Management Team (Execution Risk Reduction)</h4>
                        <p className="text-base">Leadership experience, team completeness, execution capability, and team dynamics.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">4. Strategic Relationships (Market Risk Reduction)</h4>
                        <p className="text-base">Customer development progress, partnership establishment, market access capabilities, and industry recognition.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">5. Product Rollout or Sales (Production Risk Reduction)</h4>
                        <p className="text-base">Go-to-market execution, early revenue generation, operational capability, and scaling readiness.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <div className="space-y-3">
                      <p>
                        <strong>The Financial Projection Problem</strong>: Academic research demonstrates that startup financial projections show poor predictive accuracy, with most companies missing initial revenue targets by 40-60%. This unreliability undermines traditional DCF and comparable company valuation approaches for early-stage companies.
                      </p>
                      <p>
                        <strong>Risk-Centric Solution</strong>: The Berkus approach addresses this by focusing on risk mitigation rather than financial forecasting. As companies systematically reduce operational risks through tangible achievements, their fundamental value increases in measurable ways.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-3">
                      <p><strong>Angel Investors and Early-Stage VCs</strong>: Establish credible pre-money valuations, systematic evaluation frameworks, and consistent methodology for tracking value creation across investments.</p>
                      <p><strong>Pre-Revenue Entrepreneurs</strong>: Structured valuation justification with scenario analysis, strategic priority setting, and understanding of valuation ranges across different execution levels.</p>
                      <p><strong>Financial Advisors</strong>: Professional early-stage valuation framework for startup clients, business plan development, and transaction advisory support.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does the Professional Berkus Valuation Model Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Core Methodology</h4>
                        <p className="leading-relaxed mb-2">
                          The model requires two key inputs for each of the five risk factors: <strong>Maximum Values</strong> (user-defined maximum potential value for each risk factor) and <strong>Performance Scores</strong> (user rates company's current achievement on 1-5 scale based on actual progress).
                        </p>
                        <div className="bg-slate-100 p-4 rounded-lg">
                          <p className="font-semibold mb-2">Calculation:</p>
                          <p className="text-base">Each factor's value = (Maximum Value) × (Performance Score ÷ 5)</p>
                          <p className="text-base">Total pre-money valuation = sum of all five factor values</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Limitations</h3>
                    <div className="space-y-3">
                      <p><strong>Inherent Subjectivity</strong>: Requires benchmark validation, peer review process, and systematic reassessment as conditions change.</p>
                      <p><strong>Market Dependencies</strong>: Valuation variations based on economic conditions, industry cycles, and technology trends.</p>
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

export default BerkusValuation;