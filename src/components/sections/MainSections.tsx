import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
                <div className="mt-6 mb-8">
                  <div className="flex justify-between items-center gap-4">
                    <Link to="/toolbox/startup-valuations" className="block">
                      <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-72 h-40" style={{backgroundColor: '#08305C'}}>
                        <CardHeader className="h-full flex flex-col justify-center p-3">
                          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{color: '#FFB445'}}>
                            <span>Startup Valuations</span>
                          </CardTitle>
                          <CardDescription className="text-base md:text-lg" style={{color: '#FFB445'}}>
                            Models for early-stage business valuation and investment decisions
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>

                    <Link to="/toolbox/business-strategy" className="block">
                      <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-72 h-40" style={{backgroundColor: '#08305C'}}>
                        <CardHeader className="h-full flex flex-col justify-center p-3">
                          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{color: '#FFB445'}}>
                            <span>Business Strategy</span>
                          </CardTitle>
                          <CardDescription className="text-base md:text-lg" style={{color: '#FFB445'}}>
                            Models for strategic planning, decisions and scenario analysis
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>

                    <Link to="/toolbox/investment-analysis" className="block">
                      <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-72 h-40" style={{backgroundColor: '#08305C'}}>
                        <CardHeader className="h-full flex flex-col justify-center p-3">
                          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{color: '#FFB445'}}>
                            <span>Investment Analysis</span>
                          </CardTitle>
                          <CardDescription className="text-base md:text-lg" style={{color: '#FFB445'}}>
                            DCF Models for investment analysis and decisions
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>

                    <Link to="/toolbox/financial-fundamentals" className="block">
                      <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-72 h-40" style={{backgroundColor: '#08305C'}}>
                        <CardHeader className="h-full flex flex-col justify-center p-3">
                          <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold" style={{color: '#FFB445'}}>
                            <span>Fundamentals</span>
                          </CardTitle>
                          <CardDescription className="text-base md:text-lg" style={{color: '#FFB445'}}>
                            Models for mainly educational and inspirational purposes
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  </div>
                </div>

                {/* Checkmarks credibility statement */}
                <div className="text-center py-6">
                  <div className="font-garamond text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-rich-emerald">
                    ✓ Professional & Proven ✓ Wide Range ✓ Models are Free-to-Use
                  </div>
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