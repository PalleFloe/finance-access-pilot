import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import ConsultationForm from "@/components/ConsultationForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const tiers = {
    row1: [
      {
        label: "TIER 1",
        title: "Just Take a Look! & Free",
        bullets: [
          "Browser embedded Excel",
          "All standard models available", 
          "View only in browser",
          "No registration required",
          "Unlimited time, no download"
        ],
        buttonText: "Go to Toolbox",
        buttonLink: "/toolbox",
        disabled: false,
        isConsultation: false,
        isModelTier: true
      },
      {
        label: "TIER 2", 
        title: "Free Models & Download",
        bullets: [
          "Download protected Excel models",
          "Simple/academic models available",
          "Standard protected models", 
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
        title: "Model Download & Own",
        bullets: [
          "Download unprotected Excel models",
          "All models available",
          "One-time purchase per model",
          "Full ownership rights",
          "Unlimited time, Excel unprotected files"
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
          "Custom model development",
          "Based on standard models or other models",
          "Based on your requirements, dialogue and feedback loops",
          "Full ownership of custom model",
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
          "Lead or Support to Project or Initiative",
          "Challenge, evaluate and improve projects or processes",
          "Support modelling to be structured into insights",
          "Help create proper scenarios to manage risk and bias",
          "Service can be for a period or for specific sessions/tasks"
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

  const TierBox = ({ tier }: { tier: TierType }) => (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-5 flex flex-col relative">
      {tier.badge && (
        <div className="absolute -top-3 -right-3 z-10">
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 shadow-sm">
            <Clock className="w-3 h-3 mr-1" />
            {tier.badge.text}
          </Badge>
        </div>
      )}
      
      <h3 
        className={`${tier.isModelTier ? 'text-3xl font-bold' : 'text-2xl font-semibold'} mb-3`}
        style={{ fontFamily: 'Garamond, serif', color: '#326496' }}
      >
        {tier.isModelTier ? `${tier.label}: ${tier.title}` : tier.title}
      </h3>
      
      <ul className="flex-grow mb-4 space-y-1">
        {tier.bullets.map((bullet, index) => (
          <li 
            key={index} 
            className={`${tier.isModelTier ? 'text-xl' : 'text-lg'} leading-relaxed flex items-start`}
            style={{ fontFamily: 'Garamond, serif', color: '#666666' }}
          >
            <span className="text-slate-400 mr-2 mt-1">•</span>
            {bullet}
          </li>
        ))}
      </ul>
      
      <Button
        onClick={tier.isConsultation ? () => setIsConsultationOpen(true) : undefined}
        asChild={!tier.disabled && !tier.isConsultation}
        disabled={tier.disabled}
        variant={tier.disabled ? undefined : "rich-emerald"}
        size="lg"
        className={`w-full ${tier.isModelTier ? 'text-3xl font-semibold' : 'text-2xl font-semibold'} ${
          tier.disabled 
            ? 'cursor-not-allowed hover:bg-[#808080]' 
            : ''
        }`}
        style={tier.disabled ? { backgroundColor: '#808080', color: 'white' } : {}}
      >
        {tier.disabled ? (
          <span>{tier.buttonText}</span>
        ) : tier.isConsultation ? (
          <span>{tier.buttonText}</span>
        ) : (
          <Link to={tier.buttonLink}>{tier.buttonText}</Link>
        )}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>How It Works - Access Financial Models | Financial Decision Models</title>
        <meta name="description" content="Access financial models through 4 tiers: Free online preview, free downloads with registration, premium subscriptions, and full ownership. Excel models designed for entrepreneurs, investors, and advisors." />
      </Helmet>
      <Header />
      
      <main className="container mx-auto max-w-6xl px-6 py-16">
        {/* Page Header Section */}
        <div className="rounded-lg shadow-sm p-10 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            Financial Decision Models offerings
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            Choose your path to better financial decisions
          </p>
          
          <p className="text-[18pt] text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
            We offer multiple ways to access and use our financial models, from free online viewing to full ownership. 
            Start with our free tiers to explore, learn and get inspired. If that is not enough for you, then you can always upgrade.
          </p>
        </div>

        {/* Row 1: Self-Service Tiers (3 cards) */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 pb-4 border-b-2 border-slate-200 text-brand-blue">
              Financial Decision Models
            </h2>
            <p className="text-lg text-slate-600 mb-5">
              Perfect for learning, inspiration and understanding the models
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.row1.map((tier, index) => (
              <TierBox key={index} tier={tier} />
            ))}
          </div>
        </div>


        {/* Row 2: Consulting Tiers (2 cards) */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-16">
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