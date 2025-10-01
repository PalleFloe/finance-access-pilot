import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="font-garamond text-2xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-8">
          Turn Complex Choices into Better Business Decisions
        </h1>
        <h2 className="font-garamond text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-600 mb-20 mx-auto leading-[1.3] max-w-5xl">
          Tired of poorly designed and overly complex financial models?
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;