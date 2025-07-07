
import { Link } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const Header = () => {
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
          
          <div className="flex items-center space-x-4">
            <button className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
