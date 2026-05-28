export default function Roadmap() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none"></div>
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-white">Strategic Roadmap</h2>
          <p className="text-slate-400 font-medium uppercase tracking-widest text-sm">The Evolution of LEKTO AI</p>
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 hidden lg:block z-0"></div>
          
          {/* Active progress line up to phase 1 */}
           <div className="absolute top-1/2 left-0 w-1/3 h-[2px] bg-gradient-to-r from-rose-500 to-orange-500 -translate-y-1/2 hidden lg:block z-0"></div>

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {/* Phase 1 */}
            <div className="bg-slate-800/80 backdrop-blur border border-slate-700 p-8 rounded-[2rem] relative shadow-xl">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-8 lg:-translate-x-0 w-12 h-12 rounded-full border-4 border-slate-900 lekto-gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-orange-500/30">
                  P1
               </div>
               <div className="text-sm font-bold text-orange-400 uppercase tracking-widest mt-4 mb-2">Phase 1</div>
               <h3 className="text-2xl font-bold mb-4">Cognitive Foundation</h3>
               <p className="text-slate-300 font-medium leading-relaxed">
                  Establishing the core multi-modal tutoring engine. Deep learning models mapping knowledge topologies and providing instantaneous adaptive feedback.
               </p>
            </div>

            {/* Phase 2 */}
            <div className="bg-slate-800/40 backdrop-blur border border-slate-700 p-8 rounded-[2rem] relative mt-0 lg:mt-8">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-8 lg:-translate-x-0 w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm shadow-inner">
                  P2
               </div>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-4 mb-2">Phase 2</div>
               <h3 className="text-2xl font-bold mb-4">Social Learning Layer</h3>
               <p className="text-slate-400 font-medium leading-relaxed">
                  Introducing multiplayer shared study hubs, competitive peer co-op challenges, and real-time collaborative document synthesis environments.
               </p>
            </div>

            {/* Phase 3 */}
            <div className="bg-slate-800/40 backdrop-blur border border-slate-700 p-8 rounded-[2rem] relative mt-0 lg:mt-16">
               <div className="absolute -top-6 left-1/2 -translate-x-1/2 lg:left-8 lg:-translate-x-0 w-12 h-12 rounded-full border-4 border-slate-900 bg-slate-700 text-slate-300 flex items-center justify-center font-bold text-sm shadow-inner">
                  P3
               </div>
               <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-4 mb-2">Phase 3</div>
               <h3 className="text-2xl font-bold mb-4">Enterprise Integration</h3>
               <p className="text-slate-400 font-medium leading-relaxed">
                  B2B SaaS rollout featuring institutional licensing, isolated local data instances, cohort analytics dashboards, and custom curriculum tuning.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
