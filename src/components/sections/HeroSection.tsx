import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-20 pb-6 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="font-garamond text-[36pt] font-bold text-[#326496] mb-[30px]">
          Facing Complex Financial Decisions?
        </h1>
        <h2 className="font-garamond text-[18pt] font-normal text-[#555555] mb-[30px] max-w-3xl mx-auto leading-[1.5]">
          And struggling with time-consuming, inflexible, overly complex and unreliable financial models that don't give you the clarity to make the right decisions?
        </h2>
        <h3 className="font-garamond text-[36pt] font-bold text-[#326496] mb-[40px] max-w-5xl mx-auto">
          We help turn complex financial choices into structured insights and better decisions.
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;