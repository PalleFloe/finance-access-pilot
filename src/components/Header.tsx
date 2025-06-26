
import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Shield, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Toolbox", href: "#toolbox", current: false },
    { name: "Consulting", href: "#consulting", current: false },
    { name: "Blog", href: "#blog", current: false },
    { name: "About", href: "#about", current: false },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Financial Decision Models</h1>
              <p className="text-sm text-slate-600">Expert Financial Consulting & Tools</p>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
              <Shield className="w-3 h-3 mr-1" />
              Beta Access
            </Badge>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-slate-700 hover:text-blue-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md text-sm font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
