import React from 'react';
import { LayoutTemplate, Box, Code2, Layers, Server, Database, Cloud, Sparkles, ShieldCheck, ChartLine } from 'lucide-react';

const TECH_ITEMS = [
  { icon: LayoutTemplate, label: 'React' },
  { icon: Box, label: 'Next.js' },
  { icon: Code2, label: 'TypeScript' },
  { icon: Layers, label: 'Tailwind' },
  { icon: Server, label: 'Node.js' },
  { icon: Database, label: 'Postgres' },
  { icon: Cloud, label: 'AWS' },
  { icon: Sparkles, label: 'Framer Motion' },
  { icon: ShieldCheck, label: 'Auth' },
  { icon: ChartLine, label: 'Analytics' },
  // Duplicate for seamless loop
  { icon: LayoutTemplate, label: 'React' },
  { icon: Box, label: 'Next.js' },
  { icon: Code2, label: 'TypeScript' },
  { icon: Layers, label: 'Tailwind' },
];

const TechStack: React.FC = () => {
  return (
    <section className="relative z-10 border-y border-white/5 bg-black/40">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center gap-10 overflow-hidden">
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-cyan-400">
            Tech Stack
          </span>
          <div className="h-px w-12 bg-gradient-to-r from-cyan-500/60 to-transparent"></div>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-10 items-center whitespace-nowrap animate-marquee text-slate-300/80 text-sm md:text-base">
            {TECH_ITEMS.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 uppercase tracking-[0.25em] text-xs md:text-[0.7rem]">
                <item.icon className="w-5 h-5 text-cyan-400" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;