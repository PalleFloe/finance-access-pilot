import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/676443da-8f1c-498f-b5b0-617c3b12a6c0.png" 
                alt="Financial Decision Models Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h5 className="text-xl font-bold">Financial Decision Models</h5>
              <p className="text-slate-400 text-sm">Expert Financial Consulting & Tools</p>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2025 Financial Decision Models. All rights reserved.
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
  );
};

export default Footer;