import { useState } from 'react';
import { Facebook, Twitter, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';
import { showToast } from '../utils/toast';

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-[1000px] mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="font-bold text-slate-900 mb-6">About Lekto</h4>
            <ul className="space-y-3 text-sm font-medium text-slate-600">
              <li><a href="#" className="hover:text-rose-500 transition-colors">Home</a></li>
              <li><a href="#features" className="hover:text-rose-500 transition-colors">Features</a></li>
              <li><button onClick={() => showToast()} className="hover:text-rose-500 transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => showToast()} className="hover:text-rose-500 transition-colors">Blog</button></li>
              <li><a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Social Media</h4>
             <div className="flex gap-4">
               <button onClick={() => showToast()} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"><Facebook size={14}/></button>
               <button onClick={() => showToast()} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"><Twitter size={14}/></button>
               <button onClick={() => showToast()} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors"><Instagram size={14}/></button>
             </div>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Newsletter</h4>
            <p className="text-sm text-slate-600 mb-4">Sign up for newsletter, updates, and massive newsletter.</p>
            {isSubmitted ? (
               <div className="p-3 rounded-lg border border-emerald-400/30 bg-emerald-50 text-emerald-700 flex gap-2 items-start animate-in fade-in slide-in-from-bottom-2">
                 <CheckCircle2 className="shrink-0 mt-0.5" size={16} />
                 <span className="font-bold text-xs leading-snug">
                   🎉 You're on the list! Your Early Access Beta Token has been reserved.
                 </span>
               </div>
            ) : (
               <form onSubmit={handleSubmit} className="flex relative">
                 <input type="email" required placeholder="Enter your e-mail" className="w-full pl-4 pr-12 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 bg-white" />
                 <button type="submit" className="absolute right-1 top-1 bottom-1 px-4 rounded-md lekto-gradient text-white flex items-center justify-center hover:opacity-90">
                   <ArrowRight size={16} />
                 </button>
               </form>
            )}
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 text-center text-sm font-medium text-slate-500">
          <p>© 2026 LEKTO AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
