import React, { useState } from 'react';
import { Star, ShieldCheck, BadgeCheck, Smile, Mail, MapPin, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative z-10">
      {/* Decoration */}
      <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
                20+ Client Reviews
              </span>
            </div>
            <div className="flex flex-wrap gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-slate-400">
              <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Trusted</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/5">
                <BadgeCheck className="w-3 h-3 text-cyan-400" />
                <span>On-Time</span>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full border border-indigo-500/40 bg-indigo-500/5">
                <Smile className="w-3 h-3 text-indigo-400" />
                <span>Friendly</span>
              </div>
            </div>
          </div>
          
          <h3 className="text-6xl md:text-7xl font-semibold text-white tracking-tighter mb-6 leading-none">
            LET'S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-600 animate-pulse">
              REVENUE
            </span>
          </h3>
          <p className="text-slate-400 mb-10 max-w-md font-light text-lg">
            Available for websites, product launches, and ongoing retainers.
            Clear pricing, weekly check-ins, and zero jargon.
          </p>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:contact@abdulmottalib.dev"
              className="group flex items-center gap-4 text-xl text-white hover:text-cyan-400 transition-colors"
            >
              <div className="p-3 border border-white/10 rounded-full group-hover:border-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-light tracking-wide">contact@abdulmottalib.dev</span>
            </a>
            <div className="group flex items-center gap-4 text-xl text-white hover:text-cyan-400 transition-colors">
              <div className="p-3 border border-white/10 rounded-full group-hover:border-cyan-400 transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-light tracking-wide">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* 3D Form */}
        <TiltCard>
          <div className="bg-black/40 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            <h4 className="text-2xl font-light text-white mb-6 tracking-tight">
              Booking Inquiry
            </h4>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400" />
                    ))}
                  </div>
                  <span className="uppercase tracking-[0.25em]">
                    Avg. rating
                  </span>
                </div>
                <div className="hidden md:flex items-center gap-1 text-[0.65rem] uppercase tracking-[0.2em] text-emerald-400">
                  <Sparkles className="w-3 h-3" />
                  <span>Most projects launch in 4‑8 weeks</span>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-slate-500">Name</label>
                <input
                  type="text"
                  required
                  disabled={formState !== 'idle'}
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 disabled:opacity-50"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-slate-500">Email</label>
                <input
                  type="email"
                  required
                  disabled={formState !== 'idle'}
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 disabled:opacity-50"
                  placeholder="you@company.com"
                />
              </div>
              
              <div className="space-y-1">
                <label className="text-xs uppercase tracking-widest text-slate-500">Project Details</label>
                <textarea
                  rows={4}
                  required
                  disabled={formState !== 'idle'}
                  className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-700 disabled:opacity-50"
                  placeholder="Tell me about your vision..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-4 rounded font-medium tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                  formState === 'success' 
                    ? 'bg-emerald-600 text-white' 
                    : formState === 'submitting'
                    ? 'bg-cyan-900 text-slate-300 cursor-wait'
                    : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    Initiate Sequence
                  </>
                )}
                {formState === 'submitting' && (
                  <>
                    <Send className="w-4 h-4 animate-pulse" />
                    Processing...
                  </>
                )}
                {formState === 'success' && (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    Message Sent
                  </>
                )}
              </button>
            </form>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default Contact;