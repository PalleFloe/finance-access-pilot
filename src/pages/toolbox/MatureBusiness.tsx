import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BarChart3, Clock } from "lucide-react";
import Header from "@/components/Header";

const MatureBusiness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Back Button */}
      <section className="py-6 px-6 bg-white border-b border-slate-200">
        <div className="container mx-auto max-w-6xl">
          <Link to="/toolbox">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Toolbox
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-orange-100 text-orange-800 border-orange-200">
            Coming Soon
          </Badge>
          <h2 className="text-4xl font-bold text-brand-blue mb-6">
            Mature Business Financial Models
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Advanced financial decision models for established businesses with stable operations.
          </p>
        </div>
      </section>

      {/* Model List Section */}
      <section className="py-12 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder Card - Coming Soon */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  <span>Advanced Forecasting Model</span>
                </CardTitle>
                <CardDescription>
                  Detailed forecasting model for mature businesses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                  <Clock className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>

            {/* Placeholder Card - Coming Soon */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  <span>Capital Budgeting Analysis</span>
                </CardTitle>
                <CardDescription>
                  Advanced capital budgeting and investment analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                  <Clock className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>

            {/* Placeholder Card - Coming Soon */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  <span>Working Capital Management</span>
                </CardTitle>
                <CardDescription>
                  Working capital optimization and management model.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                  <Clock className="w-3 h-3 mr-1" />
                  Coming Soon
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MatureBusiness;
