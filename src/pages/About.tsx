import Header from "@/components/Header";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/sections/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;