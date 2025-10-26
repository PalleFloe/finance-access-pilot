import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, MessageSquare } from "lucide-react";
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
            <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-8">
              Two ways I can help:
            </h2>

            {/* Toolbox Offering */}
            <div className="space-y-4">
              <div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
                  A free and comprehensive toolbox of structured and intuitive Excel models with clear guidance on What, Why, Who and How to use
                </p>
              </div>
              <div>
                <Link to="/toolbox">
                  <button className="tier-1-btn flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Explore Free Models
                  </button>
                </Link>
              </div>
            </div>

            {/* Consulting Offering */}
            <div className="space-y-4 mt-64">
              <div className="h-8"></div>
              <div>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed">
                  Customization & Consulting Services for tailored solutions and expert guidance for your specific needs
                </p>
              </div>
              <div>
                <Link to="/contact">
                  <button className="tier-2-btn flex items-center justify-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Request Consultation
                  </button>
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
