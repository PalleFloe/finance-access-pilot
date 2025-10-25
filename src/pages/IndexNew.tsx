import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewHeroSection from "@/components/sections/NewHeroSection";
import NewOfferingsSection from "@/components/sections/NewOfferingsSection";
import NewAboutSection from "@/components/sections/NewAboutSection";
import NewBlogSection from "@/components/sections/NewBlogSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const IndexNew = () => {
  usePageVisitTracking('page:Homepage');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Financial Decision Models - Professional Financial Tools</title>
        <meta name="description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads. DCF, venture capital method, and business valuation models for entrepreneurs and investors." />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/" />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/" />
        <meta property="og:description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads for entrepreneurs and investors." />
        <meta name="twitter:description" content="Professional financial decision models and startup valuation tools. Free Excel models in browser plus premium downloads for entrepreneurs and investors." />
        
        {/* Structured Data - Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Financial Decision Models",
            "url": "https://www.financialdecisionmodels.com",
            "logo": "https://www.financialdecisionmodels.com/lovable-uploads/logo-large.webp",
            "description": "Professional financial decision models and startup valuation tools for entrepreneurs and investors",
            "founder": {
              "@type": "Person",
              "name": "Palle Fløe Nielsen",
              "jobTitle": "Former Divisional CFO",
              "url": "https://www.financialdecisionmodels.com/about"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business Consultation",
              "email": "palle@floeconsulting.com",
              "availableLanguage": ["English", "Danish"]
            },
            "sameAs": [
              "https://www.linkedin.com/in/pallefn/"
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
