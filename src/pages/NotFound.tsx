import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>404 - Page Not Found | Financial Decision Models</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Financial Decision Models homepage for professional financial modelling tools and consulting services." />
        <link rel="canonical" href={`${BASE_URL}/`} />
        <meta name="robots" content="noindex,nofollow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="404 - Page Not Found | Financial Decision Models" />
        <meta property="og:description" content="The page you're looking for doesn't exist. Return to Financial Decision Models homepage for professional financial modelling tools and consulting services." />
        <meta property="og:url" content={`${BASE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
      </Helmet>

      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold text-brand-blue mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Page Not Found</h2>
          <p className="text-xl text-slate-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <a 
            href="/" 
            className="inline-block bg-brand-blue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-blue/90 transition-colors"
          >
            Return to Homepage
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
