import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/"
          onClick={(e) => handleScroll(e, 'top')}
          className="font-brand tracking-widest text-lg text-white hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
        >
          AM
          <span className="text-cyan-500 text-xs align-top">DEV</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
          <a href="#process" onClick={(e) => handleScroll(e, 'process')} className="hover:text-cyan-400 transition-colors cursor-pointer">Process</a>
          <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="hover:text-cyan-400 transition-colors cursor-pointer">Work</a>
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button 
          type="button"
          className="md:hidden text-white p-2 hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6 text-center z-50 shadow-2xl">
           <a href="#process" onClick={(e) => handleScroll(e, 'process')} className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 py-2">Process</a>
           <a href="#work" onClick={(e) => handleScroll(e, 'work')} className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 py-2">Work</a>
           <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-sm uppercase tracking-widest text-slate-300 hover:text-cyan-400 py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;