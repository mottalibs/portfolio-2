import React from 'react';
import { BrainCircuit, Hammer, Rocket } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
          <h3 className="text-4xl font-light text-white tracking-tight">
            The Methodology
          </h3>
          <span className="text-cyan-500 font-mono text-xs">01 // PROCESS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent -translate-y-1/2 z-0"></div>

          <TiltCard className="group relative z-10 p-1">
            <div className="bg-black/40 backdrop-blur-xl border border-white/5 hover:border-cyan-500/50 transition-colors h-full p-8 rounded-xl relative overflow-hidden">
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
               <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/50 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                 <BrainCircuit className="w-6 h-6" />
               </div>
               <h4 className="text-xl font-medium text-white mb-2">Ideate & Strategy</h4>
               <p className="text-sm text-slate-400 leading-relaxed">
                 We start with your goals—not the tech. From a local shop to a funded startup, we map out what success looks like.
               </p>
            </div>
          </TiltCard>

          <TiltCard className="group relative z-10 p-1">
            <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)] h-full p-8 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
               <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/30 bg-black/50 text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform duration-300">
                 <Hammer className="w-6 h-6" />
               </div>
               <h4 className="text-xl font-medium text-white mb-2">Build & Develop</h4>
               <p className="text-sm text-slate-400 leading-relaxed">
                 Writing clean, type-safe code. React/Next.js frontend married to scalable backends. Zero technical debt.
               </p>
            </div>
          </TiltCard>

          <TiltCard className="group relative z-10 p-1">
             <div className="bg-black/40 backdrop-blur-xl border border-white/5 hover:border-cyan-500/50 transition-colors h-full p-8 rounded-xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all"></div>
               <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-black/50 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                 <Rocket className="w-6 h-6" />
               </div>
               <h4 className="text-xl font-medium text-white mb-2">Scale & Optimize</h4>
               <p className="text-sm text-slate-400 leading-relaxed">
                 Performance tuning, SEO optimization, and infrastructure scaling via Vercel/AWS. Ensuring sub-100ms loads globally.
               </p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default Process;