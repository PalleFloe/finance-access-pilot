import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const DcfModels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const downloadModel = () => {
    const link = document.createElement('a')
    link.href = 'https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EaIMASZwJQ5AeOqqrcV5HyIBqHab3BRsSq2BRrbT9Ymqdw?e=6pJ5DL'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/financial-fundamentals"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Financial Fundamentals
          </Link>

          <h1 className="text-4xl font-bold text-heading mb-4">
            Standard Types of DCF Models
          </h1>

          <h2 className="text-2xl text-heading mb-8">
            Three DCF Approaches: Flexible DCF, Three Stages DCF, and Stable Growth Models
          </h2>

          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Standard Types of DCF Models
              </CardTitle>
              <CardDescription>
                Three DCF Approaches: Flexible DCF, Three Stages DCF, and Stable Growth Models
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={downloadModel}
              >
                Open Model
              </Button>
              <p className="text-xs text-slate-500 text-center">
                ✨ Free access • No registration • Use immediately in your browser
              </p>
            </CardContent>
          </Card>

          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-semibold mb-4">What Are the Standard Types of DCF Models?</h3>
            <p className="leading-relaxed mb-4">
              The Standard Types of DCF Models provides three comprehensive approaches to discounted cash flow valuation. This model includes a Flexible DCF model for custom projections, a Three Stages DCF model for companies with distinct growth phases, and a Stable Growth Model for mature businesses with consistent growth patterns.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use Different DCF Model Types?</h3>
            <p className="leading-relaxed mb-4">
              Different business situations require different DCF approaches:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Flexible DCF:</strong> Accommodates unique business models with custom cash flow projections and varying growth assumptions</li>
              <li><strong>Three Stages DCF:</strong> Perfect for companies experiencing high growth, transitional, and mature phases</li>
              <li><strong>Stable Growth Model:</strong> Ideal for mature companies with predictable, steady growth rates</li>
              <li><strong>Comprehensive analysis:</strong> Enables comparison across different valuation approaches for validation</li>
              <li><strong>Scenario planning:</strong> Supports multiple growth assumptions and sensitivity analysis</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">How Do These DCF Models Work?</h3>
            <p className="leading-relaxed mb-4">
              Each model type employs specific methodologies tailored to different business contexts:
            </p>

            <h4 className="text-lg font-medium mb-3">Flexible DCF Model</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Allows custom cash flow projections for each forecast period</li>
              <li>Accommodates varying growth rates, margins, and capital requirements</li>
              <li>Includes detailed working capital and capital expenditure modeling</li>
            </ul>

            <h4 className="text-lg font-medium mb-3">Three Stages DCF Model</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>Stage 1:</strong> High growth phase with elevated growth rates</li>
              <li><strong>Stage 2:</strong> Transitional phase with declining growth rates</li>
              <li><strong>Stage 3:</strong> Stable growth phase with perpetual growth assumptions</li>
            </ul>

            <h4 className="text-lg font-medium mb-3">Stable Growth Model</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li>Simple perpetual growth model for mature businesses</li>
              <li>Focuses on sustainable long-term growth rates</li>
              <li>Emphasizes return on invested capital and reinvestment rates</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="leading-relaxed mb-4">
              These models are fundamental tools for equity research, corporate valuation, and investment analysis. The choice of model depends on the company's lifecycle stage, industry characteristics, and available information. Users should be aware that all DCF models are sensitive to terminal value assumptions and require careful consideration of long-term growth sustainability.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Damodaran, A. (2012). Investment Valuation: Tools and Techniques for Determining the Value of Any Asset. Wiley Finance. • McKinsey & Company. (2020). Valuation: Measuring and Managing the Value of Companies. Wiley.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DcfModels;