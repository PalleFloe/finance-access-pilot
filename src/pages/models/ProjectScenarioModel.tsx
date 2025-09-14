import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import { useEffect } from "react";

const ProjectScenarioModel = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    console.log('openModel: ProjectScenarioModel ->', sharePointUrl);
    const win = window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (!win) console.warn('window.open was blocked by the browser');
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Project Scenario Model - Multi-Scenario Capital Budgeting | Financial Decision Models</title>
        <meta name="description" content="Multi-scenario capital budgeting model with NPV and IRR analysis. Excel tool evaluates investment projects across downside, base case, and upside scenarios. Try free online or download." />
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container">
          <Link 
            to="/toolbox/financial-fundamentals"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Financial Fundamentals
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            Simple Project Scenario Model
          </h1>

          <h2 className="mb-8">
            Comprehensive Project Analysis: Multi-Scenario Capital Budgeting with NPV and IRR Sensitivity Analysis
          </h2>

          <Card className="shadow-lg border-slate-200 mb-8 max-w-md">
            <CardHeader>
              <CardTitle>
                Simple Project Scenario Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EVjyi5TByNVNjsOCjrxOuFkBfX3L4Z6jpli9xqdgNxvN2g?e=YQlZLq&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                variant="brand-green"
                className="w-full"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Online & Free
              </Button>
              <DownloadButton 
                sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/Ef4sTrPfQ4dIr2nBzcgiD7IBVIofzGGpx3AehJmaLw9GFA?e=1VmNAR"
                modelName="Simple Project Scenario Model"
                className="w-full"
              />
              <div className="mt-1 pt-1 text-xs text-muted-foreground">
                <strong className="text-primary">Quick Access Guide:</strong><br />
                <span>Click "Online & Free" for instant online preview (no registration)</span>
                <br /><span>Click "Download & Free" for browser embedded Excel with download capability (registration required)</span>
              </div>
            </CardContent>
          </Card>

          <div className="max-w-none">
            <h3 className="text-xl font-semibold mb-4">What Is the Simple Project Scenario Model?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The Simple Project Scenario Model is a comprehensive capital budgeting tool that evaluates investment projects under multiple scenarios. This model performs detailed NPV and IRR analysis across optimistic, base case, and pessimistic scenarios, while providing sensitivity analysis to identify key value drivers and risk factors.
            </p>

            <h3 className="text-xl font-semibold mb-4">Why Use the Simple Project Scenario Model?</h3>
            <p className="text-lg leading-relaxed mb-4">
              Scenario-based project analysis is essential for robust capital allocation decisions:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2 text-lg">
              <li><strong>Risk assessment:</strong> Understand the range of potential outcomes and associated probabilities</li>
              <li><strong>Decision support:</strong> Provide comprehensive analysis for investment committee decisions</li>
              <li><strong>Sensitivity analysis:</strong> Identify which variables have the greatest impact on project value</li>
              <li><strong>Risk management:</strong> Develop contingency plans for different scenario outcomes</li>
              <li><strong>Portfolio optimization:</strong> Compare projects with different risk-return profiles</li>
              <li><strong>Performance monitoring:</strong> Establish benchmarks for tracking actual performance</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4">How Does the Simple Project Scenario Model Work?</h3>
            <p className="text-lg leading-relaxed mb-4">
              The model employs a structured approach to scenario analysis:
            </p>

            <h4 className="text-lg font-semibold mb-3">Three-Scenario Framework</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li><strong>Optimistic Scenario:</strong> Best-case assumptions with favorable market conditions</li>
              <li><strong>Base Case Scenario:</strong> Most likely outcome based on realistic expectations</li>
              <li><strong>Pessimistic Scenario:</strong> Worst-case assumptions with challenging conditions</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Financial Metrics Analysis</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Net Present Value (NPV) calculation for each scenario</li>
              <li>Internal Rate of Return (IRR) determination</li>
              <li>Payback period analysis</li>
              <li>Profitability index computation</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Sensitivity Analysis</h4>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-lg">
              <li>Variable impact assessment on project NPV</li>
              <li>Break-even analysis for key assumptions</li>
              <li>Tornado diagrams for visual sensitivity representation</li>
              <li>Monte Carlo simulation capabilities for advanced analysis</li>
            </ul>

            <h4 className="text-lg font-semibold mb-3">Risk Assessment</h4>
            <p className="text-lg leading-relaxed mb-4">
              The model provides probability-weighted expected values and risk-adjusted returns, enabling decision-makers to understand both the expected value and the uncertainty associated with the investment.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Applications and Limitations</h3>
            <p className="text-lg leading-relaxed mb-4">
              This tool is fundamental for corporate finance teams, project managers, and investment professionals evaluating capital projects. While the model provides comprehensive analysis, users should recognize that scenario probabilities are subjective estimates and actual outcomes may differ significantly from projected scenarios. Regular model updates with actual performance data enhance accuracy over time.
            </p>

            <p className="text-sm text-slate-500 mt-8">
              <strong>References:</strong> Brealey, R. A., Myers, S. C., & Allen, F. (2020). Principles of Corporate Finance. McGraw-Hill Education. • Copeland, T., Koller, T., & Murrin, J. (2000). Valuation: Measuring and Managing the Value of Companies. McKinsey & Company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectScenarioModel;