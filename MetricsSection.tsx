import { useState } from "react";
import { TrendingUp, TrendingDown, Target, Clock } from "lucide-react";

export default function MetricsSection() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('month');

  const metrics = [
    {
      title: 'Late Delivery Rate',
      current: 18,
      target: 8,
      unit: '%',
      trend: 'down',
      improvement: -2.5,
      color: 'red'
    },
    {
      title: 'Delivery NPS',
      current: 3.2,
      target: 4.5,
      unit: '/5',
      trend: 'up',
      improvement: 0.3,
      color: 'blue'
    },
    {
      title: 'Avg. Delay Time',
      current: 14,
      target: 5,
      unit: 'min',
      trend: 'down',
      improvement: -3,
      color: 'amber'
    },
    {
      title: 'Support Tickets',
      current: 2400,
      target: 1200,
      unit: '/mo',
      trend: 'down',
      improvement: -15,
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; light: string }> = {
      red: { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-50' },
      blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-50' },
      amber: { bg: 'bg-amber-500', text: 'text-amber-600', light: 'bg-amber-50' },
      purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-50' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-slate-800">Success Metrics Dashboard</h2>
          <div className="flex gap-2">
            {(['week', 'month', 'quarter'] as const).map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 rounded-lg text-sm font-medium ${
                  timeRange === range
                    ? 'bg-orange-500 text-white'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>
        <p className="text-slate-600">Track progress against PRD goals</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => {
          const colors = getColorClasses(metric.color);
          const progress = Math.min(100, Math.max(0, (metric.current / metric.target) * 100));
          const isGoodTrend = metric.trend === 'down' ? metric.improvement < 0 : metric.improvement > 0;

          return (
            <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-slate-500">{metric.title}</span>
                {isGoodTrend ? (
                  <TrendingDown className="w-4 h-4 text-green-500" />
                ) : (
                  <TrendingUp className="w-4 h-4 text-red-500" />
                )}
              </div>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-slate-800">{metric.current}</span>
                <span className="text-sm text-slate-500">{metric.unit}</span>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-xs text-slate-500 mb-1">
                  <span>Target: {metric.target}{metric.unit}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${colors.bg} rounded-full transition-all`}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              <div className={`text-sm ${isGoodTrend ? 'text-green-600' : 'text-red-600'}`}>
                {metric.improvement > 0 ? '+' : ''}{metric.improvement}% from last {timeRange}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delay Reasons */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Delay Reasons Breakdown</h3>
          <div className="space-y-3">
            {[
              { reason: 'Traffic congestion', percentage: 35, count: 8400 },
              { reason: 'Restaurant delay', percentage: 28, count: 6720 },
              { reason: 'DE availability', percentage: 20, count: 4800 },
              { reason: 'Weather conditions', percentage: 12, count: 2880 },
              { reason: 'Address issues', percentage: 5, count: 1200 },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-700">{item.reason}</span>
                    <span className="text-slate-500">{item.percentage}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Analysis */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Business Impact</h3>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-red-500" />
                <span className="font-semibold text-red-700">Churn Risk</span>
              </div>
              <div className="text-2xl font-bold text-red-600">₹4.2 Cr</div>
              <div className="text-sm text-red-600">Monthly revenue at risk from delivery-related churn</div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="font-semibold text-green-700">Projected Savings</span>
              </div>
              <div className="text-2xl font-bold text-green-600">₹1.8 Cr</div>
              <div className="text-sm text-green-600">Expected monthly savings after implementation</div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-blue-700">ROI Projection</span>
              </div>
              <div className="text-2xl font-bold text-blue-600">340%</div>
              <div className="text-sm text-blue-600">Expected ROI over 12 months</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hypothesis & Experiments */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Hypothesis & Experiments</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              hypothesis: 'Smart ETA reduces anxiety',
              experiment: 'A/B test confidence intervals vs fixed ETA',
              status: 'Running',
              result: '+12% satisfaction in test group'
            },
            {
              hypothesis: 'Proactive updates reduce support tickets',
              experiment: 'Auto-notify at 80% of ETA',
              status: 'Completed',
              result: '-28% support tickets'
            },
            {
              hypothesis: 'Compensation improves retention',
              experiment: 'Auto-apply coupon for 15+ min delays',
              status: 'Upcoming',
              result: 'Starting Jan 15'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-500">HYPOTHESIS {idx + 1}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.status === 'Running' ? 'bg-blue-100 text-blue-700' :
                  item.status === 'Completed' ? 'bg-green-100 text-green-700' :
                  'bg-slate-200 text-slate-600'
                }`}>
                  {item.status}
                </span>
              </div>
              <h4 className="font-medium text-slate-800 mb-2">{item.hypothesis}</h4>
              <p className="text-sm text-slate-600 mb-3">{item.experiment}</p>
              <div className="text-sm font-medium text-orange-600">{item.result}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}