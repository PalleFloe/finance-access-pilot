import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, Users, HelpCircle, ArrowRight } from "lucide-react";
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
    <div className="space-y-0">
      {/* Section 1: Model Categories */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg border border-slate-200 bg-white relative" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.12)' }}>
              <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2 z-10">
                <Badge className="bg-rich-emerald text-white border-rich-emerald shadow-lg text-lg font-medium px-4 py-2">
                  100% Free to View & Use all Models!
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Calculator className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h2 className="font-garamond text-[36px] font-bold text-brand-blue">
                    A Comprehensive Range of Financial Decision Models
                  </h2>
                </div>
                
                <div className="ml-16">
                  <p className="font-garamond text-[32px] text-slate-600 mb-8">
                    Professional Excel models with intuitive and structured design, and with clear guidance on What, Why, Who and How to use
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
                  {categoryBoxes.map((category, index) => (
                    <div 
                      key={index}
                      className="border border-slate-300 rounded-md py-5 px-4 text-center bg-slate-50 hover:border-brand-blue hover:shadow-md hover:bg-blue-50 transition-all duration-200 cursor-pointer"
                    >
                      <span className="font-garamond text-[28px] font-semibold text-brand-blue">
                        {category}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <span className="font-garamond text-[28px] text-slate-700 text-right">Check them out:</span>
                  <Button
                    asChild
                    className="bg-rich-emerald hover:opacity-80 text-white font-semibold py-3 px-10 rounded-md transition-all duration-200 text-[28px] w-[360px]"
                  >
                    <Link to="/toolbox" className="flex items-center gap-2 justify-center">
                      Go to Toolbox
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Consulting Services */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg border border-slate-200 bg-white" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.12)' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h2 className="font-garamond text-[36px] font-bold text-brand-blue">
                    Expert Guidance for Your Specific Needs
                  </h2>
                </div>
                
                <div className="ml-16">
                  <p className="font-garamond text-[32px] text-slate-600 mb-8">
                    From model customization to consulting services
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <span className="font-garamond text-[28px] text-slate-700 text-right">Reach out to me:</span>
                  <Button
                    onClick={() => setIsConsultationFormOpen(true)}
                    className="bg-rich-emerald hover:opacity-80 text-white font-semibold py-3 px-10 rounded-md transition-all duration-200 text-[28px] w-[360px]"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      Schedule Consultation
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Offerings */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg border border-slate-200 bg-white" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.12)' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <HelpCircle className="h-8 w-8 text-brand-blue" />
                  </div>
                  <h2 className="font-garamond text-[36px] font-bold text-brand-blue">
                    Financial Decision Models Offerings
                  </h2>
                </div>
                
                <div className="ml-16">
                  <p className="font-garamond text-[32px] text-slate-600 mb-8">
                    Choose your path to better financial decisions
                  </p>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <span className="font-garamond text-[28px] text-slate-700 text-right">Check out the paths:</span>
                  <Button
                    asChild
                    className="bg-rich-emerald hover:opacity-80 text-white font-semibold py-3 px-10 rounded-md transition-all duration-200 text-[28px] w-[360px]"
                  >
                    <Link to="/how-it-works" className="flex items-center gap-2 justify-center">
                      Offerings – How It Works
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
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