import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';
import { BASE_URL, DEFAULT_OG_IMAGE, OG_SITE_NAME, OG_LOCALE } from "@/lib/constants";

const Privacy = () => {
  usePageVisitTracking('page:/privacy');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Privacy Policy | Financial Decision Models</title>
        <meta name="description" content="Privacy Policy for Financial Decision Models. How we collect and use personal data when you browse the site or contact us." />
        <link rel="canonical" href={`${BASE_URL}/privacy`} />
        <meta name="robots" content="index,follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Financial Decision Models" />
        <meta property="og:description" content="Privacy Policy for Financial Decision Models. How we collect and use personal data when you browse the site or contact us." />
        <meta property="og:url" content={`${BASE_URL}/privacy`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={DEFAULT_OG_IMAGE} />
        <meta property="og:image:alt" content="Financial Decision Models — by Floe Consulting" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={OG_SITE_NAME} />
        <meta property="og:locale" content={OG_LOCALE} />
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: 19 Oct 2025</p>
          
          <h2>Who we are</h2>
          <p>Fløe Consulting (CVR 34912017), Copenhagen, Denmark.</p>
          <p><strong>Contact:</strong> <a href="mailto:palle@financialdecisionmodels.com">palle@financialdecisionmodels.com</a></p>
          
          <h2>What this covers</h2>
          <p>How we collect and use personal data when you browse the site or contact us.</p>
          
          <h2>Data we collect</h2>
          <ul>
            <li><strong>Cookies and similar tech:</strong> We set one functional cookie (sidebar:state) that remembers your sidebar preference for 7 days. It does not track or identify you.</li>
            <li><strong>Contact emails/forms:</strong> Your name, email, and message so we can respond.</li>
          </ul>
          
          <h2>Legal bases (GDPR)</h2>
          <p>Providing the website and responding to enquiries (legitimate interests / pre-contract steps).</p>
          
          <h2>Sharing</h2>
          <p>We don't sell personal data. Service providers (e.g., hosting/email) may process data under our instructions.</p>
          
          <h2>Retention</h2>
          <ul>
            <li><strong>Website cookie:</strong> 7 days.</li>
            <li><strong>Enquiry emails:</strong> typically up to 24 months.</li>
          </ul>
          
          <h2>Your rights</h2>
          <p>You may request access, correction, or deletion. Email us at <a href="mailto:palle@financialdecisionmodels.com">palle@financialdecisionmodels.com</a>.</p>
          
          <h2>Complaints</h2>
          <p>You may contact your local supervisory authority (in Denmark: Datatilsynet).</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
