import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket } from 'lucide-react';

export default function Toast() {
  const [toast, setToast] = useState<{ message: string; id: number } | null>(null);

  useEffect(() => {
    const handleShowToast = (e: CustomEvent) => {
      const id = Date.now();
      setToast({ message: e.detail, id });
      
      setTimeout(() => {
        setToast((current) => current?.id === id ? null : current);
      }, 3000);
    };

    window.addEventListener('show-toast', handleShowToast as EventListener);
    return () => window.removeEventListener('show-toast', handleShowToast as EventListener);
  }, []);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: 50, scale: 0.9, x: "-50%" }}
          animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
          exit={{ opacity: 0, scale: 0.9, y: 20, x: "-50%" }}
          className="fixed bottom-8 left-1/2 z-[100] flex items-center gap-3 bg-slate-900 p-4 pr-6 rounded-full shadow-2xl border border-slate-700 w-max max-w-[90vw]"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white shrink-0 shadow-inner">
            <Rocket size={18} />
          </div>
          <span className="font-bold text-white text-sm">{toast.message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
