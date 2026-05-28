import { FileText, Settings, Activity, Sparkles, LayoutGrid, Scan, MessageSquare, ClipboardCheck, CalendarCheck, BarChart2, Megaphone, Target, LogOut, Brain, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';
import { showToast } from '../utils/toast';

export default function Glimpse() {
  return (
    <section className="py-24 bg-slate-100 relative overflow-hidden" id="glimpse">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">A Glimpse of LEKTO</h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">Experience the Unified Control Dashboard</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-[1300px] mx-auto bg-[#f8fafc] rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-200 flex flex-col md:flex-row relative"
        >
          {/* Top Window Actions (Mac style) purely for aesthetics */}
          <div className="absolute top-4 left-4 flex gap-2 z-50 md:hidden">
             <div className="w-3 h-3 rounded-full bg-rose-400"></div>
             <div className="w-3 h-3 rounded-full bg-amber-400"></div>
             <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
          </div>

          {/* Sidebar */}
          <div className="hidden md:flex w-[260px] bg-[#1a202c] border-r border-[#2d3748] flex-col p-4 text-slate-300 shrink-0 relative overflow-hidden">
            {/* Decorative scrollbar line like in the image */}
            <div className="absolute right-1 top-24 bottom-24 w-[3px] bg-white/90 rounded-full z-20"></div>

            <div className="flex items-center gap-3 mb-10 mt-4 pl-2 relative z-10">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
                <Brain size={24} />
              </div>
              <span className="font-black text-2xl tracking-tight text-white">AI-LMS</span>
            </div>
            
            <div className="space-y-1 mb-8 relative z-10">
              <button onClick={() => showToast()} className="w-full px-4 py-3 text-[14px] font-semibold text-slate-400 hover:text-white transition-colors flex flex-row items-center gap-3">
                <LayoutGrid size={20} /> Dashboard
              </button>
            </div>

            <div className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-3 pl-4 relative z-10">AI Features</div>
            <div className="space-y-1 mb-8 relative z-10">
              <button onClick={() => showToast()} className="w-full px-4 py-3 text-[14px] font-semibold text-slate-400 hover:text-white transition-colors flex flex-row items-center gap-3">
                <Sparkles size={20} /> Lesson Architect
              </button>
              <button onClick={() => showToast()} className="w-full bg-[#242e40] rounded-xl px-4 py-3.5 text-[14px] font-bold flex flex-row items-center gap-3 border border-emerald-900/40 text-white relative overflow-hidden shadow-lg my-2">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-emerald-400"></div>
                <Scan size={20} className="text-emerald-400" /> Smart Grading
              </button>
              <button onClick={() => showToast()} className="w-full px-4 py-3 text-[14px] font-semibold text-slate-400 hover:text-white transition-colors flex flex-row items-center gap-3">
                <MessageSquare size={20} /> Parent Liaison
              </button>
            </div>

            <div className="text-[11px] text-slate-500 uppercase tracking-widest font-bold mb-3 pl-4 relative z-10">Tools</div>
            <div className="space-y-1 mb-8 relative z-10">
              <button onClick={() => showToast()} className="w-full px-4 py-2.5 text-[14px] font-semibold text-slate-400 hover:text-white transition-colors flex flex-row items-center gap-3">
                <ClipboardCheck size={20} /> Rubric Builder
              </button>
              <button onClick={() => showToast()} className="w-full px-4 py-2.5 text-[14px] font-semibold text-slate-400 hover:text-white transition-colors flex flex-row items-center gap-3">
                <CalendarCheck size={20} /> Attendance
              </button>
              <button onClick={() => showToast()} className="w-full px-4 py-2.5 text-[14px] font-semibold text-slate-400 hover:text-white transition-colors flex flex-row items-center gap-3">
                <BarChart2 size={20} /> Grade Book
              </button>
              <button onClick={() => showToast()} className="w-full px-4 py-2.5 text-[14px] font-semibold text-slate-400 hover:text-white transition-colors flex flex-row items-center gap-3">
                <Megaphone size={20} /> Announcements
              </button>
            </div>
          </div>

          {/* Center Content */}
          <div className="flex-1 p-6 md:p-12 pl-6 md:pl-16 bg-[#f8fafc] overflow-y-auto min-h-[500px]">
            <div className="flex flex-col xl:flex-row justify-between items-start mb-12 gap-6 mt-10 md:mt-0">
              <div>
                <h3 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-2">
                  Welcome<br/>back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">susan</span>
                </h3>
                <div className="flex items-center gap-2 text-slate-500 font-bold mt-4 tracking-wide">
                  <Activity size={20} /> Math • Science
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-100/50 rounded-full px-4 py-2 flex items-center gap-3 shadow-[0_4px_10px_rgba(16,185,129,0.1)]">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
                <span className="text-[10px] font-black text-emerald-900 uppercase tracking-widest opacity-60">AI Engine Status</span>
                <span className="text-[13px] font-bold text-emerald-600">Gemini 2.5 Online</span>
              </div>
            </div>

            {/* Saved Plans Card */}
            <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row items-center gap-8 mb-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-50"></div>
              <div className="w-20 h-20 rounded-[1.5rem] bg-indigo-50 border border-indigo-100/50 flex items-center justify-center text-indigo-500 shrink-0 shadow-inner">
                <FileText size={36} strokeWidth={1.5} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-2">Total Saved Plans</div>
                <div className="text-5xl md:text-6xl font-black text-slate-900 flex items-baseline justify-center md:justify-start gap-3">
                  0 <span className="text-xl md:text-2xl text-slate-500 font-semibold">Lessons</span>
                </div>
              </div>
              <div className="w-px h-24 bg-slate-100 hidden md:block"></div>
              <div className="flex-1 text-slate-500 font-medium text-[15px] leading-relaxed hidden lg:block max-w-[250px]">
                Your personal library of AI-generated curriculum is growing. Keep designing!
              </div>
            </div>

            {/* AI Input */}
            <div className="bg-white rounded-full shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-slate-100 p-2 md:p-2.5 flex items-center gap-3 mb-16 relative z-10 transition-transform focus-within:scale-[1.01] duration-300">
              <Sparkles className="text-indigo-400 ml-4 shrink-0" size={24} />
              <input type="text" placeholder="Draft a 5-min lesson..." className="flex-1 bg-transparent border-none outline-none text-slate-700 font-semibold text-lg placeholder:text-slate-300" />
              <button onClick={() => showToast()} className="bg-slate-900 text-white rounded-full px-6 md:px-8 py-3.5 md:py-4 font-bold text-[15px] flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg active:scale-95 shrink-0 whitespace-nowrap">
                Generate Magic <Sparkles size={18} className="text-amber-400" />
              </button>
            </div>

            {/* Quick Actions Header */}
            <div className="flex items-center gap-2 text-slate-900 font-black text-2xl mb-8">
              <Activity size={24} className="text-orange-500" /> Quick Actions
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pb-8">
               <button onClick={() => showToast()} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm pt-6 relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 text-left cursor-pointer">
                  <div className="absolute -inset-10 bg-gradient-to-br from-rose-50/50 via-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[2rem]"></div>
                  <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-rose-500 to-orange-500 text-white flex items-center justify-center mb-5 shadow-md relative z-10">
                     <FileText size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2 relative z-10">Grade Worksheets</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium relative z-10">Upload student work and let AI suggest grades instantly based on your custom rubric.</p>
               </button>
               <button onClick={() => showToast()} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm pt-6 relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 text-left cursor-pointer">
                  <div className="absolute -inset-10 bg-gradient-to-br from-blue-50/30 via-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[2rem]"></div>
                  <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center mb-5 shadow-md relative z-10">
                     <Users size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2 relative z-10">Parent Updates</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium relative z-10">Generate custom weekly summaries and progress reports automatically.</p>
               </button>
               <button onClick={() => showToast()} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm pt-6 relative overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1 text-left cursor-pointer">
                  <div className="absolute -inset-10 bg-gradient-to-br from-emerald-50/30 via-teal-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[2rem]"></div>
                  <div className="w-12 h-12 rounded-[1rem] bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center mb-5 shadow-md relative z-10">
                     <BookOpen size={20} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-2 relative z-10">Curriculum Planner</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium relative z-10">Align your next quarter's lesson plans with state standards effortlessly.</p>
               </button>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-[320px] bg-white p-8 border-l border-slate-200 shrink-0 hidden lg:flex flex-col relative z-20">
            <div className="flex flex-col items-center text-center mt-6">
              <div className="w-24 h-24 rounded-[2rem] bg-indigo-500 text-white text-4xl font-black flex items-center justify-center mb-6 shadow-[0_10px_30px_rgba(99,102,241,0.3)] border border-indigo-400">
                s
              </div>
              <h2 className="text-3xl font-black text-slate-900 mb-2">susan</h2>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                Senior Lead Educator<br/>Saint Mary's Academy
              </p>
            </div>

            {/* Academic Context */}
            <div className="mt-12 border border-slate-100 rounded-3xl p-7 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.03)] selection:bg-rose-100">
              <h3 className="text-[11px] font-black text-slate-400 tracking-widest uppercase mb-6">Academic Context</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-slate-500 font-semibold">Class</span>
                  <span className="font-black text-slate-900">Grade 10 - Advanced</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-slate-500 font-semibold">Section</span>
                  <span className="font-black text-slate-900">B-Block</span>
                </div>
                <div className="flex justify-between items-center text-[13px]">
                  <span className="text-slate-500 font-semibold">Subject</span>
                  <span className="font-black text-slate-900 text-right">Theoretical<br/>Physics</span>
                </div>
                <div className="pt-5 mt-3 border-t border-slate-100 flex justify-between items-center text-[13px]">
                  <span className="text-slate-500 font-semibold">Model</span>
                  <span className="font-black text-slate-900 flex items-center gap-2">
                    Gemini 1.5 <span className="bg-rose-50 border border-rose-100 text-rose-600 text-[10px] px-1.5 py-0.5 rounded shadow-sm font-black tracking-wider w-min">PRO</span>
                  </span>
                </div>
              </div>
            </div>

            {/* System Controls */}
            <div className="mt-6 border border-slate-100 rounded-3xl p-7 bg-slate-50/50 shadow-sm">
              <h3 className="text-[11px] font-black text-slate-400 tracking-widest uppercase mb-6">System Controls</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-slate-700 font-bold"><Settings size={18} className="text-slate-400"/> Dark Mode</span>
                  <button onClick={() => showToast()} className="w-11 h-6 bg-slate-200 rounded-full cursor-pointer relative transition-colors hover:bg-slate-300">
                    <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow"></div>
                  </button>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="flex items-center gap-2 text-slate-700 font-bold"><Activity size={18} className="text-slate-400"/> Compact View</span>
                  <button onClick={() => showToast()} className="w-11 h-6 bg-slate-200 rounded-full cursor-pointer relative transition-colors hover:bg-slate-300">
                    <div className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow"></div>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
