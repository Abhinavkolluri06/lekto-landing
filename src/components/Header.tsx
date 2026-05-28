import { BookOpen, Rocket } from 'lucide-react';
import { showToast } from '../utils/toast';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-100 shadow-sm transition-all">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 flex items-center justify-center text-rose-500">
            <BookOpen size={28} className="absolute left-0 bottom-1 opacity-90" />
            <Rocket size={24} className="absolute right-0 top-0 mb-2 ml-2" />
          </div>
          <span className="font-display font-black text-2xl tracking-tight text-slate-900">LEKTO</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-800">
          <a href="#features" className="hover:text-rose-500 transition-colors">Features</a>
          <button onClick={() => showToast()} className="flex items-center gap-1.5 cursor-pointer">
             <span className="text-slate-500 hover:text-rose-500 transition-colors">Launch</span>
             <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Coming Soon</span>
          </button>
          <button onClick={() => showToast()} className="flex items-center gap-1.5 cursor-pointer">
             <span className="text-slate-500 hover:text-rose-500 transition-colors">Pricing</span>
             <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Coming Soon</span>
          </button>
          <button onClick={() => showToast()} className="flex items-center gap-1.5 cursor-pointer">
             <span className="text-slate-500 hover:text-rose-500 transition-colors">Blog</span>
             <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Coming Soon</span>
          </button>
          <button onClick={() => showToast()} className="hover:text-rose-500 transition-colors cursor-pointer text-slate-500">Contact</button>
        </nav>
        <div className="flex items-center">
          <button onClick={() => showToast()} className="px-6 py-2.5 lekto-gradient text-white font-bold text-sm rounded-lg shadow-md hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
