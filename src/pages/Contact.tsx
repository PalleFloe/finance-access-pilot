import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import ConsultationForm from "@/components/ConsultationForm";

const Contact = () => {
  usePageVisitTracking('page:/contact');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact & Consultation - Financial Decision Models</title>
        <meta name="description" content="Get expert financial consulting and custom model development. Former Divisional CFO with 20+ years experience. Free clarity call to discuss your needs." />
        <meta name="keywords" content="financial consulting, custom financial models, CFO advisory, business decision support" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact & Consultation",
            "description": "Financial consulting and custom model development services",
            "provider": {
              "@type": "Person",
              "name": "Palle Fløe Nielsen",
              "jobTitle": "Former Divisional CFO",
              "email": "palle@financialdecisionmodels.com"
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      <main className="py-12">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-8">
            <h1 className="text-[20px] font-bold text-[#326496] mb-4">
              Contact: How Can I Help?
            </h1>
            <p className="text-lg leading-relaxed">
              Facing a complex financial decision? Need models adapted to your business? Let's have a conversation about how I can help.
            </p>
          </div>

          <ConsultationForm />

          <div className="mb-12">
            <h3 className="text-[16px] font-bold text-[#326496] mb-4">
              What Happens Next
            </h3>
            <ol className="text-base leading-relaxed space-y-3 list-decimal list-inside">
              <li className="text-foreground">
                <span className="text-[#326496] font-semibold">I review within 1 business day</span> and respond with next steps
              </li>
              <li className="text-foreground">
                <span className="text-[#326496] font-semibold">If there's potential fit</span>, we'll schedule a brief clarity call (15 minutes) to discuss your needs
              </li>
              <li className="text-foreground">
                <span className="text-[#326496] font-semibold">If we proceed together</span>, I'll prepare a proposal outlining scope, approach, and terms
              </li>
            </ol>
          </div>

          <hr className="my-12 border-slate-200" />

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h3 className="text-[16px] font-bold text-[#326496] mb-3">
              Got Feedback on Our Models?
            </h3>
            <p className="text-base leading-relaxed mb-3">
              Spotted an error? Have a suggestion for improvement? Additional models that can have general interest?
            </p>
            <p className="text-base leading-relaxed mb-3">
              I welcome input that helps make these free models better.
            </p>
            <p className="text-base font-semibold">
              Email: <a href="mailto:feedback@financialdecisionmodels.com" className="text-[#326496] hover:underline">feedback@financialdecisionmodels.com</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;