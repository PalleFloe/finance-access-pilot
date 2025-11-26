import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { getFaqJson } from "@/seo/faqs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';
import projectScenarioPreview800 from "@/assets/project-scenario-preview-800.webp";
import projectScenarioPreview400 from "@/assets/project-scenario-preview-400.webp";

const ProjectScenarioModel = () => {
  const { trackOnlineOpen } = useAnalytics();
  const faqJson = getFaqJson("model-project-scenario-model");
  
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
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/project-scenario-model" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Project Scenario Model - Multi-Scenario Capital Budgeting | Financial Decision Models" />
        <meta property="og:description" content="Multi-scenario capital budgeting model with NPV and IRR analysis. Excel tool evaluates investment projects across downside, base case, and upside scenarios. Try free online or download." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/project-scenario-model" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Decision Models" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">
          {JSON.stringify(faqJson)}
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
                "name": "Project Scenario Model",
                "item": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/project-scenario-model"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Project Scenario Model",
            "description": "Multi-scenario capital budgeting model with NPV and IRR analysis evaluating projects across downside, base case, and upside scenarios.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": ["Windows", "macOS"],
            "softwareHelp": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/project-scenario-model",
            "image": "https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png",
            "url": "https://www.financialdecisionmodels.com/toolbox/financial-fundamentals/project-scenario-model",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "description": "Free online preview and downloadable no-macro Excel model with step-by-step user guidance."
            },
            "publisher": {
              "@type": "Organization",
              "name": "Financial Decision Models",
              "url": "https://www.financialdecisionmodels.com/"
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto">
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

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Comprehensive Project Analysis: Multi-Scenario Capital Budgeting with NPV and IRR Sensitivity Analysis
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 w-full max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Simple Project Scenario Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EXh7vv2SI0tKiQPbe0c9TUYBXRBXXB2RKpkgUXwaOXj9Fw?e=j8ss8Z&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EXh7vv2SI0tKiQPbe0c9TUYBXRBXXB2RKpkgUXwaOXj9Fw?e=j8ss8Z&download=1"
                    modelName="Simple Project Scenario Model"
                    className="w-full"
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="flex-shrink-0 w-full max-w-md">
              <ModelInfoPanel />
            </div>

            <div className="flex-shrink-0 w-full max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-0">
                  <CardTitle className="text-[16px] font-bold text-brand-blue" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
                    Preview of Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-2 pt-1">
                  <div className="w-full max-w-[360px] h-[180px] overflow-hidden rounded-md flex items-center justify-center mx-auto">
                    <img 
                      src={projectScenarioPreview800}
                      srcSet={`${projectScenarioPreview400} 400w, ${projectScenarioPreview800} 800w`}
                      sizes="(max-width: 768px) 100vw, 360px"
                      width="800"
                      height="600"
                      alt="Simple Project Scenario Model Preview" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
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