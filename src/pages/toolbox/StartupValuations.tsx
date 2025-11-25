import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import FinancialTerm from "@/components/FinancialTerm";
import { useEffect } from "react";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BreadcrumbSchema } from "@/seo/BreadcrumbSchema";

const StartupValuations = () => {
  usePageVisitTracking('page:/toolbox/startup-valuations');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const models = [
    {
      name: "SaaS Unit Economics Model",
      bulletPoints: [
        "Assess SaaS business model profitability",
        <>Optimize <FinancialTerm term="CLV">CLV</FinancialTerm> vs <FinancialTerm term="CAC">CAC</FinancialTerm> strategies</>,
        "Present unit economics to investors"
      ],
      href: "/toolbox/startup-valuations/saas-unit-economics",
      status: "available",
    },
    {
      name: "Venture Capital Valuation Model",
      bulletPoints: [
        <>Model investment vs ownership & <FinancialTerm term="IRR">IRR</FinancialTerm></>,
        "Assess dilution across investment rounds",
        "Negotiate valuation with analytical backing"
      ],
      href: "/toolbox/startup-valuations/venture-capital-method",
      status: "available",
    },
    {
      name: "Berkus Valuation Model",
      bulletPoints: [
        "Value pre-revenue startups",
        "Assess of five key factors incl. scenarios",
        "Negotiate tool for founders & VCs"
      ],
      href: "/toolbox/startup-valuations/berkus-valuation",
      status: "available",
    },
    {
      name: "First Chicago Valuation Model",
      bulletPoints: [
        <>Scenario-based <FinancialTerm term="DCF">DCF</FinancialTerm> valuation</>,
        "Exit values - revenue & profit multiples",
        "Present probability-adjusted valuation"
      ],
      href: "/toolbox/startup-valuations/first-chicago-method",
      status: "available",
    },
    {
      name: "Perpetuity & Exit Valuation Models",
      bulletPoints: [
        "Test cash-flow and growth assumptions",
        "Compare valuation approaches",
        "Sense check of more complex models"
      ],
      href: "/toolbox/startup-valuations/perpetuity-exit-models",
      status: "available",
    },
    {
      name: "Decision Analysis for VC Investments",
      bulletPoints: [
        "Structure financial & non-financial analysis",
        "Assess stages' risks and competitive success",
        "Reduce biases in VCs investment decisions"
      ],
      href: "/toolbox/startup-valuations/decision-analysis",
      status: "available",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "Toolbox", path: "/toolbox" },
        { name: "Startup Valuations", path: "/toolbox/startup-valuations" }
      ]} />
      <Helmet>
        <title>Startup Valuation Models – Excel Templates &amp; Online Tools | Financial Decision Models</title>
        <meta name="description" content="Collection of startup valuation models including First Chicago, VC method, Berkus method, SaaS valuation and multi-stage DCF templates. Online previews and downloadable Excel files to support fundraising and investor conversations." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/startup-valuations" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Startup Valuation Models – Excel Templates &amp; Online Tools | Financial Decision Models" />
        <meta property="og:description" content="Collection of startup valuation models including First Chicago, VC method, Berkus method, SaaS valuation and multi-stage DCF templates. Online previews and downloadable Excel files to support fundraising and investor conversations." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/startup-valuations" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Decision Models" />
        <meta property="og:locale" content="en_GB" />
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

          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
              Professional Startup Valuation Models
            </h1>
            <h2 className="text-[28px] text-slate-600 max-w-6xl mx-auto leading-relaxed mb-6">
              Comprehensive Startup Valuation toolbox: Proven Methods to Estimate, Understand and Explain the Value of Startups
            </h2>
          </div>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Explore our start-up valuation models to make informed investment decisions.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {models.map((model) => (
              <Link key={model.name} to={model.href} className="group">
                <Card className="shadow-lg border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full min-h-[240px] cursor-pointer bg-brand-blue">
                  {model.status === "coming soon" && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge className="bg-orange-500 text-white border-orange-400 shadow-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  {model.status === "contact" && (
                    <div className="absolute -top-3 -right-3 z-10">
                      <Badge className="bg-orange-500 text-white border-orange-400 shadow-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        Coming Soon
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="flex-grow p-6">
                    <CardTitle className="text-2xl font-semibold mb-3 text-white">
                      {model.name}
                    </CardTitle>
                    <div className="flex-grow text-lg leading-[1.4] font-normal text-white/75">
                      {model.bulletPoints.map((point, index) => (
                        <div key={index} className="my-1">• {point}</div>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>

          {/* Comprehensive Content Section */}
          <div className="max-w-none space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Professional Startup Financial Decision and Valuation Models</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The Comprehensive Startup Valuation toolbox offers proven methodologies for entrepreneurs, investors, and financial advisors. These methodologies help them better understand startup valuations, negotiate effectively, and make informed decisions. This toolbox transforms valuation theory into a practical application. Each model allows users to test different business scenarios and perform sensitivity testing to evaluate how changes in assumptions affect valuation outcomes, addressing the inherent uncertainty in startup valuations.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Core Challenge Addressed: The startup valuation black-box</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Startup valuation is notoriously difficult to understand and even harder to explain convincingly. The models address this challenge by providing structured methodologies that enable users to calculate credible valuations and effectively communicate their rationale to investors, partners, and stakeholders including scenario analysis and sensitivity testing.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                As Marc Andreessen, co-founder of Andreessen Horowitz, emphasises: <em>"The best way to think about investments is in terms of a portfolio of calculated risks. You need sophisticated models to understand both the upside potential and downside risks."</em>¹ This range of models and their design here provide exactly this analytical foundation.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Comprehensive Coverage of Startup Valuation Methods</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                The six-model toolbox encompasses the entire valuation spectrum, including: SaaS Unit Economics analysis for business model understanding; Berkus methodology for pre-revenue valuations; Venture Capital Valuation method for investor ownership and returns; First Chicago scenario estimates for probability-weighted valuation; Perpetuity & Exit Value models for long-term value insight; and Decision Analysis for Venture Capital method for structuring probability-weighted returns. Each model comes with comprehensive guidance explaining what it does, why it matters, when to use it, and how to implement it effectively. Various valuation models provide distinct, complementary and synergistic methods for gaining different insights in business and valuation decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Professional Credibility Through Rigorous Analysis</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Each model is based on established methodologies recognized by academia, professional investors, and financial advisors. The models maintain mathematical rigour while featuring user-friendly logic and design to make them accessible to users at all experience levels. Both cross-model valuation methods and models that incorporate scenario-based analysis and sensitivity testing emphasize the inherent valuation uncertainty of startups.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Professional Excellence Standards</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Each model maintains institutional-quality analytical standards while preserving the accessibility necessary for entrepreneurial application. Cross-model validation and scenario-based analysis provide robust decision-making support that meets both founder needs and investor due diligence.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Key Limitations & Best Practices</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Valuation involves both qualitative and quantitative elements. All models have inherent limitations, such as the unpredictability of startup projections and potential cognitive biases, which can lead to inaccurate or overly optimistic valuations. Startup projections are notoriously unreliable, and cognitive biases systematically affect valuations. Use these tools to structure thinking and facilitate discussions, not to predict precise outcomes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Valuation choice significantly impacts results; quantitative methods produce higher and more dispersed valuations than qualitative methods.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Human judgment dominates early-stage valuation decisions, despite the availability of analytical methods; therefore, be aware of systematic biases affecting outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Always Required</h3>
              <ul className="text-base text-slate-600 leading-relaxed space-y-2">
                <li>• Multi-method validation: Never rely on a single approach.</li>
                <li>• Range presentation: Results as ranges, never point estimates</li>
                <li>• Assumption documentation: Evidence for all key inputs</li>
                <li>• Bias awareness: Independent review to counter optimism</li>
                <li>• Regular updates: Up-to-date re-assessment as conditions change</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">Seek Professional Advice When</h3>
              <ul className="text-base text-slate-600 leading-relaxed space-y-2">
                <li>• Complex capital or legal structures or arrangements are involved.</li>
                <li>• Institutional investment or acquisition processes</li>
                <li>• Cross-border transactions with regulatory implications</li>
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-brand-blue mb-4">The Startup Valuation Toolbox</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                This comprehensive toolbox delivers the analytical excellence necessary for startup success, whether preparing for initial fundraising, structuring growth investments, planning exits, or seeking insights to improve business performance and valuation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartupValuations;
