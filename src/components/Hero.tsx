import { Play, Brain } from 'lucide-react';
import { showToast } from '../utils/toast';

export default function Hero() {
  return (
    <section className="relative pt-44 pb-32 overflow-hidden text-center text-white min-h-[90vh] flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, #e11d48, #ea580c, #f59e0b)' }}>
      {/* Decorative Wave/Lines overlay */}
      <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwLjE1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMAs1MCBRMTUwLDEwMCAzMDAsNTAgVDYwMCw1MCBUOTAwLDUwIiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjZykiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==')] bg-cover bg-no-repeat bg-center mix-blend-overlay"></div>
      
      {/* Floating Elements (Visual Polish) */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-white/10 rounded-full blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-rose-500/20 rounded-full blur-3xl rounded-full"></div>

      <div className="max-w-[900px] mx-auto px-6 relative z-10 flex flex-col items-center mt-12">
        {/* Top Logo / Icon element */}
        <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center mb-10 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          <Brain size={48} className="text-white drop-shadow-md" />
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-8 tracking-tighter leading-[1.05] drop-shadow-lg drop-shadow-rose-900/20">
          Unlocking Knowledge, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-100 to-amber-100">Powered by AI</span>
        </h1>
        
        <p className="text-lg md:text-2xl font-medium text-white/90 mb-12 max-w-3xl leading-relaxed tracking-wide">
          Innovating Education <span className="opacity-50 mx-2">|</span> Empowering Learners <span className="opacity-50 mx-2">|</span> Shaping the Future
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto justify-center mt-4">
          <a href="#glimpse" className="px-10 py-5 bg-white text-rose-600 font-black rounded-2xl shadow-2xl hover:bg-slate-50 transition-all active:scale-[0.98] text-lg hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]">
            Take a Glimpse
          </a>
          <button onClick={() => showToast()} className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-2xl shadow-xl hover:bg-white/20 transition-all active:scale-[0.98] text-lg flex items-center justify-center gap-3">
            <Play size={20} className="fill-current"/> Watch Preview
          </button>
        </div>
      </div>
    </section>
  );
}
