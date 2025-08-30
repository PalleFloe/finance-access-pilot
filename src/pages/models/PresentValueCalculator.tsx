import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import { useEffect } from "react";

const PresentValueCalculator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    console.log('openModel: PresentValueCalculator ->', sharePointUrl);
    const win = window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (!win) console.warn('window.open was blocked by the browser');
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
            Simple Present Value Calculator
          </h1>

          <h2 className="mb-8">
            Present Value Analysis: One-time, Annuity, Growing Annuity, Perpetuity, and Growing Perpetuity Calculations
          </h2>

          <Card className="shadow-lg border-slate-200 mb-3 max-w-md">
            <CardHeader>
              <CardTitle>
                Simple Present Value Calculator
              </CardTitle>
              <CardDescription>
                Present Value Analysis: One-time, Annuity, Growing Annuity, Perpetuity, and Growing Perpetuity Calculations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EcWINfosJYdIvOqs-W-og1UB59Qujs7jySgBwhZDL9HTdQ?action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                variant="brand-green"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Online & Free
              </Button>
              <DownloadButton 
                sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EYdscwj4bARIoHlRjWhB2iQBlXKfmzKEewtfuPNvIkqgNA?e=Mz9dfi"
                modelName="Simple Present Value Calculator"
                className="w-full"
              />
            </CardContent>
          </Card>

          <div className="bg-background p-4 rounded-lg mb-4 text-sm text-muted-foreground">
            <strong className="text-primary">Quick Access Guide:</strong><br />
            <span>Click "Online & Free" for instant online preview (no registration)</span>
            <br /><span>Click "Download & Free" for browser embedded Excel with download capability (registration required)</span>
          </div>

          <div className="prose prose-slate max-w-none">
            <h3 className="mb-4">What Is the Simple Present Value Calculator?</h3>
            <p className="leading-relaxed mb-4">
              The Simple Present Value Calculator is a comprehensive financial tool designed to calculate the present value of various types of cash flows. This model supports five different calculation methods: one-time payments, annuities, growing annuities, perpetuities, and growing perpetuities, making it an essential tool for financial analysis and investment decision-making.
            </p>

            <h3 className="mb-4">Why Use the Simple Present Value Calculator?</h3>
            <p className="leading-relaxed mb-4">
              Present value calculations are fundamental to finance, allowing investors and analysts to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Compare different investment opportunities</strong> on an equal footing by converting future cash flows to today's dollars</li>
              <li><strong>Make informed capital allocation decisions</strong> by understanding the true value of future income streams</li>
              <li><strong>Evaluate bonds, annuities, and other financial instruments</strong> with predictable payment patterns</li>
              <li><strong>Assess the value of perpetual income streams</strong> such as preferred dividends or rental income</li>
              <li><strong>Account for growth in cash flows</strong> when analyzing investments with escalating returns</li>
            </ul>

            <h3 className="mb-4">How Does the Simple Present Value Calculator Work?</h3>
            <p className="leading-relaxed mb-4">
              The calculator employs time value of money principles to discount future cash flows back to their present value equivalent. Each calculation type serves specific scenarios:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>One-time Payment:</strong> Calculates the present value of a single future cash flow</li>
              <li><strong>Annuity:</strong> Values a series of equal payments over a specified period</li>
              <li><strong>Growing Annuity:</strong> Accounts for payments that increase at a constant growth rate</li>
              <li><strong>Perpetuity:</strong> Values an infinite series of equal payments</li>
              <li><strong>Growing Perpetuity:</strong> Values an infinite series of payments growing at a constant rate</li>
            </ul>

            <h3 className="mb-4">Key Applications and Limitations</h3>
            <p className="leading-relaxed mb-4">
              This tool is particularly valuable for bond valuation, pension calculations, real estate analysis, and investment appraisal. However, users should be aware that the model assumes constant discount rates and, where applicable, constant growth rates, which may not reflect real-world variability.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Brealey, R. A., Myers, S. C., & Allen, F. (2020). Principles of Corporate Finance. McGraw-Hill Education. • Ross, S. A., Westerfield, R. W., & Jaffe, J. (2019). Corporate Finance. McGraw-Hill Education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentValueCalculator;