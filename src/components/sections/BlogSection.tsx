import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 px-6 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800" variant="outline">
            Insights & Resources
          </Badge>
          <h3 className="text-3xl font-bold mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
            Financial Decision Insights
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Stay informed with the latest insights on financial decision-making, 
            best practices, and industry trends.
          </p>
        </div>

        <div className="text-center">
          <p className="text-slate-600 mb-6">Coming soon - Expert insights and practical guides</p>
          <Button variant="outline">
            Subscribe for Updates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;