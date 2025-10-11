const HomeContentSections = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
        
        {/* Section 1: Founder & Credibility */}
        <div className="mb-16">
          <h2 
            className="text-[28px] md:text-4xl font-bold text-brand-blue mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            Models by Palle Fløe Nielsen
          </h2>
          
          <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              Former Divisional CFO at Novozymes, with over 20 years of experience leading business finance in global life sciences and medtech companies.
            </p>
            
            <p>
              After decades of building financial models for complex decisions—from €100M+ investments to business strategies—I recognized a persistent problem: finance teams often spend too much time on models that decision-makers struggle to use effectively.
            </p>
            
            <p>
              Many financial models fail to fully support making the best decision because they are either too complex for decision-makers to understand and trust, or too simplified to be credible.
            </p>
          </div>
        </div>

        {/* Section 2: Foundation */}
        <div className="mb-16">
          <h2 
            className="text-[28px] md:text-4xl font-bold text-brand-blue mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            To address this issue, I founded Financial Decision Models
          </h2>
          
          <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              The models I have developed at Financial Decision Models solve these problems:
            </p>
            
            <ul className="space-y-3 ml-6">
              <li>
                <span className="font-bold">Structured clarity:</span> Clear links between assumptions, calculations, and results—so decision-makers can follow the logic
              </li>
              <li>
                <span className="font-bold">Built for decisions:</span> Designed to inform choices and support decision-making, not just crunch numbers
              </li>
              <li>
                <span className="font-bold">Academically based and inspired by leading academics, such as Professor Aswath Damodaran</span>
              </li>
            </ul>
            
            <p>
              My mission is to help turn complex choices into structured insights and better business decisions.
            </p>
          </div>
        </div>

        {/* Section 2: Offerings */}
        <div>
          <h2 
            className="text-[28px] md:text-4xl font-bold text-brand-blue mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            Offerings
          </h2>
          
          <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              You can view online or download all models for 100% free and safe use, with no credit card required or future promotional emails.
            </p>
            
            <p>
              If you need customized models, solutions or strategic support for complex financial decisions, our consulting services offer expert guidance designed to your specific needs. Contact me to discuss further.{' '}
              <a href="/contact" className="text-brand-blue underline hover:text-[#264d75] transition-colors">
                Request Consultation
              </a>
            </p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default HomeContentSections;
