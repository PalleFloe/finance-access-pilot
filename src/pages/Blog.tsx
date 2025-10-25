import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BASE_URL } from "@/lib/constants";

const Blog = () => {
  usePageVisitTracking('page:/blog');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - Financial Modelling Insights | Financial Decision Models</title>
        <meta name="description" content="Financial modelling insights and expertise from Palle Floe Nielsen. Learn about startup valuation, business modelling, and financial decision-making. Practical advice for entrepreneurs and investors." />
        <link rel="canonical" href={`${BASE_URL}/blog`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${BASE_URL}/blog`} />
        <meta property="og:title" content="Blog - Financial Modelling Insights | Financial Decision Models" />
        <meta property="og:description" content="Financial modelling insights and expertise from Palle Floe Nielsen. Learn about startup valuation, business modelling, and financial decision-making. Practical advice for entrepreneurs and investors." />
        <meta property="og:image" content={`${BASE_URL}/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Structured Data - Blog Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Financial Decision Models Blog",
            "description": "Financial modelling insights and expertise from Palle Floe Nielsen",
            "url": `${BASE_URL}/blog`,
            "author": {
              "@type": "Person",
              "name": "Palle Fløe Nielsen",
              "jobTitle": "Former Divisional CFO & Founder",
              "url": `${BASE_URL}/about`
            },
            "publisher": {
              "@type": "Organization",
              "name": "Financial Decision Models",
              "url": BASE_URL,
              "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/lovable-uploads/logo-large.webp`
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