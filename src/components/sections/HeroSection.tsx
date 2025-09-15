import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-8 pb-4">
      <div className="container mx-auto text-center">
        <h1 className="font-garamond text-[48px] font-bold text-brand-blue mb-4">
          Facing Complex Financial Decisions?
        </h1>
        <p className="font-garamond text-[18px] font-normal text-slate-600 mb-6 max-w-4xl mx-auto leading-[1.4]">
          And struggling with time-consuming, inflexible, overly complex and unreliable financial models that don't give you the clarity to make the right decisions?
        </p>
        <h2 className="font-garamond text-[36px] font-bold text-brand-blue mb-8 max-w-4xl mx-auto leading-[1.3]">
          We help turn complex financial choices into structured insights and better business decisions.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;