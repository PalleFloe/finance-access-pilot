import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-6 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-600 mb-4 md:mb-0">
              © 2025 Financial Decision Models. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="border-slate-300 text-slate-600">
                financialdecisionmodels.com
              </Badge>
              <Badge variant="outline" className="border-orange-300 text-orange-600">
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