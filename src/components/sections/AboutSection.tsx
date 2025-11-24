import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import logoLarge from '@/assets/logo-large.webp';
import profileImage from '@/assets/profile-palle.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto">
        <div>
          <div className="bg-white p-6 rounded-lg border border-slate-100 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-start text-left">
              <div className="flex-shrink-0">
                <img 
                  src={profileImage} 
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
                    My name is Palle Fløe Nielsen, founder of Fløe Consulting and based in Copenhagen, Denmark. I left Novonesis (formerly Novozymes) in May 2024 after more than 20 years in Business Finance leadership, including divisional CFO roles.
                  </p>
                  <p>
                    I'm still curious and focused after all these years. I have a strong focus on what and how we can create real value. I'm direct, open-minded, and not afraid to challenge the status quo constructively.
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue mt-6">
                    The Problem I'm Trying to Help Solve
                  </h3>
                  <p>
                    I have participated in many important business decisions over the years. These often became very long processes, with wasteful use of resources, and overly complex models that often gave 'precisely the wrong results'. I realized the need for better solutions.
                  </p>
                  <p>
                    Business leaders need decision tools that are sophisticated enough to be credible, yet intuitive enough to actually use.
                  </p>
                  
                  <p className="font-semibold mt-4">My background is:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Divisional CFO in global biosolutions and medtech companies</li>
                    <li>Led finance integration for a €10 billion+ merger</li>
                    <li>Developed business cases for €100 million+ projects and investments</li>
                    <li>Built and refined financial decision models for two decades</li>
                    <li>Specialized in strategic financial decision-making</li>
                  </ul>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue mt-8">
                    How I Help Businesses
                  </h3>
                  <p>
                    I help businesses navigate their most complex financial choices through expert consulting and custom financial modelling.
                  </p>
                  <p>
                    My solution: Professional decision frameworks combined with business judgment. I challenge assumptions, structure thinking, and cut through complexity to focus on what actually drives value.
                  </p>
                  <p>
                    My mission is to help turn complex financial choices into structured insights and better business decisions.
                  </p>
                  <p className="font-semibold mt-4">
                    I provide tailored solutions and expert guidance for your specific needs such as:
                  </p>
                  <p>
                    <strong>Customized Models</strong><br />
                    Adapt existing frameworks or build from scratch for your specific business model, structure, and unique drivers. Full documentation and training is included.
                  </p>
                  <p>
                    <strong>Consulting Services</strong><br />
                    Lead or support critical financial decisions - M&A valuation, investment analysis, strategic planning. Challenge assumptions, evaluate options, structure thinking. From single sessions to longer engagements.
                  </p>
                  <p>
                    Learn more about both services on the <Link to="/offerings" className="text-primary hover:underline">Offerings page</Link>.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue mt-8">
                    About the Free Models
                  </h3>
                  <p>
                    To demonstrate my methodology, I offer a range of professional financial decision models completely free:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Free to view online - no registration required.</li>
                    <li>Download and use after simple registration. Use them as designed for your analysis.</li>
                  </ul>
                  <p>
                    All models are standard safe Excel files without macros, hosted on Microsoft SharePoint. Formulas are protected to prevent accidental changes, but all input cells are fully editable.
                  </p>
                  <p>
                    If you need implementation for your specific situation - whether that's adapting these models or building something custom - that's where consulting comes in.
                  </p>
                  <p>
                    Your input and perspectives on the website, the models, or any related topics would be incredibly helpful. Please email me at <a href="mailto:palle@financialdecisionmodels.com" className="text-primary hover:underline">palle@financialdecisionmodels.com</a>.
                  </p>

                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-blue mt-8">
                    Ready to Discuss Your Situation?
                  </h3>
                  <p>
                    Whether you need help with a specific decision, want a model tailored to your business, or are looking for ongoing advisory support - let's talk.
                  </p>
                  <p>
                    Please use the <Link to="/contact" className="text-primary hover:underline">Contact page</Link> to describe your challenge. I will review your submission within 1 business day and, if there is a potential fit, suggest a 15-minute clarity call to discuss further.
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