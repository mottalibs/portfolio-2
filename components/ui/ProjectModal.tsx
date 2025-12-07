
import React, { useEffect } from 'react';
import { X, ExternalLink, Calendar, User, Code2, CheckCircle2, Layers, Cpu } from 'lucide-react';

export interface ProjectDetails {
  title: string;
  subtitle: string;
  tech: string;
  img: string;
  year: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  features: string[];
  link?: string;
  tall?: boolean;
}

interface ProjectModalProps {
  project: ProjectDetails;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Handle click outside to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out_forwards]"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-5xl max-h-full overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] flex flex-col md:flex-row animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button (Mobile fixed / Desktop absolute) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-full transition-all border border-white/10 hover:border-red-500/50 backdrop-blur-md"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left Column: Image & Quick Stats */}
        <div className="w-full md:w-2/5 lg:w-1/3 bg-black/40 border-b md:border-b-0 md:border-r border-white/10 flex flex-col">
          <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 opacity-60"></div>
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Quick Links Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
               {project.link && (
                 <a 
                   href={project.link} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-cyan-900/20 w-full justify-center"
                 >
                   <ExternalLink className="w-4 h-4" />
                   Visit Live Site
                 </a>
               )}
            </div>
          </div>

          <div className="p-6 space-y-4 bg-[#0a0a0a]">
             <div className="grid grid-cols-2 gap-4">
               <div className="space-y-1">
                 <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500">
                   <Calendar className="w-3 h-3" />
                   <span>Year</span>
                 </div>
                 <p className="text-white font-medium">{project.year}</p>
               </div>
               <div className="space-y-1">
                 <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500">
                   <User className="w-3 h-3" />
                   <span>Role</span>
                 </div>
                 <p className="text-white font-medium">{project.role}</p>
               </div>
             </div>

             <div className="pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 mb-3">
                   <Layers className="w-3 h-3" />
                   <span>Tech Stack</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {project.technologies.map((tech, i) => (
                     <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-cyan-100/80">
                       {tech}
                     </span>
                   ))}
                 </div>
             </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto max-h-[80vh] md:max-h-[85vh] custom-scrollbar">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
            <p className="text-cyan-400 font-mono text-sm tracking-wide">{project.subtitle}</p>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-1 h-5 bg-cyan-500 rounded-full"></div>
                The Mission
              </h3>
              <p className="text-slate-400 leading-relaxed font-light">
                {project.description}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                 <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                   <span className="text-red-400">⚡</span> The Challenge
                 </h4>
                 <p className="text-sm text-slate-400 leading-relaxed">
                   {project.challenge}
                 </p>
              </div>
              <div className="bg-white/5 border border-white/5 rounded-xl p-5">
                 <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                   <span className="text-emerald-400">✓</span> The Solution
                 </h4>
                 <p className="text-sm text-slate-400 leading-relaxed">
                   {project.solution}
                 </p>
              </div>
            </div>

            <section>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-500" />
                Key Features
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-cyan-500/50 group-hover:text-cyan-400 transition-colors shrink-0 mt-0.5" />
                    <span className="text-slate-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
