import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const About = () => {
  usePageVisitTracking('page:/about');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About - Palle Floe Nielsen | Financial Decision Models</title>
        <meta name="description" content="Palle Floe Nielsen, finance leader with 20+ years experience in M&A, business turnarounds, and strategic initiatives. Creator of Financial Decision Models toolbox. Based in Copenhagen, Denmark." />
        <link rel="canonical" href={`${BASE_URL}/about`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="About - Palle Floe Nielsen | Financial Decision Models" />
        <meta property="og:description" content="Palle Floe Nielsen, finance leader with 20+ years experience in M&A, business turnarounds, and strategic initiatives. Creator of Financial Decision Models toolbox. Based in Copenhagen, Denmark." />
        <meta property="og:url" content={`${BASE_URL}/about`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
      </Helmet>
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;