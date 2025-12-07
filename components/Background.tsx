import React from 'react';

const Background: React.FC = () => {
  return (
    <>
      {/* Scanlines */}
      <div className="fixed inset-0 pointer-events-none h-screen w-screen z-50 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px]"></div>

      {/* Background Particles/Stars */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-full h-full opacity-60"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.03) 0%, transparent 50%),
              linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 4rem 4rem, 4rem 4rem',
            backgroundPosition: 'center, 0 0, 0 0'
          }}
        ></div>
        <div 
          className="stars opacity-20 absolute w-px h-px bg-transparent"
          style={{
            boxShadow: '1744px 122px #FFF, 134px 1321px #FFF, 452px 663px #FFF, 1200px 300px #FFF, 500px 800px #FFF, 100px 500px #FFF, 900px 100px #FFF',
            animation: 'animStar 50s linear infinite'
          }}
        ></div>
      </div>
    </>
  );
};

export default Background;