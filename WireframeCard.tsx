export default function WireframeCard({ element }: { element: { type: string; content: string } }) {
  const renderElement = () => {
    switch (element.type) {
      case 'header':
        return (
          <div className="bg-slate-100 rounded-lg p-3 mb-3 flex items-center justify-between">
            <span className="font-semibold text-slate-700">{element.content}</span>
            <div className="w-6 h-6 bg-slate-300 rounded-full"></div>
          </div>
        );
      case 'map':
        return (
          <div className="bg-blue-50 rounded-lg h-40 mb-3 flex items-center justify-center border-2 border-dashed border-blue-200">
            <div className="text-center">
              <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-sm text-blue-600">{element.content}</span>
            </div>
          </div>
        );
      case 'eta':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-3 text-center">
            <div className="text-2xl font-bold text-green-700">{element.content}</div>
            <div className="text-sm text-green-600">On track</div>
          </div>
        );
      case 'status':
        return (
          <div className="bg-slate-50 rounded-lg p-3 mb-3 flex items-center gap-3">
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
            <div>
              <div className="font-medium text-slate-700">{element.content}</div>
              <div className="text-sm text-slate-500">Rahul K. • Honda Activa</div>
            </div>
          </div>
        );
      case 'call':
        return (
          <button className="w-full bg-orange-500 text-white rounded-lg py-3 font-medium">
            📞 {element.content}
          </button>
        );
      case 'alert':
        return (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              <span className="font-semibold text-amber-800">{element.content}</span>
            </div>
          </div>
        );
      case 'reason':
        return (
          <div className="bg-slate-100 rounded-lg p-3 mb-3">
            <div className="text-sm text-slate-500">Reason</div>
            <div className="font-medium text-slate-700">{element.content}</div>
          </div>
        );
      case 'newETA':
        return (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-3">
            <div className="text-lg font-bold text-blue-700">{element.content}</div>
          </div>
        );
      case 'compensation':
        return (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-3">
            <div className="text-sm text-green-600">🎁 {element.content}</div>
          </div>
        );
      case 'track':
        return (
          <button className="w-full bg-orange-500 text-white rounded-lg py-3 font-medium mt-2">
            {element.content}
          </button>
        );
      case 'range':
        return (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-3 text-center">
            <div className="text-3xl font-bold text-orange-600">{element.content}</div>
            <div className="text-sm text-orange-500">Estimated delivery time</div>
          </div>
        );
      case 'confidence':
        return (
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="h-2 bg-green-500 rounded-full" style={{ width: '90%' }}></div>
            <span className="text-sm font-medium text-green-600">{element.content}</span>
          </div>
        );
      case 'factors':
        return (
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="bg-slate-100 rounded-lg p-2 text-center">
              <div className="text-xs text-slate-500">Traffic</div>
              <div className="font-medium text-red-600">High</div>
            </div>
            <div className="bg-slate-100 rounded-lg p-2 text-center">
              <div className="text-xs text-slate-500">Weather</div>
              <div className="font-medium text-green-600">Clear</div>
            </div>
          </div>
        );
      case 'restaurant':
        return (
          <div className="bg-slate-50 rounded-lg p-3 mb-3">
            <div className="text-sm text-slate-500">{element.content}</div>
          </div>
        );
      case 'promise':
        return (
          <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-center">
            <div className="text-sm font-medium text-green-700">✓ {element.content}</div>
          </div>
        );
      case 'apology':
        return (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-3 text-center">
            <div className="text-xl mb-1">😔</div>
            <div className="font-semibold text-orange-800">{element.content}</div>
          </div>
        );
      case 'coupon':
        return (
          <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 mb-3 text-center">
            <div className="text-2xl font-bold text-green-700">{element.content}</div>
          </div>
        );
      case 'nextOrder':
        return (
          <div className="text-center text-sm text-slate-500 mb-3">{element.content}</div>
        );
      case 'cta':
        return (
          <button className="w-full bg-slate-800 text-white rounded-lg py-3 font-medium">
            {element.content}
          </button>
        );
      default:
        return (
          <div className="bg-slate-100 rounded-lg p-3 mb-3">{element.content}</div>
        );
    }
  };

  return <>{renderElement()}</>;
}