
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import StartupValuations from "./pages/toolbox/StartupValuations";
import MatureBusiness from "./pages/toolbox/MatureBusiness";
import InvestmentAnalysis from "./pages/toolbox/InvestmentAnalysis";
import VentureCapitalMethod from "./pages/models/VentureCapitalMethod";
import RiskFactorSummation from "./pages/models/RiskFactorSummation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/toolbox/startup-valuations" element={<StartupValuations />} />
          <Route path="/toolbox/mature-business" element={<MatureBusiness />} />
          <Route path="/toolbox/investment-analysis" element={<InvestmentAnalysis />} />
          <Route path="/toolbox/startup-valuations/venture-capital-method" element={<VentureCapitalMethod />} />
          <Route path="/toolbox/startup-valuations/risk-factor-summation" element={<RiskFactorSummation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
