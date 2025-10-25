import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/data/blogPosts";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', { 
    day: 'numeric',
    month: 'long', 
    year: 'numeric' 
  });
};

const NewBlogSection = () => {
  return (
    <section className="pt-6 md:pt-8 pb-12 md:pb-16">
      <div className="container mx-auto px-6">
        <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto">
          <h2 className="font-garamond text-2xl md:text-3xl font-bold text-brand-blue mb-8">
            Latest Blogs:
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="font-garamond text-xl text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500 mb-3">
                      {formatDate(post.date)}
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBlogSection;
