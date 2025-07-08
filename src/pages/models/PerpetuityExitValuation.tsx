import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Calculator } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const PerpetuityExitValuation = () => {
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
            Professional Perpetuity & Exit Valuation Models
          </h1>

          {/* Sub-headline */}
          <h2 className="text-2xl text-heading mb-8">
            Simple Perpetuity Models: Quick & Flexible Approaches to Valuation with Scenario-Based Sensitivity and Value Driver Analysis
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-6 h-6 text-primary" />
                <span>Perpetuity & Exit Valuation Models</span>
              </CardTitle>
              <CardDescription>
                Quick perpetuity approaches with scenario analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-slate-400 text-white cursor-not-allowed"
                disabled
              >
                Coming Soon - Upload Required
              </Button>
            </CardContent>
          </Card>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The Professional Perpetuity & Exit Valuation Models provide straightforward analysis that enables users to understand the impact of key value drivers on business valuation. Through three simple perpetuity models and a complementary exit value model, these tools deliver immediate insights into how cash flow, growth assumptions, exit timing, and investment decisions affect net present value across multiple scenarios.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Value Driver Focus</strong>: Unlike complex valuation frameworks, these models emphasize practical sensitivity analysis that shows users exactly how changing growth rates, exit multiples, or investment timing impacts valuation. The three-scenario structure (Downside Case, Base Case, Success Case) enables quick assessment of valuation ranges under different assumptions.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Professional Simplicity</strong>: The models balance analytical rigor with practical usability, providing the Gordon Growth foundation essential for perpetuity analysis while maintaining the simplicity necessary for rapid scenario testing and strategic decision support.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Enable quick perpetuity analysis through multiple approaches, provide immediate value driver sensitivity insights through scenario-based testing, and support strategic investment decisions with simple yet robust NPV calculations.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: Entrepreneurs conducting business plan validation, investors requiring rapid perpetuity valuation assessment, and financial advisors needing flexible valuation tools for client advisory services.
            </p>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="text-xl font-bold text-heading">
                Complete Perpetuity & Exit Valuation Models Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Are the Professional Perpetuity & Exit Valuation Models?</h3>
                    <p className="leading-relaxed mb-4">
                      The Professional Perpetuity & Exit Valuation Models are designed for practical valuation analysis with immediate value driver insights. The suite includes three perpetuity-based approaches and one exit-based approach, each using consistent three-scenario analysis (Downside Case, Base Case, Success Case) to demonstrate how key assumptions impact net present value.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Four-Model Framework</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Common Features Across All Models:</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                          <li>Flexible year selection (1-10 years) for analysis period</li>
                          <li>Investment integration with timing options (up to 2 investments)</li>
                          <li>Discount rate input for all NPV calculations</li>
                          <li>Three-scenario analysis (Downside Case, Base Case, Success Case)</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">NPV of Perpetuity</h4>
                        <p className="text-sm">Simple perpetuity model with no growth assumption (Cash Flow ÷ Discount Rate), scenario-based cash flow sensitivity, and includes exit multiple assumption.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">NPV of Growing Perpetuity</h4>
                        <p className="text-sm">Gordon Growth perpetuity model with single growth rate assumption, demonstrates impact of consistent growth on perpetual value.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">NPV of Two-Phase Growing Perpetuity</h4>
                        <p className="text-sm">Sophisticated perpetuity model with distinct growth phases, models transition from high growth to mature growth rates.</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">NPV of Exit Value</h4>
                        <p className="text-sm">Simple exit-based valuation calculation, direct comparison alternative to perpetuity approaches.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Were These Models Developed?</h3>
                    <div className="space-y-3">
                      <p><strong>Valuation Assumption Transparency</strong>: Traditional and more complex valuation analysis often obscures the relationship between key assumptions and outcomes. These models address this by providing immediate visibility into how growth rates, exit values, and investment timing drive NPV results.</p>
                      <p><strong>Value Driver Education</strong>: Users need to understand which assumptions most significantly impact valuations to make informed strategic decisions.</p>
                      <p><strong>Practical Application Need</strong>: Complex valuation models often overwhelm users with detail while hiding fundamental value relationships.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-3">
                      <p><strong>Entrepreneurs and Startups</strong>: Business plan validation with perpetuity sensitivity testing, strategic planning through growth assumption analysis.</p>
                      <p><strong>Investors and Advisors</strong>: Rapid perpetuity assessment for investment decisions, portfolio company valuation with consistent methodology.</p>
                      <p><strong>Financial Professionals</strong>: Client advisory services with flexible valuation tools, transaction analysis with multiple perpetuity approaches.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Do the Professional Perpetuity & Exit Models Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Core Calculation Methods</h4>
                        <div className="bg-slate-100 p-4 rounded-lg space-y-2">
                          <p><strong>NPV of Perpetuity Model</strong>: Simple Perpetuity Foundation: Value = Cash Flow ÷ Discount Rate</p>
                          <p><strong>NPV of Growing Perpetuity Model</strong>: Gordon Growth Foundation: Value = Cash Flow ÷ (Discount Rate - Growth Rate)</p>
                          <p><strong>NPV of Two-Phase Growing Perpetuity Model</strong>: Sophisticated Growth Modeling with initial high-growth phase transitioning to mature growth.</p>
                          <p><strong>NPV of Exit Value Model</strong>: Direct Exit Approach using simple NPV calculation based on exit value assumptions.</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">Strategic Applications</h4>
                        <div className="space-y-2">
                          <p><strong>Business Plan Development</strong>: Valuation validation through multiple approaches, growth assumption testing with immediate impact visibility.</p>
                          <p><strong>Investment Decision Support</strong>: Rapid NPV analysis across valuation scenarios, value driver sensitivity assessment for strategic planning.</p>
                          <p><strong>Strategic Planning</strong>: Capital allocation decisions based on valuation impact, exit strategy evaluation through comparative analysis.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Limitations</h3>
                    <div className="space-y-3">
                      <p><strong>Simplified Assumptions</strong>: Models use simplified cash flow projections focusing on valuation analysis rather than detailed operational forecasting.</p>
                      <p><strong>Scenario Dependency</strong>: Results depend on realistic assumption setting across the three scenarios.</p>
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

export default PerpetuityExitValuation;