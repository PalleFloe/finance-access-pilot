
import { Link } from "react-router-dom";
import { TrendingUp, User, LogOut, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoSmall from '@/assets/logo-small.webp';

const Header = () => {
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="flex items-center space-x-2 md:space-x-3">
            <div className="w-6 h-8 md:w-8 md:h-12 rounded-lg overflow-hidden">
              <picture>
                <source srcSet={logoSmall} type="image/webp" />
                <img 
                  src="/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" 
                  alt="Financial Decision Models Logo" 
                  className="w-full h-full object-contain"
                  width="32"
                  height="48"
                  loading="eager"
                />
              </picture>
            </div>
            <div>
              <h1 className="text-lg md:text-2xl font-bold text-brand-blue">FinancialDecisionModels.com</h1>
            </div>
          </Link>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
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

        {/* Mobile navigation menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/toolbox" 
                className="text-slate-700 hover:text-primary px-4 py-3 text-lg font-garamond transition-all hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                Toolbox
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-slate-700 hover:text-primary px-4 py-3 text-lg font-garamond transition-all hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                How It Works
              </Link>
              <Link 
                to="/blog" 
                className="text-slate-700 hover:text-primary px-4 py-3 text-lg font-garamond transition-all hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <Link 
                to="/about" 
                className="text-slate-700 hover:text-primary px-4 py-3 text-lg font-garamond transition-all hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-slate-700 hover:text-primary px-4 py-3 text-lg font-garamond transition-all hover:bg-gray-50 rounded-md"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
              
              <div className="pt-2 border-t border-slate-100 mt-2">
                {user ? (
                  <button
                    onClick={() => {
                      signOut();
                      closeMobileMenu();
                    }}
                    className="flex items-center gap-2 text-red-600 px-4 py-3 text-lg font-garamond w-full text-left hover:bg-gray-50 rounded-md"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                ) : (
                  <Link 
                    to="/auth"
                    className="block px-4 py-3 text-lg font-garamond text-slate-700 hover:text-primary hover:bg-gray-50 rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
