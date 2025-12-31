import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LINKS, IMAGES } from '../constants';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  // Generate thickness layers for the 3D coin effect
  // Spread from -15px to 15px to connect the two faces (at +/- 16px)
  const thicknessLayers = Array.from({ length: 32 }).map((_, i) => {
    const z = i - 15.5; 
    return (
      <div
        key={i}
        className="absolute inset-[2px] rounded-full bg-cyan-600 border border-cyan-400/30 z-0"
        style={{
          transform: `translateZ(${z}px)`,
          width: 'calc(100% - 4px)',
          height: 'calc(100% - 4px)',
        }}
      />
    );
  });

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-95"></div>
         {/* Abstract Cyber Background Image - Low Opacity */}
         <img 
            src={IMAGES.HERO_BRAIN} 
            alt="AI Network Background" 
            className="w-full h-full object-cover opacity-10"
         />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 space-y-8 z-20">
          <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 bg-amber-900/10 text-amber-400 text-sm font-semibold tracking-wide uppercase mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            Democratizing Intelligence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Control <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-amber-500">AI Token</span>
          </h1>
          
          <p className="mt-4 text-xl text-gray-300 max-w-2xl">
             A groundbreaking concept designed to democratize the governance of artificial intelligence. Don't let the future be owned by the few.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={LINKS.STON_FI} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-cyan-700 to-blue-800 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:scale-105 flex items-center justify-center border border-cyan-500/30"
            >
              Buy on Ston.fi <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <button 
                onClick={() => document.getElementById(SectionId.CONTRACT)?.scrollIntoView({behavior: 'smooth'})}
                className="px-8 py-4 glass-panel border border-gray-600 hover:border-amber-500/50 rounded-lg text-white font-bold text-lg transition-all"
            >
              View Contract
            </button>
          </div>
        </div>

        {/* 3D Token Visualization */}
        <div className="md:w-1/2 mt-20 md:mt-0 flex justify-center items-center perspective-1000 z-10">
          
          {/* Floating Animation */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 transform-style-3d animate-[float_6s_ease-in-out_infinite]">
             
             {/* Spinning Container - Continuous Rotation */}
             <div className="absolute inset-0 transform-style-3d animate-spin-3d">
                 
                 {/* 1. Glow Behind Token */}
                 <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-[60px]" style={{ transform: 'translateZ(-50px)' }}></div>

                 {/* 2. EDGE LAYERS (The Thickness) */}
                 {/* Rendered directly in the container to preserve 3D context */}
                 {thicknessLayers}

                 {/* 3. FRONT FACE: CAI TEXT */}
                 <div 
                    className="absolute inset-0 rounded-full border-[3px] border-cyan-400 bg-cyan-800 backface-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] overflow-hidden z-20"
                    style={{ transform: 'translateZ(16px)' }}
                 >
                    {/* Vivid Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-900 opacity-100"></div>

                    {/* Circuit Pattern */}
                    <div className="absolute inset-0 opacity-40" style={{ 
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                        backgroundSize: '24px 24px'
                    }}></div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                         <h2 className="text-8xl md:text-9xl font-black font-orbitron text-white tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                           CAI
                         </h2>
                         <div className="mt-2 px-3 py-1 bg-black/40 border border-cyan-300/50 rounded-full text-xs font-bold tracking-[0.3em] text-cyan-200 uppercase">
                            Control AI
                         </div>
                    </div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent skew-x-12 animate-shine pointer-events-none"></div>
                 </div>

                 {/* 4. BACK FACE: TECH CIRCUIT (No Photo) */}
                 <div 
                    className="absolute inset-0 rounded-full border-[3px] border-cyan-400 bg-gray-900 backface-hidden shadow-[0_0_20px_rgba(6,182,212,0.3)] overflow-hidden z-20"
                    style={{ transform: 'rotateY(180deg) translateZ(16px)' }}
                 >
                    {/* Darker Tech Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-cyan-950"></div>
                    
                    {/* Hexagonal/Grid Pattern */}
                    <div className="absolute inset-0 opacity-20" style={{ 
                        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6,182,212,0.4) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                    }}></div>

                    {/* Concentric Circles / Chip Design */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Outer Ring */}
                        <div className="w-[70%] h-[70%] rounded-full border border-cyan-500/20 flex items-center justify-center">
                           {/* Middle Ring */}
                           <div className="w-[70%] h-[70%] rounded-full border border-cyan-400/30 border-dashed flex items-center justify-center">
                              {/* Inner Core */}
                              <div className="w-12 h-12 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] animate-pulse"></div>
                           </div>
                        </div>
                    </div>
                    
                    {/* Overlay to ensure visibility of border */}
                    <div className="absolute inset-0 rounded-full border-[2px] border-white/5 pointer-events-none"></div>
                 </div>

             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        @keyframes shine {
            0%, 100% { transform: translateX(-150%) skewX(-20deg); }
            50% { transform: translateX(150%) skewX(-20deg); }
        }
        
        .animate-shine {
            animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;