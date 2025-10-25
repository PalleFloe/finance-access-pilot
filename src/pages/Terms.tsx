import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { usePageVisitTracking } from '@/hooks/useAnalytics';

const Terms = () => {
  usePageVisitTracking('page:/terms');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Terms of Service | Financial Decision Models</title>
        <meta name="description" content="Terms of Service for Financial Decision Models website and free model library." />
        <link rel="canonical" href="https://www.financialdecisionmodels.com/terms" />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          <h1>Terms of Service</h1>
          
          <h2>Who we are</h2>
          <p>Fløe Consulting (CVR 34912017), Copenhagen, Denmark.</p>
          <p><strong>Contact:</strong> <a href="mailto:palle@floeconsulting.com">palle@floeconsulting.com</a></p>
          
          <h2>Scope</h2>
          <p>These Terms cover your use of this website and the free model library. Consulting services are governed by a separate agreement.</p>
          
          <h2>Use of free models (license)</h2>
          <ul>
            <li>Non-exclusive, royalty-free license for your internal business use.</li>
            <li>Do not resell or redistribute templates "as templates" without permission.</li>
            <li>Attribution appreciated but not required.</li>
          </ul>
          
          <h2>No financial advice</h2>
          <p>Templates and content are for information/education only and are not financial, legal, tax, or investment advice.</p>
          
          <h2>Accuracy & availability</h2>
          <p>Site and templates are provided "as is." We may change or remove content at any time.</p>
          
          <h2>Liability</h2>
          <p>To the fullest extent permitted by law, we disclaim warranties and limit liability for indirect or consequential loss. Total liability related to the website or free downloads will not exceed EUR 100. This does not limit liability that cannot be excluded by law.</p>
          
          <h2>Intellectual property</h2>
          <p>All site content, trademarks, and branding remain our property or that of our licensors.</p>
          
          <h2>Governing law</h2>
          <p>Danish law; courts of Denmark.</p>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
