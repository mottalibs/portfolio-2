import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h5 className="font-brand text-2xl text-white mb-2">ABDUL MOTTALIB</h5>
          <p className="text-slate-600 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="group relative p-2 text-slate-400 hover:text-white transition-colors">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Github className="w-6 h-6 relative z-10" />
          </a>
          <a href="#" className="group relative p-2 text-slate-400 hover:text-white transition-colors">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Linkedin className="w-6 h-6 relative z-10" />
          </a>
          <a href="#" className="group relative p-2 text-slate-400 hover:text-white transition-colors">
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Twitter className="w-6 h-6 relative z-10" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;