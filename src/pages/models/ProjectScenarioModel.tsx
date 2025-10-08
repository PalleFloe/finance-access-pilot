import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';

const ProjectScenarioModel = () => {
  const { trackOnlineOpen } = useAnalytics();
  
  // Track page visit automatically
  usePageVisitTracking('Project Scenario Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Project Scenario Model');
    console.log('openModel: ProjectScenarioModel ->', sharePointUrl);
    const win = window.open(sharePointUrl, '_blank', 'width=1200,height=800,scrollbars=yes,resizable=yes');
    if (!win) console.warn('window.open was blocked by the browser');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Project Scenario Model - Multi-Scenario Capital Budgeting | Financial Decision Models</title>
        <meta name="description" content="Multi-scenario capital budgeting model with NPV and IRR analysis. Excel tool evaluates investment projects across downside, base case, and upside scenarios. Try free online or download." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "What Is the Simple Project Scenario Model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The Simple Project Scenario Model is a comprehensive capital budgeting tool that evaluates investment projects under multiple scenarios."
              }
            },{
              "@type": "Question",
              "name": "Why Use the Simple Project Scenario Model?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Scenario-based project analysis is essential for robust capital allocation decisions, enabling risk assessment and understanding the range of potential outcomes."
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
                "name": "Financial Fundamentals",
                "item": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Project Scenario Model"
              }
            ]
          })}
        </script>
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple Project Scenario Model
          </h1>

          <h2 className="text-lg text-slate-600 leading-relaxed mb-8">
            Comprehensive Project Analysis: Multi-Scenario Capital Budgeting with NPV and IRR Sensitivity Analysis
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[275px]">
                <CardHeader>
                  <CardTitle>
                    Simple Project Scenario Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EbH9QALmQZlNu8rW8zRc8m8BE6qEoC40c7ajqL0M9L8cbg?e=zGj8NG&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EfXdy3PrPmVOrTUUyyTwpr8BuJPzq2rGBzGIlUVTnvWIDA?e=Jzgfny"
                    modelName="Simple Project Scenario Model"
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="max-w-md">
              <ModelInfoPanel />
            </div>
          </div>

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