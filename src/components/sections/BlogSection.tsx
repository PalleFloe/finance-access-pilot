import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image?: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "4",
    title: "If play is intelligence, then Excel might be the 2nd best toy ever made",
    excerpt: "Rumours of Excel's death have been greatly exaggerated for many years. Recently, it turned 40.",
    content: `When our gut senses, the calculations on the back of an envelope, or co-creation at the whiteboard fall short — Excel can do that.

Excel helps us give structure to ideas, understand our choices, and make better decisions.

Beneath its endless grid of blank cells, rules, connections, and formulas lies something much more intriguing:

Every blank spreadsheet is a playground to create.

**To me, Excel is like LEGO for adults**

Both are modular systems built on simple, repeatable rules — bricks or cells.

You can build something from nothing.

Both invite creativity, curiosity, thoughtfulness, persistence, and purpose.

Both reward imagination.

Both are infinite.

That's why both require play — and both develop it.

**Play is intelligence**

It's how we learn, explore, build, test, and adapt.

It's what our minds do when they're fully engaged in creating something new.

In both, the act of playing — or building — is the act of thinking.

**…And what about AI?**

Play is intelligence — the act of exploring, testing, and creating new meaning.

AI often produces finished answers.

It can imitate the outcomes of play, but not the process.

Excel is a playing and thinking environment — one that AI can support and accelerate, but never truly replace.

**Exploring creativity, play, and open-ended building in Excel vs LEGO**

**My Top 10:**

1️⃣ **Both Are Modular Worlds** – Simple units combine into limitless creations.

2️⃣ **Both Reward Curiosity** – The more you explore, the more possibilities appear.

3️⃣ **Both Thrive on Constraints** – Rules don't restrict creativity — they enable it.

4️⃣ **Both Turn Logic into Art** – Patterns, symmetry, and design meet purpose.

5️⃣ **Both Encourage Iteration** – Build, test, fail, and rebuild — endlessly.

6️⃣ **Both Bridge Play and Productivity** – Tinkering often turns into real-world value.

7️⃣ **Both Transform Work Into Play** – Solving problems feels as joyful as playtime.

8️⃣ **Both Build Thinking Skills** – Each creation strengthens logic and imagination.

9️⃣ **Both Create Shared Languages** – Bricks or cells, both connect creative communities.

🔟 **Both Mirror Human Intelligence** – They reflect how our minds build, test, and imagine.

Dear intelligent person — what do you think?`,
    date: "2025-10-20",
    readTime: "4 min read",
    image: "/lovable-uploads/lego-post.jpg",
    featured: true
  },
  {
    id: "2",
    title: "I left Novonesis 169 days ago.",
    excerpt: "Since then, I founded Financial Decision Modelling & Consulting",
    content: `After a super fun goodbye party at Absalon and an emotional farewell reception, I knew exactly what I wanted to do.

I really loved working at Novozymes and also enjoyed my time at Novonesis. In a good corporate life, you get structure, responsibilities, support, challenges, development, intellectual stimulation, amazing colleagues, social life, safety, and a monthly salary.

I miss some of that. But I dreamed about something else.

I sometimes defined myself as a "creative finance guy" - it almost sounds criminal. Over the years, I've had (according to myself😄) so many amazing business ideas. Some of them were actually used and created value in my corporate roles.

For the first time ever, I wanted to explore opportunities outside the corporate environment - a place where I could apply my own ideas and competencies.

The 'better' my ideas were, the further away they got from my fields of expertise. So instead, I decided to focus on an area I know well - one where I understand the needs and can apply my (hopefully) valuable competencies.

For most of my work life, I've worked in Business Finance, where a core mission is to drive value creation by supporting, enabling, and partnering with decision-makers.

Over 20+ years, I've noticed that decisions mainly get made in four ways:

- Most day-to-day decisions are based on gut feeling and experience
- Many are almost obvious from factual reporting, BI, or data
- Some are just given by external factors
- And then there are the infrequent strategic decisions or major investments, where gut feelings fall short, facts can't predict the future, and structured analysis and decision-making become critical

That fourth category. That's where I saw a real need and where I believe I can add value. That is why I founded Financial Decision Models with a mission to "Help businesses transform complex financial choices into structured insights and better decisions."

**So what have I done these last 169 days?**

- Day 1, I started with my laptop, Claude Anthropic, and a mission
- Worked more than ever and I love it
- Found an amazing workplace in wonderful Copenhagen at BloxHub
- Got nerdy, focused, and learned new skills
- Created, changed, trashed ideas, and still stayed on course
- Had a stroke and got knocked out. Came back 110%
- Became more healthy and fitter than ever😊
- Received great feedback - listened, adjusted, parked or ignored it

Now I'm getting ready to launch Financial Decision Models.

It's not perfect. It's not finished. And hopefully - it never will be.

👉 If you're curious, take a look: https://www.financialdecisionmodels.com

💬 I'd love your input at feedback@financialdecisionmodels.com

This post is intended as a personal reflection on the past 169 days rather than a formal launch announcement. There will be more posts about Financial Decision Models specifically, so stay tuned.`,
    date: "2025-10-16",
    readTime: "3 min read",
    image: "/lovable-uploads/169_days_post.jpeg",
    featured: false
  },
  {
    id: "1",
    title: "Stop Trying to Predict the Future. Structure Your Decisions Instead",
    excerpt: "My goal is to help transform complex financial choices into structured insights and better business decisions.",
    content: `After two decades of wrestling with complex, unintuitive models that often gave precisely the wrong results, I know there's a better way.

**So, Why Are We Still Struggling?**

Financial decision models should help us make decisions. But too often, they don't. It shouldn't be rocket science, but there are real challenges:

Models lack user-friendly and consistent design

Intuitive logic is missing

Complexity makes them time-consuming to use or even understand

Scenario and sensitivity analysis becomes cumbersome rather than insightful

We keep trying to forecast the future with precision based on defined assumptions. But we can't predict the future – we can only structure our thinking about it.

**It's Not Just the Models**

Forecast bias and systematic optimism affect most business projections. We're overly optimistic, too risk-averse, or unconsciously aligning with management expectations.

While models cannot change inherent human biases, they can highlight these biases and provide a more structured approach to decision-making.

**The Solution: Well-Structured, Intuitive Tools**

Financial Decision Models provides a comprehensive toolbox with consistent design DNA:

Clear separation between assumptions and results

Logical flows you can follow

Built-in sensitivity analysis

"Enough is better than too many data points" mindset

Decision makers need credible tools that are intuitive, facilitating understanding, discussion, and agreement on assumptions and estimates to make good decisions.

**The Toolbox is Expanding**

Currently available:

Six Startup Valuation models for early-stage business valuation and investment decisions

Six Financial Fundamentals models for education and inspiration

Four Investment Analysis models for Investment Evaluation and Decision-Making

More models are coming based on what users need most.

**How It Works**

The website offers multiple ways to access the models – from free browser-based viewing to downloadable versions of the models.

Questions about implementing these approaches in your specific situation? Ideas for models that would help your decisions?

Drop me a line: palle@financialdecisionmodels.com`,
    date: "2025-10-13",
    readTime: "5 min read",
    featured: false
  },
  {
    id: "3",
    title: "Moved to BloxHub",
    excerpt: "A cool place! And always close to a swim in the harbour.",
    content: `From 1st of September, I'm moving in at BloxHub down by the harbour in Copenhagen. Unofficially, I'm already moved in. Awesome atmosphere, free ice-cold bubble water and a splendid view from my corner seat.

I've also done the 1st or 7th beta version of financialdecisionmodels.com. At least enough 'beta' that it is not completely embarrassing (I hope) to share it with others.

**Pictures:** 1st picture is me arriving last week with a smile and my IT equipment. 2nd picture is the view from my seat. Both Langebro and Lille Langebro bridges are up to give a pass through for someone who probably have been successful making financial choices.

![Harbor view from BloxHub](/lovable-uploads/8e3d29a3-8a98-41d8-abfb-9a4289a78abc.png)`,
    date: "2025-09-01",
    readTime: "1 min read",
    image: "/lovable-uploads/d2201eed-63ea-4d50-85fd-ddc012795f68.png",
    featured: false
  }
];

