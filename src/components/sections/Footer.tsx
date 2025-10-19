import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-3">
          
          {/* Cookie notice */}
          <p className="text-xs text-muted-foreground text-center">
            We use one functional cookie to remember your sidebar preference. No analytics, no ads.{" "}
            <Link to="/cookies" className="underline hover:text-foreground">Cookie Policy</Link>
          </p>
          
          {/* Line 1 - Identity */}
          <p className="text-xs text-muted-foreground text-center">
            © 2025 Financial Decision Modelling & Consulting — CVR 34912017 — Copenhagen, Denmark
          </p>
          
          {/* Line 2 - Contact & social */}
          <p className="text-xs text-muted-foreground text-center">
            Contact: <a href="mailto:palle@financialdecisionmodels.com" className="underline hover:text-foreground">palle@financialdecisionmodels.com</a> — LinkedIn: <a href="https://www.linkedin.com/in/palle-fløe-nielsen/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">Palle Fløe Nielsen</a>
          </p>
          
          {/* Line 3 - Policies */}
          <p className="text-xs text-muted-foreground/70 text-center">
            <Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link>
            {" · "}
            <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
            {" · "}
            <Link to="/cookies" className="hover:text-foreground">Cookie Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;