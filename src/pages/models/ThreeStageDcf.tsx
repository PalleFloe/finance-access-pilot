import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, ArrowRight, ExternalLink, Clock } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { useAnalytics, usePageVisitTracking } from '@/hooks/useAnalytics';
import FinancialTerm from "@/components/FinancialTerm";

const ThreeStageDcf = () => {
  const { trackOnlineOpen } = useAnalytics();
  usePageVisitTracking('Three Stage DCF Model');

  const openModel = () => {
    trackOnlineOpen('Three Stage DCF Model');
    const url = 'https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/Ec04wrAndQtCriekJrQ5dtwBA_SkoypTrAh8de8yI5Iv9Q?e=3v5qmu&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False';
    window.open(url, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Three Stage DCF Model - Multi-stage Analysis | Financial Decision Models</title>
        <meta name="description" content="Three Stage DCF Model for multi-stage analysis: DCF valuation with distinct performance stage characteristics. Professional investment analysis tool with dynamic evolution modeling." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Three Stage DCF Model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Three Stage DCF Model addresses investments that don't maintain constant operational characteristics throughout their lifetime."
              }
            },{
              "@type": "Question",
              "name": "Why Was the Three Stage DCF Model Developed?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many internal investments follow predictable development patterns that single-growth DCF models cannot capture accurately."
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
                "name": "Investment Analysis",
                "item": "https://www.financialdecisionmodels.com/toolbox/investment-analysis"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Three Stage DCF Model"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto">
          <Link 
            to="/toolbox/investment-analysis"
            className="inline-flex items-center text-slate-600 hover:text-brand-blue mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Investment Analysis
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Three Stage <FinancialTerm term="DCF">DCF</FinancialTerm> Model
          </h1>
          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-12">
            Multi-stage Analysis: <FinancialTerm term="DCF">DCF</FinancialTerm> Valuation with Distinct Performance Stage Characteristics
          </h2>

          {/* Model Card */}
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto mb-8">
            <div className="flex-shrink-0 max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Three Stage DCF Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={openModel}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Online & View
                  </Button>
                  
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/Ea241lXv391GqP_l0MybwvABAscjLi_idFozsNy2A9JrCA?e=kQ0oho"
                    modelName="Three Stage DCF Model"
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-md">
              <ModelInfoPanel />
            </div>
          </div>

          {/* Introduction Headline */}
          <h3 className="mb-6">Three Stage <FinancialTerm term="DCF">DCF</FinancialTerm> Model Introduction</h3>

          {/* Introduction Content */}
          <div className="prose prose-slate max-w-none mb-8">
            <div>
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                The Three Stage <FinancialTerm term="DCF">DCF</FinancialTerm> Model values internal investments experiencing distinct phases of development with different operational characteristics in each stage. By explicitly modelling transition periods from initial implementation through maturation, this framework captures the realistic evolution of investment performance whilst maintaining analytical rigour.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Multi-Phase Framework</strong>: Unlike single-growth models that assume constant performance, this approach recognises that investments typically experience distinct phases - initial ramp-up with lower efficiency, operational scaling with improving performance, and mature operations with stable characteristics. Each stage can have different growth rates, margin profiles, and capital requirements.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Dynamic Evolution</strong>: Users define the duration and operational parameters for each of three stages, enabling detailed modelling of how investments develop over time. Revenue growth rates, cost structures, and capital requirements can evolve independently across stages, reflecting real-world investment dynamics.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Strategic Purpose</strong>: Model investments with predictable development phases, analyse projects transitioning from start-up through maturity, and evaluate long-term initiatives with varying performance characteristics across their lifecycle.
              </p>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                <strong>Target Users</strong>: Business leaders evaluating complex multi-phase investments, project managers overseeing staged implementations, and finance teams analysing investments with evolving operational profiles.
              </p>
            </div>
          </div>

          {/* Collapsible Guide */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide" className="border-none">
              <AccordionTrigger className="w-full bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:no-underline data-[state=open]:rounded-b-none data-[state=open]:border-b-0">
                <div className="text-left w-full">
                  <div className="text-sm font-semibold uppercase tracking-wide mb-1 text-slate-600">
                    Full Detailed Guide
                  </div>
                  <div className="text-2xl font-bold text-[#326496]">
                    Complete Three Stage <FinancialTerm term="DCF">DCF</FinancialTerm> Model Guide
                  </div>
                <div className="text-base font-semibold mt-2 text-slate-600">
                  Click to expand comprehensive documentation →
                </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-white border border-slate-200 rounded-b-lg border-t-0">
                <div className="prose prose-slate max-w-none">
                  <div className="space-y-6 text-slate-600">
                    <div>
                    <h4 className="text-xl font-semibold text-brand-blue mb-3">Overview and Strategic Framework</h4>
                    <p className="text-slate-600 mb-4">
                      The Three Stage <FinancialTerm term="DCF">DCF</FinancialTerm> Model values internal investments experiencing distinct phases of development with different operational characteristics in each stage. This framework is designed for evaluating capital projects, operational improvements, and strategic initiatives that exhibit predictable evolution patterns within existing business structures.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-brand-blue mb-3">What Is the Three Stage <FinancialTerm term="DCF">DCF</FinancialTerm> Model?</h4>
                    <p className="text-slate-600 mb-4">
                      The Three Stage <FinancialTerm term="DCF">DCF</FinancialTerm> Model addresses investments that don't maintain constant operational characteristics throughout their lifetime. Many internal projects experience distinct development phases with different growth rates, efficiency levels, and capital requirements as they mature from initial implementation to steady-state operations.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Core Analytical Framework:</strong>
                    </p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• <strong>Stage 1:</strong> Initial phase with user-defined duration and operational characteristics</li>
                      <li>• <strong>Stage 2:</strong> Transition phase with evolving performance parameters</li>
                      <li>• <strong>Stage 3:</strong> Mature phase leading to terminal value calculations</li>
                      <li>• <strong>Terminal Value:</strong> Perpetual operations using Gordon Growth methodology</li>
                    </ul>
                    <p className="text-slate-600 mb-4">
                      <strong>Lifecycle <FinancialTerm term="CAPEX">CAPEX</FinancialTerm> Integration:</strong> The model calculates ongoing capital requirements as a percentage of lifetime revenue, ensuring terminal value calculations reflect realistic maintenance investment needs rather than assuming no future capital requirements.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Flexible Stage Definition:</strong> Unlike rigid growth models, users define both the duration (years) and operational characteristics (growth rates, margins, capital intensity) for each stage based on specific investment dynamics.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-brand-blue mb-3">Why Was It Developed?</h4>
                    <p className="text-slate-600 mb-4">
                      Many internal investments follow predictable development patterns that single-growth <FinancialTerm term="DCF">DCF</FinancialTerm> models cannot capture accurately. New facilities require ramp-up periods, system implementations experience learning curves, and operational improvements show gradual efficiency gains. This model provides analytical framework for these realistic investment patterns.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Investment Evolution Recognition:</strong> The model acknowledges that investments typically don't achieve full operational efficiency immediately. Stage 1 might represent implementation and early operations, Stage 2 could model scaling and optimisation, whilst Stage 3 reflects mature, steady-state performance.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-brand-blue mb-3">Who Benefits?</h4>
                    
                    <p className="text-slate-600 mb-2"><strong>Business Leaders</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• <strong>Strategic planning:</strong> Evaluate complex investments with predictable development phases</li>
                      <li>• <strong>Resource allocation:</strong> Compare multi-stage projects with varying cash flow profiles</li>
                    </ul>

                    <p className="text-slate-600 mb-2"><strong>Project Leaders / Investment Managers</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• <strong>Implementation planning:</strong> Model realistic project development timelines</li>
                      <li>• <strong>Performance benchmarking:</strong> Establish stage-specific targets and milestones</li>
                    </ul>

                    <p className="text-slate-600 mb-2"><strong>Finance Teams</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• <strong>Investment analysis:</strong> Provide detailed valuations for complex multi-phase opportunities</li>
                      <li>• <strong>Business partnering:</strong> Support decision-makers with sophisticated investment modelling</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-brand-blue mb-3">How Does the Three Stage <FinancialTerm term="DCF">DCF</FinancialTerm> Model Work?</h4>
                    
                    <p className="text-slate-600 mb-2"><strong>Stage Configuration Framework</strong></p>
                    <p className="text-slate-600 mb-2"><strong>Stage Parameters for Each Phase:</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• <strong>Duration:</strong> Number of years for each stage (user-defined)</li>
                      <li>• <strong>Revenue Growth Rate:</strong> Annual revenue growth specific to each stage</li>
                      <li>• <strong>Variable Costs Growth Rate:</strong> Independent growth for variable expenses</li>
                      <li>• <strong><FinancialTerm term="OPEX">OPEX</FinancialTerm> Growth Rate:</strong> Operational expense evolution by stage</li>
                      <li>• <strong><FinancialTerm term="NWC">NWC</FinancialTerm> Ratio:</strong> Working capital as percentage of revenue for each stage</li>
                    </ul>

                    <p className="text-slate-600 mb-4">
                      <strong>Dynamic Transition:</strong> The model automatically transitions between stages based on defined durations, with each stage using its specific operational parameters whilst maintaining calculation consistency across the entire investment lifecycle.
                    </p>

                    <p className="text-slate-600 mb-2"><strong>Mathematical Foundation</strong></p>
                    <p className="text-slate-600 mb-2"><strong>Stage-Specific Calculations:</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• Each stage applies its own growth rates and operational ratios</li>
                      <li>• Cash flows reflect different efficiency levels and scaling patterns</li>
                      <li>• Working capital requirements can vary by stage based on operational maturity</li>
                    </ul>

                    <p className="text-slate-600 mb-2"><strong>Terminal Value Integration:</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• Uses final stage performance as basis for perpetual growth</li>
                      <li>• Incorporates calculated maintenance <FinancialTerm term="CAPEX">capex</FinancialTerm> from lifecycle analysis</li>
                      <li>• Applies Gordon Growth methodology: TV = <FinancialTerm term="FCFF">FCF</FinancialTerm> × (1+g) / (r-g)</li>
                    </ul>

                    <p className="text-slate-600 mb-2"><strong>Excel Implementation</strong></p>
                    <p className="text-slate-600 mb-2"><strong>Comprehensive Input Structure:</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• General assumptions for investment amount, salvage value, and financial parameters</li>
                      <li>• Stage-specific operational parameters with independent control</li>
                      <li>• Automatic calculation flow from initial investment through terminal value</li>
                    </ul>

                    <p className="text-slate-600 mb-2"><strong>Year-by-Year Visibility:</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• Complete cash flow presentation showing stage transitions</li>
                      <li>• Clear identification of when operational characteristics change</li>
                      <li>• Transparent terminal value calculation and NPV analysis</li>
                    </ul>

                    <p className="text-slate-600 mb-2"><strong>Professional Presentation:</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• Value breakdown showing contribution from each stage</li>
                      <li>• Present value analysis with discount factor application</li>
                      <li>• Terminal value share of total investment value</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-brand-blue mb-3">Strategic Applications</h4>
                    <p className="text-slate-600 mb-2"><strong>When to Use Three Stage Model:</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• <strong>Facility Developments:</strong> Manufacturing plants with ramp-up, scaling, and mature operations</li>
                      <li>• <strong>Technology Implementations:</strong> System rollouts with pilot, expansion, and steady-state phases</li>
                      <li>• <strong>Market Expansion:</strong> New market entry with initial penetration, growth, and maturity stages</li>
                      <li>• <strong>Operational Improvements:</strong> Process changes with implementation, optimisation, and steady-state benefits</li>
                    </ul>

                    <p className="text-slate-600 mb-2"><strong>Typical Stage Evolution:</strong></p>
                    <ul className="text-slate-600 mb-4 ml-4 space-y-1">
                      <li>• <strong>Stage 1 (1-3 years):</strong> Implementation phase with ramp-up growth, higher expense ratios, elevated working capital</li>
                      <li>• <strong>Stage 2 (2-5 years):</strong> Scaling phase with peak growth rates, improving efficiency, stabilising working capital</li>
                      <li>• <strong>Stage 3 (remaining period):</strong> Mature phase with sustainable growth, stable efficiency, predictable working capital</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-brand-blue mb-3">Key Limitations & Best Practices</h4>
                    
                    <p className="text-slate-600 mb-2"><strong>Key Limitations</strong></p>
                    <p className="text-slate-600 mb-4">
                      <strong>Internal Investment Focus:</strong> Designed for projects within existing business structures, not for acquisitions or changes to fundamental business model or capital structure.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Stage Assumption Dependency:</strong> Results depend heavily on accurate stage definition and realistic assumption setting for each phase's operational characteristics.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Terminal Value Dominance:</strong> Often 50-70% of total value comes from terminal value, making mature stage assumptions and terminal growth rate critical to overall valuation.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Simplified Transitions:</strong> Assumes clean transitions between stages rather than gradual evolution, which may not reflect all investment patterns.
                    </p>

                    <p className="text-slate-600 mb-2"><strong>Best Practices</strong></p>
                    <p className="text-slate-600 mb-4">
                      <strong>Stage Definition:</strong> Base stage durations and characteristics on comparable internal investments or industry experience rather than arbitrary assumptions.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Conservative Terminal Assumptions:</strong> Use realistic terminal growth rates (typically 2-3%) and validate maintenance capex calculations against operational experience.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Sensitivity Testing:</strong> Focus testing on stage transition timing and mature-stage operational assumptions, as these typically drive significant value changes.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Documentation:</strong> Maintain detailed rationale for stage definitions and operational assumptions, particularly for mature-stage parameters that drive terminal value.
                    </p>
                    <p className="text-slate-600 mb-4">
                      <strong>Validation:</strong> Compare results with simpler single-growth models to ensure stage complexity adds analytical value rather than just sophistication.
                    </p>
                    <p className="text-slate-600">
                      <strong>Cross-Model Comparison:</strong> Validate assumptions and results against other investment analysis models in the toolkit to ensure consistency and identify potential analytical gaps.
                    </p>
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

export default ThreeStageDcf;