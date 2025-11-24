const NewAboutSection = () => {
  return (
    <section className="pt-6 md:pt-8 pb-6 md:pb-8 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-6">
            Me and How I Can Help You
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed">
            <span className="font-semibold">My name is Palle Fløe Nielsen</span>, and I am based in Copenhagen, Denmark. I have more than 20 years of experience in business finance, including divisional CFO roles.
          </p>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed">
            Important business decisions often become very long processes, with wasteful use of resources and overly complex models that produce 'precisely the wrong results'. Business leaders need better decision tools for complex choices.
          </p>

          <div className="pt-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-blue leading-relaxed font-semibold mb-2">
              To address this, I founded this website
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed">
              My mission is to help turn complex choices into structured insights and better business decisions.
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-700 leading-relaxed">
            I can help with professional decision frameworks combined with business judgement. I challenge assumptions, structure thinking, and cut through complexity to focus on what actually drives value.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewAboutSection;
