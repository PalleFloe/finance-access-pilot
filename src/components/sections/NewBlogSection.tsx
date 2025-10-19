import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title: "I left Novonesis 169 days ago - Here's what I learned",
    date: "October 16, 2025",
    excerpt: "Reflections on starting Financial Decision Models after two decades in corporate finance.",
    slug: "/blog"
  },
  {
    id: 2,
    title: "Stop Trying to Predict the Future. Structure Your Decisions Instead",
    date: "September 12, 2024",
    excerpt: "Why decision quality matters more than forecast accuracy in business planning.",
    slug: "/blog"
  },
  {
    id: 3,
    title: "Moved to BloxHub",
    date: "September 1, 2025",
    excerpt: "Joining Copenhagen's innovation hub for sustainable urban development and circular economy.",
    slug: "/blog"
  }
];

const NewBlogSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-garamond text-2xl md:text-3xl font-bold text-brand-blue mb-8">
            Latest Blogs:
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} to={post.slug} className="group">
                <Card className="h-full hover:shadow-lg transition-shadow duration-200">
                  <CardHeader>
                    <CardTitle className="font-garamond text-xl text-brand-blue group-hover:text-brand-blue/80 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-500 mb-3">
                      {post.date}
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
    </section>
  );
};

export default NewBlogSection;
