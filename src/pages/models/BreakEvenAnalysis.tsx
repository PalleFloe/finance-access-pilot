import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import ModelInfoPanel from "@/components/ModelInfoPanel";
import { useEffect } from "react";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const BreakEvenAnalysis = () => {
  // Track page visit automatically
  usePageVisitTracking('Break-Even Analysis Model');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <Helmet>
        <title>Break-Even Analysis – Excel Financial Model (Free Download)</title>
        <meta name="description" content="Excel model for break-even and contribution margin analysis. Free online preview and downloadable template for business decisions." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/investment-analysis/break-even-analysis-model" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Break-Even Analysis Model - Coming Soon | Financial Decision Models" />
        <meta property="og:description" content="Break-Even Analysis Model for threshold decision-making and profitability analysis. Coming soon to the Investment Analysis toolkit." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/investment-analysis/break-even-analysis-model" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Financial Decision Models" />
        <meta property="og:locale" content="en_GB" />
        
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
                "name": "Break-Even Analysis Model",
                "item": "https://www.financialdecisionmodels.com/toolbox/investment-analysis/break-even-analysis-model"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <div className="py-12">
        <div className="container py-16">
          <Link 
            to="/toolbox/investment-analysis"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Investment Analysis
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Break-Even Analysis Model – Excel Financial Tool
          </h1>
          
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm mb-8">
            Coming Soon
          </Badge>
          
          <p className="text-lg text-muted-foreground mb-8">
            We're working hard to bring you this model. Stay tuned!
          </p>
          
          <Button variant="model-blue" asChild>
            <Link to="/toolbox/investment-analysis">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BreakEvenAnalysis;