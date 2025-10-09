import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="font-garamond text-2xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-8">
          Turn Complex Choices into Better Business Decisions
        </h1>
        <p className="text-[28px] text-slate-600 max-w-6xl mx-auto leading-relaxed mb-10">
          Tired of poorly designed and overly complex financial models?
        </p>
      </div>
    </section>
  );
};

export default HeroSection;