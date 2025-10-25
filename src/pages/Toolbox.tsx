import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ToolboxSection from "@/components/sections/ToolboxSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const Toolbox = () => {
  usePageVisitTracking('page:/toolbox');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Financial Modelling Toolbox | Financial Decision Models</title>
        <meta name="description" content="Complete financial modelling toolbox with 12+ Excel models. Startup valuations, DCF analysis, and financial fundamentals. Try free online or download interactive versions. Professional quality, user-friendly design." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/toolbox" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/toolbox" />
        <meta property="og:title" content="Financial Modelling Toolbox | Financial Decision Models" />
        <meta property="og:description" content="Complete financial modelling toolbox with 12+ Excel models. Startup valuations, DCF analysis, and financial fundamentals. Try free online or download interactive versions. Professional quality, user-friendly design." />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <Header />
      <ToolboxSection />
      <Footer />
    </div>
  );
};

export default Toolbox;