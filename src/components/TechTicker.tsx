import { Server, Zap, Database, Cloud } from 'lucide-react';

export default function TechTicker() {
  return (
    <div className="py-6 bg-white border-b border-slate-100 overflow-hidden flex flex-col justify-center shadow-sm relative z-20">
       <div className="max-w-[1400px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
           <span className="flex items-center gap-2"><Zap size={14}/> Ultra-Fast Go Backend</span>
           <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200"></span>
           <span className="flex items-center gap-2"><Server size={14}/> Serverless Infrastructure</span>
           <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-200"></span>
           <span className="flex items-center gap-2"><Database size={14}/> Real-Time Metrics Engine</span>
           <span className="hidden lg:flex w-1.5 h-1.5 rounded-full bg-slate-200"></span>
           <span className="hidden lg:flex items-center gap-2"><Cloud size={14}/> AWS Cloud Native</span>
       </div>
    </div>
  );
}
