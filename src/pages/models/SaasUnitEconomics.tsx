import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const SaasUnitEconomics = () => {
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
            SaaS Unit Economics Model
          </h1>

          {/* Sub-headline */}
          <h2 className="mb-8">
            Content: Model, Introduction and Complete Guidance
          </h2>

          {/* Model Card */}
          <Card className="shadow-lg border-slate-200 mb-8 max-w-md relative">
            <CardHeader>
              <CardTitle>
                SaaS Unit Economics Model
              </CardTitle>
              <CardDescription>
                From Customer Acquisition & Revenue to Business Model Validation & Valuation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="tier-buttons-stacked">
                <button className="tier-btn tier-1-btn" onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EfOt-LHdyddGnCOekB15-A8BSHdSheJlSRR408SobOhe7g&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}>
                  Online & Free
                </button>
                <button className="tier-btn tier-3-btn" disabled>
                  Download & Subscription
                  <span className="coming-soon-badge">Coming Soon</span>
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Introduction Headline */}
          <h3 className="mb-6">SaaS Unit Economics Model Introduction</h3>

          {/* Short Description */}
          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              The SaaS Unit Economics Model values SaaS companies by analysing individual customer profitability and lifetime contribution to overall business value.¹ ² By examining the fundamental relationship between customer acquisition, retention, and lifetime value, the model provides startups and growth companies with analytical frameworks for understanding and optimising core business model economics.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Dual-Model Framework</strong>: The model offers two complementary approaches: Customer Life Time Model with constant assumptions and perpetuity logic for quick analysis and scenario modelling, and By Year Model with variable assumptions per year and exit valuation analysis. This dual approach ensures flexibility for both rapid analysis and comprehensive multi-year planning.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              <strong>Strategic Purpose</strong>: Validate business model viability, optimise customer acquisition strategies, and demonstrate scalability potential to investors through unit economics analysis.¹ ² The model identifies key drivers of profitability, growth and valuation, enabling entrepreneurs to make informed decisions that enhance business valuation and engage effectively with investors.
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed">
              <strong>Target Users</strong>: SaaS companies, e-commerce businesses, subscription services, marketplaces, and any recurring revenue model requiring detailed customer economics analysis. Particularly valuable for startups seeking investment, growth companies optimising operations, and investors conducting due diligence on recurring revenue businesses.
            </p>
          </div>

          {/* Expandable Section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="complete-guide">
              <AccordionTrigger className="mb-3">
                Complete SaaS Unit Economics Model Guide
              </AccordionTrigger>
              <AccordionContent className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Overview and Strategic Framework</h3>
                    <p className="leading-relaxed mb-4">
                      The SaaS Unit Economics Model values SaaS companies by analysing individual customer profitability and lifetime contribution to overall business value. By examining the fundamental relationship between customer acquisition, retention, and lifetime value, the model provides startups and growth companies with analytical frameworks for understanding and optimising core business model economics.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Dual-Model Framework</strong>: The model offers two complementary approaches: Customer Life Time Model with constant assumptions and perpetuity logic for quick analysis and scenario modelling, and By Year Model with variable assumptions per year and exit valuation analysis. This dual approach ensures flexibility for both rapid analysis and comprehensive multi-year planning.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Strategic Purpose</strong>: Validate business model viability, optimise customer acquisition strategies, and demonstrate scalability potential to investors through unit economics analysis. The model identifies key drivers of profitability and growth, enabling entrepreneurs to make informed decisions about pricing, marketing spend, and operational scaling.
                    </p>
                    <p className="leading-relaxed mb-4">
                      <strong>Target Users</strong>: SaaS companies, e-commerce businesses, subscription services, marketplaces, and any recurring revenue model requiring detailed customer economics analysis. Particularly valuable for startups seeking investment, growth companies optimising operations, and investors conducting due diligence on recurring revenue businesses.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">What Is the SaaS Unit Economics Model?</h3>
                    <p className="leading-relaxed mb-4">
                      The SaaS Unit Economics Model analyses business model viability through customer-level economics. Unlike traditional financial models that focus on aggregate performance, this approach examines individual customer relationships as average units—whether services or products the company sells. Models exclude some elements such as financial components and tax considerations.
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
                          <li>Revenue and Profit Multiple Valuation: Business valuation using profit-based multiples</li>
                          <li>Investment (CAPEX): Capital expenditures for acquiring or improving long-term assets, treated separately from normal operating expenses (OPEX)</li>
                          <li>Net Present Value (NPV): Assesses profitability and potential by considering time value of money via discount rate</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                    <p className="leading-relaxed mb-4">
                      Traditional aggregate financial models obscure the fundamental economics driving SaaS business success. Unit economics analysis addresses this by focusing on customer-level profitability and lifetime value, enabling more precise business model validation and investment decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Entrepreneurs</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Resource allocation optimisation: Investment decisions with customer acquisition analysis</li>
                          <li>Business performance insights: Identify changes that most effectively improve performance and valuation</li>
                          <li>Business model validation: Demonstrate scalability with clear metrics proving unit-level profitability</li>
                          <li>Valuation analysis and scenarios: Enable insights, preparations and decisions for funding</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Investors</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Valuation analysis: Unit economics frameworks for investment decisions</li>
                          <li>Due diligence and monitoring: Systematic evaluation with standardised unit economics metrics</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Financial Advisors</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Client advisory services: Unit economics analysis for startup clients</li>
                          <li>Investment recommendations: Strategic consulting through unit economics insights</li>
                          <li>Transaction support: Analysis for fundraising and M&A processes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">How Does the SaaS Unit Economics Model Work?</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Excel Workbook Structure</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Four Integrated Worksheets:</strong>
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>General Assumptions and Info: Basic setup and model overview</li>
                          <li>Customer Life Time: Perpetuity-based analysis with constant assumptions</li>
                          <li>By Year Model: Variable year-by-year projections with exit scenarios</li>
                          <li>Your Notes: Documentation workspace for assumptions and insights</li>
                        </ul>
                        <p className="leading-relaxed mt-2">
                          <strong>Navigation:</strong> Use worksheet tabs at bottom to switch between analytical approaches.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">User Interface Standards</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Colour-Coded System (consistent across all models):</strong>
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Yellow cells: User inputs—modify these values for your analysis</li>
                          <li>White cells: Calculated values—automatically updated</li>
                          <li>Grey cells with bold text: Key results—primary outputs for decision-making</li>
                        </ul>
                        <p className="leading-relaxed mt-2">
                          <strong>Worksheet Protection:</strong> All cells are protected except yellow input cells and Your Notes worksheet, ensuring model integrity whilst allowing full customisation of assumptions and documentation.
                        </p>
                        <p className="leading-relaxed mt-2">
                          <strong>Scenario Framework:</strong>
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Downside/Base/Upside scenarios: Optional but recommended for analysis</li>
                          <li>Charts may not display properly if scenarios aren't used as designed</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Mathematical Foundation</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Core Unit Economics Calculations:</strong>
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Customer Lifetime = 1 ÷ Churn Rate</li>
                          <li>Customer Lifetime Value (CLV) = Customer Lifetime × (Revenue Per Customer - Cost Per Customer)</li>
                          <li>CLV:CAC Ratio = Customer Lifetime Value ÷ Customer Acquisition Cost</li>
                          <li>Customer Acquisition Payback Period = Customer Acquisition Cost ÷ (Revenue Per Customer - Cost Per Customer)</li>
                          <li>Net Present Value (NPV): Present value of future cash flows discounted at required rate of return</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Two Complementary Models</h4>
                        <div className="space-y-3">
                          <div>
                            <p className="font-semibold">1. Customer Life Time Model—Two Integrated Parts:</p>
                            <div className="ml-4 space-y-2">
                              <div>
                                <p className="font-semibold">A. Customer Life Time Value (Perpetuity Analysis)</p>
                                <ul className="list-disc pl-6 mt-1 space-y-1">
                                  <li>Uses constant assumptions across all periods</li>
                                  <li>Applies perpetuity logic for ongoing business value</li>
                                  <li>NPV Valuation Sensitivity Chart: Shows how NPV changes with each key driver, holding everything else equal—enables users to identify which variables most impact valuation</li>
                                </ul>
                              </div>
                              <div>
                                <p className="font-semibold">B. Exit Value Analysis</p>
                                <ul className="list-disc pl-6 mt-1 space-y-1">
                                  <li>Calculates revenue/profit performance in exit year(s) based on Customer Life Time Value assumptions</li>
                                  <li>Applies revenue and profit exit year multiples to estimate Exit Year Valuation</li>
                                  <li>Generates NPV of Exit Year Valuation for investment decision-making</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold">2. By Year Model</p>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                              <li>Projects variable assumptions across 1-5 years with detailed year-by-year analysis</li>
                              <li>Uses exit multiples to estimate valuation under different scenarios</li>
                              <li>Valuation Range Charts: Display exit multiple scenarios for both revenue and profit, showing valuation ranges across Downside/Base/Upside cases</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-semibold">Integration:</p>
                            <p className="leading-relaxed">
                              Both models can estimate exit valuations using different methodologies—perpetuity logic with optional exit analysis vs. dynamic year-by-year projections—enabling cross-validation.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Best Practice Implementation</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Start by defining currency and denomination in General Assumptions and Info sheet</li>
                          <li>Start with Customer Life Time model for quick analysis and insights</li>
                          <li>Use Exit Value analysis for specific exit timing and multiple-based valuations</li>
                          <li>Apply By Year Model for detailed operational planning and variable growth scenarios</li>
                          <li>Cross-validate results between both models to ensure consistency</li>
                          <li>Test scenario sensitivity using built-in Downside/Base/Upside framework</li>
                          <li>Focus on sensitivity charts to identify key value drivers requiring attention</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-heading">Industry Applications</h4>
                        <p className="leading-relaxed mb-2">
                          <strong>Business Models:</strong> SaaS platforms, e-commerce with repeat customers, marketplaces, subscription services, and freemium mobile apps.
                        </p>
                        <p className="leading-relaxed">
                          <strong>Key Benchmarks:</strong> Industry standards include 3:1 LTV:CAC ratios, &lt;12 month payback periods, and stage-appropriate metrics for validation against comparable companies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-heading">Key Limitations</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li><strong>Excludes:</strong> Tax, legal complexity, operational scaling challenges, competitive dynamics</li>
                          <li><strong>Assumes:</strong> Static customer behaviour, constant acquisition costs, perpetual business model in Customer Life Time model</li>
                          <li><strong>Risk:</strong> Over-simplification of customer segments and cohort variations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-heading">Best Practices</h4>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                          <li>Validate churn and CAC assumptions against industry benchmarks</li>
                          <li>Test 25-50% changes in key metrics across all scenarios</li>
                          <li>Document customer acquisition sources and competitive positioning</li>
                          <li>Cross-check with other valuation methods before major decisions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                    <div className="text-sm text-slate-500 space-y-1">
                      <p>¹ SaaStr, "The Official SaaS Metrics Bible" (2024)</p>
                      <p>² Redpoint Ventures, "The Unit Economics of SaaS Business Models" (2023)</p>
                      <p>³ Pacific Crest Securities, "SaaS Survey Results" (2024)</p>
                      <p>⁴ OpenView Partners, "SaaS Benchmarks Report" (2024)</p>
                      <p>⁵ McKinsey & Company, "The SaaS Revolution: How Software-as-a-Service Is Transforming the Economy" (2023)</p>
                      <p>⁶ FirstMark Capital, "2024 SaaS Benchmarks Report" (2024)</p>
                      <p>⁷ Insight Partners, "SaaS Company Valuations Study" (2024)</p>
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

export default SaasUnitEconomics;