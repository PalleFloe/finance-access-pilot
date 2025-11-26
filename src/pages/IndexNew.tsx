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
        <meta name="description" content="Professional Excel financial models for startup valuation, DCF analysis and investment decisions, with free online previews and download of models." />
        <link rel="canonical" href={`${BASE_URL}/`} />
        
        {/* Preload LCP image for performance */}
        <link
          rel="preload"
          as="image"
          href="/assets/profile-main-800.webp"
          imageSrcSet="/assets/profile-main-400.webp 400w, /assets/profile-main-800.webp 800w"
          imageSizes="(max-width: 768px) 100vw, 50vw"
          type="image/webp"
        />
        
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
        
        {/* Structured Data - Organization + WebSite Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${BASE_URL}/#organization`,
                "name": "Financial Decision Models",
                "legalName": "Fløe Consulting",
                "url": `${BASE_URL}/`,
                "logo": {
                  "@type": "ImageObject",
                  "url": `${BASE_URL}/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png`
                },
                "founder": {
                  "@type": "Person",
                  "name": "Palle Fløe Nielsen",
                  "url": `${BASE_URL}/about`
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Copenhagen",
                  "addressCountry": "DK"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/palle-fløe-nielsen/"
                ]
              },
              {
                "@type": "WebSite",
                "@id": `${BASE_URL}/#website`,
                "url": `${BASE_URL}/`,
                "name": "Financial Decision Models",
                "description": "Excel financial models and valuation tools with free online previews, downloadable no-macro templates, and step-by-step guidance.",
                "publisher": {
                  "@id": `${BASE_URL}/#organization`
                }
              }
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
