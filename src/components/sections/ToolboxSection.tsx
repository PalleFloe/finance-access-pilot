import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, BarChart3, TrendingUp, ArrowRight, Check, Clock } from "lucide-react";

const ToolboxSection = () => {
  return (
    <section id="toolbox" className="py-16 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-brand-blue">
            Toolbox of Financial Decision Models
          </h3>
          <p className="text-2xl md:text-3xl text-slate-600 max-w-6xl mx-auto leading-relaxed">
            The toolbox provides proven methodologies to help structure and make complex business decisions. It also inspires and assists users in developing better financial models independently.
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-6xl mx-auto italic mt-4 leading-relaxed px-4">
            "All models have inherent limitations. Use these tools to structure thinking and facilitate discussions, not to predict precise outcomes"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Business Type Categories */}
          <Link to="/toolbox/startup-valuations" className="block">
            <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-80 h-40 bg-brand-blue">
              <CardHeader className="h-full flex flex-col justify-center">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  <span>Startup Valuations</span>
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-white/75">
                  Models for early-stage business valuation and investment decisions
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/toolbox/business-strategy" className="block">
            <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-80 h-40 bg-brand-blue">
              <div className="absolute -top-3 -right-3 z-20">
                <Badge className="bg-orange-500 text-white border-orange-400 shadow-lg">
                  <Clock className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              </div>
              <CardHeader className="h-full flex flex-col justify-center">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  <span>Business Strategy</span>
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-white/75">
                  Models for strategic planning, decisions and scenario analysis
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/toolbox/investment-analysis" className="block">
            <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-80 h-40 bg-brand-blue">
              <CardHeader className="h-full flex flex-col justify-center">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  <span>Investment Analysis</span>
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-white/75">
                  DCF Models for investment analysis and decisions
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/toolbox/financial-fundamentals" className="block">
            <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-80 h-40 bg-brand-blue">
              <CardHeader className="h-full flex flex-col justify-center">
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  <span>Fundamentals</span>
                </CardTitle>
                <CardDescription className="text-base md:text-lg text-white/75">
                  Models for mainly educational and inspirational purposes  
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>

        {/* Information Boxes */}
        <div className="bg-white p-4 md:p-6 rounded-lg border border-slate-100 shadow-sm mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-3">What We Provide</h4>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                Professional-grade Excel models cover a wide range of business decisions, including startup valuations, investment decisions, and business strategy. Each model includes a standardized and intuitive structure, featuring built-in scenario and sensitivity analysis capabilities where relevant, along with comprehensive guidance.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-3">Why It Matters</h4>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                Financial decision-making often suffers from inconsistent methodologies, hidden assumptions, and inadequate risk assessment. Our models solve this by providing proven frameworks that help users calculate credible results, test scenarios, and articulate the logic behind their conclusions to stakeholders, investors, and partners.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-3">Who Benefits</h4>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                <span className="font-medium">Entrepreneurs and investors</span> can validate business models, make investments, and fund decisions. <span className="font-medium">Business leaders</span> can optimize performance and make complex decisions. <span className="font-medium">Financial advisors</span> can provide analysis and decision support. <span className="font-medium">Students</span> can use the models in finance coursework and analysis.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-3">How Models works</h4>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                Each Excel model uses a clear structure with color-coded inputs and calculated outputs, incorporating scenario functionality to effectively address assumption sensitivities. While the models can be used free of charge, their design is protected against unauthorized modifications, ensuring integrity and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;