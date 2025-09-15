
import { Link } from "react-router-dom";
import { TrendingUp, User, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, signOut } = useAuth();
  
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto py-4">
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
              <h1 className="text-2xl font-bold text-brand-blue">Financial Decision Models</h1>
            </div>
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link to="/toolbox" className="text-slate-700 hover:text-primary px-3 py-2 text-xl font-normal hover:font-medium font-garamond transition-all">
              Toolbox
            </Link>
            <Link to="/how-it-works" className="text-slate-700 hover:text-primary px-3 py-2 text-xl font-normal hover:font-medium font-garamond transition-all">
              How It Works
            </Link>
            <Link to="/blog" className="text-slate-700 hover:text-primary px-3 py-2 text-xl font-normal hover:font-medium font-garamond transition-all">
              Blog
            </Link>
            <Link to="/about" className="text-slate-700 hover:text-primary px-3 py-2 text-xl font-normal hover:font-medium font-garamond transition-all">
              About
            </Link>
            <Link to="/contact" className="text-slate-700 hover:text-primary px-3 py-2 text-xl font-normal hover:font-medium font-garamond transition-all">
              Contact
            </Link>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 font-garamond text-xl font-normal hover:font-medium">
                    <User className="w-4 h-4" />
                    Account
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={signOut} className="flex items-center gap-2 text-red-600">
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth">
                <Button variant="outline" className="font-garamond text-xl font-normal hover:font-medium">
                  Sign In
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
