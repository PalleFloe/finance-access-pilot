import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const StartupValuations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const models = [
    {
      name: "SaaS Unit Economics Model",
      description: "From Customer Acquisition & Revenue to Business Model Validation & Valuation",
      href: "/toolbox/startup-valuations/saas-unit-economics",
      status: "available",
    },
    {
      name: "Venture Capital Valuation Model",
      description: "Bridging Multi-Round Financing, Exit Value, Founder's Ownership Share and Investor's Need for a Profitable Return",
      href: "/toolbox/startup-valuations/venture-capital-method",
      status: "available",
    },
    {
      name: "Berkus Valuation Model",
      description: "Pre-Revenue Valuation based on Assessment of Five Key Factors and Scenario Modelling",
      href: "/toolbox/startup-valuations/berkus-valuation",
      status: "available",
    },
    {
      name: "First Chicago Valuation Model",
      description: "Simple Scenario Based DCF Model for Startup Valuation with Exit Value based on both EBITDA and Revenue",
      href: "/toolbox/startup-valuations/first-chicago-method",
      status: "available",
    },
    {
      name: "Perpetuity & Exit Valuation Models",
      description: "Quick & Flexible Approaches to Valuation with Scenario-Based Sensitivity and Value Driver Analysis",
      href: "/toolbox/startup-valuations/perpetuity-exit-models",
      status: "available",
    },
    {
      name: "Decision Analysis for Venture Capital Investments",
      description: "Systematic Decision Assessment of Startup Life Stages for Investment Decisions via Probability-Weighted Multiple on Investment (PWMOI)",
      href: "/toolbox/startup-valuations/decision-analysis",
      status: "available",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Startup Valuations - Professional Models | Financial Decision Models</title>
        <meta name="description" content="Professional startup valuation models: Venture Capital Method, First Chicago, SaaS Unit Economics, Berkus Method. Excel-based tools for entrepreneurs and investors. Try free online, download interactive versions." />
      </Helmet>
      <Header />
      
      <div className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <Link 
            to="/toolbox" 
            className="inline-flex items-center text-slate-600 hover:text-brand-blue mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Toolbox
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Professional Startup Financial Decision & Valuation Models
          </h1>
            <h2 className="text-2xl md:text-3xl text-brand-blue mb-6">
            Comprehensive Startup Valuation toolbox: Proven Methods to Estimate, Understand and Explain the Value of Startups
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Explore our start-up valuation models to make informed investment decisions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {models.map((model) => (
              <Card key={model.name} className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative flex flex-col h-full">
                {model.status === "available" && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-green-100 text-green-800 border-green-200 shadow-sm">
                      <Check className="w-3 h-3 mr-1" />
                      Available
                    </Badge>
                  </div>
                )}
                {model.status === "coming soon" && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                {model.status === "contact" && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                      <Clock className="w-3 h-3 mr-1" />
                      Coming Soon
                    </Badge>
                  </div>
                )}
                <CardHeader className="flex-grow">
                  <CardTitle className="text-2xl font-semibold">
                    <span>{model.name}</span>
                  </CardTitle>
                  <CardDescription className="flex-grow text-lg">{model.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Link to={model.href}>
                    <Button variant="brand-green" size="lg" className="w-full text-lg">
                      {model.status === "contact" ? "Contact Us" : "Go to Model"}
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
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Professional Startup Financial Decision & Valuation Models</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Comprehensive Startup Valuation toolbox provides entrepreneurs, investors, and financial advisors with proven methodologies to better understand, negotiate and make informed startup valuation decisions. This collection of professional models transforms valuation theory into a practical and accessible toolbox for real-world application.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Core Challenge Addressed: The startup valuation black-box</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Startup valuation is notoriously difficult to understand and even harder to explain convincingly. The models here help solve this fundamental problem by providing multiple proven methodologies that help users not only calculate credible valuations but also articulate the logic behind their conclusions to investors, partners, and stakeholders.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                As Marc Andreessen, co-founder of Andreessen Horowitz, emphasises: <em>"The best way to think about investments is in terms of a portfolio of calculated risks. You need sophisticated models to understand both the upside potential and downside risks."</em>¹ This range and design of models here provides exactly this analytical foundation.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Comprehensive Coverage of Startup Valuation Methods</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The six-model toolbox covers the complete valuation spectrum: understanding business model through SaaS Unit Economics analysis, establishing pre-revenue valuations via risk-based Berkus methodology, modelling investor ownership and returns through Venture Capital Valuation method, estimating probability-weighted valuation through First Chicago scenario estimates, providing insight into long-term value through Perpetuity & Exit Value models, and structuring probability-weighted returns on investment through the systematic Decision Analysis for Venture Capital method. Each model comes with comprehensive guidance explaining what it does, why it matters, when to use it, and how to implement it effectively. The potential use of various valuation models gives distinct, complementary and even synergistic methods across different insights, business- and valuation decision-making contexts.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Professional Credibility Through Rigorous Analysis</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Each model represents established methodologies used by acclaimed academia, professional investors and advisors. The models maintain mathematical rigour whilst featuring user-friendly logic and design to make them accessible to users at all experience levels. The emphasis on both cross-model valuation methods, and on models with scenario-based analysis and sensitivity testing addresses startups' inherent valuation uncertainty.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Professional Excellence Standards</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Each model maintains institutional-quality analytical standards whilst preserving the accessibility necessary for entrepreneurial application. The emphasis on cross-model validation and scenario-based analysis with comprehensive sensitivity testing ensures robust decision-making support that satisfies both founder strategic needs and investor due diligence requirements.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Key Limitations & Best Practices</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                <em>Valuation is part art, part science</em> - All models have inherent limitations. Startup projections are notoriously unreliable, and cognitive biases systematically affect valuations. Use these tools to structure thinking and facilitate discussions, not to predict precise outcomes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Valuation choice significantly impacts results - Quantitative methods produce higher and more dispersed valuations than qualitative methods.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Human judgement dominates early-stage valuation decisions - despite availability of analytical methods so be aware of systematic biases affecting outcomes
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Always Required</h3>
              <ul className="text-base text-slate-600 leading-relaxed space-y-2">
                <li>• Multi-method validation: Never rely on single approach</li>
                <li>• Range presentation: Results as ranges, never point estimates</li>
                <li>• Assumption documentation: Evidence for all key inputs</li>
                <li>• Bias awareness: Independent review to counter optimism</li>
                <li>• Regular updates: Up-to-date re-assessment as conditions change</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Seek Professional Advice When</h3>
              <ul className="text-base text-slate-600 leading-relaxed space-y-2">
                <li>• Complex capital or legal structures or arrangements</li>
                <li>• Institutional investment or acquisition processes</li>
                <li>• Cross-border transactions with regulatory implications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">The startup valuation toolbox</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether preparing for initial fundraising, structuring growth investments, planning strategic exits, or seeking insights to improve business performance and valuation - this comprehensive toolbox delivers the analytical excellence necessary for startup success.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">References</h3>
              <div className="text-sm text-slate-500 space-y-1">
                <p>¹ Andreessen, Marc, "The Only Thing That Matters," Andreessen Horowitz Blog (2007)</p>
                <p>² Gurley, Bill, "All Revenue is Not Created Equal: The Keys to the 10X Revenue Club," Above the Crowd (2011)</p>
                <p>³ Ries, Eric, "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses," Crown Business (2011)</p>
                <p>⁴ Blank, Steve, and Bob Dorf, "The Startup Owner's Manual: The Step-By-Step Guide for Building a Great Company," K&S Ranch (2012)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupValuations;
