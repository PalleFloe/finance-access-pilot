import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Users, ClipboardList, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";

const MainSections = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  const categoryBoxes = [
    "Startup Valuations",
    "Business Strategy", 
    "Investment Analysis",
    "Finance Fundamentals"
  ];

  return (
    <div className="space-y-8">
      {/* Section 1: Model Categories */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <Card className="shadow-lg border border-slate-200">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-brand-blue" />
                </div>
              </div>
              
              <h2 className="font-garamond text-[24px] font-bold text-brand-blue text-center mb-3">
                A Comprehensive Range of Financial Decision Models
              </h2>
              <p className="font-garamond text-[14px] text-slate-600 text-center mb-6 max-w-4xl mx-auto">
                Professional Excel models with intuitive and structured design, and with clear guidance on What, Why, Who and How to use
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-6 max-w-2xl mx-auto">
                {categoryBoxes.map((category, index) => (
                  <div 
                    key={index}
                    className="border border-slate-300 rounded-md py-3 px-4 text-center bg-white hover:border-brand-blue hover:shadow-sm transition-all duration-200"
                  >
                    <span className="font-garamond text-[14px] font-semibold text-slate-700">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-garamond text-[14px] text-slate-600">Check them out:</span>
                <Button
                  asChild
                  className="bg-rich-emerald hover:bg-deep-blue text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200"
                >
                  <Link to="/toolbox" className="flex items-center gap-2">
                    Go to Toolbox
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Consulting Services */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6">
          <Card className="shadow-lg border border-slate-200">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-brand-blue" />
                </div>
              </div>
              
              <h2 className="font-garamond text-[24px] font-bold text-brand-blue text-center mb-3">
                Expert Guidance for Your Specific Needs
              </h2>
              <p className="font-garamond text-[14px] text-slate-600 text-center mb-6">
                From model customization to consulting services
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-garamond text-[14px] text-slate-600">Reach out to me:</span>
                <Button
                  onClick={() => setIsConsultationFormOpen(true)}
                  className="bg-rich-emerald hover:bg-deep-blue text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200"
                >
                  <span className="flex items-center gap-2">
                    Schedule Consultation
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Offerings */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <Card className="shadow-lg border border-slate-200">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <ClipboardList className="h-6 w-6 text-brand-blue" />
                </div>
              </div>
              
              <h2 className="font-garamond text-[24px] font-bold text-brand-blue text-center mb-3">
                Financial Decision Models Offerings
              </h2>
              <p className="font-garamond text-[14px] text-slate-600 text-center mb-6">
                Choose your path to better financial decisions
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-garamond text-[14px] text-slate-600">Check out the paths:</span>
                <Button
                  asChild
                  className="bg-rich-emerald hover:bg-deep-blue text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200"
                >
                  <Link to="/how-it-works" className="flex items-center gap-2">
                    Offerings – How It Works
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <ConsultationForm 
        isOpen={isConsultationFormOpen}
        onClose={() => setIsConsultationFormOpen(false)}
      />
    </div>
  );
};

export default MainSections;