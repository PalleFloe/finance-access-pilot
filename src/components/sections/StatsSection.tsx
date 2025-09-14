import { BarChart3, Users, TrendingUp } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <BarChart3 className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-3xl font-bold text-slate-900">20+</h4>
            <p className="text-slate-600">Financial Models</p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 bg-rich-emerald/10 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-rich-emerald" />
            </div>
            <h4 className="text-3xl font-bold text-slate-900">500+</h4>
            <p className="text-slate-600">Business Decisions</p>
          </div>
          <div className="space-y-3">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
              <TrendingUp className="w-8 h-8 text-indigo-600" />
            </div>
            <h4 className="text-3xl font-bold text-slate-900">98%</h4>
            <p className="text-slate-600">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;