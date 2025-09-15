import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const Blog = () => {
  usePageVisitTracking('page:/blog');
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Blog - Financial Modeling Insights | Financial Decision Models</title>
        <meta name="description" content="Financial modeling insights and expertise from Palle Floe Nielsen. Learn about startup valuation, business modeling, and financial decision-making. Practical advice for entrepreneurs and investors." />
      </Helmet>
      <Header />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blog;