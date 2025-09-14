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
    <section id="consulting" className="pt-3 pb-20 px-6 bg-gradient-to-b from-slate-50/50 to-white border-t border-slate-100">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4">
          {/* Financial Decision Model Toolbox - Primary */}
          <Card className="shadow-xl border-slate-300 hover:shadow-2xl transition-all duration-300 bg-white backdrop-blur-sm">
            <CardHeader className="pb-4 px-6 pt-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calculator className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle 
                    className="text-4xl font-bold text-left mb-2"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif', color: '#326496' }}
                  >
                    Financial Decision Model Toolbox
                  </CardTitle>
                </div>
              </div>
              <CardDescription 
                className="text-xl text-slate-600 text-left mb-4"
                style={{ fontFamily: 'Garamond, Times New Roman, serif', lineHeight: '1.6' }}
              >
                Comprehensive toolbox of professional financial models for online preview and download to use
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6 sm:px-6">
              <div className="space-y-4 pr-2 sm:pr-4 mb-6">
                <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-0">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <p 
                    className="text-xl leading-relaxed text-left flex-1 break-words"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif', lineHeight: '1.6' }}
                  >
                    Guidance on selecting appropriate financial decision models for specific business needs
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-0">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                   <p 
                    className="text-xl leading-relaxed text-left flex-1 break-words"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif', lineHeight: '1.6' }}
                  >
                    Clear guidance on concepts, terminology, and best practices
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-0">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                   <p 
                    className="text-xl leading-relaxed text-left flex-1 break-words"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif', lineHeight: '1.6' }}
                  >
                    Support for developing sound assumptions and estimates
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-0">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                   <p 
                    className="text-xl leading-relaxed text-left flex-1 break-words"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif', lineHeight: '1.6' }}
                  >
                    Professional, user-friendly Excel models with standardized structure and built-in sensitivity analysis
                  </p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <Button 
                  asChild 
                  variant="rich-emerald" 
                  size="lg"
                  className="justify-center w-full sm:w-auto px-12 text-3xl font-semibold"
                >
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
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <CardTitle 
                    className="text-2xl font-semibold text-left"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif', color: '#326496' }}
                  >
                    Expert Consulting Services
                  </CardTitle>
                </div>
              </div>
              <CardDescription 
                className="text-lg text-slate-600 text-left"
                style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
              >
                Consulting solutions for complex decisions and processes
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6 sm:px-6">
              <div className="space-y-4 pr-2 sm:pr-4">
                <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-0">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                   <p 
                    className="text-lg text-slate-700 leading-relaxed text-left flex-1 break-words"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Customization of models for specific company requirements
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-0">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                   <p 
                    className="text-lg text-slate-700 leading-relaxed text-left flex-1 break-words"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    Challenging, evaluation and improvement of existing financial decision processes
                  </p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 pr-2 sm:pr-0">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                   <p 
                    className="text-lg text-slate-700 leading-relaxed text-left flex-1 break-words"
                    style={{ fontFamily: 'Garamond, Times New Roman, serif' }}
                  >
                    End-to-end financial and/or process lead or support for driving complex financial decisions
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 mt-4">
                <Button 
                  variant="rich-emerald" 
                  size="lg"
                  className="justify-center px-12 w-full sm:w-auto text-2xl font-semibold"
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