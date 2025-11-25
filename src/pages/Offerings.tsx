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
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const Offerings = () => {
  usePageVisitTracking('page:/offerings');

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const tiers = [
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
    },
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
    }
  ];

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
          className="border border-slate-200 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col relative w-full max-w-full h-full bg-brand-blue" 
        >
          <h3 
            className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight break-words mb-4 text-white"
            style={{ fontFamily: 'Garamond, serif' }}
          >
            {tier.title}
          </h3>
          
          <ul className="flex-grow space-y-2">
            {tier.bullets.map((bullet, index) => (
              <li 
                key={index} 
                className={`${tier.isModelTier ? 'text-xl' : 'text-lg'} leading-relaxed flex items-start text-white/75`}
                style={{ fontFamily: 'Garamond, serif' }}
              >
                <span className="mr-2 mt-1 flex-none">•</span>
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
        <link rel="canonical" href={`${BASE_URL}/offerings`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Offerings - Financial Decision Models & Consulting Services" />
        <meta property="og:description" content="Professional financial decision models available online and for download, plus customized model development and expert consulting services for strategic financial decisions." />
        <meta property="og:url" content={`${BASE_URL}/offerings`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
        
        {/* FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can the models be customised to my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, models can be tailored to your specific business, industry, or decision – or built from scratch for a particular case. You can use the contact page to discuss a potential project to create a customised model that fits your needs."
                }
              },
              {
                "@type": "Question",
                "name": "Do I need to register to use the models?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can view all models online in your browser without registration. A free email registration is only required if you want to download the full Excel versions."
                }
              },
              {
                "@type": "Question",
                "name": "Are the Excel files safe to use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All models are standard Excel files with no macros. Formulas are protected to prevent unintended changes, while input cells are fully editable."
                }
              },
              {
                "@type": "Question",
                "name": "Who are these models designed for?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The models are designed for founders, investors, finance leaders, and advisors who need clear, decision-focused analysis rather than black-box spreadsheets."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-blue">
              Professional Financial Decision Models — Offerings
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto">
              Explore free professional models to use, learn, and get inspired. Need a customised solution? Request a consultation.
            </p>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="bg-white border border-slate-200 rounded-xl shadow-sm px-6 py-10 md:px-10 md:py-12">
              {/* Section Header */}
              <header className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-2 text-left">
                  Offerings to You
                </h2>
                <p className="text-base md:text-lg text-slate-600 max-w-3xl text-left">
                  Free models to view and use — or tailored solutions designed for your specific needs.
                </p>
              </header>
              
              {/* Cards Grid */}
              <div className="grid gap-6 md:grid-cols-3">
                {tiers.map((tier, index) => (
                  <TierBox key={index} tier={tier} />
                ))}
              </div>
              
              {/* Safety Note */}
              <p className="mt-6 text-sm text-slate-500 text-left">
                All models are standard safe Excel files with no macros. Hosted on Microsoft SharePoint. Formulas are protected to prevent unintended changes, while input cells are fully editable.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-6 text-left">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 text-lg text-slate-700 max-w-4xl">
              <div>
                <h3 className="font-semibold text-brand-blue">
                  Can the models be customised to my business?
                </h3>
                <p>
                  Yes, models can be tailored to your specific business, industry, or decision – or built from scratch for a particular case. You can use the contact page to discuss a potential project to create a customised model that fits your needs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-blue">
                  Do I need to register to use the models?
                </h3>
                <p>
                  You can view all models online in your browser without registration. A free email registration is only required if you want to download the full Excel versions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-blue">
                  Are the Excel files safe to use?
                </h3>
                <p>
                  Yes. All models are standard Excel files with no macros. Formulas are protected to prevent unintended changes, while input cells are fully editable.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-brand-blue">
                  Who are these models designed for?
                </h3>
                <p>
                  The models are designed for founders, investors, finance leaders, and advisors who need clear, decision-focused analysis rather than black-box spreadsheets.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Offerings;