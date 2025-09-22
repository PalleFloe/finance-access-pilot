import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MainSections = () => {
  return (
    <div className="space-y-0">
      {/* Section 1: Model Categories */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <Card className="shadow-lg border border-slate-200 bg-white" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.12)' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <h2 className="font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue">
                    Comprehensive Range of Financial Decision Models
                  </h2>
                </div>
                
                <div>
                  <p className="font-garamond text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-8">
                    Professional Excel models with intuitive and structured design, and with clear guidance on What, Why, Who and How to use
                  </p>
                </div>
                
                
                {/* Category Strip */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg mt-6 mb-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                    <div className="text-center">
                      <h3 className="font-garamond text-xl sm:text-2xl md:text-3xl font-semibold text-brand-blue mb-2">
                        Startup Valuations
                      </h3>
                      <p className="font-garamond text-lg md:text-xl text-slate-600">
                        Models for early-stage business valuation and investment decisions
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-garamond text-xl sm:text-2xl md:text-3xl font-semibold text-brand-blue mb-2">
                        Business Strategy
                      </h3>
                      <p className="font-garamond text-lg md:text-xl text-slate-600">
                        Models for strategic planning, decision-making and scenario analysis
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-garamond text-xl sm:text-2xl md:text-3xl font-semibold text-brand-blue mb-2">
                        Investment Analysis
                      </h3>
                      <p className="font-garamond text-lg md:text-xl text-slate-600">
                        DCF Models for investment analysis and decisions
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="font-garamond text-xl sm:text-2xl md:text-3xl font-semibold text-brand-blue mb-2">
                        Fundamentals
                      </h3>
                      <p className="font-garamond text-lg md:text-xl text-slate-600">
                        Models for mainly educational and inspirational purposes
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checkmarks credibility statement */}
                <div className="text-center py-6">
                  <div className="font-garamond text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-rich-emerald">
                    ✓ Professional & Proven ✓ Wide Range ✓ Models are free-to-use
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <Button
                    asChild
                    className="bg-rich-emerald hover:opacity-80 text-white font-semibold py-8 px-32 rounded-md transition-all duration-200 text-2xl md:text-3xl lg:text-4xl"
                  >
                    <Link to="/toolbox" className="flex items-center gap-3 justify-center">
                      Go to Toolbox
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSections;