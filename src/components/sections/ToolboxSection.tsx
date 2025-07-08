import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, BarChart3, TrendingUp, ArrowRight, Check, Clock } from "lucide-react";

const ToolboxSection = () => {
  return (
    <section id="toolbox" className="py-16 px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800" variant="outline">
            Financial Decision Toolbox
          </Badge>
          <h3 className="text-3xl font-bold mb-6 text-primary">
            Transform Complex Financial Choices Into Clear Insights and Decisions
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The toolbox provides business leaders, entrepreneurs, and financial professionals with proven methodologies to help navigate complex financial decisions. This comprehensive collection of professional models transforms sophisticated financial analysis into practical, accessible tools for real-world applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Business Type Categories */}
          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-3 -right-3 z-10">
              <Badge className="bg-green-100 text-green-800 border-green-200 shadow-sm">
                <Check className="w-3 h-3 mr-1" />
                Available
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>
                <span>Start-up Valuations</span>
              </CardTitle>
              <CardDescription>
                Models for early-stage business valuation and investment decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/toolbox/startup-valuations">
                <Button variant="default" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-3 -right-3 z-10">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                <Clock className="w-3 h-3 mr-1" />
                Coming Soon
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>
                <span>Mature Business</span>
              </CardTitle>
              <CardDescription>
                Advanced financial decision models for established businesses with stable operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/toolbox/mature-business">
                <Button variant="default" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow relative">
            <div className="absolute -top-3 -right-3 z-10">
              <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
                <Clock className="w-3 h-3 mr-1" />
                Coming Soon
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>
                <span>Investment Analysis</span>
              </CardTitle>
              <CardDescription>
                Professional-grade investment analysis tools for capital allocation and project evaluation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/toolbox/investment-analysis">
                <Button variant="default" size="lg" className="w-full text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                  Explore Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Information Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">What We Provide</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Professional-grade Excel models covering the complete spectrum of business financial decisions—from startup valuations and unit economics through mature business investment analysis and strategic planning. Each model includes comprehensive guidance, standardized structure with clear value driver logic, and built-in scenario and sensitivity analysis capabilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Why It Matters</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Financial decision-making often suffers from inconsistent methodologies, hidden assumptions, and inadequate risk assessment. Our models solve this by providing multiple proven frameworks that help users not only calculate credible results and test scenarios but also articulate the logic behind their conclusions to stakeholders, investors, and partners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">Who Benefits</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              <span className="font-medium">Entrepreneurs and Investors</span> validating business models, making investments and funding decisions. <span className="font-medium">Business Leaders</span> optimizing business performance, complex internal & external decisions and strategic initiatives. <span className="font-medium">Financial Advisors</span> providing professional analysis and decision services.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-900 mb-3">How It Works</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              Each model uses clear Excel structure with color-coded inputs for easy use. Built-in scenario testing helps address uncertainty, and the models provide the analytical depth needed for both analytical insight, decision making and professional presentations to stakeholders. The models can be used 100% free, but are protected for design changes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;