import React from 'react';

interface TextRevealProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = "", delayOffset = 0 }) => {
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block opacity-0 animate-[char-reveal_0.8s_cubic-bezier(0.2,0.8,0.2,1)_forwards]"
          style={{ 
            animationDelay: `${delayOffset + (index * 60)}ms`,
            whiteSpace: char === ' ' ? 'pre' : 'normal'
          }}
        >
          {char}
        </span>
      ))}
      <style>{`
        @keyframes char-reveal {
          0% {
            opacity: 0;
            transform: translateY(1.5rem);
            filter: blur(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </span>
  );
};

export default TextReveal;