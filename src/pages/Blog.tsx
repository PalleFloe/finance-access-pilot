import Header from "@/components/Header";
import BlogSection from "@/components/sections/BlogSection";
import Footer from "@/components/sections/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Blog;