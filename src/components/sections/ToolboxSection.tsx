import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, BarChart3, TrendingUp, ArrowRight, Check, Clock } from "lucide-react";

const ToolboxSection = () => {
  return (
    <section id="toolbox" className="py-16 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            Toolbox of Financial Decision Models
          </h3>
          <p className="text-[28px] text-slate-600 max-w-6xl mx-auto leading-relaxed">
            The toolbox provides professionals and students with proven methodologies designed to help structure and make complex financial decisions. If you want to make better financial models on your own, hopefully the toolbox can also inspire and help you.
          </p>
          
          <p className="text-[28px] text-slate-600 max-w-6xl mx-auto italic mt-4 leading-relaxed">
            "All models have inherent limitations. Use these tools to structure thinking and facilitate discussions, not to predict precise outcomes"
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Business Type Categories */}
          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative flex flex-col h-full">
            <CardHeader className="flex-grow">
              <CardTitle className="text-[28px] font-semibold">
                <span>Startup Valuations</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Models for early-stage business valuation and investment decisions
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link to="/toolbox/startup-valuations">
                <Button variant="rich-emerald" size="lg" className="w-full text-lg">
                  Explore Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative flex flex-col h-full">
            <div className="absolute -top-3 -right-3 z-10">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                <Clock className="w-3 h-3 mr-1" />
                Coming Soon
              </Badge>
            </div>
            <CardHeader className="flex-grow">
              <CardTitle className="text-[28px] font-semibold">
                <span>Business Strategy</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Financial models for long-term planning, decision-making and scenario analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link to="/toolbox/business-strategy">
                <Button variant="rich-emerald" size="lg" className="w-full text-lg">
                  Explore Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative flex flex-col h-full">
            <CardHeader className="flex-grow">
              <CardTitle className="text-[28px] font-semibold">
                <span>Investment Analysis</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Professional models for investment analysis, valuations and decisions
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link to="/toolbox/investment-analysis">
                <Button variant="rich-emerald" size="lg" className="w-full text-lg">
                  Explore Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative flex flex-col h-full">
            <CardHeader className="flex-grow">
              <CardTitle className="text-[28px] font-semibold">
                <span>Fundamentals</span>
              </CardTitle>
              <CardDescription className="text-lg">
                Academic and general models for educational and inspirational purposes  
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <Link to="/toolbox/financial-fundamentals">
                <Button variant="rich-emerald" size="lg" className="w-full text-lg">
                  Explore Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Information Boxes */}
        <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">What We Provide</h4>
              <p className="text-lg text-slate-600 leading-relaxed">
                Professional-grade Excel models covering the complete spectrum of business financial decisions—from startup valuations and unit economics through mature business investment analysis and strategic planning. Each model includes comprehensive guidance, standardized structure with clear value driver logic, and built-in scenario and sensitivity analysis capabilities.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Why It Matters</h4>
              <p className="text-lg text-slate-600 leading-relaxed">
                Financial decision-making often suffers from inconsistent methodologies, hidden assumptions, and inadequate risk assessment. Our models solve this by providing multiple proven frameworks that help users not only calculate credible results and test scenarios but also articulate the logic behind their conclusions to stakeholders, investors, and partners.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Who Benefits</h4>
              <p className="text-lg text-slate-600 leading-relaxed">
                <span className="font-medium">Entrepreneurs and Investors</span> validating business models, making investments and funding decisions. <span className="font-medium">Business Leaders</span> optimizing business performance, complex internal & external decisions and strategic initiatives. <span className="font-medium">Financial Advisors</span> providing professional analysis and decision support and services. <span className="font-medium">Students</span> for finance coursework and analysis.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-900 mb-3">How Models works</h4>
              <p className="text-lg text-slate-600 leading-relaxed">
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