import { X, Check } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">The Shift</h2>
          <p className="text-slate-600 mt-4 font-medium uppercase tracking-widest text-sm">Why students are leaving traditional methods behind</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center lg:gap-12">
          {/* The Old Way */}
          <div className="bg-slate-100 p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-inner">
            <h3 className="text-2xl font-bold text-slate-700 mb-8 flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                 <X size={20} className="stroke-[3]" />
               </div>
               The Old Way
            </h3>
            <ul className="space-y-6">
              {[
                "Drowning in dense, unreadable PDFs",
                "Messy, disorganized hand-written notes",
                "Isolated studying with zero feedback",
                "Static, generic practice exams"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-600 font-medium">
                  <X size={20} className="shrink-0 mt-0.5 text-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The LEKTO Way */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] lekto-border-gradient shadow-xl relative overflow-hidden group">
            <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[1.5rem]"></div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3 relative z-10">
               <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500">
                 <Check size={20} className="stroke-[3]" />
               </div>
               The LEKTO Way
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "1-click smart document synthesis",
                "Automated, personalized mock exams",
                "Collaborative live co-op sprints",
                "Real-time, interactive learning paths"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-slate-800 font-bold">
                  <Check size={20} className="shrink-0 mt-0.5 text-orange-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
