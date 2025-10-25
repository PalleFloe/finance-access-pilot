import { Helmet } from "react-helmet-async";
import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { getBlogPostBySlug } from "@/data/blogPosts";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE, LINKEDIN_URL } from "@/lib/constants";
import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configure marked
marked.setOptions({ 
  breaks: true,
  gfm: true
});

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

  const formatContent = (content: string) => {
    const html = marked.parse(content) as string;
    return { __html: DOMPurify.sanitize(html) };
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
        <meta name="description" content={post.excerpt} />
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
        
        {/* Structured Data - Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": ogImage,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Person",
              "name": post.author,
              "jobTitle": post.authorTitle,
              "url": `${BASE_URL}/about`,
              "sameAs": [LINKEDIN_URL]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Financial Decision Models",
              "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/lovable-uploads/logo-large.webp`
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": fullUrl
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": BASE_URL
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": `${BASE_URL}/blog`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": fullUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <Header />

      <main className="py-12">
        <article className="container mx-auto max-w-4xl px-6">
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
          <div 
            className="prose prose-lg max-w-none font-garamond prose-headings:text-brand-blue prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-lg prose-p:text-slate-600 prose-p:mb-4 prose-p:leading-relaxed prose-img:rounded-lg prose-img:shadow-md prose-img:my-6 prose-a:text-brand-green prose-a:underline hover:prose-a:text-brand-green/80"
            dangerouslySetInnerHTML={formatContent(post.content)}
          />

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
          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to All Posts
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
