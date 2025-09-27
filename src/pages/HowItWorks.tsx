import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const HowItWorks = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  usePageVisitTracking('page:/how-it-works');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = {
    row1: [
      {
        label: "TIER 1",
        title: "Online & View",
        bullets: [
          "View models in browser",
          "All standard models available",
          "No registration required",
          "Unlimited time, free access"
        ],
        buttonText: "Go to Toolbox",
        buttonLink: "/toolbox",
        disabled: false,
        isConsultation: false,
        isModelTier: true
      },
      {
        label: "TIER 2", 
        title: "Download & Use",
        bullets: [
          "Download protected Excel models",
          "All standard models available",
          "Email registration required",
          "Unlimited time, free access"
        ],
        buttonText: "Go to Toolbox",
        buttonLink: "/toolbox",
        disabled: false,
        isConsultation: false,
        isModelTier: true
      },
      {
        label: "TIER 3",
        badge: { text: "Coming Soon", status: "coming-soon" },
        title: "Download & Own",
        bullets: [
          "Download unprotected Excel models",
          "All models available",
          "Email registration required",
          "Unlimited time, purchase"
        ],
        buttonText: "Coming Soon",
        buttonLink: "#",
        disabled: true,
        isConsultation: false,
        isModelTier: true
      }
    ],
    row2: [
      {
        label: "TIER 4",
        title: "Customized Models",
        bullets: [
          "Models on website, your existing ones or from scratch",
          "Development, supporting or challenger role",
          "Based on your requirements, dialogue and feedback loops",
          "Hourly consulting rate"
        ],
        buttonText: "Schedule Consultation",
        buttonLink: "/contact",
        disabled: false,
        isConsultation: true,
        isModelTier: false
      },
      {
        label: "TIER 5",
        title: "Consulting Services",
        bullets: [
          "Lead or support your project or initiative",
          "'Connecting the dots', expert, inspirator or challenger role",
          "Fulltime / fractional for a period, or agreed sessions / tasks",
          "After agreement"
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
    label: string;
    badge?: { text: string; status: string; };
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

    const handleClick = (e: React.MouseEvent) => {
      if (tier.isConsultation && !tier.disabled) {
        e.preventDefault();
        setIsConsultationOpen(true);
      }
    };

    return (
      <Link 
        to={tier.disabled ? "#" : getLink()} 
        onClick={handleClick}
        className={`group block ${tier.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <div 
          className="border border-slate-200 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col relative w-full max-w-full h-full" 
          style={{ backgroundColor: '#326496' }}
        >
          {tier.badge && (
            <div className="absolute -top-3 -right-3 z-20">
              <Badge className="bg-orange-500 text-white border-orange-400 shadow-lg">
                <Clock className="w-3 h-3 mr-1" />
                {tier.badge.text}
              </Badge>
            </div>
          )}
          
          <h3 
            className={`${tier.isModelTier ? 'text-xl sm:text-2xl md:text-3xl font-bold' : 'text-xl sm:text-2xl md:text-3xl font-bold'} leading-tight break-words mb-4`}
            style={{ fontFamily: 'Garamond, serif', color: '#FFB445' }}
          >
            {tier.isModelTier ? `${tier.label}: ${tier.title}` : `${tier.label}: ${tier.title}`}
          </h3>
          
          <ul className="flex-grow space-y-2">
            {tier.bullets.map((bullet, index) => (
              <li 
                key={index} 
                className={`${tier.isModelTier ? 'text-xl' : 'text-lg'} leading-relaxed flex items-start`}
                style={{ fontFamily: 'Garamond, serif', color: '#FFB445' }}
              >
                <span className="mr-2 mt-1 flex-none" style={{ color: '#FFB445' }}>•</span>
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
        <title>How It Works - Access Financial Models | Financial Decision Models</title>
        <meta name="description" content="Access financial models through 4 tiers: Free online preview, free downloads with registration, premium subscriptions, and full ownership. Excel models designed for entrepreneurs, investors, and advisors." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto py-12">
        {/* Page Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            Financial Decision Models offerings
          </h1>
          
          <p className="text-[28px] text-slate-600 mb-8">
            Choose your path to better financial decisions. Start with our free tiers to explore, learn and get inspired. <br />
            If that is not enough for you, then you can always upgrade.
          </p>
        </div>

        {/* Row 1: Self-Service Tiers (3 cards) */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 pb-4 border-b-2 border-slate-200 text-brand-blue">
              Online available Financial Decision Models
            </h2>
            <p className="text-lg text-slate-600 mb-5">
              Best-in-class models for using or finding inspiration to build or improve your own models
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.row1.map((tier, index) => (
              <TierBox key={index} tier={tier} />
            ))}
          </div>
        </div>


        {/* Row 2: Consulting Tiers (2 cards) */}
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

      <ConsultationForm 
        isOpen={isConsultationOpen} 
        onClose={() => setIsConsultationOpen(false)} 
      />
      <Footer />
    </div>
  );
};

export default HowItWorks;