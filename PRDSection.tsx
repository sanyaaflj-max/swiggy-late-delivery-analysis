import { useState } from "react";
import PRDCard from "./PRDCard";
import { Shield, Target, Users, AlertTriangle, Check, ArrowRight } from "lucide-react";

export default function PRDSection() {
  const [expandedSection, setExpandedSection] = useState<string | null>('problem');

  const sections = [
    {
      id: 'problem',
      title: 'Problem Statement',
      icon: AlertTriangle,
      color: 'red',
      content: {
        summary: 'Late deliveries are the #1 customer complaint, affecting 18% of orders and driving user churn.',
        details: [
          '18% of orders delivered after promised time (target: <5%)',
          'Customer satisfaction drops 23% for orders 15+ mins late',
          'Churn rate increases 3x for users who experience 2+ late deliveries',
          'Support tickets related to delays increased 40% YoY',
          'Negative App Store reviews mentioning "late delivery" up 65%'
        ]
      }
    },
    {
      id: 'goals',
      title: 'Goals & Success Metrics',
      icon: Target,
      color: 'blue',
      content: {
        summary: 'Reduce late delivery rate from 18% to <8% within 6 months, improving NPS by 15 points.',
        details: [
          'Primary: Reduce late delivery rate from 18% to <8%',
          'Secondary: Improve delivery-time NPS from 3.2 to 4.5',
          'Tertiary: Decrease delivery-related support tickets by 50%',
          'Business: Reduce churn attributed to delivery issues by 25%',
          'Efficiency: Improve DE utilization by 12% through better routing'
        ]
      }
    },
    {
      id: 'users',
      title: 'Target Users',
      icon: Users,
      color: 'green',
      content: {
        summary: 'Primary: Urban professionals (25-40) ordering during peak hours. Secondary: Families ordering weekend meals.',
        details: [
          'Primary Persona: "Time-Conscious Tina" - 28-35, orders 3-4x/week during lunch',
          'Secondary Persona: "Family Foodie" - 35-45, weekend dinner orders for family of 4',
          'Pain Points: Uncertainty about arrival time, no proactive updates, no compensation',
          'Behavior: Checks app 8x during delivery, high sensitivity to delays',
          'Value: Predictability > Speed - prefers accurate ETA over optimistic promise'
        ]
      }
    },
    {
      id: 'solution',
      title: 'Proposed Solutions',
      icon: Shield,
      color: 'purple',
      content: {
        summary: 'Multi-pronged approach: Smart ETA engine, proactive communication, and delivery partner incentives.',
        details: [
          'Smart ETA Engine: ML-based prediction using traffic, weather, DE location, restaurant prep time',
          'Real-time Tracking: Live DE location with 30-sec updates, traffic overlay on map',
          'Proactive Notifications: Auto-notify at 80% of ETA if order not near, with reason',
          'Compensation Framework: Auto-apply coupon for delays >15 mins, free delivery next order',
          'DE Incentives: Bonus for on-time delivery, penalty system for repeated late deliveries'
        ]
      }
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; iconBg: string }> = {
      red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', iconBg: 'bg-red-100' },
      blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', iconBg: 'bg-blue-100' },
      green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', iconBg: 'bg-green-100' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', iconBg: 'bg-purple-100' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Product Requirements Document</h2>
        <p className="text-slate-600">Improving Swiggy's Late Delivery Experience</p>
      </div>

      <div className="grid gap-4">
        {sections.map((section) => {
          const colors = getColorClasses(section.color);
          const Icon = section.icon;
          const isExpanded = expandedSection === section.id;

          return (
            <div
              key={section.id}
              className={`${colors.bg} ${colors.border} border rounded-xl overflow-hidden transition-all`}
            >
              <button
                onClick={() => setExpandedSection(isExpanded ? null : section.id)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className={`${colors.iconBg} p-2 rounded-lg`}>
                    <Icon className={`w-5 h-5 ${colors.text}`} />
                  </div>
                  <span className={`font-semibold ${colors.text}`}>{section.title}</span>
                </div>
                <ArrowRight className={`w-5 h-5 ${colors.text} transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
              </button>

              {isExpanded && (
                <div className="px-4 pb-4">
                  <p className="text-slate-700 mb-4 font-medium">{section.content.summary}</p>
                  <ul className="space-y-2">
                    {section.content.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                        <span className="text-slate-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Implementation Timeline</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { phase: 'Phase 1', duration: 'Week 1-4', task: 'Smart ETA Engine MVP', status: 'Planning' },
            { phase: 'Phase 2', duration: 'Week 5-8', task: 'Real-time Tracking V2', status: 'Upcoming' },
            { phase: 'Phase 3', duration: 'Week 9-12', task: 'Proactive Notifications', status: 'Upcoming' },
            { phase: 'Phase 4', duration: 'Week 13-16', task: 'Compensation Framework', status: 'Upcoming' },
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <div className="text-sm font-semibold text-orange-500">{item.phase}</div>
              <div className="text-xs text-slate-500 mb-2">{item.duration}</div>
              <div className="text-sm font-medium text-slate-700">{item.task}</div>
              <div className={`mt-2 text-xs px-2 py-1 rounded-full inline-block ${
                item.status === 'Planning' ? 'bg-orange-100 text-orange-700' : 'bg-slate-200 text-slate-600'
              }`}>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}