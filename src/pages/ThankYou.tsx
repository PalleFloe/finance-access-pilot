import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <Card className="shadow-lg border-slate-200">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-slate-900 mb-4">
                Thank You for Your Interest!
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <p className="text-lg text-slate-600 leading-relaxed">
                Your beta access request has been successfully submitted. 
                You are now on our list for early access to the Financial Decision Models toolbox.
              </p>
              <p className="text-slate-600">
                We'll email you as soon as the beta version is available. 
                In the meantime, feel free to explore our available tools and resources.
              </p>
              <div className="pt-6">
                <Link to="/">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ThankYou;