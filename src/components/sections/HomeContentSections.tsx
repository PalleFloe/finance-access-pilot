import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomeContentSections = () => {
  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl space-y-16 md:space-y-20">
        
        {/* Section 1: Founder & Credibility */}
        <section className="space-y-4">
          <h2 className="font-garamond text-lg md:text-xl font-bold text-brand-blue">
            Models by Palle Fløe Nielsen
          </h2>
          <div className="space-y-4 font-garamond text-[12px] leading-relaxed text-foreground">
            <p>
              Former Divisional CFO at Novozymes, with 20+ years leading business finance in global life sciences and technology companies.
            </p>
            <p>
              After decades building financial models for complex decisions—from €100M+ investments to business strategies—I founded Financial Decision Models to solve a persistent problem: finance teams spend too much time building models that decision-makers struggle to use.
            </p>
            <p>
              These models bridge that gap.
            </p>
            <Link 
              to="/about" 
              className="inline-block font-garamond text-[12px] text-brand-blue hover:underline mt-2"
            >
              Read the full story →
            </Link>
          </div>
        </section>

        {/* Section 2: Differentiation */}
        <section className="space-y-4">
          <h2 className="font-garamond text-lg md:text-xl font-bold text-brand-blue">
            Why These Models Work
          </h2>
          <div className="space-y-4 font-garamond text-[12px] leading-relaxed text-foreground">
            <p>
              Most financial models fail at the moment of decision. They're either too complex for decision-makers to trust, or too simplified to be credible.
            </p>
            <p>These models solve both problems:</p>
            <ul className="space-y-3 ml-6 list-disc">
              <li>
                <strong>Structured clarity:</strong> Clear links between assumptions, calculations, and results—so decision-makers can follow the logic
              </li>
              <li>
                <strong>Built for decisions:</strong> Designed to inform choices and support decision-making, not just crunch numbers
              </li>
              <li>
                <strong>Academically grounded:</strong> Methods inspired by leading academics like Professor Aswath Damodaran
              </li>
            </ul>
            <p>
              The result: Less time explaining your model, more time discussing the decision.
            </p>
          </div>
        </section>

        {/* Section 3: Call to Action */}
        <section className="space-y-4">
          <h2 className="font-garamond text-lg md:text-xl font-bold text-brand-blue">
            Choose Your Path
          </h2>
          <div className="space-y-6 font-garamond text-[12px] leading-relaxed text-foreground">
            <p>
              All models are available to view online for free. Download and use them after simple registration—or purchase full ownership rights for customisation.
            </p>
            <p>
              Need something specific? Custom model development and consulting services available for complex requirements.
            </p>
            <Link to="/how-it-works">
              <Button 
                size="lg" 
                className="px-8 py-3 font-garamond"
              >
                See All Options →
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HomeContentSections;
