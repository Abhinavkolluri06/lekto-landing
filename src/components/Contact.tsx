import { Mail, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Ready to transform <br/>
              <span className="lekto-text-gradient">education?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
              Join our public beta today or reach out to our team to discover how LEKTO can be customized for your institution.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-rose-500 shadow-sm">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</div>
                  <div className="font-semibold text-slate-800">lektocompany@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-orange-500 shadow-sm">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Location</div>
                  <div className="font-semibold text-slate-800">HYDERABAD, INDIA</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-amber-400/30">
               <Sparkles size={20} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 pl-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-rose-400 focus:ring-1 focus:ring-rose-400 bg-slate-50 transition-all font-medium" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 pl-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 bg-slate-50 transition-all font-medium" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 pl-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 bg-slate-50 transition-all font-medium resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full py-4 mt-2 rounded-xl lekto-gradient text-white font-bold tracking-wide shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group">
                Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
