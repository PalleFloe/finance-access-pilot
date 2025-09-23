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
      </Helmet>
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;