import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { useEffect } from "react";

const BreakEvenAnalysis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <Helmet>
        <title>Break-Even Analysis Model - Coming Soon | Financial Decision Models</title>
        <meta name="description" content="Break-Even Analysis Model for threshold decision-making and profitability analysis. Coming soon to the Investment Analysis toolkit." />
      </Helmet>
      <Header />
      
      <div className="py-12 px-6">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <Link 
            to="/toolbox/investment-analysis"
            className="inline-flex items-center text-slate-600 hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Investment Analysis
          </Link>

          <h1 className="text-[20px] font-bold mb-4" style={{color: 'hsl(209, 49%, 39%)'}}>
            Break-Even Analysis Model
          </h1>
          
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm mb-8">
            Coming Soon
          </Badge>
          
          <p className="text-lg text-muted-foreground mb-8">
            We're working hard to bring you this model. Stay tuned!
          </p>
          
          <Button variant="outline" asChild>
            <Link to="/toolbox/investment-analysis">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BreakEvenAnalysis;