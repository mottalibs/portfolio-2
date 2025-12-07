
import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import ProjectModal, { ProjectDetails } from './ui/ProjectModal';

const PROJECTS: ProjectDetails[] = [
  {
    title: "FinTech Dashboard",
    subtitle: "Enterprise Financial Analytics Platform",
    tech: "NEXT.JS / TYPESCRIPT / TAILWIND",
    year: "2023",
    role: "Lead Architect",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Recharts", "Prisma", "PostgreSQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    description: "A comprehensive financial dashboard designed for high-volume trading firms. This platform aggregates real-time market data, providing traders with sub-second analytics and customizable visualization tools to make informed decisions.",
    challenge: "Handling real-time websocket data for 50+ tickers simultaneously without UI freezing or performance degradation on lower-end devices.",
    solution: "Implemented a custom WebWorker architecture to offload data parsing and calculation from the main thread, resulting in a consistent 60fps experience even during high volatility.",
    features: [
      "Real-time WebSocket Data Streaming",
      "Customizable Drag-and-Drop Layouts",
      "Advanced Charting with Technical Indicators",
      "Role-based Access Control (RBAC)",
      "Automated PDF Report Generation"
    ]
  },
  {
    title: "Luxe Commerce",
    subtitle: "Headless Shopify Storefront",
    tech: "SHOPIFY HEADLESS / GRAPHQL",
    year: "2024",
    role: "Full Stack Developer",
    technologies: ["Shopify Plus", "React", "GraphQL", "Framer Motion", "Sanity CMS"],
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    tall: true,
    description: "A bespoke e-commerce experience for a luxury fashion brand. Moving away from standard templates, we built a headless architecture that allows for immersive storytelling, smooth page transitions, and a 100% custom checkout flow.",
    challenge: "Achieving a perfect 'Core Web Vitals' score while using heavy, high-fidelity imagery and complex animations throughout the customer journey.",
    solution: "Utilized next-gen image formats (AVIF) with adaptive loading strategies and granular code-splitting. Animations were optimized using GPU-accelerated layers.",
    features: [
      "Headless Shopify Integration",
      "Sanity CMS for Rich Content",
      "Immersive Page Transitions",
      "AI-Powered Sizing Recommendations",
      "Multi-currency & Multi-language Support"
    ]
  },
  {
    title: "AI SaaS Platform",
    subtitle: "Generative Content Studio",
    tech: "REACT / PYTHON / OPENAI",
    year: "2023",
    role: "Senior Developer",
    technologies: ["React", "Python", "FastAPI", "OpenAI API", "Celery", "Redis"],
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    description: "A SaaS platform enabling marketing teams to generate on-brand social media content using custom-trained AI models. The system manages user credits, content history, and fine-tuning pipelines.",
    challenge: "Managing long-running generation tasks (text & image) without timing out HTTP requests or confusing the user interface.",
    solution: "Designed an asynchronous task queue system using Celery and Redis. The frontend utilizes polling and websockets to provide real-time progress updates to the user.",
    features: [
      "Custom LLM Fine-tuning Pipeline",
      "Credits & Subscription Management",
      "Real-time Content Generation",
      "Team Collaboration Workspace",
      "One-click Social Publishing"
    ]
  },
  {
    title: "Crypto Exchange",
    subtitle: "Decentralized Trading Interface",
    tech: "WEB3 / SOLIDITY / VUE",
    year: "2022",
    role: "Frontend Engineer",
    technologies: ["Vue.js 3", "Ethers.js", "Solidity", "Pinia", "Hardhat"],
    img: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?q=80&w=1000&auto=format&fit=crop",
    description: "A decentralized exchange (DEX) aggregator interface that routes trades through the most efficient liquidity pools. Focused on trust, transparency, and minimizing gas fees for users.",
    challenge: "Simplifying the complex concepts of slippage, gas fees, and wallet connection for non-technical users entering the DeFi space.",
    solution: "Created a 'Lite Mode' interface that abstracts away complex parameters with smart defaults, while retaining a 'Pro Mode' for advanced traders.",
    features: [
      "Multi-wallet Support (MetaMask, WalletConnect)",
      "Smart Order Routing",
      "Real-time Gas Estimation",
      "Portfolio Tracking & History",
      "Dark/Light Theme Toggle"
    ]
  },
  {
    title: "AR Architecture",
    subtitle: "Web-based Architectural Visualization",
    tech: "THREE.JS / WEBGL",
    year: "2024",
    role: "Creative Coder",
    technologies: ["Three.js", "React Three Fiber", "WebGL", "Blender", "AWS S3"],
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=1000&auto=format&fit=crop",
    description: "A web-based platform for real estate developers to showcase pre-construction properties. Users can explore 3D models directly in the browser without plugins.",
    challenge: "Loading high-polygon architectural models (100MB+) in a web browser instantly without making the user wait.",
    solution: "Developed a custom GLTF compression pipeline and implemented aggressive level-of-detail (LOD) systems. Models stream in progressively.",
    features: [
      "Interactive 3D Walkthroughs",
      "Sunlight/Shadow Simulation",
      "Material Customization",
      "VR Headset Support",
      "Screenshot Capture Tool"
    ]
  },
  {
    title: "Neural Net Viz",
    subtitle: "Educational Data Science Tool",
    tech: "D3.JS / TENSORFLOW",
    year: "2022",
    role: "Data Visualization Specialist",
    technologies: ["D3.js", "TensorFlow.js", "SVG", "React", "Math.js"],
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop",
    description: "An interactive educational tool visualizing how neural networks 'learn' in real-time. Built for a university data science curriculum to help students grasp backpropagation.",
    challenge: "Visualizing thousands of weights and biases updating 60 times per second without crashing the browser's DOM.",
    solution: "Bypassed standard DOM manipulation in favor of a canvas-based rendering engine synced with the TensorFlow.js training loop.",
    features: [
      "Live Training Visualization",
      "Interactive Hyperparameter Tuning",
      "Custom Dataset Upload",
      "Layer Inspection Tool",
      "Export Model to JSON"
    ]
  }
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);

  return (
    <section id="work" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-16 border-b border-white/10 pb-4">
          <h3 className="text-4xl font-light text-white tracking-tight">
            Selected Works
          </h3>
          <span className="text-cyan-500 font-mono text-xs">02 // PORTFOLIO</span>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => setSelectedProject(project)}
              className="group break-inside-avoid relative rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            >
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-colors z-20 border-2 border-transparent group-hover:border-cyan-400/50 rounded-xl"></div>
              
              {/* Overlay Icon */}
              <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/70 backdrop-blur-sm p-3 rounded-full border border-cyan-500/50">
                  <Maximize2 className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              <img
                src={project.img}
                className={`w-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0 ${project.tall ? 'h-[500px]' : 'h-64 md:h-80'}`}
                alt={project.title}
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-300 z-30">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-white font-medium text-lg">{project.title}</h4>
                    <p className="text-xs text-cyan-400 font-mono mt-1">{project.tech}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Portfolio;
