import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">
          Facing Complex Business Decisions?
        </h1>
        <p className="font-garamond text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-slate-600 mb-6 mx-auto leading-[1.4] max-w-4xl">
          And struggling with time-consuming, inflexible, overly complex and unreliable<br />
          financial models that don't give you the clarity to make the right decisions?
        </p>
        <h2 className="font-garamond text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-4 mx-auto leading-[1.3] max-w-5xl">
          We help turn complex financial choices into<br />
          structured insights and better business decisions.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;