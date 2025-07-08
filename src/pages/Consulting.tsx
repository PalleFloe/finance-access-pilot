import Header from "@/components/Header";
import ServicesSection from "@/components/sections/ServicesSection";
import Footer from "@/components/sections/Footer";

const Consulting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Consulting;