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

const SaasUnitEconomics = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('SaaS Unit Economics Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('SaaS Unit Economics Model');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>SaaS Unit Economics Model - Professional Valuation Tool | Financial Decision Models</title>
        <meta name="description" content="Professional SaaS unit economics model analyzing customer lifetime value, acquisition costs, and churn. Excel tool for subscription business valuation. Try free online, download interactive version." />
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
          SaaS Unit Economics Model
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Cohort-Based Customer Analysis and Annual Financial Projections for SaaS Valuation with Long Term Value and Customer Payback Period
        </p>
      </div>

      <div className="container mx-auto mb-12">
        <div className="max-w-md bg-white rounded-lg border shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
            SaaS Unit Economics Model
          </h3>
          
          <div className="space-y-3">
            <Button 
              onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EfOt-LHdyddGnCOekB15-A8BbobEAwXR_UcZpsfCslmTiw?e=KTTQa3&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
              className="w-full text-lg"
              variant="brand-green"
              size="lg"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Online & Free
            </Button>
            
              <DownloadButton 
                sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/ETQMIDNWvYxOo93LJ53bgK0BcIxrgOuyZ3EY0Z_Cf8fnSA?e=sm06A9"
                modelName="SaaS Unit Economics Model"
              className="w-full"
            />
          </div>
          
          <div className="mt-6 text-sm text-gray-600">
            <h4 className="font-semibold mb-2">Quick Access Guide</h4>
            <ul className="space-y-1 text-xs">
              <li><strong>Online & Free:</strong> Click to preview this model instantly in your browser</li>
              <li><strong>Register to Download:</strong> Free registration gives you download access to all models</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
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
                              <p className="font-semibold">B. Customer Payback Period Analysis</p>
                              <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>Calculates months required to recover customer acquisition investment</li>
                                <li>Measures cash flow efficiency and working capital requirements</li>
                                <li>Customer Payback Sensitivity Chart: Analysis how payback period changes with each key variable</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p className="font-semibold">2. By Year Model (Comprehensive Annual Projections)</p>
                          <ul className="list-disc pl-6 mt-1 space-y-1">
                            <li>Year-by-year financial projections with variable assumptions</li>
                            <li>Exit valuation scenarios using revenue and profit multiples</li>
                            <li>Customer acquisition tracking with cumulative base analysis</li>
                            <li>Detailed profit and loss statements with unit economics integration</li>
                            <li>Cash flow analysis with investment and valuation calculations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Key Limitations</h4>
                      <div className="space-y-3">
                        <p><strong>Simplified Assumptions</strong>: Models use simplified assumptions that may not capture full business complexity, requiring careful consideration of real-world variations.</p>
                        <p><strong>Data Requirements</strong>: Requires accurate customer data including churn rates, acquisition costs, and revenue per customer that may not be available for early-stage companies.</p>
                        <p><strong>Static Analysis</strong>: Assumes relatively stable business model parameters, which may not reflect dynamic markets or evolving customer behaviour.</p>
                        <p><strong>Exit Multiple Dependencies</strong>: Valuation relies on market-based exit multiples that can vary significantly based on market conditions and comparable companies.</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-heading">Best Practices</h4>
                      <div className="space-y-3">
                        <p><strong>Conservative Assumptions</strong>: Use realistic and conservative assumptions for customer acquisition, retention, and monetisation to maintain analytical credibility.</p>
                        <p><strong>Sensitivity Analysis</strong>: Test multiple scenarios with different churn rates, acquisition costs, and revenue assumptions to understand valuation sensitivity.</p>
                        <p><strong>Regular Updates</strong>: Update model assumptions regularly as actual business data becomes available to maintain accuracy and relevance.</p>
                        <p><strong>Comparative Analysis</strong>: Use alongside other valuation methods and industry benchmarks to validate results and ensure comprehensive analysis.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">References</h3>
                  <div className="text-sm space-y-1">
                    <p>¹ Skok, David, "SaaS Metrics 2.0 – A Guide to Measuring and Improving What Matters," Matrix Partners (2015)</p>
                    <p>² Reinhart, Jason, "The SaaS Model and Unit Economics: Everything You Need to Know," OpenView Partners (2016)</p>
                    <p>³ Christensen, Clayton M., "The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail," Harvard Business Review Press (1997)</p>
                    <p>⁴ Blank, Steve, and Bob Dorf, "The Startup Owner's Manual: The Step-by-Step Guide for Building a Great Company," K&S Ranch (2012)</p>
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

export default SaasUnitEconomics;