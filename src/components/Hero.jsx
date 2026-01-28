import React from 'react';
import heroBg from '../assets/hero-bg.png'; // Ensure this matches your file extension (.png or .jpeg)

const Hero = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 pt-36 pb-5 overflow-hidden">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 z-10">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0ms' }}>
          SamShoDhana
        </h1>
        
        {/* Badge */}
        <div className="bg-white inline-block px-4 py-2 rounded-full shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="font-bold text-brand-purple text-sm md:text-base">Karnataka • Rural MSME Innovation Program</span>
        </div>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          Building 3,000+ solutions and 1,550+ scalable products for Karnataka’s 
          rural MSMEs - powered by student teams, mentors, and investor-ready demo days.
        </p>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          {[
            { label: "Solutions", val: "3000+" },
            { label: "Products", val: "1550+" },
            { label: "Professionals", val: "6700+" },
            { label: "Participants", val: "10,000+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-xl text-center shadow-sm hover:scale-105 transition-transform">
              <div className="text-gray-700 font-bold text-xs md:text-sm">{stat.label}</div>
              <div className="text-xl md:text-2xl font-bold text-blue-900">{stat.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image - DRAWING + ORBIT EFFECT */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10 h-[300px] md:h-[400px]">
        <div className="relative w-full max-w-md">
            
            {/* LAYER 1: The "Sketch" (Appears First) */}
            <img 
              src={heroBg} 
              alt="Karnataka Map Sketch" 
              className="absolute top-0 left-0 w-full h-auto object-contain animate-draw-reveal"
              style={{
                filter: 'grayscale(100%) contrast(150%) brightness(120%) drop-shadow(0 0 1px black)',
                opacity: 0.7
              }}
            />

            {/* LAYER 2: The "Real Color" + "Orbiting Border" */}
            <img 
              src={heroBg} 
              alt="Karnataka Map Real" 
              // ADDED 'animate-orbit-border' HERE
              className="absolute top-0 left-0 w-full h-auto object-contain animate-color-fill animate-orbit-border"
            />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        /* 1. Fade In Up Animation */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
        }

        /* 2. Sketch Drawing Animation */
        @keyframes draw-reveal {
            0% { clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%); opacity: 1; }
            50% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; }
            100% { opacity: 0; }
        }
        .animate-draw-reveal {
            animation: draw-reveal 3s ease-in-out forwards;
        }

        /* 3. Color Fill Animation */
        @keyframes color-fill {
            0% { opacity: 0; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-color-fill {
            animation: color-fill 3s ease-in-out forwards;
        }

        /* 4. ORBITING BORDER ANIMATION (The moving light) */
        @keyframes orbit-border {
            0% { filter: drop-shadow(4px 0px 0px rgba(37, 99, 235, 1)); }
            25% { filter: drop-shadow(0px 4px 0px rgba(37, 99, 235, 1)); }
            50% { filter: drop-shadow(-4px 0px 0px rgba(37, 99, 235, 1)); }
            75% { filter: drop-shadow(0px -4px 0px rgba(37, 99, 235, 1)); }
            100% { filter: drop-shadow(4px 0px 0px rgba(37, 99, 235, 1)); }
        }
        .animate-orbit-border {
            /* Runs forever */
            animation: orbit-border 3s linear infinite, color-fill 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;