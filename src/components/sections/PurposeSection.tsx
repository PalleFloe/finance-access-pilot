import { Badge } from "@/components/ui/badge";

const PurposeSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-slate-100 text-slate-800" variant="outline">
            Our Purpose
          </Badge>
          <h3 className="text-3xl font-bold text-brand-blue mb-6">
            Transforming Complex Financial Decisions
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We help businesses transform complex financial choices into structured insights and better decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;