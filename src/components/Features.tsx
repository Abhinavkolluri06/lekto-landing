import { Sparkles, Zap, Gamepad2, Wand2, Users, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: 'Context-Aware AI Tutoring',
    description: "An AI tutor that genuinely learns *you*. LEKTO analyzes your specific learning habits to curate personalized real-time paths.",
    icon: Sparkles,
  },
  {
    title: 'Zero-Lag Smart Analytics',
    description: 'Instantly map knowledge gaps. Real-time background infrastructure processes and updates your metrics the exact millisecond you complete a concept.',
    icon: Zap,
  },
  {
    title: 'Gamified Study Sprints',
    description: 'Ditch the dull text. Master complex subjects through physics-based interactive modules and collaborative co-op challenges.',
    icon: Gamepad2,
  },
  {
    title: '1-Click Knowledge Synthesis',
    description: 'Transform dense lectures, messy notes, or PDFs instantly into smart study kits, custom flashcards, and mock tests.',
    icon: Wand2,
  },
  {
    title: 'Connected Peer Co-Op',
    description: 'Launch shared, live study rooms with your peers, utilizing split-screen AI resources and competitive progress counters.',
    icon: Users,
  },
  {
    title: 'Unified Control Dashboard',
    description: 'A beautiful, premium web-based dashboard designed for smooth navigation, giving you complete visual mastery over your education.',
    icon: LayoutDashboard,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center md:text-left">Key Features</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-[1.5rem] bg-white lekto-border-gradient shadow-sm hover:shadow-lg transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[1.5rem]"></div>
                
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-rose-50 text-rose-500 border border-rose-100 relative z-10">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-3 relative z-10">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed relative z-10">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
