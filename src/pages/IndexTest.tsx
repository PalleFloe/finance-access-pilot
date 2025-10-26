import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewHeroSection from "@/components/sections/NewHeroSection";
import NewOfferingsSection from "@/components/sections/NewOfferingsSection";
import NewAboutSection from "@/components/sections/NewAboutSection";
import NewBlogSection from "@/components/sections/NewBlogSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const IndexTest = () => {
  usePageVisitTracking('page:Homepage-Test');
  
  return (
    <div className="min-h-screen bg-gray-50 font-oswald-headings">
      <Helmet>
        <title>Financial Decision Models - Professional Financial Tools (Test)</title>
        <meta name="description" content="Professional financial decision models & expert consulting. 15+ free Excel models for startup valuation, DCF analysis & investment decisions. Created by former Divisional CFO with 20+ years experience." />
        <link rel="canonical" href={`${BASE_URL}/home-test`} />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Financial Decision Models | Professional Excel Models & Consulting (Test)" />
        <meta property="og:description" content="Professional financial decision models & expert consulting. 15+ free Excel models for startup valuation, DCF analysis & investment decisions. Created by former Divisional CFO with 20+ years experience." />
        <meta property="og:url" content={`${BASE_URL}/home-test`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
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

export default IndexTest;
