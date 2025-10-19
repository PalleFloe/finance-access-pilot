import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewHeroSection from "@/components/sections/NewHeroSection";
import NewOfferingsSection from "@/components/sections/NewOfferingsSection";
import NewAboutSection from "@/components/sections/NewAboutSection";
import NewBlogSection from "@/components/sections/NewBlogSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const IndexNew = () => {
  usePageVisitTracking('page:Homepage-New');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Financial Decision Models - Professional Financial Tools (New)</title>
        <meta name="description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads. DCF, venture capital method, and business valuation models for entrepreneurs and investors." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/" />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/" />
        <meta property="og:description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads for entrepreneurs and investors." />
        <meta name="twitter:description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads for entrepreneurs and investors." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <NewHeroSection />
      <NewOfferingsSection />
      <NewAboutSection />
      <NewBlogSection />
      <Footer />
    </div>
  );
};

export default IndexNew;
