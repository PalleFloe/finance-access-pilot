import React from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import IndexNew from "./pages/IndexNew";
import IndexTest from "./pages/IndexTest";
import Auth from "./pages/Auth";
import Toolbox from "./pages/Toolbox";
import About from "./pages/About";
import Offerings from "./pages/Offerings";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import StartupValuations from "./pages/toolbox/StartupValuations";
import FinancialFundamentals from "./pages/toolbox/FinancialFundamentals";
import InvestmentAnalysis from "./pages/toolbox/InvestmentAnalysis";
import BusinessStrategy from "./pages/toolbox/BusinessStrategy";
import VentureCapitalMethod from "./pages/models/VentureCapitalMethod";
import SaasUnitEconomics from "./pages/models/SaasUnitEconomics";
import BerkusValuation from "./pages/models/BerkusValuation";
import FirstChicagoValuation from "./pages/models/FirstChicagoValuation";
import PerpetuityExitValuation from "./pages/models/PerpetuityExitValuation";
import DecisionAnalysis from "./pages/models/DecisionAnalysis";
import PresentValueCalculator from "./pages/models/PresentValueCalculator";
import CostOfCapitalCalculator from "./pages/models/CostOfCapitalCalculator";
import DcfModels from "./pages/models/DcfModels";
import FinancialRatioCalculator from "./pages/models/FinancialRatioCalculator";
import EarningGrowthEstimator from "./pages/models/EarningGrowthEstimator";
import ProjectScenarioModel from "./pages/models/ProjectScenarioModel";
import FlexibleYearByYearDcf from "./pages/models/FlexibleYearByYearDcf";
import StableGrowthFiniteLifeDcf from "./pages/models/StableGrowthFiniteLifeDcf";
import StableGrowthTerminalValueDcf from "./pages/models/StableGrowthTerminalValueDcf";
import ThreeStageDcf from "./pages/models/ThreeStageDcf";
import CostReductionDcf from "./pages/models/CostReductionDcf";
import BreakEvenAnalysis from "./pages/models/BreakEvenAnalysis";
import AdminAnalytics from "./pages/admin/Analytics";
import DesignSuggestions from "./pages/DesignSuggestions";

const App = () => (
  <TooltipProvider>
    <Helmet>
      <meta name="author" content="Palle Fløe Nielsen, Former Divisional CFO" />
      <meta name="description" content="Professional Excel financial models for DCF valuation, startup analysis, and investment decisions. Created by former Divisional CFO with 20+ years experience." />
      <meta property="article:author" content="Palle Fløe Nielsen" />
      <meta name="keywords" content="Excel financial models, DCF valuation, startup valuation, investment analysis" />
    </Helmet>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<IndexNew />} />
          <Route path="/home-old" element={<Index />} />
          <Route path="/home-test" element={<IndexTest />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/toolbox" element={<Toolbox />} />
          <Route path="/about" element={<About />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/how-it-works/*" element={<Navigate to="/offerings" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/toolbox/startup-valuations" element={<StartupValuations />} />
          <Route path="/toolbox/financial-fundamentals" element={<FinancialFundamentals />} />
          <Route path="/toolbox/investment-analysis" element={<InvestmentAnalysis />} />
          <Route path="/toolbox/business-strategy" element={<BusinessStrategy />} />
          <Route path="/toolbox/startup-valuations/venture-capital-method" element={<VentureCapitalMethod />} />
          <Route path="/toolbox/startup-valuations/saas-unit-economics" element={<SaasUnitEconomics />} />
          <Route path="/toolbox/startup-valuations/berkus-valuation" element={<BerkusValuation />} />
          <Route path="/toolbox/startup-valuations/first-chicago-method" element={<FirstChicagoValuation />} />
          <Route path="/toolbox/startup-valuations/perpetuity-exit-models" element={<PerpetuityExitValuation />} />
          <Route path="/toolbox/startup-valuations/decision-analysis" element={<DecisionAnalysis />} />
          <Route path="/toolbox/financial-fundamentals/present-value-calculator" element={<PresentValueCalculator />} />
          <Route path="/toolbox/financial-fundamentals/cost-of-capital-calculator" element={<CostOfCapitalCalculator />} />
          <Route path="/toolbox/financial-fundamentals/dcf-models" element={<DcfModels />} />
          <Route path="/toolbox/financial-fundamentals/financial-ratio-calculator" element={<FinancialRatioCalculator />} />
          <Route path="/toolbox/financial-fundamentals/earning-growth-estimator" element={<EarningGrowthEstimator />} />
          <Route path="/toolbox/financial-fundamentals/project-scenario-model" element={<ProjectScenarioModel />} />
          <Route path="/toolbox/investment-analysis/flexible-year-by-year-dcf-model" element={<FlexibleYearByYearDcf />} />
          <Route path="/toolbox/investment-analysis/stable-growth-finite-life-dcf-model" element={<StableGrowthFiniteLifeDcf />} />
          <Route path="/toolbox/investment-analysis/stable-growth-terminal-value-dcf-model" element={<StableGrowthTerminalValueDcf />} />
          <Route path="/toolbox/investment-analysis/three-stage-dcf-model" element={<ThreeStageDcf />} />
          <Route path="/toolbox/investment-analysis/cost-reduction-dcf-model" element={<CostReductionDcf />} />
          <Route path="/toolbox/investment-analysis/break-even-analysis-model" element={<BreakEvenAnalysis />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/design-suggestions" element={<DesignSuggestions />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;