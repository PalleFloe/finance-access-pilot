import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import suggestion1 from "@/assets/suggestion1-icon-driven.jpg";
import suggestion2 from "@/assets/suggestion2-progressive.jpg";
import suggestion3 from "@/assets/suggestion3-results.jpg";
import homepageRedesign from "@/assets/homepage-redesign-mockup.jpg";

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
          {/* Homepage Redesign Mockup */}
          <Card className="shadow-lg border-2 border-brand-blue">
            <CardHeader>
              <CardTitle className="text-3xl text-brand-blue">
                🎯 Complete Homepage Redesign Draft
              </CardTitle>
              <CardDescription className="text-lg">
                Comprehensive redesign with 3 clear sections, scaled typography, and structured CTA layout
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={homepageRedesign} 
                alt="Complete homepage redesign mockup with 3 sections: Model Categories, Consulting Services, and Offerings" 
                className="w-full rounded-lg shadow-md"
              />
              <div className="mt-6 space-y-3">
                <h4 className="font-semibold text-brand-blue">Key Features:</h4>
                <ul className="text-slate-600 space-y-2">
                  <li>• <strong>Section 1:</strong> Model Categories with 4 bordered category boxes and left/right CTA alignment</li>
                  <li>• <strong>Section 2:</strong> Consulting Services with streamlined messaging</li>
                  <li>• <strong>Section 3:</strong> Offerings overview with clear navigation</li>
                  <li>• <strong>Typography:</strong> Scaled up fonts (28-32px headings, 20-24px subheadings)</li>
                  <li>• <strong>Layout:</strong> Clean sections with proper spacing and CTA structure</li>
                </ul>
                <p className="text-sm text-slate-500 mt-4 italic">
                  This draft addresses your complete requirements. Please review before implementation.
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