import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewHeroSection from "@/components/sections/NewHeroSection";
import NewOfferingsSection from "@/components/sections/NewOfferingsSection";
import NewAboutSection from "@/components/sections/NewAboutSection";
import NewBlogSection from "@/components/sections/NewBlogSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const IndexNew = () => {
  usePageVisitTracking('page:Homepage');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Financial Decision Models - Professional Financial Tools</title>
        <meta name="description" content="Professional financial decision models & Excel tools. 15+ free online models for startup valuation, DCF analysis & investment decisions. Created by former Divisional CFO with 20+ years experience." />
        <link rel="canonical" href={`${BASE_URL}/`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Financial Decision Models | Professional Excel Models & Consulting" />
        <meta property="og:description" content="Professional financial decision models & Excel tools. 15+ free online models for startup valuation, DCF analysis & investment decisions. Created by former Divisional CFO with 20+ years experience." />
        <meta property="og:url" content={`${BASE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
        
        {/* Structured Data - Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Financial Decision Models",
            "url": BASE_URL,
            "logo": `${BASE_URL}/lovable-uploads/logo-large.webp`,
            "description": "Professional financial decision models and startup valuation tools for entrepreneurs and investors",
            "founder": {
              "@type": "Person",
              "name": "Palle Fløe Nielsen",
              "jobTitle": "Former Divisional CFO",
              "url": `${BASE_URL}/about`
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business Consultation",
              "email": "palle@financialdecisionmodels.com",
              "availableLanguage": ["English", "Danish"]
            },
            "sameAs": [
              "https://www.linkedin.com/in/palle-fløe-nielsen/"
            ]
          })}
        </script>
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
