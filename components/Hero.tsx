import React from 'react';
import { Code2, Server, Layers, Box, Cpu, ChevronDown } from 'lucide-react';
import TextReveal from './ui/TextReveal';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
          className="w-full h-full object-cover filter grayscale contrast-125"
          alt="Code Background"
        />
        <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 opacity-20 animate-float" style={{ animationDelay: '0s' }}>
        <Box className="w-24 h-24 text-cyan-500" />
      </div>
      <div className="absolute bottom-1/3 right-20 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
        <Cpu className="w-16 h-16 text-cyan-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        <div className="lg:col-span-8">
          <div className="mb-4">
            <TextReveal 
              text="Architecting Digital Luxury" 
              className="text-cyan-400 tracking-[0.2em] text-xs uppercase" 
            />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-white tracking-tighter leading-[0.9] mb-6 mix-blend-screen">
            <div className="block">
              <TextReveal text="ABDUL" delayOffset={200} />
            </div>
            <div className="block">
              <TextReveal text="MOTTALIB" delayOffset={600} />
            </div>
          </h1>
          
          <div className="animate-[fadeIn_1s_ease-out_1.2s_forwards] opacity-0">
             <p className="text-lg md:text-xl text-slate-400 max-w-2xl font-light tracking-wide border-l-2 border-cyan-500 pl-6">
              Full-stack partner for founders, small business owners, and teams
              who need modern, fast websites that are easy to manage and actually
              help close more customers.
            </p>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex gap-4">
                {[Code2, Server, Layers].map((Icon, i) => (
                  <div key={i} className="p-2 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-cyan-500/50 transition-colors">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="hidden lg:block lg:col-span-4 relative animate-[fadeIn_1s_ease-out_1.5s_forwards] opacity-0">
          <div className="relative w-full aspect-square bg-black/40 backdrop-blur-xl border border-white/5 rounded-full p-8 flex items-center justify-center">
            {/* Decor Rings */}
            <div className="absolute inset-0 border border-cyan-500/10 rounded-full scale-75"></div>
            <div className="absolute inset-0 border border-cyan-500/5 rounded-full scale-50"></div>

            {/* SVG Radar */}
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <polygon
                points="50,10 90,35 80,80 20,80 10,35"
                fill="rgba(6,182,212,0.1)"
                stroke="rgba(6,182,212,0.8)"
                strokeWidth="0.5"
                className="stroke-dasharray-[1000] stroke-dashoffset-[1000] animate-[drawRadar_2s_ease-out_forwards_2s]"
              ></polygon>
              {/* Nodes */}
              {[
                 { cx: 50, cy: 10, align: "middle", yOff: -5, text: "Frontend" },
                 { cx: 90, cy: 35, align: "start", yOff: 0, text: "Backend" },
                 { cx: 80, cy: 80, align: "start", yOff: 8, text: "DevOps" },
                 { cx: 20, cy: 80, align: "end", yOff: 8, text: "Design" },
                 { cx: 10, cy: 35, align: "end", yOff: 0, text: "Strategy" }
              ].map((node, i) => (
                 <React.Fragment key={i}>
                   <circle cx={node.cx} cy={node.cy} r="1.5" fill="#fff"></circle>
                   <text
                    x={node.cx}
                    y={node.cy + (node.yOff || 5)}
                    textAnchor={node.align}
                    fill="#94a3b8"
                    fontSize="3"
                    className="uppercase tracking-widest font-semibold"
                   >
                     {node.text}
                   </text>
                 </React.Fragment>
              ))}
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyan-400" />
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawRadar {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </header>
  );
};

export default Hero;