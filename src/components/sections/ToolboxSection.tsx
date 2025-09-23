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
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-brand-blue">
            Toolbox of Financial Decision Models
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-6xl mx-auto leading-relaxed px-4">
            The toolbox provides professionals and students with proven methodologies designed to help structure and make complex financial decisions. If you want to make better financial models on your own, hopefully the toolbox can also inspire and help you.
          </p>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-6xl mx-auto italic mt-4 leading-relaxed px-4">
            "All models have inherent limitations. Use these tools to structure thinking and facilitate discussions, not to predict precise outcomes"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Business Type Categories */}
          <Link to="/toolbox/startup-valuations" className="block">
            <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-80 h-40" style={{backgroundColor: '#326496'}}>
              <CardHeader className="h-full flex flex-col justify-center">
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
            <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-80 h-40" style={{backgroundColor: '#326496'}}>
              <div className="absolute -top-3 -right-3 z-20">
                <Badge className="bg-orange-500 text-white border-orange-400 shadow-lg">
                  <Clock className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              </div>
              <CardHeader className="h-full flex flex-col justify-center">
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
            <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-80 h-40" style={{backgroundColor: '#326496'}}>
              <CardHeader className="h-full flex flex-col justify-center">
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
            <Card className="shadow-lg border-slate-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative cursor-pointer w-80 h-40" style={{backgroundColor: '#326496'}}>
              <CardHeader className="h-full flex flex-col justify-center">
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

        {/* Information Boxes */}
        <div className="bg-white p-4 md:p-6 rounded-lg border border-slate-100 shadow-sm mt-8 md:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-3">What We Provide</h4>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                Professional-grade Excel models covering the complete spectrum of complex business financial decisions—from startup valuations and unit economics through mature business investment analysis and strategic planning. Each model includes comprehensive guidance, standardized structure with clear value driver logic, and built-in scenario and sensitivity analysis capabilities.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-3">Why It Matters</h4>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                Financial decision-making often suffers from inconsistent methodologies, hidden assumptions, and inadequate risk assessment. Our models solve this by providing multiple proven frameworks that help users not only calculate credible results and test scenarios but also articulate the logic behind their conclusions to stakeholders, investors, and partners.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-3">Who Benefits</h4>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                <span className="font-medium">Entrepreneurs and Investors</span> validating business models, making investments and funding decisions. <span className="font-medium">Business Leaders</span> optimizing business performance, complex internal & external decisions and strategic initiatives. <span className="font-medium">Financial Advisors</span> providing professional analysis and decision support and services. <span className="font-medium">Students</span> for finance coursework and analysis.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold text-brand-blue mb-3">How Models works</h4>
              <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                Each model uses clear Excel structure with color-coded inputs for easy use. Built-in scenario testing helps address uncertainty, and the models provide the analytical depth needed for both analytical insight, decision making and professional presentations to stakeholders. The models can be used 100% free, but are protected for design changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;