import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PurposeSection from "@/components/sections/PurposeSection";
import ToolboxSection from "@/components/sections/ToolboxSection";
import ServicesSection from "@/components/sections/ServicesSection";
import BlogSection from "@/components/sections/BlogSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <HeroSection />
      <PurposeSection />
      <ToolboxSection />
      <ServicesSection />
      <BlogSection />
      <AboutSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;