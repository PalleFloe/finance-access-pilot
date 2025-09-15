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
                {/* Wild Badge Design Options - Choose your favorite! */}
                
                {/* Option 1: Electric Gradient with Pulse Animation */}
                {/* <div className="bg-gradient-to-r from-rich-emerald via-deep-blue to-rich-emerald text-white shadow-2xl text-lg font-black px-6 py-3 rounded-2xl border-2 border-white animate-pulse transform rotate-2">
                  <div className="text-center">
                    <div className="text-sm font-bold">100% Free to View & Use</div>
                    <div className="text-xl font-black tracking-wide">Explore the Models!</div>
                  </div>
                </div> */}

                {/* Option 2: Neon Glow Effect */}
                {/* <div className="bg-black text-rich-emerald shadow-2xl text-lg font-black px-6 py-4 rounded-full border-2 border-rich-emerald" style={{ boxShadow: '0 0 20px hsl(var(--rich-emerald)), inset 0 0 20px rgba(0,255,100,0.1)' }}>
                  <div className="text-center font-mono">
                    <div className="text-sm">100% FREE TO VIEW & USE</div>
                    <div className="text-xl font-black">EXPLORE THE MODELS!</div>
                  </div>
                </div> */}

                {/* Option 3: Bold Geometric with Sharp Angles */}
                <div className="bg-deep-blue text-white shadow-xl text-lg font-black px-8 py-4 transform -skew-x-12 border-l-4 border-rich-emerald">
                  <div className="transform skew-x-12 text-center font-garamond">
                    <div className="text-sm font-semibold">100% Free to View & Use,</div>
                    <div className="text-xl font-black">Explore the Models!</div>
                  </div>
                </div>

                {/* Option 3: Bold Geometric with Sharp Angles */}
                {/* <div className="bg-deep-blue text-white shadow-xl text-lg font-black px-8 py-4 transform -skew-x-12 border-l-4 border-rich-emerald">
                  <div className="transform skew-x-12 text-center">
                    <div className="text-sm font-semibold uppercase tracking-widest">100% Free Access</div>
                    <div className="text-xl font-black">EXPLORE THE MODELS!</div>
                  </div>
                </div> */}

                {/* Option 4: Vintage Stamp Style */}
                {/* <div className="bg-white text-deep-blue shadow-lg text-lg font-black px-6 py-3 rounded-lg border-4 border-dashed border-deep-blue transform rotate-3">
                  <div className="text-center font-garamond">
                    <div className="text-xs uppercase tracking-wider font-bold">✦ COMPLETELY FREE ✦</div>
                    <div className="text-lg font-black">VIEW & EXPLORE</div>
                    <div className="text-lg font-black">THE MODELS!</div>
                  </div>
                </div> */}

                {/* Option 5: Modern Minimalist with Hover Effect */}
                {/* <div className="bg-rich-emerald/90 backdrop-blur-sm text-white shadow-lg text-lg font-bold px-6 py-3 rounded-xl border border-white/20 hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="text-sm opacity-90">100% Free to View & Use</div>
                    <div className="text-xl font-black">Explore the Models!</div>
                  </div>
                </div> */}

              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <h2 className="font-garamond text-[36px] font-bold text-brand-blue">
                    A Comprehensive Range of Financial Decision Models
                  </h2>
                </div>
                
                <div>
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
                  <h2 className="font-garamond text-[36px] font-bold text-brand-blue">
                    Expert Guidance for Your Specific Needs
                  </h2>
                </div>
                
                <div>
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
                  <h2 className="font-garamond text-[36px] font-bold text-brand-blue">
                    Financial Decision Models Offerings
                  </h2>
                </div>
                
                <div>
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