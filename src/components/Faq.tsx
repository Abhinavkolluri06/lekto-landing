import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "When will the LEKTO platform be officially available?",
    a: "We are currently rolling out early access to our waitlist members in batches. The public beta will officially launch very soon. Join the waitlist to secure your spot."
  },
  {
    q: "How does the context-aware AI tutoring actually work?",
    a: "Our AI engine analyzes your interaction patterns, quiz performance, and reading speed in real-time. It then dynamically adjusts the difficulty, format, and pacing of the content to match your unique learning style."
  },
  {
    q: "Can I use the Peer Co-Op feature with classmates?",
    a: "Absolutely! The Peer Co-Op allows you to invite friends to secure, live study rooms where you can collaboratively solve problems, share synthesized notes, and compete in gamified sprint challenges."
  }
];

export default function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[800px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 font-medium tracking-wide">Everything you need to know about the platform.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
               key={idx} 
               className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIdx === idx ? 'border-orange-200 bg-orange-50/30 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}`}
            >
              <button 
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-slate-800 text-lg pr-8 tracking-tight">{faq.q}</span>
                <ChevronDown className={`shrink-0 text-slate-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-orange-500' : ''}`} />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-600 font-medium leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
