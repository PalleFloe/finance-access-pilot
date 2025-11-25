import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { useEffect } from "react";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BreadcrumbSchema } from "@/seo/BreadcrumbSchema";

const BusinessStrategy = () => {
  usePageVisitTracking('page:/toolbox/business-strategy');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-garamond">
      <BreadcrumbSchema items={[
        { name: "Home", path: "/" },
        { name: "Toolbox", path: "/toolbox" },
        { name: "Business Strategy", path: "/toolbox/business-strategy" }
      ]} />
      <Helmet>
        <title>Business Strategy Models – Scenarios, Profitability &amp; Decision Support | Financial Decision Models</title>
        <meta name="description" content="Strategic decision support models for business planning, profitability analysis and scenario design. Excel tools and online previews to help structure strategic choices and quantify their impact." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox/business-strategy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Business Strategy Models – Scenarios, Profitability &amp; Decision Support | Financial Decision Models" />
        <meta property="og:description" content="Strategic decision support models for business planning, profitability analysis and scenario design. Excel tools and online previews to help structure strategic choices and quantify their impact." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox/business-strategy" />
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
        <div className="container mx-auto py-16 text-center">
          <Link 
            to="/toolbox"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Toolbox
          </Link>

          <h1 className="text-[20px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
            Business Strategy Models
          </h1>
          
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm mb-8">
            Coming Soon
          </Badge>
          
          <p className="text-lg text-muted-foreground mb-8">
            We're working hard to bring you these strategic financial models. Stay tuned!
          </p>
          
          <Button variant="outline" asChild>
            <Link to="/toolbox">Back to Toolbox</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessStrategy;