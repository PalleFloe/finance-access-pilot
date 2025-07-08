import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Calculator } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const SaasUnitEconomics = () => {
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
            Professional SaaS Unit Economics Model
          </h1>

          {/* Sub-headline */}
          <h2 className="text-2xl text-heading mb-8">
            Professional SaaS Unit Economics Analysis: From Customer Acquisition & Revenue to Business Model Validation & Valuation
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-6 h-6 text-primary" />
                <span>SaaS Unit Economics Model</span>
              </CardTitle>
              <CardDescription>
                Professional unit economics analysis for SaaS businesses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => downloadModel('SaaS Unit Economics Model 25.07.07.xlsm')}
              >
                Open Model
              </Button>
            </CardContent>
          </Card>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The SaaS Unit Economics Model is crucial for valuing SaaS companies by focusing on the profitability of individual customers and their contribution to the overall business. By analyzing the fundamental relationship between customer acquisition, retention, and lifetime value, the model provides startups and growth companies with sophisticated analytical frameworks for understanding and optimizing their core business model economics.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Dual-Model Framework</strong>: The model offers two complementary approaches: a <strong>Simple Model with constant assumptions and perpetuity logic</strong> ideal for quick analysis, scenario modelling and investor presentations, and an <strong>Input-by-Year Model</strong> with variable assumptions for detailed planning <strong>with an Exit Year</strong>. This dual approach ensures flexibility for both rapid analysis and comprehensive multi-year planning.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Validate business model viability, optimize customer acquisition strategies, and demonstrate scalability potential to investors through comprehensive unit economics analysis. The model excels at identifying the key drivers of profitability and growth, enabling entrepreneurs to make informed decisions about pricing, marketing spend, and operational scaling.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: SaaS companies, e-commerce businesses, subscription services, marketplaces, and any recurring revenue model requiring detailed customer economics analysis. Particularly valuable for startups seeking investment, growth companies optimizing operations, and investors conducting due diligence on recurring revenue businesses.
            </p>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="text-xl font-bold text-heading">
                Complete SaaS Unit Economics Model Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Overview and Strategic Framework</h3>
                    <p className="leading-relaxed mb-4">
                      The SaaS Unit Economics Model is crucial for valuing SaaS companies by focusing on the profitability of individual customers and their contribution to the overall business. By analyzing the fundamental relationship between customer acquisition, retention, and lifetime value, the model provides startups and growth companies with sophisticated analytical frameworks for understanding and optimizing their core business model economics.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Dual-Model Framework</strong>: The model offers two complementary approaches: a Simple Model with constant assumptions and perpetuity logic ideal for quick analysis, scenario modelling and investor presentations, and an Input-by-Year Model with variable assumptions for detailed planning with an Exit Year. This dual approach ensures flexibility for both rapid analysis and comprehensive multi-year planning.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Strategic Purpose</strong>: Validate business model viability, optimize customer acquisition strategies, and demonstrate scalability potential to investors through comprehensive unit economics analysis. The model excels at identifying the key drivers of profitability and growth, enabling entrepreneurs to make informed decisions about pricing, marketing spend, and operational scaling.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Target Users</strong>: SaaS companies, e-commerce businesses, subscription services, marketplaces, and any recurring revenue model requiring detailed customer economics analysis. Particularly valuable for startups seeking investment, growth companies optimizing operations, and investors conducting due diligence on recurring revenue businesses.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is the Professional SaaS Unit Economics Model?</h3>
                    <p className="leading-relaxed mb-4">
                      The Professional SaaS Unit Economics Model is a sophisticated dual-framework system that analyzes business model viability through the lens of customer-level economics. Unlike traditional financial models that focus on aggregate performance, this approach dissects the fundamental economics of individual customer relationships. Customers are viewed as average units - they could be average unit services or products that the company sells. Models are not fully cash-flow models as some elements are excluded such as financial elements and tax considerations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Core Analytical Framework</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Customer Metrics:</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>New Customer Acquisition: Annual customer growth with market penetration analysis</li>
                          <li>Churn Rate Analysis: Customer retention patterns with cohort tracking capabilities</li>
                          <li>Revenue Per Customer: Subscription, transaction, or hybrid revenue models</li>
                          <li>Cost Per Customer: Direct serving costs including infrastructure, support, and delivery</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Cost Structure:</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Customer Acquisition Cost (CAC): Marketing and sales investment efficiency</li>
                          <li>Fixed Operating Costs: Administrative, infrastructure, and overhead analysis</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Other Financials:</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Discount Rate: Required investor return rate for present value calculations</li>
                          <li>Profit Multiple Valuation: Business valuation using profit-based multiples</li>
                          <li>Investment (CAPEX): The business' capital requirements for scaling operations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Business Model Validation Challenge</strong>: Entrepreneurs struggle to demonstrate scalability to investors and need clear metrics that prove unit-level profitability.</li>
                      <li><strong>Resource Allocation Optimization</strong>: Limited startup resources demand precise investment targeting, and marketing spend efficiency requires detailed customer acquisition analysis.</li>
                      <li><strong>Investor Communication Needs</strong>: Institutional investors require standardized unit economics metrics, and venture capital due diligence demands comprehensive customer analysis.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-3">
                      <p><strong>Entrepreneurs</strong>: Business model optimization, fundraising preparation with compelling unit economics, strategic decision support, and product-market fit validation.</p>
                      <p><strong>Investors</strong>: Due diligence framework for systematic evaluation, portfolio company monitoring, valuation analysis using unit economics-based approaches, and risk assessment.</p>
                      <p><strong>Financial Advisors</strong>: Client advisory services with professional unit economics analysis, investment recommendations, and strategic consulting through unit economics insights.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does the Professional SaaS Unit Economics Model Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Mathematical Foundation</h4>
                        <div className="bg-slate-100 p-4 rounded-lg mt-2">
                          <h5 className="font-semibold mb-2">Core Unit Economics Calculations Framework</h5>
                          <ul className="space-y-1 text-sm">
                            <li>• Customer Lifetime Value (CLV) = (Revenue Per Customer × Customer Lifetime) - (Cost Per Customer × Customer Lifetime)</li>
                            <li>• Customer Lifetime = 1 ÷ Churn Rate</li>
                            <li>• Customer Acquisition Payback Period = Customer Acquisition Cost ÷ (Revenue Per Customer - Cost Per Customer)</li>
                            <li>• LTV:CAC Ratio = Customer Lifetime Value ÷ Customer Acquisition Cost</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">Model Implementation</h4>
                        <p className="leading-relaxed">
                          Both models use color-coded Excel inputs with real-time calculations and built-in scenario analysis (Downside Case, Base Case, Success Case). The Simple Model applies perpetuity logic to steady-state assumptions, while the Input-by-Year Model projects variable assumptions across 1-10 years with exit valuation.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-heading">Industry Applications</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Business Models</strong>: SaaS platforms, e-commerce with repeat customers, marketplaces, subscription services, and freemium mobile apps.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Key Benchmarks</strong>: Industry standards include 3:1 LTV:CAC ratios, &lt;12 month payback periods, and stage-appropriate metrics for validation against comparable companies and VC expectations.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Limitations</h3>
                    <p className="leading-relaxed">
                      The models focus on unit economics and exclude comprehensive financial statements, tax considerations, and complex capital structures. Users should validate assumptions with market research and update parameters as business conditions evolve.
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

export default SaasUnitEconomics;