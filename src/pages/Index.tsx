import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, TrendingUp, Users, Calculator, BarChart3, Mail, ArrowRight, Check, Clock } from "lucide-react";
import Header from "@/components/Header";

const Index = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200" variant="outline">
            Coming Soon - Beta Program
          </Badge>
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            Empower Your <span style={{ color: 'rgb(50, 100, 150)' }}>Financial Decisions</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Make better business decisions with our intuitive, business-minded Financial Decision Model toolbox 
            and expert consulting services. Transform complex financial choices into clear, actionable strategies.
          </p>
          
          {/* Beta Access Form */}
          <Card className="max-w-md mx-auto mb-12 shadow-lg border-slate-200">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" style={{ color: 'rgb(50, 100, 150)' }} />
                <span>Request Beta Access</span>
              </CardTitle>
              <CardDescription>
                Get access to the beta version of the Financial Decision Model toolbox. Please give feedback. Thanks!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form 
                name="beta-access" 
                method="POST" 
                data-netlify="true"
                action="/"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="beta-access" />
                <Input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  name="company"
                  placeholder="Company"
                  required
                  className="w-full"
                />
                <Input
                  type="text"
                  name="position"
                  placeholder="Position"
                  required
                  className="w-full"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  required
                  className="w-full"
                />
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Request Access
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-slate-100 text-slate-800" variant="outline">
              Our Purpose
            </Badge>
            <h3 className="text-3xl font-bold text-slate-900 mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
              Transforming Complex Financial Decisions
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We empower businesses facing complex financial choices to make better decisions with an intuitive, 
              business-minded Financial Decision Model toolbox and expert consulting services.
            </p>
          </div>
        </div>
      </section>

      {/* Toolbox Section */}
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

      {/* Services Section - Updated with Consulting focus */}
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

      {/* Blog Section */}
      <section id="blog" className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800" variant="outline">
              Insights & Resources
            </Badge>
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
              Financial Decision Insights
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Stay informed with the latest insights on financial decision-making, 
              best practices, and industry trends.
            </p>
          </div>

          <div className="text-center">
            <p className="text-slate-600 mb-6">Coming soon - Expert insights and practical guides</p>
            <Button variant="outline">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Updated */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800" variant="outline">
              About Us
            </Badge>
            <h3 className="text-3xl font-bold mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
              Empower businesses facing complex financial choices to make better decisions with a best-in-class, 
              intuitive, business-minded Financial Decision Model toolbox and expert consulting services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
                About Profile
              </h4>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>I'm a finance leader, still curious and focused after all those years;</strong> Whether the challenges have 
                  been creating performance management capabilities, business improvements and turnarounds, M&A 
                  integrations and strategic initiatives - always with strong focus on what and how we can make a real 
                  difference.
                </p>
                <p>
                  <strong>With a strong financial toolbox and business acumen,</strong> I connect and de-risk value 
                  drivers, identify opportunities, find solutions with a <strong>laser focus on value creation</strong>, and consistently 
                  champion a profitable growth mindset across organizations.
                </p>
                <p>
                  <strong>I'm direct and open-minded, not afraid to challenge status quo constructively.</strong> I give people the 
                  chance to shine rather than hide them in my shadow.
                </p>
                <p>
                  <strong>Now I'm building FinancialDecisionModels.com</strong> because after two decades of wrestling with 
                  complex, unintuitive models that often gave precisely the wrong results, I know there's a better way…
                </p>
                <p>
                  <strong>The purpose is to empower businesses facing complex financial choices to make better 
                  decisions</strong> with a best-in-class, intuitive, business-minded Financial Decision Model toolbox and expert consulting 
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900">20+</h4>
              <p className="text-slate-600">Financial Models</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900">500+</h4>
              <p className="text-slate-600">Business Decisions</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900">98%</h4>
              <p className="text-slate-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h5 className="text-xl font-bold">Financial Decision Models</h5>
                <p className="text-slate-400 text-sm">Expert Financial Consulting & Tools</p>
              </div>
            </div>
            <Separator className="bg-slate-700 mb-6" />
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-slate-400 mb-4 md:mb-0">
                © 2024 Financial Decision Models. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  financialdecisionmodels.com
                </Badge>
                <Badge variant="outline" className="border-orange-600 text-orange-300">
                  Beta Program Active
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
