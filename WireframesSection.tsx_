import { useState } from "react";
import WireframeCard from "./WireframeCard";

export default function WireframesSection() {
  const [selectedScreen, setSelectedScreen] = useState<string>('tracking');

  const screens = [
    {
      id: 'tracking',
      title: 'Live Order Tracking',
      description: 'Real-time delivery partner location with traffic overlay and accurate ETA',
      elements: [
        { type: 'header', content: 'Order #SW8472' },
        { type: 'map', content: 'Live map with DE location' },
        { type: 'eta', content: 'Arriving in 12 mins' },
        { type: 'status', content: 'DE is 1.2 km away' },
        { type: 'call', content: 'Contact DE button' }
      ]
    },
    {
      id: 'notification',
      title: 'Proactive Delay Notification',
      description: 'Auto-notification when order is delayed with reason and updated ETA',
      elements: [
        { type: 'alert', content: 'Delay Alert' },
        { type: 'reason', content: 'Heavy traffic detected' },
        { type: 'newETA', content: 'New ETA: +8 mins' },
        { type: 'compensation', content: 'Coupon applied' },
        { type: 'track', content: 'Track Order button' }
      ]
    },
    {
      id: 'etaPrediction',
      title: 'Smart ETA Display',
      description: 'ML-powered ETA with confidence interval instead of fixed time',
      elements: [
        { type: 'range', content: '25-35 mins' },
        { type: 'confidence', content: '90% confidence' },
        { type: 'factors', content: 'Traffic: High, Weather: Clear' },
        { type: 'restaurant', content: 'Prep time: 15 mins' },
        { type: 'promise', content: 'Guaranteed by 12:45 PM' }
      ]
    },
    {
      id: 'compensation',
      title: 'Auto-Compensation Modal',
      description: 'Automatic coupon application for significant delays',
      elements: [
        { type: 'apology', content: 'Sorry for the delay!' },
        { type: 'coupon', content: '₹100 coupon applied' },
        { type: 'reason', content: 'Order arrived 20 mins late' },
        { type: 'nextOrder', content: 'Valid for 7 days' },
        { type: 'cta', content: 'View Order History' }
      ]
    }
  ];

  const selectedScreenData = screens.find(s => s.id === selectedScreen);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Wireframes & User Flows</h2>
        <p className="text-slate-600">Key screens for the late delivery improvement initiative</p>
      </div>

      {/* Screen Selector */}
      <div className="flex flex-wrap gap-3">
        {screens.map((screen) => (
          <button
            key={screen.id}
            onClick={() => setSelectedScreen(screen.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedScreen === screen.id
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-orange-300'
            }`}
          >
            {screen.title}
          </button>
        ))}
      </div>

      {/* Wireframe Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Phone Mockup */}
        <div className="bg-slate-800 rounded-3xl p-4 shadow-xl">
          <div className="bg-white rounded-2xl overflow-hidden">
            {/* Phone Header */}
            <div className="bg-orange-500 text-white px-4 py-3 flex items-center justify-between">
              <span className="text-sm font-medium">9:41</span>
              <div className="flex gap-1">
                <div className="w-4 h-2 bg-white rounded-sm"></div>
                <div className="w-6 h-2 bg-white rounded-sm"></div>
              </div>
            </div>
            
            {/* Screen Content */}
            <div className="p-4 min-h-96">
              {selectedScreenData?.elements.map((element, idx) => (
                <WireframeCard key={idx} element={element} />
              ))}
            </div>
          </div>
        </div>

        {/* Description Panel */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-2">{selectedScreenData?.title}</h3>
            <p className="text-slate-600 mb-4">{selectedScreenData?.description}</p>
            
            <div className="border-t border-slate-200 pt-4">
              <h4 className="font-semibold text-slate-700 mb-2">Key Features:</h4>
              <ul className="space-y-2">
                {selectedScreenData?.elements.map((el, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    {el.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h4 className="font-semibold text-orange-800 mb-2">UX Considerations</h4>
            <ul className="space-y-2 text-sm text-orange-700">
              <li>• Clear visual hierarchy for ETA information</li>
              <li>• Non-intrusive but noticeable delay notifications</li>
              <li>• One-tap actions for common tasks</li>
              <li>• Transparent about delay reasons</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}