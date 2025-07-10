
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Toolbox from "./pages/Toolbox";
import About from "./pages/About";
import Consulting from "./pages/Consulting";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import StartupValuations from "./pages/toolbox/StartupValuations";
import MatureBusiness from "./pages/toolbox/MatureBusiness";
import InvestmentAnalysis from "./pages/toolbox/InvestmentAnalysis";
import VentureCapitalMethod from "./pages/models/VentureCapitalMethod";
import RiskFactorSummation from "./pages/models/RiskFactorSummation";
import SaasUnitEconomics from "./pages/models/SaasUnitEconomics";
import BerkusValuation from "./pages/models/BerkusValuation";
import FirstChicagoValuation from "./pages/models/FirstChicagoValuation";
import PerpetuityExitValuation from "./pages/models/PerpetuityExitValuation";
import DecisionAnalysis from "./pages/models/DecisionAnalysis";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/toolbox" element={<Toolbox />} />
          <Route path="/about" element={<About />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/toolbox/startup-valuations" element={<StartupValuations />} />
          <Route path="/toolbox/mature-business" element={<MatureBusiness />} />
          <Route path="/toolbox/investment-analysis" element={<InvestmentAnalysis />} />
          <Route path="/toolbox/startup-valuations/venture-capital-method" element={<VentureCapitalMethod />} />
          <Route path="/toolbox/startup-valuations/risk-factor-summation" element={<RiskFactorSummation />} />
          <Route path="/toolbox/startup-valuations/saas-unit-economics" element={<SaasUnitEconomics />} />
          <Route path="/toolbox/startup-valuations/berkus-valuation" element={<BerkusValuation />} />
          <Route path="/toolbox/startup-valuations/first-chicago-method" element={<FirstChicagoValuation />} />
          <Route path="/toolbox/startup-valuations/perpetuity-exit-models" element={<PerpetuityExitValuation />} />
          <Route path="/toolbox/startup-valuations/decision-analysis" element={<DecisionAnalysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
