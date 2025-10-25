import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const Blog = () => {
  usePageVisitTracking('page:/blog');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - Financial Modeling Insights | Financial Decision Models</title>
        <meta name="description" content="Financial modeling insights and expertise from Palle Floe Nielsen. Learn about startup valuation, business modeling, and financial decision-making. Practical advice for entrepreneurs and investors." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/blog" />
        
        {/* Structured Data - Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Financial Decision Models Blog",
            "description": "Financial modeling insights and expertise from Palle Floe Nielsen",
            "url": "https://www.financialdecisionmodels.com/blog",
            "author": {
              "@type": "Person",
              "name": "Palle Fløe Nielsen",
              "jobTitle": "Former Divisional CFO & Founder",
              "url": "https://www.financialdecisionmodels.com/about"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Financial Decision Models",
              "url": "https://www.financialdecisionmodels.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.financialdecisionmodels.com/lovable-uploads/logo-large.webp"
              }
            }
          })}
        </script>
      </Helmet>
      <Header />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blog;