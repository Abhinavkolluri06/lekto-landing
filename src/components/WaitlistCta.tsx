import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function WaitlistCta() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden lekto-gradient-bg">
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZiIgc3RvcC1vcGFjaXR5PSIwLjEiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wLDUwIFExNTAsMTAwIDMwMCw1MCBUNjAwLDUwIFQ5MDAsNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNnKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] bg-cover bg-no-repeat bg-center mix-blend-overlay opacity-30"></div>

      <div className="max-w-[800px] mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Shape the Future of Learning
        </h2>
        <p className="text-white/90 text-lg font-medium mb-10 max-w-2xl mx-auto">
          Experience the most advanced AI-powered educational platform. Let's revolutionize the way you learn, together.
        </p>
        
        <div className="max-w-md mx-auto relative mb-6">
           {isSubmitted ? (
               <div className="p-4 rounded-xl border border-emerald-400/30 bg-emerald-500/20 backdrop-blur-md flex flex-col items-center animate-in fade-in slide-in-from-bottom-2">
                 <CheckCircle2 className="text-emerald-400 mb-2" size={32} />
                 <span className="font-bold text-emerald-50 leading-snug tracking-wide text-center">
                   🎉 You're on the list! Your Early Access Beta Token has been reserved.
                 </span>
               </div>
           ) : (
             <form onSubmit={handleSubmit} className="flex relative">
               <input 
                 type="email" 
                 required
                 placeholder="Enter your email address" 
                 className="w-full pl-6 pr-32 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-white/80 outline-none focus:bg-white/20 focus:border-white/40 transition-all shadow-xl font-medium"
               />
               <button type="submit" className="absolute right-2 top-2 bottom-2 bg-white text-rose-600 px-6 rounded-full font-bold text-sm tracking-wide shadow-md hover:bg-slate-50 transition-transform active:scale-95 flex items-center justify-center gap-2 group">
                 Register <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </button>
             </form>
           )}
        </div>
        
      </div>
    </section>
  );
}
