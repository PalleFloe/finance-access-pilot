import Header from "@/components/Header";
import ToolboxSection from "@/components/sections/ToolboxSection";
import Footer from "@/components/sections/Footer";

const Toolbox = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <ToolboxSection />
      <Footer />
    </div>
  );
};

export default Toolbox;