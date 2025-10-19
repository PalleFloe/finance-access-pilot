import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import profileImage from "@/assets/profile-main.jpeg";

const NewOfferingsSection = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-1 items-start max-w-7xl mx-auto">
          {/* Left Column - Profile Photo */}
          <div className="flex justify-start">
            <img 
              src={profileImage} 
              alt="Palle Fløe Nielsen" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Offerings */}
          <div className="space-y-8 -ml-8 md:-ml-32">
            <h2 className="font-garamond text-2xl md:text-3xl font-bold text-brand-blue mb-8">
              Financial Decision Modelling & Consulting can help with:
            </h2>

            {/* Toolbox Offering */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
                  A Free and Comprehensive Toolbox of Structured and intuitive Excel models with clear guidance on What, <span className="underline">Why</span>, Who and How to use
                </p>
              </div>
              <Link to="/toolbox">
                <Button className="w-full md:w-auto px-8 py-6 text-lg bg-brand-blue hover:bg-brand-blue/90">
                  Explore Free Models
                </Button>
              </Link>
            </div>

            {/* Consulting Offering */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
                  Customization & Consulting Services for tailored solutions and expert guidance for your specific needs
                </p>
              </div>
              <Link to="/contact">
                <Button className="w-full md:w-auto px-8 py-6 text-lg bg-brand-blue hover:bg-brand-blue/90">
                  Request Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewOfferingsSection;
