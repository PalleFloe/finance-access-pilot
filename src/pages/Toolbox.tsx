import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import ToolboxSection from "@/components/sections/ToolboxSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";
import { getBreadcrumbJson } from "@/seo/breadcrumbs";

const Toolbox = () => {
  usePageVisitTracking('page:/toolbox');
  const breadcrumbJson = getBreadcrumbJson("toolbox");
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJson)}
        </script>
        <title>Financial Decision Models Toolbox – Free Online Tools &amp; Excel Templates</title>
        <meta name="description" content="Browse all financial decision models and Excel templates, including DCF valuation, startup valuation, SaaS unit economics, scenario analysis, cost of capital and more. Preview models online and download clean, no-macro Excel files with step-by-step guidance." />
        <link rel="canonical" href={`${BASE_URL}/toolbox`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Financial Decision Models Toolbox – Free Online Tools &amp; Excel Templates" />
        <meta property="og:description" content="Browse all financial decision models and Excel templates, including DCF valuation, startup valuation, SaaS unit economics, scenario analysis, cost of capital and more. Preview models online and download clean, no-macro Excel files with step-by-step guidance." />
        <meta property="og:url" content={`${BASE_URL}/toolbox`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
      </Helmet>
      <Header />
      <ToolboxSection />
      <Footer />
    </div>
  );
};

export default Toolbox;