import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-6">
      <div className="container mx-auto">
          <div className="text-center">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-slate-600 mb-4 md:mb-0">
                <p className="text-base">© 2025 Financial Decision Models. All rights reserved.</p>
                <p className="text-sm mt-1">Contact: <a href="mailto:Palle@financialdecisionmodels.com" className="text-primary hover:underline">Palle@financialdecisionmodels.com</a></p>
              </div>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="border-slate-300 text-slate-600">
                financialdecisionmodels.com
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;