import React from 'react';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-12 pt-36 pb-16">
      
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6 z-10">
        
        {/* Title: Fades in immediately (0ms delay) */}
        <h1 className="text-6xl font-extrabold text-blue-900 tracking-tight opacity-0 animate-fade-in" style={{ animationDelay: '0ms' }}>
          SamShoDhana
        </h1>
        
        {/* Badge: Fades in after 200ms */}
        <div className="bg-white inline-block px-4 py-2 rounded-full shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <span className="font-bold text-brand-purple">Karnataka • Rural MSME Innovation Program</span>
        </div>
        
        {/* Description: Fades in after 400ms */}
        <p className="text-xl text-gray-700 font-medium leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          Building 3,000+ solutions and 1,550+ scalable products for Karnataka’s 
          rural MSMEs - powered by student teams, mentors, and investor-ready demo days.
        </p>
        
        {/* Stats Grid: Fades in after 600ms */}
        <div className="grid grid-cols-4 gap-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '600ms' }}>
          {[
            { label: "Solutions", val: "3000+" },
            { label: "Products", val: "1550+" },
            { label: "Professionals", val: "6700+" },
            { label: "Participants", val: "10,000+" }
          ].map((stat, index) => (
            <div key={index} className="bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-xl text-center shadow-sm hover:scale-105 transition-transform">
              <div className="text-gray-700 font-bold text-sm">{stat.label}</div>
              <div className="text-2xl font-bold text-blue-900">{stat.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image - DRAWING EFFECT (Kept exactly as you liked it) */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative z-10 h-[400px]">
        <div className="relative w-full max-w-md">
            
            {/* LAYER 1: The "Sketch" */}
            <img 
              src={heroBg} 
              alt="Karnataka Map Sketch" 
              className="absolute top-0 left-0 w-full h-auto object-contain animate-draw-reveal"
              
              style={{
                filter: 'grayscale(100%) contrast(150%) brightness(120%) drop-shadow(0 0 1px black)',
                opacity: 0.7
              }}
            />

            {/* LAYER 2: The "Real Color" */}
            <img 
              src={heroBg} 
              alt="Karnataka Map Real" 
              className="absolute top-0 left-0 w-full h-auto object-contain animate-color-fill"
            />
        </div>
      </div>

      <style>{`
        /* 1. Fade In Up Animation for Text */
        @keyframes fadeInUp {
            from { 
                opacity: 0; 
                transform: translateY(20px); /* Starts slightly lower */
            }
            to { 
                opacity: 1; 
                transform: translateY(0);    /* Ends in original position */
            }
        }
        .animate-fade-in {
            /* Runs once, forwards ensures it stays visible at the end */
            animation: fadeInUp 0.8s ease-out forwards;
        }

        /* 2. Map Drawing Animations (Existing) */
        @keyframes draw-reveal {
            0% { clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%); opacity: 1; }
            50% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); opacity: 1; }
            100% { opacity: 0; }
        }
        .animate-draw-reveal {
            animation: draw-reveal 3s ease-in-out forwards;
        }

        @keyframes color-fill {
            0% { opacity: 0; }
            50% { opacity: 0; }
            100% { opacity: 1; }
        }
        .animate-color-fill {
            animation: color-fill 3s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;