import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const About = () => {
  usePageVisitTracking('page:/about');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About - Palle Floe Nielsen | Financial Decision Models</title>
        <meta name="description" content="Palle Floe Nielsen, finance leader with 20+ years experience in M&A, business turnarounds, and strategic initiatives. Creator of Financial Decision Models toolbox. Based in Copenhagen, Denmark." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/about" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.financialdecisionmodels.com/about" />
        <meta property="og:title" content="About - Palle Floe Nielsen | Financial Decision Models" />
        <meta property="og:description" content="Palle Floe Nielsen, finance leader with 20+ years experience in M&A, business turnarounds, and strategic initiatives. Creator of Financial Decision Models toolbox. Based in Copenhagen, Denmark." />
        <meta property="og:image" content="https://www.financialdecisionmodels.com/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Helmet>
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;