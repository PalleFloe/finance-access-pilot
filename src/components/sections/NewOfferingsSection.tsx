import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profileImage from "@/assets/profile-main.jpeg";

const NewOfferingsSection = () => {
  return (
    <section className="pt-4 md:pt-6 pb-4 md:pb-6">
      <div className="container mx-auto px-6">
        <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
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
          <div className="space-y-8 md:-ml-32">
            <h2 className="font-garamond text-2xl md:text-3xl font-bold text-brand-blue mb-8">
              Financial Decision Modelling & Consulting Can Help With:
            </h2>

            {/* Toolbox Offering */}
            <div className="space-y-4">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
                  A free and comprehensive toolbox of structured and intuitive Excel models with clear guidance on What, Why, Who and How to use
                </p>
              </div>
              <div>
                <Link 
                  to="/toolbox" 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-blue hover:underline inline-flex items-center gap-2"
                >
                  Explore Free Models ►
                </Link>
              </div>
            </div>

            {/* Consulting Offering */}
            <div className="space-y-4 mt-24">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
                  Customization & Consulting Services for tailored solutions and expert guidance for your specific needs
                </p>
              </div>
              <div>
                <Link 
                  to="/contact" 
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-brand-blue hover:underline inline-flex items-center gap-2"
                >
                  Request Consultation ►
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewOfferingsSection;
