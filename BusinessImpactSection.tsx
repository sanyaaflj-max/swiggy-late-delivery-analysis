import { TrendingUp, TrendingDown, ArrowRight, Check, X } from "lucide-react";

export default function BusinessImpactSection() {
  const impactData = [
    {
      metric: "Late Delivery Rate",
      current: "18%",
      projected: "8%",
      change: "-55%",
      positive: true
    },
    {
      metric: "Average Delay Time",
      current: "14 min",
      projected: "5 min",
      change: "-64%",
      positive: true
    },
    {
      metric: "NPS Score",
      current: "3.2",
      projected: "4.5",
      change: "+41%",
      positive: true
    },
    {
      metric: "Support Tickets (Delivery)",
      current: "12,000/mo",
      projected: "3,800/mo",
      change: "-68%",
      positive: true
    },
    {
      metric: "Revenue at Risk",
      current: "₹4.2 Cr/mo",
      projected: "₹1.2 Cr/mo",
      change: "-71%",
      positive: true
    },
    {
      metric: "Customer Retention",
      current: "67%",
      projected: "84%",
      change: "+25%",
      positive: true
    }
  ];

  const savings = [
    { label: "Monthly Savings from Reduced Churn", value: "₹1.8 Cr" },
    { label: "Annual Revenue Recovery", value: "₹21.6 Cr" },
    { label: "Support Cost Reduction", value: "₹24 Lakh/yr" }
  ];

  return (
    <section id="impact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Business Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Current vs. Projected Future State
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Quantified business outcomes from implementing the AI-powered delivery optimization system.
          </p>
        </div>

        {/* Impact Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-slate-800 text-white">
            <div className="p-4 font-semibold">Metric</div>
            <div className="p-4 font-semibold text-center">
              <div className="flex items-center justify-center gap-2">
                <X className="w-4 h-4 text-red-400" />
                Current State
              </div>
            </div>
            <div className="p-4 font-semibold text-center">
              <div className="flex items-center justify-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                Projected
              </div>
            </div>
            <div className="p-4 font-semibold text-center">Change</div>
          </div>

          {/* Table Body */}
          {impactData.map((row, idx) => (
            <div
              key={idx}
              className="grid grid-cols-4 border-b border-slate-100 hover:bg-slate-50 transition-colors"
            >
              <div className="p-4 font-medium text-slate-700">{row.metric}</div>
              <div className="p-4 text-center">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                  {row.current}
                </span>
              </div>
              <div className="p-4 text-center">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {row.projected}
                </span>
              </div>
              <div className="p-4 text-center">
                <span className={`inline-flex items-center gap-1 font-bold ${
                  row.positive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {row.positive ? (
                    <TrendingDown className="w-4 h-4" />
                  ) : (
                    <TrendingUp className="w-4 h-4" />
                  )}
                  {row.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Savings Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {savings.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl p-6 text-white shadow-lg"
            >
              <div className="text-white/80 text-sm mb-2">{item.label}</div>
              <div className="text-3xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>

        {/* ROI Timeline */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-xl font-bold text-slate-800 mb-6">Implementation Timeline & ROI</h3>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              { phase: "Phase 1", duration: "Month 1-2", task: "Data Pipeline & ML Model Development" },
              { phase: "Phase 2", duration: "Month 3", task: "A/B Testing & Model Validation" },
              { phase: "Phase 3", duration: "Month 4", task: "Full Rollout & Monitoring" },
              { phase: "ROI", duration: "Month 6+", task: "Break-even & Profit" }
            ].map((step, idx, arr) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold mb-1">
                    {step.phase}
                  </div>
                  <div className="text-slate-800 font-medium">{step.duration}</div>
                  <div className="text-slate-500 text-sm max-w-32">{step.task}</div>
                </div>
                {idx < arr.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate-300 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}