const BlogSection = () => {
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
  
  const togglePost = (postId: string) => {
    const newExpandedPosts = new Set(expandedPosts);
    if (newExpandedPosts.has(postId)) {
      newExpandedPosts.delete(postId);
    } else {
      newExpandedPosts.add(postId);
    }
    setExpandedPosts(newExpandedPosts);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        // Handle bold headers
        return (
          <h3 key={index} className="text-xl font-bold text-brand-blue mb-4 mt-6">
            {paragraph.slice(2, -2)}
          </h3>
        );
      }
      // Handle markdown images
      if (paragraph.startsWith('![') && paragraph.includes('](')) {
        const match = paragraph.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          const [, altText, src] = match;
          return (
            <div key={index} className="my-6">
              <img 
                src={src} 
                alt={altText}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          );
        }
      }
      return (
        <p key={index} className="text-lg text-slate-600 mb-4 leading-relaxed font-garamond">
          {paragraph}
        </p>
      );
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
          {blogPosts.map((post) => {
            const isExpanded = expandedPosts.has(post.id);
            
            return (
              <Card 
                key={post.id} 
                onClick={() => togglePost(post.id)}
                className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
                  post.featured ? 'ring-2 ring-brand-green/20' : ''
                } ${isExpanded ? 'md:col-span-2' : ''}`}
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
                  <CardTitle className="text-2xl font-bold text-brand-blue leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-slate-600 mb-6 leading-relaxed font-garamond">
                    {post.excerpt}
                  </CardDescription>
                  
                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="prose prose-lg max-w-none">
                        {formatContent(post.content)}
                      </div>
                    </div>
                  )}
                  
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
                      <span className="text-sm font-medium">
                        {isExpanded ? 'Collapse' : 'Read More'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                      ) : (
                        <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;