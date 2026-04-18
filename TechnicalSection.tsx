import { useState } from "react";
import { Cpu, Database, Globe, Gauge, Zap, ArrowRight, Check, AlertTriangle } from "lucide-react";

export default function TechnicalSection() {
  const [activeArchitecture, setActiveArchitecture] = useState<'eta' | 'throughput' | 'ux'>('eta');

  const architectureSections = [
    { id: 'eta', label: 'Predictive ETA Engine', icon: Gauge },
    { id: 'throughput', label: 'Restaurant Throughput', icon: Database },
    { id: 'ux', label: 'UX Integration', icon: Globe }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-orange-100 p-2 rounded-lg">
            <Cpu className="w-6 h-6 text-orange-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">Technical Solution & AI Integration</h2>
            <p className="text-slate-600 text-sm">Machine Learning architecture for dynamic delivery predictions</p>
          </div>
        </div>
      </div>

      {/* Architecture Navigation */}
      <div className="flex flex-wrap gap-2">
        {architectureSections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => setActiveArchitecture(section.id as typeof activeArchitecture)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                activeArchitecture === section.id
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300'
              }`}
            >
              <Icon className="w-4 h-4" />
              {section.label}
            </button>
          );
        })}
      </div>

      {/* Content Sections */}
      {activeArchitecture === 'eta' && <ETAEngineSection />}
      {activeArchitecture === 'throughput' && <ThroughputSection />}
      {activeArchitecture === 'ux' && <UXIntegrationSection />}

      {/* Success Metrics Section */}
      <SuccessMetricsTechnical />
    </div>
  );
}

function ETAEngineSection() {
  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-6">
        <h3 className="text-lg font-bold text-blue-800 mb-2">From Fixed ETAs to Dynamic Confidence Intervals</h3>
        <p className="text-blue-700">
          Current state: Single-point ETA estimates (e.g., "30 mins") that fail 18% of the time.
          Target state: Probabilistic arrival windows (e.g., "85% chance: 28-35 mins") that set accurate expectations.
        </p>
      </div>

      {/* Model Architecture */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Model Architecture: Ensemble Approach</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Model Selection */}
          <div className="space-y-4">
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-green-100 p-1 rounded">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <span className="font-semibold text-slate-800">Primary Model: Gradient Boosting (XGBoost)</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Handles non-linear relationships between traffic, distance, and delivery time</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Feature importance interpretability for debugging prediction errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Quantile regression support for confidence interval prediction</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-blue-100 p-1 rounded">
                  <Database className="w-4 h-4 text-blue-600" />
                </div>
                <span className="font-semibold text-slate-800">Secondary Model: Random Forest</span>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Robust to outliers in delivery time data</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Ensemble averaging reduces variance in predictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                  <span>Used for cross-validation and model drift detection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Feature Inputs */}
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <h4 className="font-semibold text-orange-800 mb-3">Feature Engineering Pipeline</h4>
            <div className="space-y-3">
              {[
                { category: 'Historical Data', features: ['Past delivery times by route', 'Restaurant prep time history', 'DE performance metrics', 'Day-of-week/hour-of-day patterns'] },
                { category: 'Real-time APIs', features: ['Google Maps Traffic API', 'OpenWeather API', 'Restaurant order queue', 'DE location & speed'] },
                { category: 'Derived Features', features: ['Route complexity score', 'Weather impact factor', 'Traffic congestion index', 'Restaurant load ratio'] }
              ].map((group, idx) => (
                <div key={idx} className="bg-white rounded-lg p-3">
                  <div className="text-xs font-semibold text-orange-600 mb-2">{group.category}</div>
                  <div className="flex flex-wrap gap-1">
                    {group.features.map((f, i) => (
                      <span key={i} className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Confidence Interval Logic */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Confidence Interval Calculation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-green-600">85%</div>
            <div className="text-sm text-green-700">Standard Confidence</div>
            <div className="text-xs text-green-600 mt-1">±5 min window</div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-amber-600">95%</div>
            <div className="text-sm text-amber-700">High Confidence</div>
            <div className="text-xs text-amber-600 mt-1">±8 min window</div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
            <div className="text-3xl font-bold text-red-600">99%</div>
            <div className="text-sm text-red-700">Guaranteed Window</div>
            <div className="text-xs text-red-600 mt-1">±12 min window</div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
          <h4 className="font-semibold text-slate-700 mb-2">Quantile Regression Formula</h4>
          <code className="text-sm text-slate-600 block overflow-x-auto">
            ETA_window = [Q<sub>α/2</sub>(X), Q<sub>1-α/2</sub>(X)]<br/>
            Where X = [traffic, weather, distance, restaurant_load, DE_features, historical_time]<br/>
            α = 0.15 for 85% confidence interval
          </code>
        </div>
      </div>

      {/* Data Pipeline */}
      <DataPipelineDiagram />
    </div>
  );
}

function ThroughputSection() {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6">
        <h3 className="text-lg font-bold text-purple-800 mb-2">Restaurant Throughput Modeling</h3>
        <p className="text-purple-700">
          Predict "Order Ready" time before a Delivery Executive is assigned, reducing DE wait time by 40%.
        </p>
      </div>

      {/* Load Calculation */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Real-Time Kitchen Load Tracking</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Load Metrics */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700">Load Calculation Formula</h4>
            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <code className="text-sm text-slate-600">
                Kitchen_Load = Σ(active_orders × complexity_weight) / kitchen_capacity<br/><br/>
                Where:<br/>
                • complexity_weight = [1.0, 1.5, 2.0] for [simple, medium, complex] items<br/>
                • kitchen_capacity = max_concurrent_items (restaurant-specific)<br/>
                • active_orders = orders in [received, preparing] state
              </code>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h5 className="font-medium text-purple-800 mb-2">Load States</h5>
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center">
                  <div className="w-full h-2 bg-green-400 rounded-full mb-1"></div>
                  <span className="text-xs text-green-700">Low (&lt;30%)</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-2 bg-amber-400 rounded-full mb-1"></div>
                  <span className="text-xs text-amber-700">Medium (30-70%)</span>
                </div>
                <div className="text-center">
                  <div className="w-full h-2 bg-red-400 rounded-full mb-1"></div>
                  <span className="text-xs text-red-700">High (&gt;70%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prep Time Adjustment */}
          <div className="space-y-4">
            <h4 className="font-semibold text-slate-700">Dynamic Prep Time Adjustment</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-2 rounded-tl-lg">Kitchen Load</th>
                    <th className="text-left p-2">Base Prep</th>
                    <th className="text-left p-2 rounded-tr-lg">Adjusted Prep</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { load: 'Low (<30%)', base: '15 min', adjusted: '12-15 min' },
                    { load: 'Medium (30-70%)', base: '15 min', adjusted: '15-20 min' },
                    { load: 'High (70-90%)', base: '15 min', adjusted: '20-28 min' },
                    { load: 'Critical (>90%)', base: '15 min', adjusted: '28-35 min' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100">
                      <td className="p-2 font-medium">{row.load}</td>
                      <td className="p-2 text-slate-500">{row.base}</td>
                      <td className="p-2 text-orange-600 font-medium">{row.adjusted}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-green-600" />
                <span className="font-medium text-green-800">DE Assignment Optimization</span>
              </div>
              <p className="text-sm text-green-700">
                DE dispatch is triggered when: predicted_ready_time - travel_time = current_time + buffer<br/>
                This ensures DE arrives within 2 mins of order ready, reducing wait time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Restaurant Dashboard Preview */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Restaurant Dashboard: Real-Time Load View</h3>
        <div className="bg-slate-800 rounded-lg p-4">
          <div className="bg-slate-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-medium">Kitchen Status Dashboard</span>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">LIVE</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-slate-600 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-xs text-slate-300">Active Orders</div>
              </div>
              <div className="bg-slate-600 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-amber-400">68%</div>
                <div className="text-xs text-slate-300">Kitchen Load</div>
              </div>
              <div className="bg-slate-600 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-white">18</div>
                <div className="text-xs text-slate-300">Avg Prep (min)</div>
              </div>
              <div className="bg-slate-600 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-400">2</div>
                <div className="text-xs text-slate-300">DEs Waiting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UXIntegrationSection() {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6">
        <h3 className="text-lg font-bold text-green-800 mb-2">AI Predictions → User Interface</h3>
        <p className="text-green-700">
          Translating ML confidence intervals into transparent, trust-building UI components.
        </p>
      </div>

      {/* UI Components */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Arrival Window */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h4 className="font-bold text-slate-800 mb-4">Arrival Window Component</h4>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200 mb-4">
            <div className="text-center">
              <div className="text-sm text-orange-600 mb-1">Estimated Arrival</div>
              <div className="text-3xl font-bold text-orange-600">28 - 35 min</div>
              <div className="flex items-center justify-center gap-1 mt-2">
                <div className="h-2 bg-green-400 rounded-full" style={{ width: '85%' }}></div>
                <span className="text-xs text-green-600 font-medium">85% confidence</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <strong>Why it works:</strong> Users prefer accurate ranges over optimistic single points. 
            A 7-minute window with 85% confidence builds more trust than "30 min" that fails 18% of the time.
          </div>
        </div>

        {/* High Demand Status */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h4 className="font-bold text-slate-800 mb-4">High Demand Indicator</h4>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200 mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-amber-400 p-2 rounded-lg animate-pulse">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-amber-800">High Demand in Your Area</div>
                <div className="text-sm text-amber-600">Delivery times may be longer than usual</div>
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <strong>Trigger condition:</strong> When zone_demand / available_DEs ratio exceeds threshold, 
            automatically extend ETA confidence interval and show demand warning.
          </div>
        </div>
      </div>

      {/* Prediction Transparency */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Prediction Transparency Panel</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <span className="font-medium text-slate-700">Traffic Impact</span>
            </div>
            <div className="text-2xl font-bold text-red-600">+8 min</div>
            <div className="text-xs text-slate-500">Heavy traffic on MG Road</div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <span className="font-medium text-slate-700">Restaurant Load</span>
            </div>
            <div className="text-2xl font-bold text-amber-600">+5 min</div>
            <div className="text-xs text-slate-500">Kitchen at 75% capacity</div>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="font-medium text-slate-700">Weather</span>
            </div>
            <div className="text-2xl font-bold text-green-600">Clear</div>
            <div className="text-xs text-slate-500">No weather delays</div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-700">
            <strong>User Psychology:</strong> When users understand WHY a delay is happening, 
            they're 3x more likely to wait patiently. Transparency reduces support tickets by 28%.
          </p>
        </div>
      </div>

      {/* Progressive Disclosure */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Progressive Disclosure Pattern</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <div className="font-medium text-slate-800">Default View: Confidence Range</div>
              <div className="text-sm text-slate-600">"Arriving 28-35 min" with confidence bar</div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <div className="font-medium text-slate-800">Tap to Expand: Factor Breakdown</div>
              <div className="text-sm text-slate-600">Traffic +8 min, Restaurant +5 min, Weather Clear</div>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <div className="font-medium text-slate-800">Deep Dive: Live Map + DE Location</div>
              <div className="text-sm text-slate-600">Real-time tracking with traffic overlay</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessMetricsTechnical() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Secondary KPI: ETA Accuracy Definition</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Definition */}
        <div className="space-y-4">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h4 className="font-semibold text-slate-700 mb-2">Formula</h4>
            <code className="text-sm text-slate-600 block">
              ETA_Accuracy = 1 - (|predicted_time - actual_time| / actual_time)<br/><br/>
              Example:<br/>
              • Predicted: 30 min<br/>
              • Actual: 35 min<br/>
              • Accuracy = 1 - (|30-35|/35) = 85.7%
            </code>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">Target Thresholds</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-green-700">Excellent</span>
                <span className="font-medium text-green-600">&gt;90% accuracy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-amber-700">Acceptable</span>
                <span className="font-medium text-amber-600">80-90% accuracy</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-700">Needs Improvement</span>
                <span className="font-medium text-red-600">&lt;80% accuracy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Measurement Dimensions */}
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-700">Measurement Dimensions</h4>
          
          <div className="space-y-3">
            {[
              { dimension: 'Overall Accuracy', target: '≥85%', current: '72%' },
              { dimension: 'Within Confidence Interval', target: '≥85%', current: '68%' },
              { dimension: 'Under-prediction Rate', target: '&lt;15%', current: '22%' },
              { dimension: 'Severe Miss Rate (&gt;10 min)', target: '&lt;5%', current: '12%' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-slate-50 rounded-lg p-3 border border-slate-200">
                <span className="text-slate-700">{item.dimension}</span>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-slate-500">Target: {item.target}</span>
                  <span className="text-sm font-medium text-orange-600">Current: {item.current}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DataPipelineDiagram() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Data Pipeline Architecture</h3>
      
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
        {[
          { label: 'Order Placed', color: 'bg-blue-100 text-blue-700' },
          { label: 'Feature Extraction', color: 'bg-purple-100 text-purple-700' },
          { label: 'ML Model', color: 'bg-orange-100 text-orange-700' },
          { label: 'Confidence Calc', color: 'bg-green-100 text-green-700' },
          { label: 'UI Render', color: 'bg-teal-100 text-teal-700' },
        ].map((step, idx, arr) => (
          <div key={idx} className="flex items-center gap-2">
            <div className={`${step.color} px-3 py-2 rounded-lg font-medium`}>
              {step.label}
            </div>
            {idx < arr.length - 1 && (
              <ArrowRight className="w-4 h-4 text-slate-400" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <div className="font-semibold text-slate-700 mb-1">Latency Budget</div>
          <div className="text-slate-600">End-to-end: &lt;200ms for ETA prediction</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <div className="font-semibold text-slate-700 mb-1">Model Refresh</div>
          <div className="text-slate-600">Retrained daily, deployed weekly</div>
        </div>
        <div className="bg-slate-50 rounded-lg p-3 border border-slate-200">
          <div className="font-semibold text-slate-700 mb-1">Fallback</div>
          <div className="text-slate-600">Rule-based ETA if ML service fails</div>
        </div>
      </div>
    </div>
  );
}