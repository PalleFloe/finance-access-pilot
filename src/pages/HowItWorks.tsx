import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const tiers = {
    selfServiceFree: [
      {
        label: "TIER 1",
        badge: { text: "Available", status: "available" },
        title: "Try It Free!",
        bullets: [
          "Online Excel embedded",
          "All standard models available", 
          "View and interact in browser",
          "No registration required",
          "Unlimited time, no download"
        ],
        buttonText: "Go to Toolbox",
        buttonLink: "/toolbox",
        disabled: false
      },
      {
        label: "TIER 2", 
        badge: { text: "Available", status: "available" },
        title: "Free Models & Download",
        bullets: [
          "Download Excel models",
          "Simple/academic models available",
          "Protected Excel files", 
          "Email registration required",
          "Unlimited time, inspirational/educational use"
        ],
        buttonText: "Go to Toolbox",
        buttonLink: "/toolbox",
        disabled: false
      }
    ],
    selfServicePaid: [
      {
        label: "TIER 3",
        badge: { text: "Coming Soon", status: "coming-soon" },
        title: "Model Download & Subscription",
        bullets: [
          "Full model access & download",
          "Commercial use rights included",
          "Monthly/annual subscription options",
          "Premium model library access",
          "Email support included"
        ],
        buttonText: "Coming Soon",
        buttonLink: "#",
        disabled: true
      },
      {
        label: "TIER 4",
        badge: { text: "Coming Soon", status: "coming-soon" },
        title: "Model Download & Own",
        bullets: [
          "Perpetual license ownership",
          "Full commercial use rights",
          "One-time purchase per model",
          "Lifetime access to purchased models",
          "Priority email support"
        ],
        buttonText: "Coming Soon", 
        buttonLink: "#",
        disabled: true
      }
    ],
    consulting: [
      {
        label: "TIER 5",
        badge: { text: "Coming Soon", status: "coming-soon" },
        title: "Model Customization",
        bullets: [
          "Tailored model modifications",
          "Industry-specific adaptations",
          "Custom branding & styling",
          "Integration consulting",
          "Dedicated project manager"
        ],
        buttonText: "Schedule Consultation",
        buttonLink: "/contact",
        disabled: false
      },
      {
        label: "TIER 6",
        badge: { text: "Coming Soon", status: "coming-soon" },
        title: "Support Services", 
        bullets: [
          "Model training & workshops",
          "Implementation guidance",
          "Best practices consulting",
          "Ongoing support packages",
          "Expert advisory sessions"
        ],
        buttonText: "Schedule Consultation",
        buttonLink: "/contact",
        disabled: false
      },
      {
        label: "TIER 7",
        badge: { text: "Coming Soon", status: "coming-soon" },
        title: "E2E Project Leadership",
        bullets: [
          "Complete project management",
          "End-to-end solution delivery",
          "Cross-functional team coordination",
          "Strategic planning & execution",
          "Executive reporting & insights"
        ],
        buttonText: "Schedule Consultation",
        buttonLink: "/contact", 
        disabled: false
      }
    ]
  };

  const TierBox = ({ tier }: { tier: typeof tiers.selfServiceFree[0] }) => (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm p-6 min-h-[380px] flex flex-col relative">
      <div className="absolute -top-3 -right-3 z-10">
        <Badge 
          className={`${
            tier.badge.status === 'available' 
              ? 'bg-green-100 text-green-800 border-green-200' 
              : 'bg-amber-100 text-amber-600 border-amber-200'
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
      
      <div className="mb-3">
        <span className="text-xs font-bold uppercase text-black tracking-wide">
          {tier.label}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-slate-900 mb-4" style={{ fontFamily: 'Garamond, serif' }}>
        {tier.title}
      </h3>
      
      <ul className="space-y-2 flex-grow mb-6">
        {tier.bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-slate-600 flex items-start">
            <span className="text-slate-400 mr-2">•</span>
            {bullet}
          </li>
        ))}
      </ul>
      
      <Button
        asChild={!tier.disabled}
        disabled={tier.disabled}
        className={`w-full ${
          tier.disabled 
            ? 'bg-slate-400 text-white cursor-not-allowed' 
            : 'bg-green-800 hover:bg-green-900 text-white'
        }`}
      >
        {tier.disabled ? (
          <span>{tier.buttonText}</span>
        ) : (
          <Link to={tier.buttonLink}>{tier.buttonText}</Link>
        )}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f8f9fa' }}>
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        {/* Page Header Section */}
        <div className="bg-white rounded-lg p-10 mb-16 text-center">
          <h1 
            className="text-4xl font-bold mb-5" 
            style={{ fontFamily: 'Garamond, serif', color: '#326496' }}
          >
            How to Access Financial Decision Models
          </h1>
          
          <p 
            className="text-lg mb-8" 
            style={{ fontFamily: 'Garamond, serif', color: '#555555' }}
          >
            Choose your path to better financial decisions
          </p>
          
          <p 
            className="text-sm max-w-4xl mx-auto leading-relaxed" 
            style={{ fontFamily: 'Garamond, serif', color: '#666666' }}
          >
            We offer multiple ways to access our financial models, from free online exploration to professional ownership. 
            Start with our free tiers to explore and learn, then upgrade when you need advanced features and commercial rights.
          </p>
        </div>

        {/* Section 1: Self-Service & Free Access */}
        <div className="bg-white rounded-lg p-10 mb-16">
          <div className="mb-8">
            <h2 
              className="text-3xl font-bold mb-4 pb-2 border-b-2 border-gray-200" 
              style={{ fontFamily: 'Garamond, serif', color: '#326496' }}
            >
              Self-Service & Free Access
            </h2>
            <p 
              className="text-sm" 
              style={{ fontFamily: 'Garamond, serif', color: '#666666' }}
            >
              Perfect for exploration, learning, and understanding our models before committing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tiers.selfServiceFree.map((tier, index) => (
              <TierBox key={index} tier={tier} />
            ))}
          </div>
        </div>

        {/* Section 2: Self-Service & Paid Access */}
        <div className="bg-white rounded-lg p-10 mb-16">
          <div className="mb-8">
            <h2 
              className="text-3xl font-bold mb-4 pb-2 border-b-2 border-gray-200" 
              style={{ fontFamily: 'Garamond, serif', color: '#326496' }}
            >
              Self-Service & Paid Access
            </h2>
            <p 
              className="text-sm" 
              style={{ fontFamily: 'Garamond, serif', color: '#666666' }}
            >
              Professional models with commercial use rights and advanced features
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tiers.selfServicePaid.map((tier, index) => (
              <TierBox key={index} tier={tier} />
            ))}
          </div>
        </div>

        {/* Section 3: Consulting & Customization Services */}
        <div className="bg-white rounded-lg p-10 mb-16">
          <div className="mb-8">
            <h2 
              className="text-3xl font-bold mb-4 pb-2 border-b-2 border-gray-200" 
              style={{ fontFamily: 'Garamond, serif', color: '#326496' }}
            >
              Consulting & Customization Services
            </h2>
            <p 
              className="text-sm" 
              style={{ fontFamily: 'Garamond, serif', color: '#666666' }}
            >
              Tailored solutions and expert guidance for your specific needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.consulting.map((tier, index) => (
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