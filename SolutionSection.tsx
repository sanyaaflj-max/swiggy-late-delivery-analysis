import { useState } from "react";
import { Gauge, Brain, Bell, ArrowRight, Check, Clock, MapPin, TrendingUp } from "lucide-react";

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState<'eta' | 'traffic' | 'ux'>('eta');

  const solutions = {
    eta: {
      title: "Smart ETA",
      subtitle: "Dynamic Confidence Intervals",
      description: "Replace single-point ETAs with ML-powered confidence intervals that set accurate expectations and build trust.",
      features: [
        { label: "85% Confidence Window", desc: "Show '28-35 min' instead of '30 min'" },
        { label: "Real-time Adjustment", desc: "ETA updates every 30 seconds based on live data" },
        { label: "Transparency Panel", desc: "Show factors affecting delay: traffic, weather, restaurant load" },
        { label: "Historical Accuracy", desc: "Model learns from past deliveries to improve predictions" }
      ],
      metrics: [
        { value: "40%", label: "Reduction in late delivery complaints" },
        { value: "3.2→4.1", label: "NPS improvement" }
      ],
      color: "orange"
    },
    traffic: {
      title: "AI Traffic Engine",
      subtitle: "ML-Powered Delay Prediction",
      description: "Gradient Boosting model analyzes traffic patterns, weather, and historical data to predict delays before they happen.",
      features: [
        { label: "Area-Specific Models", desc: "Custom predictions for Adambakkam, T. Nagar, OMR zones" },
        { label: "Peak Hour Detection", desc: "Automatically extend ETAs during rush hours (6-9 PM)" },
        { label: "Weather Integration", desc: "Factor rain/heat impact on delivery speed" },
        { label: "Restaurant Throughput", desc: "Track kitchen load to adjust prep time predictions" }
      ],
      metrics: [
        { value: "92%", label: "Prediction accuracy within 5 min" },
        { value: "2.1 min", label: "Average prediction error" }
      ],
      color: "blue"
    },
    ux: {
      title: "Proactive UX",
      subtitle: "Automated Delay Notifications",
      description: "Keep customers informed before they complain. Auto-notify delays with reasons and compensation.",
      features: [
        { label: "Pre-emptive Alerts", desc: "Notify 5 mins before predicted delay" },
        { label: "Delay Reason Display", desc: "Show 'Heavy traffic on MG Road' with live map" },
        { label: "Auto-Compensation", desc: "Apply coupons for delays >15 mins automatically" },
        { label: "One-tap Actions", desc: "Call DE, track on map, or reschedule order" }
      ],
      metrics: [
        { value: "68%", label: "Reduction in support tickets" },
        { value: "₹100", label: "Auto-applied coupon for delays" }
      ],
      color: "green"
    }
  };

  const tabs = [
    { id: 'eta' as const, label: 'Smart ETA', icon: Gauge },
    { id: 'traffic' as const, label: 'AI Traffic Engine', icon: Brain },
    { id: 'ux' as const, label: 'Proactive UX', icon: Bell }
  ];

  const currentSolution = solutions[activeTab];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            AI-Powered Delivery Optimization
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A three-pronged approach combining machine learning, real-time data, 
            and proactive communication to transform the delivery experience.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Solution Content */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left - Description */}
            <div className="p-6 sm:p-8 lg:border-r border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${
                  activeTab === 'eta' ? 'bg-orange-100' :
                  activeTab === 'traffic' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  {activeTab === 'eta' && <Gauge className="w-6 h-6 text-orange-600" />}
                  {activeTab === 'traffic' && <Brain className="w-6 h-6 text-blue-600" />}
                  {activeTab === 'ux' && <Bell className="w-6 h-6 text-green-600" />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">{currentSolution.title}</h3>
                  <p className="text-sm text-slate-500">{currentSolution.subtitle}</p>
                </div>
              </div>

              <p className="text-slate-600 mb-6">{currentSolution.description}</p>

              {/* Features */}
              <div className="space-y-3">
                {currentSolution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-3 border border-slate-200">
                    <div className={`p-1 rounded ${
                      activeTab === 'eta' ? 'bg-orange-100' :
                      activeTab === 'traffic' ? 'bg-blue-100' : 'bg-green-100'
                    }`}>
                      <Check className={`w-4 h-4 ${
                        activeTab === 'eta' ? 'text-orange-600' :
                        activeTab === 'traffic' ? 'text-blue-600' : 'text-green-600'
                      }`} />
                    </div>
                    <div>
                      <div className="font-medium text-slate-700">{feature.label}</div>
                      <div className="text-sm text-slate-500">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual/Metrics */}
            <div className="p-6 sm:p-8 bg-white">
              {/* Mockup */}
              <div className="bg-slate-800 rounded-xl p-4 mb-6">
                <div className="bg-slate-700 rounded-lg p-4">
                  {activeTab === 'eta' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-slate-400 text-sm">
                        <span>Order #SW8472</span>
                        <span className="text-green-400">● Live</span>
                      </div>
                      <div className="text-center">
                        <div className="text-white text-3xl font-bold">28 - 35 min</div>
                        <div className="text-orange-400 text-sm mt-1">85% confidence</div>
                      </div>
                      <div className="h-2 bg-slate-600 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 w-3/4 rounded-full"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-slate-600 rounded p-2">
                          <div className="text-red-400">+8 min</div>
                          <div className="text-slate-400">Traffic</div>
                        </div>
                        <div className="bg-slate-600 rounded p-2">
                          <div className="text-amber-400">+5 min</div>
                          <div className="text-slate-400">Kitchen</div>
                        </div>
                        <div className="bg-slate-600 rounded p-2">
                          <div className="text-green-400">Clear</div>
                          <div className="text-slate-400">Weather</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'traffic' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-slate-400 text-sm">
                        <span>AI Traffic Prediction</span>
                        <span className="text-blue-400">● Active</span>
                      </div>
                      <div className="bg-slate-600 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4 text-orange-400" />
                          <span className="text-white text-sm">Adambakkam Zone</span>
                        </div>
                        <div className="text-amber-400 text-sm">Peak Hour: 6-9 PM</div>
                        <div className="text-slate-400 text-xs mt-1">Traffic Index: 78/100</div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-slate-600 rounded p-2 text-center">
                          <div className="text-blue-400 font-bold">92%</div>
                          <div className="text-slate-400 text-xs">Accuracy</div>
                        </div>
                        <div className="bg-slate-600 rounded p-2 text-center">
                          <div className="text-green-400 font-bold">2.1m</div>
                          <div className="text-slate-400 text-xs">Error Rate</div>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 'ux' && (
                    <div className="space-y-4">
                      <div className="bg-amber-500/20 border border-amber-500/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Bell className="w-4 h-4 text-amber-400" />
                          <span className="text-amber-400 font-medium">Delay Alert</span>
                        </div>
                        <div className="text-white text-sm">Your order may arrive 8 mins late</div>
                        <div className="text-slate-400 text-xs mt-1">Reason: Heavy traffic on OMR</div>
                      </div>
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                        <div className="text-green-400 font-medium mb-1">₹100 Coupon Applied</div>
                        <div className="text-slate-400 text-xs">Auto-compensation for delay</div>
                      </div>
                      <button className="w-full bg-orange-500 text-white py-2 rounded-lg text-sm font-medium">
                        Track Order Live
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4">
                {currentSolution.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-lg p-4 text-center border border-slate-200">
                    <div className={`text-2xl font-bold ${
                      activeTab === 'eta' ? 'text-orange-600' :
                      activeTab === 'traffic' ? 'text-blue-600' : 'text-green-600'
                    }`}>
                      {metric.value}
                    </div>
                    <div className="text-slate-500 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}