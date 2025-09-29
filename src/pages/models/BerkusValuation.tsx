import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

const BerkusValuation = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Berkus Valuation Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Berkus Valuation Model');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Berkus Valuation Method - Pre-Revenue Startup Model | Financial Decision Models</title>
        <meta name="description" content="Berkus Method startup valuation model for pre-revenue companies. Risk-based Excel tool evaluates idea, prototype, team, relationships, and rollout. Try free online, download interactive version." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage", 
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Berkus Valuation Model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Berkus Valuation Model suggests that startup value creation occurs through systematic evaluation of five risk mitigation factors rather than financial performance optimisation."
              }
            },{
              "@type": "Question",
              "name": "Why Was the Berkus Method Developed?",
              "acceptedAnswer": {
                "@type": "Answer", 
                "text": "Academic research demonstrates that startup financial projections show poor predictive accuracy, with most companies missing initial revenue estimates by huge margins."
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
                "name": "Berkus Valuation Model"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto">
          <Link 
            to="/toolbox/startup-valuations"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Startup Valuations
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Berkus Valuation Model
          </h1>

          <h2 className="text-lg text-slate-600 leading-relaxed mb-8">
            Pre-Revenue Valuation based on Assessment of Five Key Factors and Scenario Modelling
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md lg:h-[400px]">
            <CardHeader>
              <CardTitle>
                Berkus Valuation Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ER7BObBFTKtJhglZtgmnA-QBRnr-Jd_A9JTdudvqlvczMQ?e=xs1NMY&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                variant="model-blue"
                size="lg"
                className="w-full text-lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Online & View
              </Button>
              <DownloadButton 
                sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EaG59B1j_dZCrXVdXTuyvQcBsxxCsvi1cTVJvbQzj7IJ7g?e=NkZLDr"
                modelName="Berkus Valuation Model"
                className="w-full text-lg"
              />
              <div className="mt-1 pt-1 text-xs text-muted-foreground">
                <strong className="text-primary">Quick Access Guide:</strong><br />
                <span>Online & View - Instant online preview (without registration)</span>
                <br /><span>Download & Use - Browser embedded Excel with download capability (required registration)</span>
              </div>
            </CardContent>
          </Card>

          {/* Introduction Headline */}
          <h3 className="mb-6">Berkus Valuation Model Introduction</h3>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              The Berkus Valuation Model transforms Dave Berkus's risk-assessment approach¹ into a scenario-based framework for pre-revenue startup valuation. By systematically evaluating five critical risk mitigation factors through multiple market scenarios, this model provides entrepreneurs and investors with credible valuations that address early-stage uncertainty.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              <strong>Risk-Centric Approach</strong>: Unlike traditional financial projection methods, the Berkus approach recognises that pre-revenue startups lack historical data or reliable estimates for conventional analysis.¹ ² Instead, the model focuses on systematic risk assessment across Sound Idea, Working Prototype, Quality Management Team, Strategic Relationships, and Product Rollout.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              <strong>Scenario Implementation</strong>: The model varies both maximum values and performance scores across the five risk factors into five valuation scenarios (Very Low through Very High), enabling sensitivity analysis of the high uncertainty inherent in early-stage valuation.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Establish credible pre-revenue valuations through systematic risk assessment, optimise resource allocation by identifying highest-impact risk mitigation activities, and support investor dialogues with scenario-based valuation ranges.
            </p>
            
            <p className="text-xl text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: Angel investors and early-stage VCs requiring systematic evaluation frameworks, pre-revenue entrepreneurs needing structured valuation justification, and financial advisors providing early-stage valuation services.
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
                    <h3 className="text-xl font-bold text-heading mb-3">Overview and Strategic Framework</h3>
                    <p className="leading-relaxed mb-4">
                      The Berkus Valuation Model transforms Dave Berkus's risk-assessment approach into a scenario-based framework for pre-revenue startup valuation. By systematically evaluating five critical risk mitigation factors through multiple market scenarios, this model provides entrepreneurs and investors with credible valuations that address early-stage uncertainty.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Risk-Centric Approach</strong>: Unlike traditional financial projection methods, the Berkus approach recognises that pre-revenue startups lack historical data or reliable estimates for conventional analysis. Instead, the model focuses on systematic risk assessment across Sound Idea, Working Prototype, Quality Management Team, Strategic Relationships, and Product Rollout.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Scenario Implementation</strong>: The model varies both maximum values and performance scores across the five risk factors into five valuation scenarios (Very Low through Very High), enabling sensitivity analysis of the high uncertainty inherent in early-stage valuation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is the Berkus Valuation Model?</h3>
                    <p className="leading-relaxed mb-4">
                      The Berkus Valuation Model suggests that startup value creation occurs through systematic evaluation of five risk mitigation factors rather than financial performance optimisation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Five-Factor Risk Assessment Framework</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">1. Sound Idea (Business Risk Reduction)</h4>
                        <p className="leading-relaxed">Market opportunity validation, business model viability, competitive differentiation, and customer need verification.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">2. Working Prototype (Technology Risk Reduction)</h4>
                        <p className="leading-relaxed">Technical feasibility demonstration, intellectual property development, product development progress, and market reaction validation.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">3. Quality Management Team (Execution Risk Reduction)</h4>
                        <p className="leading-relaxed">Leadership experience, team completeness, execution capability, and team dynamics.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">4. Strategic Relationships (Market Risk Reduction)</h4>
                        <p className="leading-relaxed">Customer development progress, partnership establishment, market access capabilities, and industry recognition.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">5. Product Rollout or Sales (Production Risk Reduction)</h4>
                        <p className="leading-relaxed">Go-to-market execution, early revenue generation, operational capability, and scaling readiness.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <p className="leading-relaxed mb-4">
                      Academic research demonstrates that startup financial projections show poor predictive accuracy, with most companies missing initial revenue estimates by huge margins. Traditional financial valuation approaches are therefore unreliable for early-stage companies and require alternative valuation methods.
                    </p>
                    <p className="leading-relaxed mb-4">
                      The Berkus approach addresses this by focusing on risk mitigation rather than financial forecasting. As companies systematically reduce operational risks through tangible achievements, their fundamental value increases in measurable ways.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Angel Investors and Early-Stage VCs</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Credible valuations: Establish systematic pre-money valuations with consistent methodology for tracking value creation across investments</li>
                          <li>Evaluation frameworks: Assessment tools that provide analytical consistency across diverse early-stage opportunities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Pre-Revenue Entrepreneurs</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Valuation justification: Structured approach to defending valuation expectations with scenario-based analysis and strategic priority setting</li>
                          <li>Resource allocation: Understanding of valuation ranges across different execution levels enables informed strategic decision-making</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Financial Advisors</h4>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                          <li>Client frameworks: Early-stage valuation tools for startup clients with business plan development support and transaction advisory capabilities</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does the Berkus Valuation Model Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Core Methodology</h4>
                        <p className="leading-relaxed mb-4">
                          The model requires two key inputs for each of the five risk factors: Maximum Values (user-defined maximum potential value for each risk factor) and Performance Scores (user rates company's current performance on a 1-5 scale).
                        </p>
                        <p className="leading-relaxed mb-4">
                          <strong>Calculation</strong>: Each factor's value = (Maximum Value) × (Performance Score ÷ 5). Total pre-money valuation = sum of all five factor values.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Excel Implementation</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>User Interface Standards</strong>: Colour-coded Excel system with yellow cells for user inputs, white cells for calculated values, and grey cells with bold text for key results.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Worksheet Protection</strong>: All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                        </p>
                        <p className="leading-relaxed mb-4">
                          <strong>Visualisation</strong>: Pre-money and post-money valuation ranges with ownership percentage calculations for investment scenarios.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Scenario Framework</strong>: Apart from the Base Case, each scenario is based on ranges of maximum risk factor values and performance scores. For the maximum value, the user sets a percentage range (for example ±50%), whilst performance score range (±1) is automatically applied.
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
                          <strong>Inherent Subjectivity</strong>: Performance scoring requires subjective assessment, making results sensitive to individual bias and market condition assumptions.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Market Realities</strong>: Excludes financial performance data, industry-specific factors, and exceptional potential that may not fit generic risk categories.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Static Analysis</strong>: Assumes generic risk factors apply universally with current advantages remaining sustainable over time.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Best Practices</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Verification Requirements</strong>: Require specific evidence for each performance score to avoid arbitrary ratings and maintain analytical credibility.
                        </p>
                        <p className="leading-relaxed mb-2">
                          <strong>Multiple Assessments</strong>: Use independent evaluations to reduce bias and benchmark maximum values against recent angel/seed transactions.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Range Presentation</strong>: Present results as valuation ranges with scenario context and transparent assumption documentation rather than point estimates.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                    <p className="text-sm leading-relaxed">
                      ¹ Berkus, Dave, "The Berkus Method: Valuing an Early Stage Investment," Berkonomics (2012) ² Berkus, Dave, "Extending the Berkus Method: Valuing Development Stage Companies," Angel Capital Association (2016) ³ Payne, Bill, "The Scorecard Valuation Method," Angel Capital Association (2011) ⁴ Venture Capital Journal, "Early Stage Valuation Methods: A Comparative Analysis" (2023) ⁵ National Angel Capital Organization, "Angel Investment Performance Study" (2024) ⁶ Halo Report, "Angel Investor Market Analysis" (2024)
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BerkusValuation;