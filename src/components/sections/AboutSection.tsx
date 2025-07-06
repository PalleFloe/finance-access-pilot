import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800" variant="outline">
            About Us
          </Badge>
          <h3 className="text-3xl font-bold mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
            Our Mission
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
            Empower businesses facing complex financial choices to make better decisions with a best-in-class, 
            intuitive, business-minded Financial Decision Model toolbox and expert consulting services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-lg p-8">
            <h4 className="text-xl font-semibold mb-6" style={{ color: 'rgb(50, 100, 150)' }}>
              About Profile
            </h4>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                <strong>I'm a finance leader, still curious and focused after all those years;</strong> Whether the challenges have 
                been creating performance management capabilities, business improvements and turnarounds, M&A 
                integrations and strategic initiatives - always with strong focus on what and how we can make a real 
                difference.
              </p>
              <p>
                <strong>With a strong financial toolbox and business acumen,</strong> I connect and de-risk value 
                drivers, identify opportunities, find solutions with a <strong>laser focus on value creation</strong>, and consistently 
                champion a profitable growth mindset across organizations.
              </p>
              <p>
                <strong>I'm direct and open-minded, not afraid to challenge status quo constructively.</strong> I give people the 
                chance to shine rather than hide them in my shadow.
              </p>
              <p>
                <strong>Now I'm building FinancialDecisionModels.com</strong> because after two decades of wrestling with 
                complex, unintuitive models that often gave precisely the wrong results, I know there's a better way…
              </p>
              <p>
                <strong>The purpose is to empower businesses facing complex financial choices to make better 
                decisions</strong> with a best-in-class, intuitive, business-minded Financial Decision Model toolbox and expert consulting 
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;