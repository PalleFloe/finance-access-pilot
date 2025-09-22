import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="font-garamond text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-blue mb-8">
          Professional Financial Decision Models
        </h1>
        <h2 className="font-garamond text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-blue mb-10 mx-auto leading-[1.3] max-w-5xl">
          Tired of poorly designed and overly complex financial models?
        </h2>
        <p className="font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal text-slate-600 mx-auto leading-[1.4] max-w-4xl">
          Turn Complex Choices into Better Business Decisions:
        </p>
      </div>
    </section>
  );
};

export default HeroSection;