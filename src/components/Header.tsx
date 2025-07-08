
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
            <div className="w-8 h-12 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" 
                alt="Financial Decision Models Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Financial Decision Models</h1>
            </div>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/toolbox" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Toolbox
            </Link>
            <Link to="/consulting" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Consulting
            </Link>
            <Link to="/blog" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
