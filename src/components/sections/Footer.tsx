import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-blue-50 py-6">
      <div className="container mx-auto">
          <div className="text-right">
            <p className="text-base text-slate-600">© 2025 Financial Decision Models. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;