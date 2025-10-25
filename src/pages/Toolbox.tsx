import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ToolboxSection from "@/components/sections/ToolboxSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const Toolbox = () => {
  usePageVisitTracking('page:/toolbox');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Financial Modelling Toolbox | Financial Decision Models</title>
        <meta name="description" content="Complete financial modelling toolbox with 12+ Excel models. Startup valuations, DCF analysis, and financial fundamentals. Try free online or download interactive versions. Professional quality, user-friendly design." />
        <link rel="canonical" href={`${BASE_URL}/toolbox`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Financial Modelling Toolbox | Financial Decision Models" />
        <meta property="og:description" content="Complete financial modelling toolbox with 12+ Excel models. Startup valuations, DCF analysis, and financial fundamentals. Try free online or download interactive versions. Professional quality, user-friendly design." />
        <meta property="og:url" content={`${BASE_URL}/toolbox`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
      </Helmet>
      <Header />
      <ToolboxSection />
      <Footer />
    </div>
  );
};

export default Toolbox;