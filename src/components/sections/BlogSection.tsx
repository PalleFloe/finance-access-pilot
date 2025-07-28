import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Strategic Finance Best Practices for Growing Companies",
    excerpt: "Learn how to build robust financial frameworks that scale with your business growth and support strategic decision-making.",
    category: "Strategic Finance",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/lovable-uploads/50c4551d-af55-4e28-a327-3aeb92945cda.png",
    featured: true
  },
  {
    id: "2",
    title: "Excel Modeling Fundamentals: Building Dynamic Financial Models",
    excerpt: "Master the art of creating flexible, scalable Excel models that adapt to changing business scenarios and requirements.",
    category: "Excel Modeling",
    date: "2024-01-12",
    readTime: "12 min read",
    image: "/lovable-uploads/676443da-8f1c-498f-b5b0-617c3b12a6c0.png"
  },
  {
    id: "3",
    title: "Case Study: SaaS Startup Valuation Using Multiple Methods",
    excerpt: "A comprehensive analysis of how different valuation methodologies were applied to determine fair value for a Series A SaaS company.",
    category: "Case Studies",
    date: "2024-01-10",
    readTime: "15 min read",
    image: "/lovable-uploads/6d231596-883b-484b-86b3-0e8476eb7ccb.png"
  },
  {
    id: "4",
    title: "Model Spotlight: The Power of Scenario Analysis",
    excerpt: "Deep dive into how scenario modeling can transform your financial planning and risk assessment capabilities.",
    category: "Model Spotlights",
    date: "2024-01-08",
    readTime: "10 min read",
    image: "/lovable-uploads/98787598-c310-4cf2-bca4-9f265a379e60.png"
  },
  {
    id: "5",
    title: "Advanced DCF Modeling Techniques for Complex Businesses",
    excerpt: "Explore sophisticated approaches to discounted cash flow modeling for multi-segment and emerging market companies.",
    category: "Excel Modeling",
    date: "2024-01-05",
    readTime: "14 min read",
    image: "/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png"
  },
  {
    id: "6",
    title: "Building Financial Decision Frameworks for Executive Teams",
    excerpt: "How to create structured approaches that help leadership teams make better, faster financial decisions.",
    category: "Strategic Finance",
    date: "2024-01-03",
    readTime: "11 min read",
    image: "/lovable-uploads/50c4551d-af55-4e28-a327-3aeb92945cda.png"
  }
];

const categories = ["All Posts", "Strategic Finance", "Excel Modeling", "Case Studies", "Model Spotlights"];

const BlogSection = () => {
  const [email, setEmail] = useState("");

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const filterPosts = (category: string) => {
    if (category === "All Posts") return blogPosts;
    return blogPosts.filter(post => post.category === category);
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800" variant="outline">
            Insights & Resources
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blog-heading">
            Financial Decision Insights
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert insights on financial decision-making, 
            best practices, and industry trends to drive your business forward.
          </p>
        </div>

        {/* Category Filters */}
        <Tabs defaultValue="All Posts" className="mb-16">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full max-w-4xl mx-auto mb-12">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="text-sm font-medium"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filterPosts(category).map((post) => (
                  <Card 
                    key={post.id} 
                    className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                      post.featured ? 'ring-2 ring-brand-green/20' : ''
                    }`}
                  >
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge className="bg-brand-green text-white text-xs">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl font-bold text-blog-heading leading-tight group-hover:text-brand-green transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Newsletter Signup Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-blog-heading mb-4">
              Stay Ahead with Expert Insights
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Get the latest financial decision-making insights, model updates, and industry best practices 
              delivered directly to your inbox. Join over 2,500 finance professionals.
            </p>
          </div>
          
          <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button 
              type="submit" 
              variant="brand-green"
              className="sm:w-auto"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-sm text-slate-500 text-center mt-4">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;