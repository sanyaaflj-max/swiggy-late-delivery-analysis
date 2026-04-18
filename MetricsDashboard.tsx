import { TrendingUp, Target, Clock, Users, Star, Zap, ArrowUpRight } from "lucide-react";

export default function MetricsDashboard() {
  const metrics = [
    {
      icon: Target,
      label: "On-Time Delivery Rate",
      current: 82,
      target: 92,
      unit: "%",
      color: "orange",
      description: "Orders delivered within promised time window"
    },
    {
      icon: Star,
      label: "Customer Satisfaction (NPS)",
      current: 64,
      target: 90,
      unit: "%",
      color: "green",
      description: "Net Promoter Score from post-delivery surveys"
    },
    {
      icon: Clock,
      label: "Avg. Preparation Time",
      current: 18,
      target: 12,
      unit: " min",
      color: "blue",
      description: "Average time from order to ready for pickup"
    }
  ];

  const weeklyTrend = [
    { week: "Week 1", value: 72 },
    { week: "Week 2", value: 75 },
    { week: "Week 3", value: 79 },
    { week: "Week 4", value: 84 },
    { week: "Week 5", value: 88 },
    { week: "Week 6", value: 91 }
  ];

  const additionalMetrics = [
    { label: "Late Delivery Complaints", value: "-68%", trend: "down", positive: true },
    { label: "Support Ticket Resolution", value: "2.1 hrs", trend: "down", positive: true },
    { label: "Customer Retention", value: "+25%", trend: "up", positive: true },
    { label: "Revenue Recovery", value: "₹1.8 Cr", trend: "up", positive: true }
  ];

  return (
    <section id="metrics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Success Metrics Dashboard
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Tracking What Matters
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Real-time visibility into key performance indicators for the delivery optimization initiative.
          </p>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            const progress = (metric.current / metric.target) * 100;
            
            return (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      metric.color === 'orange' ? 'bg-orange-100' :
                      metric.color === 'blue' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        metric.color === 'orange' ? 'text-orange-600' :
                        metric.color === 'blue' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    </div>
                    <span className="font-semibold text-slate-700">{metric.label}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-slate-500">{metric.description}</span>
                    <span className="text-sm font-medium text-slate-500">
                      Target: {metric.target}{metric.unit}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-4 rounded-full transition-all duration-1000 ${
                        metric.color === 'orange' ? 'bg-gradient-to-r from-orange-500 to-amber-500' :
                        metric.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                        'bg-gradient-to-r from-green-500 to-emerald-500'
                      }`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Current Value */}
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-3xl font-bold text-slate-800">{metric.current}</span>
                    <span className="text-slate-500 text-lg">{metric.unit}</span>
                  </div>
                  <div className={`text-sm font-medium px-2 py-1 rounded ${
                    progress >= 90 ? 'bg-green-100 text-green-700' :
                    progress >= 70 ? 'bg-amber-100 text-amber-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {Math.round(progress)}% of target
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Weekly Trend Chart */}
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">ETA Accuracy Trend (Week over Week)</h3>
            <div className="flex items-center gap-2 text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">+19% improvement</span>
            </div>
          </div>

          {/* Simple Bar Chart */}
          <div className="flex items-end justify-between gap-2 h-40">
            {weeklyTrend.map((item, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-orange-500 to-amber-400 rounded-t-lg transition-all duration-500"
                  style={{ height: `${(item.value / 100) * 100}%` }}
                ></div>
                <div className="mt-2 text-xs text-slate-500 text-center">{item.week}</div>
                <div className="text-sm font-bold text-slate-700">{item.value}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {additionalMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-4 border border-slate-200 text-center hover:shadow-md transition-shadow"
            >
              <div className={`inline-flex items-center gap-1 text-sm font-medium mb-2 ${
                metric.positive ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.trend === 'up' ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 rotate-90" />
                )}
                {metric.label}
              </div>
              <div className="text-2xl font-bold text-slate-800">{metric.value}</div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-center text-slate-500 italic text-sm">
          *Real-time data visualization of project impact post-implementation. Metrics updated every 30 seconds.
        </p>
      </div>
    </section>
  );
}