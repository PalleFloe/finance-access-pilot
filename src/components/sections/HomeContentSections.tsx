const HomeContentSections = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
        
        {/* Section 1: Founder & Credibility */}
        <div className="mb-16">
          <h2 
            className="text-[28px] md:text-4xl font-bold text-[#326496] mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            Models by Palle Fløe Nielsen
          </h2>
          
          <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              Former Divisional CFO at Novozymes, with 20+ years leading business finance in global life sciences and technology companies.
            </p>
            
            <p>
              After decades building financial models for complex decisions—from €100M+ investments to business strategies—I founded Financial Decision Models to solve a persistent problem: finance teams spend too much time building models that decision-makers struggle to use.
            </p>
            
            <p>
              These models help bridge that gap.
            </p>
          </div>
        </div>

        {/* Section 2: Why These Models Work */}
        <div className="mb-16">
          <h2 
            className="text-[28px] md:text-4xl font-bold text-[#326496] mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            Why These Models Work
          </h2>
          
          <div className="space-y-6 text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              Many financial models fail to fully support making the best decision. They're either too complex for decision-makers to really understand and trust, or too simplified to be credible.
            </p>
            
            <p>
              These models solve both problems:
            </p>
            
            <ul className="space-y-3 ml-6">
              <li>
                <span className="font-bold">Structured clarity:</span> Clear links between assumptions, calculations, and results—so decision-makers can follow the logic
              </li>
              <li>
                <span className="font-bold">Built for decisions:</span> Designed to inform choices and support decision-making, not just crunch numbers
              </li>
              <li>
                <span className="font-bold">Academically grounded:</span> Methods inspired by leading academics like Professor Aswath Damodaran
              </li>
            </ul>
            
            <p>
              The result: Less time explaining, better decisions.
            </p>
          </div>
        </div>

        {/* Section 3: Call to Action */}
        <div>
          <h2 
            className="text-[28px] md:text-4xl font-bold text-[#326496] mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            Choose Your Path
          </h2>
          
          <div className="space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              All models are available to view online for free. Download and use them after simple registration—completely free and safe.
            </p>
            
            <p>
              Need customized solutions or strategic support for complex financial decisions? Our consulting services provide expert guidance tailored to your specific needs. Contact us to discuss your requirements.{' '}
              <a href="/contact" className="text-[#326496] underline hover:text-[#264d75] transition-colors">
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
