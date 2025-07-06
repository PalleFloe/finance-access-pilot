import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calculator } from "lucide-react";

const ServicesSection = () => {
  return (
    <section id="consulting" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800" variant="outline">
            Our Services
          </Badge>
          <h3 className="text-3xl font-bold mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
            Comprehensive Financial Solutions
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Phase One - Toolbox */}
          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Financial Decision Model Toolbox</CardTitle>
                  <Badge className="bg-green-100 text-green-800 border-green-200">Phase One</Badge>
                </div>
              </div>
              <CardDescription className="text-base">
                Comprehensive online toolbox for making informed financial decisions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Guidance on selecting appropriate financial decision models for specific business needs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Clear guidance on concepts, terminology, and best practices</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Support for developing sound assumptions and estimates</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">User-friendly models with standardized structure, proper calculations, and built-in sensitivity analysis</p>
              </div>
            </CardContent>
          </Card>

          {/* Phase Two - Consulting */}
          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Expert Consulting Services</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-200">Phase Two</Badge>
                </div>
              </div>
              <CardDescription className="text-base">
                Personalized consulting for complex financial decision processes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Customization of models for specific company requirements</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">Challenging, evaluation and improvement of existing financial decision processes</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700">End-to-end financial and/or process lead or support for driving complex financial decisions</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;