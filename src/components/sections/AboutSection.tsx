import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import logoLarge from '@/assets/logo-large.webp';

const AboutSection = () => {
  return (
    <section id="about" className="py-12">
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
                  About Me
                </h4>
                <div className="space-y-4 text-xl text-slate-700 leading-relaxed text-left">
                  <p>
                    I'm <strong>Palle Fløe Nielsen</strong>, based in Copenhagen, Denmark. I left Novonesis (formerly Novozymes) in May 2024 after 20+ years in Business Finance leadership, including divisional CFO roles.
                  </p>
                  <p>
                    Still curious and focused after all these years. I have a strong focus on what and how we can create real value. I'm direct, open-minded, and not afraid to challenge the status quo constructively.
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue mt-6">
                    Background
                  </h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Divisional CFO in global biosolutions and medtech companies</li>
                    <li>Led Finance integration for €10B+ merger</li>
                    <li>Developed business cases for €100M+ projects and investments</li>
                    <li>Specialized in strategic financial decision-making</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue mt-8">
                    Why I Founded Financial Decision Models
                  </h3>
                  <p>
                    After decades of wrestling with complex, unintuitive models that often gave precisely the wrong results, I knew there had to be a better way.
                  </p>
                  <p>
                    <strong>The problem was clear:</strong> Business leaders need tools that are sophisticated enough to be credible, yet intuitive enough to actually use.
                  </p>
                  <p>
                    <strong>My solution:</strong> Professional models that turn complex financial choices into structured insights and better business decisions.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue mt-8">
                    What Makes These Models Different
                  </h3>
                  <p>
                    These aren't just Excel templates. Each model reflects methods I've refined over two decades, inspired by world-class academics and practitioners - simplified for clarity while maintaining analytical rigor.
                  </p>
                  <p>
                    All models are free to view online. Free to download and use after registration. Free models are Excel-protected. Full ownership versions can be purchased.
                  </p>
                  <p>
                    Your input and perspectives would be incredibly helpful to me. Whether it's on the website, the models, or any related topics.
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
                  <picture>
                    <source srcSet={logoLarge} type="image/webp" />
                    <img 
                      src="/lovable-uploads/ec2b7a6c-5992-40d7-83ed-d52f2fc5d051.png" 
                      alt="Financial Decision Models Logo" 
                      className="w-32 h-48 rounded-lg object-contain"
                      width="128"
                      height="192"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-semibold mb-6 text-brand-blue">
                    The Inspiration behind the Logo
                  </h4>
                  <div className="text-xl text-slate-700 leading-relaxed text-left">
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