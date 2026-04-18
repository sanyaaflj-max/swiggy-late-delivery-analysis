import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: AlertTriangle,
      metric: "18%",
      label: "Late Delivery Rate",
      description: "Nearly 1 in 5 orders arrive after the promised time, eroding customer trust",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: Clock,
      metric: "14 min",
      label: "Average Delay",
      description: "When orders are late, customers wait an average of 14 extra minutes",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: TrendingDown,
      metric: "3.2",
      label: "NPS Score",
      description: "Low Net Promoter Score indicates poor customer satisfaction and loyalty",
      gradient: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4" />
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Why Late Deliveries Matter
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Late deliveries directly impact customer retention, brand reputation, and revenue. 
            Understanding the scale of the problem is the first step to solving it.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Gradient Top Border */}
                <div className={`h-2 bg-gradient-to-r ${problem.gradient}`}></div>
                
                <div className="p-6">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${problem.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Metric */}
                  <div className="text-4xl sm:text-5xl font-bold text-slate-800 mb-2">
                    {problem.metric}
                  </div>

                  {/* Label */}
                  <div className="text-lg font-semibold text-slate-700 mb-3">
                    {problem.label}
                  </div>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {problem.description}
                  </p>

                  {/* Hover Effect Indicator */}
                  <div className="mt-4 flex items-center gap-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Context */}
        <div className="mt-12 bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Root Causes Identified</h3>
              <ul className="space-y-3">
                {[
                  "Static ETA calculations ignoring real-time traffic patterns",
                  "No visibility into restaurant kitchen load/throughput",
                  "Reactive communication - customers informed only after delay occurs",
                  "Last-mile delivery partner inefficiencies in high-density areas"
                ].map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-xs font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-slate-600">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Business Impact</h3>
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                  <div className="text-2xl font-bold text-red-600">₹4.2 Cr</div>
                  <div className="text-sm text-red-700">Monthly revenue at risk from churned users</div>
                </div>
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                  <div className="text-2xl font-bold text-amber-600">23%</div>
                  <div className="text-sm text-amber-700">Users cite 'late delivery' as top churn reason</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Import ArrowRight at the top
import { ArrowRight } from "lucide-react";