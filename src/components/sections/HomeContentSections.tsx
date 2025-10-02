const HomeContentSections = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        
        {/* Section 1: Founder & Credibility */}
        <div className="mb-16">
          <h2 
            className="text-[18px] font-bold text-[#326496] mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            Models by Palle Fløe Nielsen
          </h2>
          
          <div className="space-y-4 text-lg" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              Former Divisional CFO at Novozymes, with 20+ years leading business finance in global life sciences and technology companies.
            </p>
            
            <p>
              After decades building financial models for complex decisions—from €100M+ investments to business strategies—I founded Financial Decision Models to solve a persistent problem: finance teams spend too much time building models that decision-makers struggle to use.
            </p>
            
            <p>
              These models bridge that gap.
            </p>
          </div>
        </div>

        {/* Section 2: Why These Models Work */}
        <div className="mb-16">
          <h2 
            className="text-[18px] font-bold text-[#326496] mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            Why These Models Work
          </h2>
          
          <div className="space-y-6 text-lg" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              Most financial models fail at the moment of decision. They're either too complex for decision-makers to trust, or too simplified to be credible.
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
              The result: Less time explaining your model, more time discussing the decision.
            </p>
          </div>
        </div>

        {/* Section 3: Call to Action */}
        <div>
          <h2 
            className="text-[18px] font-bold text-[#326496] mb-6" 
            style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}
          >
            Choose Your Path
          </h2>
          
          <div className="space-y-4 text-lg mb-6" style={{ fontFamily: "'Garamond', 'Times New Roman', serif" }}>
            <p>
              All models are available to view online for free. Download and use them after simple registration—or purchase full ownership rights for customisation.
            </p>
            
            <p>
              Need something specific? Custom model development and consulting services available for complex requirements.
            </p>
          </div>
          
          <a 
            href="/how-it-works"
            className="inline-block text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity text-[14px] font-semibold"
            style={{ 
              fontFamily: "'Garamond', 'Times New Roman', serif",
              backgroundColor: '#326496'
            }}
          >
            See All Options →
          </a>
        </div>

      </div>
    </div>
  );
};

export default HomeContentSections;
