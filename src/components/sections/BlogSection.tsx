import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

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
    <section className="py-16 bg-gray-50 font-garamond">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blog-heading">
            The Blog
          </h1>
          <p className="text-[28px] text-slate-600 max-w-6xl mx-auto leading-relaxed">
            Sharing insights, reflections and updates for Financial Decision Models and how it can help you making better financial decisions.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.slug}`}
            >
              <Card className={`group hover:shadow-lg transition-all duration-300 cursor-pointer h-full ${
                post.featured ? 'ring-2 ring-brand-green/20' : ''
              }`}>
                {post.image && (
                  <div>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {post.id === "4" && (
                      <p className="text-xs text-slate-500 mt-2 px-6">
                        Photos used with permission. ©2025 The LEGO Group.
                      </p>
                    )}
                  </div>
                )}
                <CardHeader className={post.image ? "pb-3" : "pb-3 pt-8"}>
                  {post.featured && (
                    <Badge className="bg-brand-green text-white text-xs mb-3 w-fit">
                      Featured
                    </Badge>
                  )}
                  <CardTitle className="text-2xl font-bold text-brand-blue leading-tight">
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
                    <div className="flex items-center gap-2 text-brand-green">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;