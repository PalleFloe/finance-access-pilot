import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ToolboxSection from "@/components/sections/ToolboxSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const Toolbox = () => {
  usePageVisitTracking('page:/toolbox');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Financial Modeling Toolbox | Financial Decision Models</title>
        <meta name="description" content="Complete financial modeling toolbox with 12+ Excel models. Startup valuations, DCF analysis, and financial fundamentals. Try free online or download interactive versions. Professional quality, user-friendly design." />
      </Helmet>
      <Header />
      <ToolboxSection />
      <Footer />
    </div>
  );
};

export default Toolbox;