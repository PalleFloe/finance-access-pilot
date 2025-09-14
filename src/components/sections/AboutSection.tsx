import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-8">
      <div className="container mx-auto">
        <div>
          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start text-left">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/98787598-c310-4cf2-bca4-9f265a379e60.png" 
                  alt="Palle Floe Nielsen" 
                  className="w-32 h-48 rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-blue">
                  About Profile
                </h4>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed text-left">
                  <p>
                    My name is <strong>Palle Fløe Nielsen</strong> and I'm based in Copenhagen, Denmark.
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
                  <h2 className="text-lg font-bold text-primary mb-4 font-garamond">
                    Why I founded Financial Decision Models
                  </h2>
                  <p className="font-garamond">
                    After two decades of wrestling with complex, unintuitive models that often gave precisely the wrong results, I knew there had to be a better way.
                  </p>
                  <p className="font-garamond">
                    <strong>The problem was clear:</strong> Most financial models are either oversimplified templates or overly complex black boxes that obscure rather than enable decision-making. Business leaders need tools that are sophisticated enough to be credible, yet intuitive enough to actually use.
                  </p>
                  <p className="font-garamond">
                    <strong>My solution:</strong> Create a best-in-class, business-minded Financial Decision Model toolbox that turns complex financial choices into structured insights and better business decisions.
                  </p>
                  <p className="font-garamond">
                    <strong>But it's not just about the tools.</strong> I also want to inspire and help you make better financial models yourself. That's why I've made the models widely available - some freely viewable in your browser, others available as downloads.
                  </p>
                  <p className="font-garamond">
                    <strong>The balance of access and protection</strong> is something I continue to refine. For now, check out the <Link to="/how-it-works" className="text-primary hover:underline font-medium">"How It Works"</Link> page to see the current approach.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Logo section */}
          <div className="mt-10">
            <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center text-left">
                <div className="flex-shrink-0">
                  <img 
                    src="/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" 
                    alt="Financial Decision Models Logo" 
                    className="w-32 h-48 rounded-lg object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-blue">
                    The Inspiration behind the Logo
                  </h4>
                  <div className="text-lg text-slate-700 leading-relaxed text-left">
                    <p>
                      The logo is inspired by the Knud Rasmussen statue north of Copenhagen, where the explorer stands tall, gazing toward distant horizons. Knud Rasmussen was a Greenlandic-Danish anthropologist who famously explored the Arctic and studied Inuit cultures. The statue is a monument to exploration, understanding, and bridge-building to unknown geographical and cultural territories.
                    </p>
                  </div>
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