import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const scrollToProblem = () => {
    const element = document.getElementById('problem');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-400 text-sm font-medium">Product Management Case Study</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Sanya Aflaj N
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-400 font-light">
              Product Management & AI
            </p>

            <div className="h-1 w-24 bg-orange-500 rounded-full"></div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white">
              Swiggy Late Delivery Optimization
            </h2>

            <p className="text-slate-400 text-lg max-w-xl">
              A comprehensive product strategy to reduce late deliveries by 40% using 
              AI-powered ETA predictions and proactive user experience interventions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToProblem}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-lg shadow-orange-500/25"
              >
                View Case Study
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#metrics"
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-all border border-slate-700"
              >
                View Metrics
              </a>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <div className="text-slate-400 text-sm mb-2">Order #SW8472</div>
                  <div className="text-white text-2xl font-bold">Arriving 28-35 min</div>
                  <div className="mt-2 h-2 bg-slate-600 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-500 to-amber-500 w-3/4 rounded-full"></div>
                  </div>
                  <div className="text-orange-400 text-sm mt-2">85% confidence</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-white">-40%</div>
                    <div className="text-xs text-slate-400">Late Deliveries</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-green-400">+12%</div>
                    <div className="text-xs text-slate-400">NPS Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-orange-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}