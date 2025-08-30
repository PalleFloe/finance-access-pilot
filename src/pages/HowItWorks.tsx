import { useState } from "react";
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
    selfServiceFree: [
      {
        label: "TIER 1",
        badge: { text: "Available", status: "available" },
        title: "Try It Free!",
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
        isConsultation: false
      },
      {
        label: "TIER 2", 
        badge: { text: "Available", status: "available" },
        title: "Free Models & Download",
        bullets: [
          "Browser embedded Excel with download capability",
          "Simple/academic models available",
          "Interactive Excel files", 
          "Email registration required",
          "Unlimited time, Excel protected files"
        ],
        buttonText: "Go to Toolbox",
        buttonLink: "/toolbox",
        disabled: false,
        isConsultation: false
      }
    ],
    selfServicePaid: [
      {
        label: "TIER 3",
        badge: { text: "Coming Soon", status: "coming-soon" },
        title: "Model Download & Subscription",
        bullets: [
          "Online Excel embedded with download capability",
          "All models available",
          "Annual subscription fee",
          "Email registration and pay via Stripe",
          "Unlimited time, Excel protected files"
        ],
        buttonText: "Coming Soon",
        buttonLink: "#",
        disabled: true,
        isConsultation: false
      },
      {
        label: "TIER 4",
        badge: { text: "Coming Soon", status: "coming-soon" },
        title: "Model Download & Own",
        bullets: [
          "Online Excel embedded with download capability",
          "All models available",
          "One-time purchase per model",
          "Email registration and pay via Stripe",
          "Unlimited time, Excel unprotected files"
        ],
        buttonText: "Coming Soon", 
        buttonLink: "#",
        disabled: true,
        isConsultation: false
      }
    ],
    consulting: [
      {
        label: "TIER 5",
        title: "Model Customization",
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
        isConsultation: true
      },
      {
        label: "TIER 6",
        title: "Consulting Services", 
        bullets: [
          "Challenge, evaluate and improve a project or process",
          "Support modelling to be structured into insights to make better decisions",
          "Help to make proper scenarios to better manage risk and bias",
          "Process or project evaluation and guidance",
          "Service can be for a period or for specific sessions / tasks"
        ],
        buttonText: "Schedule Consultation",
        buttonLink: "/contact",
        disabled: false,
        isConsultation: true
      },
      {
        label: "TIER 7",
        title: "E2E Project Leadership",
        bullets: [
          "Role, responsibilities and time to be defined with customer"
        ],
        buttonText: "Schedule Consultation",
        buttonLink: "/contact", 
        disabled: false,
        isConsultation: true
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
  };

  const TierBox = ({ tier }: { tier: TierType }) => (
    <div className="bg-white border border-slate-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow p-5 flex flex-col relative">
      {tier.badge && (
        <div className="absolute -top-3 -right-3 z-10">
          <Badge 
            className={`${
              tier.badge.status === 'available' 
                ? 'bg-green-100 text-green-800 border-green-200' 
                : 'bg-orange-100 text-orange-800 border-orange-200'
            } shadow-sm`}
          >
            {tier.badge.status === 'available' ? (
              <CheckCircle className="w-3 h-3 mr-1" />
            ) : (
              <Clock className="w-3 h-3 mr-1" />
            )}
            {tier.badge.text}
          </Badge>
        </div>
      )}
      
      <h3 
        className="text-xl font-bold mb-3" 
        style={{ fontFamily: 'Garamond, serif', color: '#2c3e50' }}
      >
        {tier.label}: {tier.title}
      </h3>
      
      <ul className="flex-grow mb-4 space-y-1">
        {tier.bullets.map((bullet, index) => (
          <li 
            key={index} 
            className="text-base leading-relaxed flex items-start"
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
        variant={tier.disabled ? undefined : "brand-green"}
        size="lg"
        className={`w-full text-base font-semibold ${
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
      <Header />
      
      <main className="container mx-auto max-w-6xl px-6 py-16">
        {/* Page Header Section */}
        <div className="rounded-lg shadow-sm p-10 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-blue">
            How to Access Financial Decision Models
          </h1>
          
          <p className="text-lg text-slate-600 mb-8">
            Choose your path to better financial decisions
          </p>
          
          <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed mb-10">
            We offer multiple ways to access our financial models, from free online exploration to professional ownership. 
            Start with our free tiers to explore and learn, then upgrade when you need advanced features and commercial rights.
          </p>
        </div>

        {/* Section 1: Self-Service & Free Access */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-16">
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 pb-4 border-b-2 border-slate-200 text-brand-blue">
              Self-Service & Free Access
            </h2>
            <p className="text-lg text-slate-600 mb-5">
              Perfect for learning, inspiration and understanding the models
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tiers.selfServiceFree.map((tier, index) => (
              <TierBox key={index} tier={tier} />
            ))}
          </div>
        </div>

        {/* Section 2: Self-Service & Paid Access */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-16">
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 pb-4 border-b-2 border-slate-200 text-brand-blue">
              Self-Service & Paid Access
            </h2>
            <p className="text-lg text-slate-600 mb-5">
              Professional models with commercial use rights
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {tiers.selfServicePaid.map((tier, index) => (
              <TierBox key={index} tier={tier} />
            ))}
          </div>
        </div>

        {/* Section 3: Consulting & Customization Services */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-16">
          <div className="mb-5">
            <h2 className="text-3xl font-bold mb-4 pb-4 border-b-2 border-slate-200 text-brand-blue">
              Customization & Consulting Services
            </h2>
            <p className="text-lg text-slate-600 mb-5">
              Tailored solutions and expert guidance for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.consulting.map((tier, index) => (
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