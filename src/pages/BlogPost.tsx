import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { getBlogPostBySlug } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE, LINKEDIN_URL } from "@/lib/constants";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  
  usePageVisitTracking(`page:/blog/${slug}`);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: 'numeric',
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Restore previous hand-rolled formatting/typography renderer
  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      // Bold line used as section heading: **Heading**
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h2 key={index} className="text-2xl font-bold text-brand-blue mb-4 mt-8">
            {paragraph.slice(2, -2)}
          </h2>
        );
      }

      // Simple Markdown image ![alt](src)
      if (paragraph.startsWith('![') && paragraph.includes('](')) {
        const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, altText, src] = match;
          return (
            <div key={index} className="my-6">
              <img 
                src={src} 
                alt={altText || `${post.title} — Financial Decision Models`}
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          );
        }
      }

      // Default paragraph
      return (
        <p key={index} className="text-lg text-slate-600 mb-4 leading-relaxed">
          {paragraph}
        </p>
      );
    });
  };

  const fullUrl = `${BASE_URL}/blog/${post.slug}`;
  const ogImage = post.ogImage 
    ? `${BASE_URL}${post.ogImage}` 
    : post.image 
    ? `${BASE_URL}${post.image}` 
    : DEFAULT_OG_IMAGE;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} | Financial Decision Models Blog</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={fullUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:alt" content={`${post.title} — Financial Decision Models`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        
        {/* Structured Data - BlogPosting Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": fullUrl
            },
            "headline": post.title,
            "description": post.metaDescription || post.excerpt,
            "image": post.image 
              ? [`${BASE_URL}${post.image}`]
              : [`${BASE_URL}/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png`],
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": `${BASE_URL}/about`
            },
            "publisher": {
              "@type": "Organization",
              "@id": `${BASE_URL}/#organization`
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "articleSection": "Blog",
            "url": fullUrl
          })}
        </script>
      </Helmet>

      <Header />

      <main className="py-12">
        <article className="container mx-auto max-w-4xl px-6">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]}
          />
          
          {/* Back to Blog Button */}
          <Link to="/blog">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Featured Image */}
          {post.image && (
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={`${post.title} — Financial Decision Models`}
                loading="lazy"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              {post.id === "4" && (
                <p className="text-xs text-slate-500 mt-2">
                  Photos used with permission. ©2025 The LEGO Group.
                </p>
              )}
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 font-garamond">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm text-slate-600 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="border-l-4 border-brand-green pl-4 py-2">
              <p className="text-xl text-slate-700 italic font-garamond">
                {post.excerpt}
              </p>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none font-garamond">
            {formatContent(post.content)}
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-brand-blue mb-1">
                  {post.author}
                </h3>
                <p className="text-slate-600 mb-3">{post.authorTitle}</p>
                <Link to="/about">
                  <Button variant="outline" size="sm">
                    Learn More About Palle
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12">
            <Link to="/blog">
              <Button variant="ghost" className="-ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
