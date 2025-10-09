import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const HowItWorks = () => {
  usePageVisitTracking('page:/how-it-works');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = {
    row1: [
      {
        title: "Online & View",
        bullets: [
          "View Excel models directly in your browser",
          "All models available",
          "No registration required",
          "Free and unlimited access"
        ],
        buttonText: "Go to Toolbox",
        buttonLink: "/toolbox",
        disabled: false,
        isConsultation: false,
        isModelTier: true
      },
      {
        title: "Download & Use",
        bullets: [
          "Download and use. Formulas protected, input cells are not",
          "All models available",
          "Email registration required",
          "Free and unlimited access"
        ],
        buttonText: "Go to Toolbox",
        buttonLink: "/toolbox",
        disabled: false,
        isConsultation: false,
        isModelTier: true
      }
    ],
    row2: [
      {
        title: "Customized Models",
        bullets: [
          "Adapt existing models or build from scratch for your specific needs",
          "Customize for your business model, structure, and unique drivers",
          "Full documentation and hands-on training for your team",
          "Iterative development with your input and feedback loops"
        ],
        buttonText: "Schedule Consultation",
        buttonLink: "/contact",
        disabled: false,
        isConsultation: true,
        isModelTier: false
      },
      {
        title: "Consulting Services",
        bullets: [
          "Lead or support critical financial decisions and initiatives",
          "M&A valuation, investment analysis, strategic planning",
          "Challenge assumptions, evaluate options, structure thinking",
          "From single sessions to longer engagement"
        ],
        buttonText: "Schedule Consultation",
        buttonLink: "/contact",
        disabled: false,
        isConsultation: true,
        isModelTier: false
      }
    ]
  };

  type TierType = {
    title: string;
    bullets: string[];
    buttonText: string;
    buttonLink: string;
    disabled: boolean;
    isConsultation: boolean;
    isModelTier?: boolean;
  };

  const TierBox = ({ tier }: { tier: TierType }) => {
    const getLink = () => {
      if (tier.isModelTier) {
        return "/toolbox";
      } else {
        return "/contact";
      }
    };


    return (
      <Link 
        to={tier.disabled ? "#" : getLink()} 
        className={`group block ${tier.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <div 
          className="border border-slate-200 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col relative w-full max-w-full h-full" 
          style={{ backgroundColor: '#326496' }}
        >
          <h3 
            className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight break-words mb-4"
            style={{ fontFamily: 'Garamond, serif', color: '#FFFFFF' }}
          >
            {tier.title}
          </h3>
          
          <ul className="flex-grow space-y-2">
            {tier.bullets.map((bullet, index) => (
              <li 
                key={index} 
                className={`${tier.isModelTier ? 'text-xl' : 'text-lg'} leading-relaxed flex items-start`}
                style={{ fontFamily: 'Garamond, serif', color: 'rgba(255, 255, 255, 0.75)' }}
              >
                <span className="mr-2 mt-1 flex-none" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>•</span>
                <span className="flex-1 min-w-0 break-words">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Helmet>
        <title>Offerings - Financial Decision Models & Consulting Services</title>
        <meta name="description" content="Professional financial decision models available online and for download, plus customized model development and expert consulting services for strategic financial decisions." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto py-12">
        {/* Page Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            Financial Decision Modelling & Consulting Offerings
          </h1>
          
          <p className="text-[28px] text-slate-600 max-w-6xl mx-auto leading-relaxed mb-4">
            Expert guidance backed by proven professional frameworks.
          </p>
          
          <p className="text-[28px] text-slate-600 max-w-6xl mx-auto leading-relaxed">
            Explore our free professional models to use, learn and get inspired. If you need customized solutions or strategic support for complex decisions, our consulting services are here to help.
          </p>
        </div>

        {/* Section 1: Professional Financial Decision Models */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 pb-4 border-b-2 border-slate-200 text-brand-blue">
              Professional Financial Decision Models
            </h2>
            <p className="text-lg text-slate-600 mb-5">
              Best-in-class models for using as designed or finding inspiration to build or improve your own models
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tiers.row1.map((tier, index) => (
              <TierBox key={index} tier={tier} />
            ))}
          </div>
          
          <p className="text-lg text-slate-600 mt-8">
            All models are standard safe Excel files with no macros. Hosted on Microsoft SharePoint. Formulas are protected to prevent unintended changes, while input cells are fully editable.
          </p>
        </div>


        {/* Section 2: Customization & Consulting Services */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-16 overflow-hidden">
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 pb-4 border-b-2 border-slate-200 text-brand-blue">
              Customization & Consulting Services
            </h2>
            <p className="text-lg text-slate-600 mb-5">
              Tailored solutions and expert guidance for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tiers.row2.map((tier, index) => (
              <TierBox key={index} tier={tier} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HowItWorks;