import { Badge } from "@/components/ui/badge";

const HeroSection = () => {

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <Badge className="mb-6 bg-green-100 text-green-800 border-green-200" variant="outline">
          Beta Access Granted
        </Badge>
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Facing Complex <span className="text-primary">Financial Decisions?</span>
        </h2>
        <p className="text-xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed">
          We empower businesses facing complex financial choices to make better decisions with an intuitive, business-minded Financial Decision Model toolbox and expert consulting services.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;