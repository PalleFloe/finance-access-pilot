import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import ConsultationForm from "@/components/ConsultationForm";
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const Contact = () => {
  usePageVisitTracking('page:/contact');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact & Consultation - Financial Decision Models</title>
        <meta name="description" content="Get expert financial consulting and custom model development. Former Divisional CFO with 20+ years experience. Free clarity call to discuss your needs." />
        <meta name="keywords" content="financial consulting, custom financial models, CFO advisory, business decision support" />
        <link rel="canonical" href={`${BASE_URL}/contact`} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact & Consultation - Financial Decision Models" />
        <meta property="og:description" content="Get expert financial consulting and custom model development. Former Divisional CFO with 20+ years experience. Free clarity call to discuss your needs." />
        <meta property="og:url" content={`${BASE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact & Consultation",
            "description": "Schedule consultation for financial modelling and advisory services",
            "url": "https://www.financialdecisionmodels.com/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Financial Decision Models",
              "url": "https://www.financialdecisionmodels.com",
              "founder": {
                "@type": "Person",
                "name": "Palle Fløe Nielsen",
                "jobTitle": "Former Divisional CFO"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Business Consultation",
                "email": "palle@floeconsulting.com",
                "availableLanguage": ["English", "Danish"]
              }
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-6">
              Let's have a conversation
            </h1>
            <p className="text-2xl md:text-3xl text-slate-600 max-w-6xl mx-auto leading-relaxed">
              Need tailored solutions and expert guidance for your specific needs?
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <ConsultationForm />
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-3xl font-semibold text-brand-blue mb-4">
              What Happens Next
            </h3>
            <ol className="text-lg leading-relaxed space-y-3 list-decimal list-inside">
              <li className="text-foreground">
                <span className="text-brand-blue font-semibold">I review within 1 business day</span> and respond with next steps
              </li>
              <li className="text-foreground">
                <span className="text-brand-blue font-semibold">If there's potential fit</span>, we'll schedule a brief clarity call (15 minutes) to discuss your needs
              </li>
              <li className="text-foreground">
                <span className="text-brand-blue font-semibold">If we proceed together</span>, I'll prepare a proposal outlining scope, approach, and terms
              </li>
            </ol>
          </div>

          <hr className="my-12 border-slate-200" />

          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-semibold text-brand-blue mb-4">
              Got Feedback on Our Models?
            </h3>
            <p className="text-lg leading-relaxed mb-3">
              Spotted an error? Have a suggestion for improvement? Additional models that can have general interest?
            </p>
            <p className="text-lg leading-relaxed mb-3">
              I welcome input that helps make these free models better.
            </p>
            <p className="text-lg font-semibold">
              Email: <a href="mailto:feedback@financialdecisionmodels.com" className="text-brand-blue hover:underline">feedback@financialdecisionmodels.com</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;