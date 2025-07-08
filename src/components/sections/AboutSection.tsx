import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800" variant="outline">
            About Us
          </Badge>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-lg p-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/6d231596-883b-484b-86b3-0e8476eb7ccb.png" 
                  alt="Palle Floe Nielsen" 
                  className="w-48 h-48 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-6 text-primary">
                  About Profile
                </h4>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    My name is <strong>Palle Floe Nielsen</strong> and I'm based in Copenhagen, Denmark.
                  </p>
                  <p>
                    Contact info: <a href="mailto:palle@financialdecisionmodels.com" className="text-primary hover:text-primary/90">Palle@financialdecisionmodels.com</a>
                  </p>
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;