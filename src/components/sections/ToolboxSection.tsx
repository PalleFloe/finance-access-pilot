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
          <h3 className="text-3xl font-bold mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
            Comprehensive Financial Decision Models
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Each model includes step-by-step guidance on concepts and best practices, standardized structure with clear value driver logic, and built-in scenario & sensitivity analysis.
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
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="w-5 h-5" style={{ color: 'rgb(50, 100, 150)' }} />
                <span>Start-up Valuations</span>
              </CardTitle>
              <CardDescription>
                Models for early-stage business valuation and investment decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/toolbox/startup-valuations">
                <Button variant="outline" className="w-full">
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
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <span>Mature Business</span>
              </CardTitle>
              <CardDescription>
                Advanced financial decision models for established businesses with stable operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/toolbox/mature-business">
                <Button variant="outline" className="w-full">
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
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-indigo-600" />
                <span>Investment Analysis</span>
              </CardTitle>
              <CardDescription>
                Professional-grade investment analysis tools for capital allocation and project evaluation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/toolbox/investment-analysis">
                <Button variant="outline" className="w-full">
                  Explore Models
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ToolboxSection;