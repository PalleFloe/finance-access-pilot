import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calculator, Check, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ConsultationForm from "@/components/ConsultationForm";

const ServicesSection = () => {
  const [isConsultationFormOpen, setIsConsultationFormOpen] = useState(false);

  return (
    <>
      <ConsultationForm 
        isOpen={isConsultationFormOpen} 
        onClose={() => setIsConsultationFormOpen(false)} 
      />
    <section id="consulting" className="pt-20 pb-20 px-6 bg-gradient-to-b from-slate-50/50 to-white border-t border-slate-100" style={{marginTop: '30px'}}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 text-[13pt] px-4 py-2" variant="outline">
            Our Services
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Financial Decision Model Toolbox */}
          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-all duration-300 relative bg-white/80 backdrop-blur-sm flex flex-col h-full">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-semibold">Financial Decision Model Toolbox</CardTitle>
                </div>
              </div>
              <CardDescription className="text-lg">
                Comprehensive online toolbox for making informed financial decisions
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-slate-700 leading-relaxed">Guidance on selecting appropriate financial decision models for specific business needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-slate-700 leading-relaxed">Clear guidance on concepts, terminology, and best practices</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-slate-700 leading-relaxed">Support for developing sound assumptions and estimates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-slate-700 leading-relaxed">User-friendly models with standardized structure, proper calculations, and built-in sensitivity analysis</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-6">
                <Button asChild variant="brand-green" className="w-full">
                  <Link to="/toolbox">
                    Explore Free Tools
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expert Consulting Services */}
          <Card className="shadow-lg border-slate-200 hover:shadow-xl transition-all duration-300 relative bg-white/80 backdrop-blur-sm flex flex-col h-full">
            <Badge className="absolute top-4 right-4 bg-[#FFF3CD] text-[#856404] border border-[#FFE8A1] text-[10pt] px-2 py-1 rounded">
              🕐 Coming Soon
            </Badge>
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-semibold">Expert Consulting Services</CardTitle>
                </div>
              </div>
              <CardDescription className="text-lg">
                Consulting solutions for complex decisions and processes
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-slate-700 leading-relaxed">Customization of models for specific company requirements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-slate-700 leading-relaxed">Challenging, evaluation and improvement of existing financial decision processes</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <p className="text-lg text-slate-700 leading-relaxed">End-to-end financial and/or process lead or support for driving complex financial decisions</p>
                </div>
              </div>
              <div className="pt-4 border-t border-slate-100 mt-6">
                <Button 
                  variant="brand-green" 
                  className="w-full"
                  onClick={() => setIsConsultationFormOpen(true)}
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;