import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background" role="contentinfo">
      <div className="container mx-auto px-3 py-3">
        <div className="flex flex-col items-center gap-1">
          {/* Line 1 - Identity, Contact, LinkedIn */}
          <p className="text-sm text-muted-foreground text-center leading-relaxed">
            © {currentYear} Fløe Consulting — CVR 34912017 — Copenhagen, Denmark ·{" "}
            <a 
              href="mailto:palle@financialdecisionmodels.com"
              className="underline hover:text-foreground focus:outline-2 focus:outline-offset-2 focus:outline-current"
            >
              palle@financialdecisionmodels.com
            </a> ·{" "}
            <a 
              href="https://www.linkedin.com/in/palle-fløe-nielsen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-foreground focus:outline-2 focus:outline-offset-2 focus:outline-current"
            >
              LinkedIn: Palle Fløe Nielsen
            </a>
          </p>
          
          {/* Line 2 - Policies */}
          <p className="text-sm text-muted-foreground text-center">
            <Link 
              to="/privacy" 
              className="underline hover:text-foreground focus:outline-2 focus:outline-offset-2 focus:outline-current"
            >
              Privacy Policy
            </Link>
            {" · "}
            <Link 
              to="/terms" 
              className="underline hover:text-foreground focus:outline-2 focus:outline-offset-2 focus:outline-current"
            >
              Terms of Service
            </Link>
            {" · "}
            <Link 
              to="/cookies" 
              className="underline hover:text-foreground focus:outline-2 focus:outline-offset-2 focus:outline-current"
              title="We use one functional cookie only"
            >
              Cookie Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;