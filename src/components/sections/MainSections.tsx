import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const MainSections = () => {

  const categoryBoxes = [
    "Startup Valuations",
    "Business Strategy", 
    "Investment Analysis",
    "Fundamentals"
  ];

  return (
    <div className="space-y-0">
      {/* Section 1: Model Categories */}
      <section className="py-4">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg border border-slate-200 bg-white" style={{ boxShadow: '0 10px 25px rgba(0,0,0,0.12)' }}>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <h2 className="font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue">
                    A Comprehensive Range of Financial Decision Models
                  </h2>
                </div>
                
                <div>
                  <p className="font-garamond text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 mb-8">
                    Professional Excel models with intuitive and structured design, and with clear guidance on What, Why, Who and How to use
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8 max-w-4xl mx-auto">
                  {categoryBoxes.map((category, index) => (
                    <div 
                      key={index}
                      className="border border-slate-300 rounded-md py-4 px-3 bg-slate-50 hover:border-brand-blue hover:shadow-md hover:bg-blue-50 transition-all duration-200 cursor-pointer flex items-center justify-center min-h-[80px]"
                    >
                      <span className="font-garamond text-base sm:text-lg md:text-xl font-semibold text-brand-blue text-center">
                        {category}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="relative flex flex-col sm:flex-row sm:items-center gap-4">
                  <span className="font-garamond text-lg sm:text-xl md:text-2xl text-slate-700">Check them out:</span>
                  <div className="flex justify-center sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                    <Button
                      asChild
                      className="bg-rich-emerald hover:opacity-80 text-white font-semibold py-3 px-6 sm:px-5 rounded-md transition-all duration-200 text-lg sm:text-xl md:text-2xl w-full sm:w-[320px]"
                    >
                      <Link to="/toolbox" className="flex items-center gap-2 justify-center">
                        Go to Toolbox
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
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