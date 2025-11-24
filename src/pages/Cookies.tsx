import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const Cookies = () => {
  usePageVisitTracking('page:/cookies');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Cookie Policy | Financial Decision Models</title>
        <meta name="description" content="Cookie Policy for Financial Decision Models. We use one functional cookie to remember your layout preference." />
        <link rel="canonical" href={`${BASE_URL}/cookies`} />
        <meta name="robots" content="index,follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cookie Policy | Financial Decision Models" />
        <meta property="og:description" content="Cookie Policy for Financial Decision Models. We use one functional cookie to remember your layout preference." />
        <meta property="og:url" content={`${BASE_URL}/cookies`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1>Cookie Policy</h1>
          <p className="text-muted-foreground">Last updated: 25 Oct 2025</p>
          
          <p>We use one functional cookie to remember your layout preference.</p>
          
          <h2>Cookie Details</h2>
          <ul>
            <li><strong>Name:</strong> sidebar:state</li>
            <li><strong>Purpose:</strong> Remembers whether the sidebar is open or closed</li>
            <li><strong>Type:</strong> Functional (preference)</li>
            <li><strong>Duration:</strong> 7 days</li>
          </ul>
          
          <p>We do not use analytics, advertising, or cross-site tracking cookies.</p>
          
          <p>You can block or delete cookies in your browser settings; the site will still work.</p>
          
          <p><strong>Contact:</strong> <a href="mailto:palle@financialdecisionmodels.com">palle@financialdecisionmodels.com</a></p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
