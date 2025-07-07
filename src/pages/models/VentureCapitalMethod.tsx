import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Calculator } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const VentureCapitalMethod = () => {
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
            Professional Venture Capital Valuation Method
          </h1>

          {/* Sub-headline */}
          <h2 className="text-2xl text-heading mb-8">
            Venture Capital Valuation Method: Bridging Multi-Round Financing, Exit Value, Founder's Ownership Share and Investor's Need for a Profitable Return
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-6 h-6" style={{ color: 'rgb(50, 100, 150)' }} />
                <span>Venture Capital Valuation Method</span>
              </CardTitle>
              <CardDescription>
                Multi-round financing and exit value analysis
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
              The Professional Venture Capital Valuation Method provides startup founders, investors, and advisors with the comprehensive analytical framework necessary for informed valuation decisions for startups with typically more than one investment round. By understanding both the investor return perspective and entrepreneur ownership implications, users can make better investment decisions, navigate negotiations successfully, and plan multi-round financing strategies with sophisticated scenario analysis capabilities.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Advanced Scenario Framework</strong>: The model builds on a base case with scenario modelling from very low through very high exit valuations, enabling stakeholders to understand return and ownership sensitivities. Users can combine exit scenarios with timing assumptions and investor requirements to conduct robust quantifiable sensitivity analysis, given the inherent high uncertainty in venture capital investing.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Establish credible valuations based on market return requirements, understand the economic logic behind investor ownership demands, and model dilution scenarios to optimize founder retention through sophisticated dual-model analysis with advanced scenario planning that serves both investor and entrepreneur perspectives.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: Venture capital investors conducting systematic deal evaluation, growth-stage entrepreneurs preparing multi-scenario business cases, and financial advisors requiring professional early-stage valuation frameworks with explicit uncertainty acknowledgment for client advisory services.
            </p>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="text-xl font-bold text-heading">
                Complete Venture Capital Valuation Method Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is the Professional Venture Capital Valuation Method?</h3>
                    <p className="leading-relaxed mb-4">
                      The Professional Venture Capital Valuation Method is a sophisticated dual-model framework that determines startup valuations by working backwards from projected exit values. Unlike traditional approaches that offer only one perspective, the system provides two complementary analytical models with advanced scenario capabilities:
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>IRR-Driven Model</strong>: Works from required investor returns (e.g., "35% for $1M") to determine required ownership percentages and current valuations.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Ownership-Driven Model</strong>: Works from proposed ownership share (e.g., "25% for $1M") to calculate the returns those ownership levels would generate under various scenarios.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Strategic Applications</h3>
                    <div className="space-y-3">
                      <p>
                        <strong>Make Better Investment Decisions</strong>: Calculate investors' required ownership share based on their return requirements across multiple exit scenarios, calculate investors' expected returns based on their proposed ownership share across multiple exit scenarios, and model dilution scenarios to optimize founders' ownership retention with scenario-based sensitivity analysis.
                      </p>
                      <p>
                        <strong>Navigate Negotiations Successfully</strong>: Switch analytical perspectives to address different stakeholder concerns with scenario support, find mutually acceptable terms through cross-validated analysis across market conditions, and support positions with professional-grade financial modelling and comprehensive scenario testing.
                      </p>
                      <p>
                        <strong>Plan Multi-Round Financing</strong>: Determine and plan optimal investment amounts and timing across multiple funding stages, project ownership dilution effects across multiple funding rounds under various market scenarios, and pressure test the planned multi-round financing with scenario-based market analysis.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <div className="space-y-3">
                      <p>
                        <strong>Single-Perspective Limitation</strong>: Some traditional VC methods focus only on investor returns without addressing ownership implications that entrepreneurs prioritize.
                      </p>
                      <p>
                        <strong>The Negotiation Gap</strong>: Most valuation tools serve either investors or entrepreneurs exclusively, but successful deals require both parties to understand the economics from multiple perspectives.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-3">
                      <p><strong>Venture Capital Investors</strong>: Make investment decisions with return-justified valuations and optimize deal structures through ownership analysis across market scenarios.</p>
                      <p><strong>Growth-Stage Entrepreneurs</strong>: Prepare investor presentations with professional valuations and model dilution scenarios to retain founder ownership under various conditions.</p>
                      <p><strong>Financial Advisors</strong>: Provide transaction support using both perspectives, educate clients on VC economics, and deliver institutional-quality analysis with scenario planning.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does the Professional Venture Capital Valuation Method Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Core Framework</h4>
                        <p className="leading-relaxed mb-2">
                          Both models use identical exit assumptions and work backwards through multiple funding rounds with multi-round investment staging, comprehensive scenario analysis across five scenarios (Very Low through Very High exit valuations), and cross-model validation ensuring mathematical consistency between approaches.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Excel Implementation</h4>
                        <p className="leading-relaxed">
                          Both models use color-coded Excel inputs with real-time calculations and built-in scenario analysis including multi-round dilution tracking, professional IRR calculations, and integrated sensitivity analysis across all scenarios.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Limitations</h3>
                    <div className="space-y-3">
                      <p><strong>Model Assumptions</strong>: Excludes complex liquidation preference waterfalls and participation rights for modeling simplicity.</p>
                      <p><strong>Market Dependencies</strong>: Valuation sensitivity to IPO and M&A market cycles, industry evolution, and regulatory environment shifts.</p>
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

export default VentureCapitalMethod;
