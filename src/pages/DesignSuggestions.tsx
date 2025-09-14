import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import suggestion1 from "@/assets/suggestion1-icon-driven.jpg";
import suggestion2 from "@/assets/suggestion2-progressive.jpg";
import suggestion3 from "@/assets/suggestion3-results.jpg";
import homepageRedesign from "@/assets/homepage-redesign-mockup.jpg";
import homepageMinimal from "@/assets/homepage-redesign-minimal.jpg";
import homepageExact from "@/assets/homepage-exact-design.jpg";

const DesignSuggestions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Design Suggestions | Financial Decision Models</title>
      </Helmet>
      <Header />
      
      <div className="container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-blue mb-4">
            Main Page Design Suggestions
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Three approaches to make your main page less text-heavy while maintaining the same colors and professional feel.
          </p>
        </div>

        <div className="space-y-12">
          {/* Homepage Redesign - Exact Current Design DNA */}
          <Card className="shadow-lg border-2 border-rich-emerald">
            <CardHeader>
              <CardTitle className="text-3xl text-brand-blue">
                ✅ Homepage Redesign - Using Your Exact Current Design
              </CardTitle>
              <CardDescription className="text-lg">
                3 sections using identical styling to your current ServicesSection cards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={homepageExact} 
                alt="Homepage redesign using exact current website design DNA - white cards, blue headings, emerald buttons" 
                className="w-full rounded-lg shadow-md"
              />
              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-brand-blue">Exact Design DNA Match:</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• <strong>Same Cards:</strong> White background, shadows, borders exactly like ServicesSection</li>
                  <li>• <strong>Same Colors:</strong> Blue #326496 headings, slate-600 text, rich-emerald buttons</li>
                  <li>• <strong>Same Typography:</strong> Garamond font, text-4xl/text-2xl headings, text-lg descriptions</li>
                  <li>• <strong>Same Icons:</strong> Circular blue icons on left, same as current sections</li>
                  <li>• <strong>Same Layout:</strong> Left-aligned text, structured CTA rows with ArrowRight icons</li>
                </ul>
                <p className="text-sm text-slate-500 mt-4 italic">
                  This perfectly matches your existing ServicesSection design system.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Previous Suggestions */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-blue">
                Suggestion 1: Icon-Driven Cards
              </CardTitle>
              <CardDescription className="text-lg">
                Replace bullet points with intuitive icon grids - much cleaner and scannable
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={suggestion1} 
                alt="Icon-driven cards design mockup" 
                className="w-full rounded-lg shadow-md"
              />
              <p className="mt-4 text-slate-600">
                Transform bullet-heavy service cards into clean icon grids with large, meaningful icons, 
                short 2-3 word titles, and descriptions on hover.
              </p>
            </CardContent>
          </Card>

          {/* Suggestion 2 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-blue">
                Suggestion 2: Progressive Disclosure
              </CardTitle>
              <CardDescription className="text-lg">
                Shows minimal info initially, expands on demand - reduces cognitive load
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={suggestion2} 
                alt="Progressive disclosure design mockup" 
                className="w-full rounded-lg shadow-md"
              />
              <p className="mt-4 text-slate-600">
                Start with just title, icon, and one-line description. Add "Learn More" button 
                that expands to show benefits using accordion-style reveal.
              </p>
            </CardContent>
          </Card>

          {/* Suggestion 3 */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-brand-blue">
                Suggestion 3: Results-Focused
              </CardTitle>
              <CardDescription className="text-lg">
                Emphasizes concrete outcomes and social proof - more compelling and trustworthy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={suggestion3} 
                alt="Results-focused design mockup" 
                className="w-full rounded-lg shadow-md"
              />
              <p className="mt-4 text-slate-600">
                Replace descriptive bullet points with concrete outcomes like "Save 15+ hours per model", 
                add testimonial quotes and focus on what users achieve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DesignSuggestions;