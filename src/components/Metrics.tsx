export default function Metrics() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
         <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-center">
            {/* Metric 1 */}
            <div className="p-6">
               <div className="text-6xl md:text-7xl font-black mb-4 lekto-text-gradient tracking-tighter">
                  90<span className="text-4xl md:text-5xl">%</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Faster Study Synthesis</h3>
               <p className="text-slate-500 font-medium text-sm">Automated processing cuts down preparation time drastically.</p>
            </div>

            {/* Metric 2 */}
            <div className="p-6">
               <div className="text-6xl md:text-7xl font-black mb-4 lekto-text-gradient tracking-tighter">
                  3<span className="text-4xl md:text-5xl">x</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Engagement Increase</h3>
               <p className="text-slate-500 font-medium text-sm">Achieved through gamified Co-Op Sprints and interactive modules.</p>
            </div>

            {/* Metric 3 */}
            <div className="p-6">
               <div className="text-6xl md:text-7xl font-black mb-4 lekto-text-gradient tracking-tighter">
                  100<span className="text-4xl md:text-5xl">%</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Infinite Scalability</h3>
               <p className="text-slate-500 font-medium text-sm">Seamlessly scaling horizontally on a pure Serverless Architecture.</p>
            </div>
         </div>
      </div>
    </section>
  );
}
