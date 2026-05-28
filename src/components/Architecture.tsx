import { Network, Server, BrainCircuit } from 'lucide-react';
import { motion } from 'motion/react';

export default function Architecture() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Infrastructure & Architecture</h2>
          <p className="text-slate-600 mt-4 font-medium uppercase tracking-widest text-sm">Engineered for infinite scalability</p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center mb-6 border border-rose-100 shadow-inner">
                <Network size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Edge Routing</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Low-latency API distribution ensuring instant delivery of content and global accessibility without bottlenecks.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6 border border-orange-100 shadow-inner">
                <Server size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Serverless Core</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                High-performance, stateless Go microservices designed for instant, real-time data synthesis and dynamic processing.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative group"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-500 flex items-center justify-center mb-6 border border-amber-100 shadow-inner">
                <BrainCircuit size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Model AI</h3>
              <p className="text-slate-600 font-medium leading-relaxed">
                Dynamic context-aware orchestration and routing for optimal unit economics, extreme cost efficiency, and accuracy.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
