import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact - Get Expert Financial Guidance | Financial Decision Models</title>
        <meta name="description" content="Contact Palle Floe Nielsen for custom financial modeling, business consulting, and strategic advisory services. Based at BloxHub innovation center in Copenhagen, Denmark. Expert financial guidance." />
      </Helmet>
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Contact
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Get in touch to discuss your financial decision modeling needs and how we can help your business make better decisions.
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-8 md:p-12 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">Founder:</h2>
                <p className="text-lg text-slate-700">Palle Fløe Nielsen</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">E-mail:</h2>
                <a 
                  href="mailto:Palle@financialdecisionmodels.com" 
                  className="text-lg text-primary hover:underline"
                >
                  Palle@financialdecisionmodels.com
                </a>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-slate-900 mb-2">LinkedIn:</h2>
                <a 
                  href="https://www.linkedin.com/in/palle-fl%C3%B8e-nielsen-97ab7211/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg text-primary hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;