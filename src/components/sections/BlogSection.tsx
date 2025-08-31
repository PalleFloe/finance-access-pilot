import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Strategic Finance Best Practices for Growing Companies",
    excerpt: "Learn how to build robust financial frameworks that scale with your business growth and support strategic decision-making.",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/lovable-uploads/50c4551d-af55-4e28-a327-3aeb92945cda.png",
    featured: true
  },
  {
    id: "2",
    title: "Excel Modeling Fundamentals: Building Dynamic Financial Models",
    excerpt: "Master the art of creating flexible, scalable Excel models that adapt to changing business scenarios and requirements.",
    date: "2024-01-12",
    readTime: "12 min read",
    image: "/lovable-uploads/676443da-8f1c-498f-b5b0-617c3b12a6c0.png"
  },
  {
    id: "3",
    title: "Case Study: SaaS Startup Valuation Using Multiple Methods",
    excerpt: "A comprehensive analysis of how different valuation methodologies were applied to determine fair value for a Series A SaaS company.",
    date: "2024-01-10",
    readTime: "15 min read",
    image: "/lovable-uploads/6d231596-883b-484b-86b3-0e8476eb7ccb.png"
  },
  {
    id: "4",
    title: "Model Spotlight: The Power of Scenario Analysis",
    excerpt: "Deep dive into how scenario modeling can transform your financial planning and risk assessment capabilities.",
    date: "2024-01-08",
    readTime: "10 min read"
  },
  {
    id: "5",
    title: "Advanced DCF Modeling Techniques for Complex Businesses",
    excerpt: "Explore sophisticated approaches to discounted cash flow modeling for multi-segment and emerging market companies.",
    date: "2024-01-05",
    readTime: "14 min read",
    image: "/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png"
  },
  {
    id: "6",
    title: "Building Financial Decision Frameworks for Executive Teams",
    excerpt: "How to create structured approaches that help leadership teams make better, faster financial decisions.",
    date: "2024-01-03",
    readTime: "11 min read"
  }
];

const BlogSection = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-slate-50 to-blue-50 font-garamond">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blog-heading">
            The Blog
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sharing insights, reflections and updates for Financial Decision Models and how it can help you making better financial decisions.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                post.featured ? 'ring-2 ring-brand-green/20' : ''
              }`}
            >
              {post.image && (
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader className={post.image ? "pb-3" : "pb-3 pt-8"}>
                {post.featured && (
                  <Badge className="bg-brand-green text-white text-xs mb-3 w-fit">
                    Featured
                  </Badge>
                )}
                <CardTitle className="text-2xl font-bold text-[#326496] leading-tight group-hover:text-brand-green transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-slate-600 mb-6 leading-relaxed font-garamond">
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
      </div>
    </section>
  );
};

export default BlogSection;