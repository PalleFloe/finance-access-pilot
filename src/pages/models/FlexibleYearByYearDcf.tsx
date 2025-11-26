import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, Clock, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import DownloadButton from "@/components/DownloadButton";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { usePageVisitTracking, useAnalytics } from '@/hooks/useAnalytics';
import FinancialTerm from "@/components/FinancialTerm";
import ModelInternalLinks from "@/components/ModelInternalLinks";
import flexibleDcfPreview800 from "@/assets/flexible-dcf-preview-800.webp";
import flexibleDcfPreview400 from "@/assets/flexible-dcf-preview-400.webp";
import { getFaqJson } from "@/seo/faqs";
import { getModelSoftwareJson } from "@/seo/modelSoftwareSchema";

const FlexibleYearByYearDcf = () => {
  const { trackOnlineOpen } = useAnalytics();
  const faqJson = getFaqJson("model-dcf-flexible");
  const softwareJson = getModelSoftwareJson({
    name: "Flexible Year by Year DCF Model",
    description: "Professional DCF Excel model with year-by-year flexibility. Free online preview and downloadable template with full user guidance.",
    url: "https://www.financialdecisionmodels.com/toolbox/investment-analysis/flexible-year-by-year-dcf-model",
    imageUrl: "https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png"
  });
  
  // Track page visit automatically
  usePageVisitTracking('Flexible Year by Year DCF Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModel = (sharePointUrl: string) => {
    trackOnlineOpen('Flexible Year by Year DCF Model');
    window.open(sharePointUrl, '_blank', 'width=1200,height=800');
  };


  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Flexible Year by Year DCF Model - Investment Analysis | Financial Decision Models</title>
        <meta name="description" content="Dynamic DCF analysis with year-by-year projections and terminal value options. Flexible growth rates and comprehensive sensitivity analysis. Try free online, download full version." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/investment-analysis/flexible-year-by-year-dcf-model" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Flexible Year by Year DCF Model - Investment Analysis | Financial Decision Models" />
        <meta property="og:description" content="Dynamic DCF analysis with year-by-year projections and terminal value options. Flexible growth rates and comprehensive sensitivity analysis. Try free online, download full version." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/investment-analysis/flexible-year-by-year-dcf-model" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Decision Models" />
        <meta property="og:locale" content="en_GB" />
        
        <script type="application/ld+json">
          {JSON.stringify(softwareJson)}
        </script>
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
                "name": "Investment Analysis",
                "item": "https://www.financialdecisionmodels.com/toolbox/investment-analysis"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "Flexible Year by Year DCF Model",
                "item": "https://www.financialdecisionmodels.com/toolbox/investment-analysis/flexible-year-by-year-dcf-model"
              }
            ]
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Flexible Year by Year DCF Model",
            "description": "Dynamic DCF analysis with year-by-year projections, flexible growth rates, and comprehensive sensitivity analysis with terminal value options.",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": ["Windows", "macOS"],
            "softwareHelp": "https://www.financialdecisionmodels.com/toolbox/investment-analysis/flexible-year-by-year-dcf-model",
            "image": "https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png",
            "url": "https://www.financialdecisionmodels.com/toolbox/investment-analysis/flexible-year-by-year-dcf-model",
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
            to="/toolbox/investment-analysis"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Investment Analysis
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible Year by Year <FinancialTerm term="DCF">DCF</FinancialTerm> Model
          </h1>

          <h2 className="text-[28px] text-slate-600 max-w-6xl leading-relaxed mb-8">
            Flexible <FinancialTerm term="DCF">DCF</FinancialTerm> Analysis: Dynamic Year-by-Year Projections with Variable Growth Rates and Terminal Value Options
          </h2>

          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="flex-shrink-0 w-full max-w-md">
              <Card className="shadow-lg border-slate-200 lg:h-[240px]">
                <CardHeader className="pb-2">
                  <CardTitle>
                    Flexible Year by Year DCF Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pb-4 pt-6">
                  <Button 
                    onClick={() => openModel('https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EV2Ak5kqbLtItjX3p4JwY2kBRhpHq5DvE7ZFnVpjGu1OjQ?e=GUUX7j&action=embedview&wdHideGridlines=True&wdHideHeaders=True&wdDownloadButton=False')}
                    variant="model-blue"
                    className="w-full text-lg"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Online & View
                  </Button>
                  <DownloadButton 
                    sharePointUrl="https://financialdecisionmodels.sharepoint.com/:x:/s/FinancialDecisionModelsSite/EV2Ak5kqbLtItjX3p4JwY2kBRhpHq5DvE7ZFnVpjGu1OjQ?e=GUUX7j&download=1"
                    modelName="Flexible Year by Year DCF Model"
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
                      src={flexibleDcfPreview800}
                      srcSet={`${flexibleDcfPreview400} 400w, ${flexibleDcfPreview800} 800w`}
                      sizes="(max-width: 768px) 100vw, 360px"
                      width="800"
                      height="600"
                      alt="Flexible Year by Year DCF Model Preview" 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Introduction Headline */}
          <h3 className="mb-6">Flexible Year by Year <FinancialTerm term="DCF">DCF</FinancialTerm> Model Introduction</h3>
        
        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            The Flexible Year by Year <FinancialTerm term="DCF">DCF</FinancialTerm> Model provides comprehensive investment analysis through customisable annual projections. Unlike simplified constant-growth models, this framework allows different growth rates, margins, and cost structures for each year of the forecast period, reflecting real-world business dynamics.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Dynamic Flexibility</strong>: Users can adjust revenue growth rates, variable cost percentages, and operational expenses independently for each forecast year. This granular control enables realistic modelling of business cycles, market maturation, and operational improvements over time.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Terminal Value Integration</strong>: The model includes Gordon Growth terminal value calculations for businesses continuing beyond the explicit forecast period, with clear presentation of terminal value's contribution to total firm value.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-4">
            <strong>Strategic Purpose</strong>: Enable detailed investment analysis with year-by-year flexibility, support strategic planning with realistic growth trajectories, and provide comprehensive valuation with terminal value options.
          </p>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            <strong>Target Users</strong>: Business leaders evaluating strategic investments, project managers planning complex initiatives, and finance teams requiring detailed projection capabilities.
          </p>
        </div>

        {/* Collapsible Section */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="complete-guide" className="border-none">
            <AccordionTrigger className="w-full bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all duration-200 hover:no-underline data-[state=open]:rounded-b-none data-[state=open]:border-b-0">
              <div className="text-left w-full">
                <div className="text-sm font-semibold uppercase tracking-wide mb-1 text-slate-600">
                  Full Detailed Guide
                </div>
                <div className="text-2xl font-bold text-brand-blue">
                  Complete Flexible Year by Year <FinancialTerm term="DCF">DCF</FinancialTerm> Model Guide
                </div>
                <div className="text-base font-semibold mt-2 text-slate-600">
                  Click to expand comprehensive documentation →
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-6 bg-white border border-slate-200 rounded-b-lg border-t-0">
              <div className="prose prose-slate max-w-none">
                <div className="space-y-6 text-slate-600">
                  <div>
                  <h3 className="text-xl font-bold text-heading mb-3">What Is the Flexible Year by Year <FinancialTerm term="DCF">DCF</FinancialTerm> Model?</h3>
                  <p className="leading-relaxed mb-4">
                    The Flexible Year by Year <FinancialTerm term="DCF">DCF</FinancialTerm> Model enables detailed cash flow projections with complete control over annual assumptions. This approach recognises that businesses rarely maintain constant growth rates or margins, instead experiencing varying performance across different periods.
                  </p>
                  <div>
                    <h4 className="font-semibold text-heading mb-2">Core Analytical Framework:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Year-by-year revenue growth estimates (rather than single growth rate)</li>
                      <li>Variable cost percentages estimated annually</li>
                      <li>Year-by-year operational expense growth estimates</li>
                      <li>Investment, depreciation and working capital estimated annually</li>
                      <li>Terminal value calculation using Gordon Growth methodology</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Why Was It Developed?</h3>
                  <p className="leading-relaxed mb-4">
                    Traditional <FinancialTerm term="DCF">DCF</FinancialTerm> models often oversimplify by assuming constant growth rates and margins. Real businesses experience fluctuating performance - rapid early growth followed by maturation, margin improvements from scale efficiencies, or temporary setbacks requiring recovery periods.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Who Benefits?</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Business Leaders</h4>
                      <p className="leading-relaxed">Strategic decisions to evaluate major capital investments with varying return profiles, resource allocation to compare projects with different cash flow patterns.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Project Leaders / Investment Managers</h4>
                      <p className="leading-relaxed">Detailed planning to model specific operational scenarios with annual granularity, performance tracking to establish benchmarks for investment monitoring.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Finance Teams</h4>
                      <p className="leading-relaxed">Investment analysis to provide detailed valuations for complex opportunities, business partnering to support decision-makers with flexible modelling.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-heading mb-3">Key Limitations & Best Practices</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-heading">Key Limitations:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Internal investments focus: Designed for projects within existing corporate structure</li>
                        <li>Forecast reliability: Projections beyond 3-5 years become increasingly uncertain</li>
                        <li>Terminal value sensitivity: Often represents 50-75% of total value</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading">Best Practices:</h4>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>Use conservative terminal growth rates</li>
                        <li>Test sensitivity to key assumptions</li>
                        <li>Focus detail on near-term years where visibility is higher</li>
                        <li>Document assumption rationale</li>
                        <li>Validate against comparable internal projects</li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <ModelInternalLinks 
          categoryName="Investment Analysis Models"
          categoryUrl="/toolbox/investment-analysis"
          relatedModels={[
            { name: "Three Stage DCF Model", url: "/toolbox/investment-analysis/three-stage-dcf-model" },
            { name: "Stable Growth Finite Life DCF Model", url: "/toolbox/investment-analysis/stable-growth-finite-life-dcf-model" },
            { name: "Project Scenario Model", url: "/toolbox/investment-analysis/project-scenario-model" }
          ]}
        />
        </div>
      </div>
    </div>
  );
};

export default FlexibleYearByYearDcf;