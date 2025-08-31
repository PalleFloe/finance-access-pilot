import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Calculator, Check, Mail, ArrowRight, Clock } from "lucide-react";
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
    <section id="consulting" className="pt-2 pb-20 px-6 bg-gradient-to-b from-slate-50/50 to-white border-t border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="text-left mb-4">
          <Badge className="mb-2 bg-blue-100 text-blue-800 text-[13pt] px-4 py-2" variant="outline">
            Our Services
          </Badge>
        </div>

        <div className="space-y-4">
          {/* Financial Decision Model Toolbox - Primary */}
          <Card className="shadow-xl border-slate-300 hover:shadow-2xl transition-all duration-300 bg-white backdrop-blur-sm">
            <CardHeader className="pb-3 px-6 pt-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle 
                    className="text-[20px] font-semibold text-slate-800 text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Financial Decision Model Toolbox
                  </CardTitle>
                </div>
              </div>
              <CardDescription 
                className="text-[20px] text-slate-600 text-left"
                style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
              >
                Comprehensive online toolbox for making informed financial decisions
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p 
                    className="text-[18px] text-slate-700 leading-relaxed text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Guidance on selecting appropriate financial decision models for specific business needs
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p 
                    className="text-[18px] text-slate-700 leading-relaxed text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Clear guidance on concepts, terminology, and best practices
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p 
                    className="text-[18px] text-slate-700 leading-relaxed text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Support for developing sound assumptions and estimates
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <p 
                    className="text-[18px] text-slate-700 leading-relaxed text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    User-friendly models with standardized structure, proper calculations, and built-in sensitivity analysis
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4">
                <Button asChild variant="brand-green" className="text-left justify-start px-4 w-96">
                  <Link to="/toolbox">
                    Explore Free Tools
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Expert Consulting Services - Secondary */}
          <Card className="shadow-md border-slate-200 hover:shadow-lg transition-all duration-300 bg-white backdrop-blur-sm">
            <CardHeader className="pb-3 px-6 pt-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle 
                    className="text-[20px] font-semibold text-slate-800 text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Expert Consulting Services
                  </CardTitle>
                </div>
              </div>
              <CardDescription 
                className="text-[20px] text-slate-600 text-left"
                style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
              >
                Consulting solutions for complex decisions and processes
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <p 
                    className="text-[18px] text-slate-700 leading-relaxed text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Customization of models for specific company requirements
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <p 
                    className="text-[18px] text-slate-700 leading-relaxed text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Challenging, evaluation and improvement of existing financial decision processes
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <p 
                    className="text-[18px] text-slate-700 leading-relaxed text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    End-to-end financial and/or process lead or support for driving complex financial decisions
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4">
                <Button 
                  variant="brand-green" 
                  className="text-left justify-start px-4 w-96"
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