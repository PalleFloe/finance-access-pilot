import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const CostOfCapitalCalculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    window.open(sharePointUrl, '_blank', 'width=1200,height=800');
  };

  const openTier2Registration = (modelName: string) => {
    alert('Registration for free download coming soon!\n\nModel: ' + modelName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/toolbox/financial-fundamentals"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Financial Fundamentals
          </Link>

          <h1 className="mb-4">
            Simple Cost of Capital Calculator
          </h1>

          <h2 className="mb-8">
            WACC Analysis: Cost of Equity, Cost of Debt, and Weighted Average Cost of Capital Calculation
          </h2>

          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Simple Cost of Capital Calculator
              </CardTitle>
              <CardDescription>
                WACC Analysis: Cost of Equity, Cost of Debt, and Weighted Average Cost of Capital Calculation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="tier-buttons-stacked">
                <button className="tier-btn tier-1-btn" onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EWjfT36ci3pDlynSGPz3UgoB7WDPisM6ofLXnqeo1zft6w?e=Yyg7mn')}>
                  Online & Free
                </button>
                <button className="tier-btn tier-2-btn" onClick={() => openTier2Registration('Simple Cost of Capital Calculator')}>
                  Download & Free
                </button>
              </div>
            </CardContent>
          </Card>

          <div className="prose prose-slate max-w-none">
            <h3 className="mb-4">What Is the Simple Cost of Capital Calculator?</h3>
            <p className="leading-relaxed mb-4">
              The Simple Cost of Capital Calculator is a fundamental financial tool that determines a company's Weighted Average Cost of Capital (WACC). This model calculates the cost of equity, cost of debt, and combines them based on the company's capital structure to provide the overall cost of capital, which is essential for investment evaluation and corporate valuation.
            </p>

            <h3 className="mb-4">Why Use the Simple Cost of Capital Calculator?</h3>
            <p className="leading-relaxed mb-4">
              The cost of capital serves as a critical benchmark for financial decision-making:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Investment evaluation:</strong> Provides the hurdle rate for evaluating new projects and investments</li>
              <li><strong>Company valuation:</strong> Serves as the discount rate in DCF models for enterprise valuation</li>
              <li><strong>Capital structure optimization:</strong> Helps determine the optimal mix of debt and equity financing</li>
              <li><strong>Performance measurement:</strong> Establishes minimum acceptable returns for value creation</li>
              <li><strong>Strategic planning:</strong> Supports long-term financial planning and capital allocation decisions</li>
            </ul>

            <h3 className="mb-4">How Does the Simple Cost of Capital Calculator Work?</h3>
            <p className="leading-relaxed mb-4">
              The calculator employs the standard WACC formula, incorporating three key components:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Cost of Equity:</strong> Calculated using the Capital Asset Pricing Model (CAPM) or other appropriate methods</li>
              <li><strong>Cost of Debt:</strong> Determined from current borrowing rates adjusted for tax benefits</li>
              <li><strong>Capital Structure Weights:</strong> Based on market values of debt and equity</li>
            </ul>
            <p className="leading-relaxed mb-4">
              The model accounts for the tax deductibility of interest payments, providing an after-tax cost of debt that reflects the actual economic cost to the company.
            </p>

            <h3 className="mb-4">Key Applications and Limitations</h3>
            <p className="leading-relaxed mb-4">
              This tool is essential for corporate finance professionals, investment analysts, and business valuators. However, users should recognize that WACC calculations require several assumptions about market conditions, beta estimates, and risk premiums that may vary over time. The model is most effective when used with current market data and regularly updated inputs.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Damodaran, A. (2012). Investment Valuation: Tools and Techniques for Determining the Value of Any Asset. Wiley Finance. • Koller, T., Goedhart, M., & Wessels, D. (2020). Valuation: Measuring and Managing the Value of Companies. McKinsey & Company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostOfCapitalCalculator;