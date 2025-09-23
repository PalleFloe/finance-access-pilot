import Header from "@/components/Header";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const Consulting = () => {
  usePageVisitTracking('page:/consulting');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Consulting;