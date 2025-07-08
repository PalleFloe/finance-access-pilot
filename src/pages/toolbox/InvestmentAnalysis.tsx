import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Clock } from "lucide-react";
import Header from "@/components/Header";

const InvestmentAnalysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-4">
        <Link to="/" className="inline-flex items-center text-slate-700 hover:text-primary">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Toolbox
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800" variant="outline">
            Investment Analysis
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Professional-Grade Investment Analysis Tools
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Evaluate capital allocation and project investments with our advanced analysis tools.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <Clock className="w-12 h-12 mx-auto mb-4 text-orange-600" />
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Coming Soon
          </h3>
          <p className="text-lg text-slate-600 mb-8">
            We're working hard to bring you the best investment analysis tools. Stay tuned!
          </p>
          <Button variant="outline">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InvestmentAnalysis;
