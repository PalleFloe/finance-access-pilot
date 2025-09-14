import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const InvestmentAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const models = [
    {
      name: "Flexible Year by Year DCF Model",
      description: "Flexible DCF Analysis: Dynamic Year-by-Year Projections with Variable Growth Rates and Terminal Value Options",
      href: "/toolbox/investment-analysis/flexible-year-by-year-dcf-model",
      status: "available",
    },
    {
      name: "Stable Growth - Finite-Life DCF Model",
      description: "Stable Growth DCF Analysis: Finite-Life Asset Valuation with Predictable Revenue and Terminal Value Calculation",
      href: "/toolbox/investment-analysis/stable-growth-finite-life-dcf-model",
      status: "available",
    },
    {
      name: "Stable Growth - Terminal Value DCF Model",
      description: "Stable Growth DCF Analysis: Perpetual Value Asset Evaluation with Terminal Value Focus and Growth Rate Sensitivity",
      href: "/toolbox/investment-analysis/stable-growth-terminal-value-dcf-model",
      status: "available",
    },
    {
      name: "Two and Three Stages DCF Models",
      description: "",
      href: "/toolbox/investment-analysis/two-and-three-stages-dcf-models",
      status: "coming soon",
    },
    {
      name: "Cost Reduction DCF Model",
      description: "",
      href: "/toolbox/investment-analysis/cost-reduction-dcf-model",
      status: "coming soon",
    },
    {
      name: "Break-Even Analysis Model",
      description: "",
      href: "/toolbox/investment-analysis/break-even-analysis-model",
      status: "coming soon",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Investment Analysis - Professional Models | Financial Decision Models</title>
        <meta name="description" content="Professional investment analysis tools for capital allocation and project evaluation. DCF models, growth analysis, and break-even calculations. Try free online, download interactive versions." />
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container mx-auto">
          <Link 
            to="/toolbox" 
            className="inline-flex items-center text-slate-600 hover:text-brand-blue mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Toolbox
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Professional Investment Analysis Models
          </h1>
            <h2 className="text-2xl md:text-3xl text-brand-blue mb-6">
            Comprehensive Investment Analysis Toolbox: Proven DCF Methods for Capital Allocation and Project Evaluation
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Explore our investment analysis models to make informed capital allocation decisions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {models.map((model) => (
              <Card key={model.name} className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative flex flex-col h-full min-h-[320px]">
                {model.status === "coming soon" && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                <CardHeader className="flex-1 flex flex-col p-6">
                  <CardTitle className="text-2xl font-semibold mb-3">
                    {model.name}
                  </CardTitle>
                  <CardDescription className="text-lg flex-1 min-h-[72px] flex items-start">
                    {model.description || " "}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-4 mt-auto">
                  <Link to={model.href}>
                    <Button variant="rich-emerald" size="lg" className="w-full text-lg">
                      {model.status === "coming soon" ? "Learn More" : "Go to Model"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comprehensive Content Section */}
          <div className="max-w-4xl space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Professional Investment Analysis Models</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Investment Analysis toolbox provides finance professionals, investors, and business leaders with proven methodologies for evaluating capital allocation decisions, project investments, and strategic initiatives. This collection transforms complex valuation theory into practical, accessible tools for real-world application.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Core Challenge Addressed: Investment Decision Uncertainty</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Investment analysis often suffers from inconsistent methodologies, hidden assumptions, and inadequate risk assessment. These models solve this by providing multiple proven DCF frameworks that help users not only calculate credible valuations but also articulate the logic behind their investment decisions to stakeholders and committees.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                As Warren Buffett emphasizes: <em>"Risk comes from not knowing what you're doing."</em> This collection provides the analytical foundation necessary for informed capital allocation and strategic decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Comprehensive DCF Analysis Coverage</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The six-model toolbox covers the complete DCF analysis spectrum: flexible year-by-year projections for dynamic businesses, stable growth models for mature assets, finite-life analysis for projects with defined endpoints, multi-stage growth modeling for businesses with distinct phases, cost reduction analysis for efficiency initiatives, and break-even calculations for threshold decision-making. Each model includes comprehensive sensitivity analysis and scenario testing capabilities.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Professional Excellence Standards</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Each model maintains institutional-quality analytical standards whilst preserving accessibility for practical application. The emphasis on multiple valuation approaches and comprehensive sensitivity testing ensures robust decision-making support that satisfies both internal analysis needs and external stakeholder requirements.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Key Limitations & Best Practices</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                <em>All models are simplifications of reality</em> - DCF analysis depends heavily on projection accuracy and assumption validity. Market conditions change, and cognitive biases affect forecasts. Use these tools to structure analysis and facilitate discussions, not to predict precise outcomes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Always validate results through multiple approaches and comprehensive sensitivity testing across key variables.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Always Required</h3>
              <ul className="text-base text-slate-600 leading-relaxed space-y-2">
                <li>• Multiple scenario analysis: Never rely on single-point estimates</li>
                <li>• Sensitivity testing: Understand impact of key assumption changes</li>
                <li>• Assumption documentation: Evidence for all critical inputs</li>
                <li>• Cross-validation: Compare results across different approaches</li>
                <li>• Regular updates: Revise analysis as conditions evolve</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">The Investment Analysis Advantage</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether evaluating major capital projects, assessing acquisition opportunities, analyzing strategic initiatives, or optimizing resource allocation - this comprehensive toolbox delivers the analytical rigor necessary for confident investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAnalysis;