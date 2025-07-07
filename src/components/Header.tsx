
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const Header = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-white shadow-sm border border-gray-200">
              <img 
                src="/lovable-uploads/676443da-8f1c-498f-b5b0-617c3b12a6c0.png" 
                alt="Financial Decision Models Logo" 
                className="w-full h-full object-cover p-1"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Financial Decision Models</h1>
            </div>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <a href="#toolbox" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Toolbox
            </a>
            <a href="#consulting" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Consulting
            </a>
            <a href="#blog" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
