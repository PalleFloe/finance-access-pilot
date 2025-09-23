import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import MainSections from "@/components/sections/MainSections";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const Index = () => {
  usePageVisitTracking('page:Homepage');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Financial Decision Models - Professional Financial Tools</title>
        <meta name="description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads. DCF, venture capital method, and business valuation models for entrepreneurs and investors." />
        <meta property="og:url" content="https://finance-access-pilot.lovable.app/" />
        <link rel="canonical" href="https://finance-access-pilot.lovable.app/" />
        <meta property="og:description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads for entrepreneurs and investors." />
        <meta name="twitter:description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads for entrepreneurs and investors." />
      </Helmet>
      <Header />
      <HeroSection />
      <MainSections />
      <Footer />
    </div>
  );
};

export default Index;