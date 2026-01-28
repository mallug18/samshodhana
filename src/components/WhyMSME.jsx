import React, { useState, useEffect } from 'react';
import robotHand from '../assets/robot.webp';

const WhyMSME = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const points = [
    {
      id: 1,
      shortTitle: "Backbone",
      title: "Backbone of Economy",
      desc: "Major contribution to GDP and employment. MSMEs act as the primary engine of economic growth for the nation.",
    },
    {
      id: 2,
      shortTitle: "Digital Gap",
      title: "Digital Gap",
      desc: "AI adoption is high in large enterprises but low in MSMEs. We bridge this gap with affordable, scalable technology.",
    },
    {
      id: 3,
      shortTitle: "Ops Issues",
      title: "Operational Challenges",
      desc: "Supply chain, finance, and workforce inefficiencies plague rural businesses. We provide tools to streamline these.",
    },
    {
      id: 4,
      shortTitle: "Inclusive",
      title: "Inclusive Innovation",
      desc: "Creating district-level products that solve local problems but have a statewide scalable impact.",
    }
  ];

  
  const bgPositions = [
    "95% 90%",  // Far Right Center
    "90% 80%",  // Far Left Top (Behind the flower)
    "80% 90%",  // Bottom Right
    "80% 45%"   // Top Center
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % points.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [points.length]);

  return (
    // CHANGE 1: MOVED BACKGROUND STYLES HERE (to the <section> tag)
    <section 
      className="min-h-[600px] px-4 md:px-12 py-16 relative overflow-hidden flex items-center justify-start transition-all duration-1000"
      style={{
        backgroundImage: `url(${robotHand})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '500px', // Set a fixed size so it doesn't look too huge
        backgroundPosition: bgPositions[activeIndex], // Moves across the whole section
        transition: 'background-position 3000ms ease-in-out'
      }}
    >
      
      <div className="flex flex-col md:flex-row items-center w-full max-w-7xl gap-12 md:gap-24 relative z-10">
        
        {/* ================= LEFT SIDE: THE ROTATING FLOWER ================= */}
        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] flex-shrink-0 flex items-center justify-center ml-0 md:ml-10">
          
          <div 
            className="absolute w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `rotate(-${activeIndex * 90}deg)` }}
          >
            {points.map((point, index) => {
              const rotation = index * 90; 
              return (
                <div
                  key={point.id}
                  className="absolute top-1/2 left-1/2 w-32 h-24 md:w-40 md:h-28 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md border border-white/60 flex items-center justify-center text-center p-2 shadow-lg"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(180px) rotate(45deg)`,
                    borderRadius: '0px 60px 0px 60px' 
                  }}
                >
                  <span className="text-blue-900 font-bold text-xs md:text-sm uppercase tracking-wider transform -rotate-45">
                    {point.shortTitle}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="absolute z-20 w-32 h-32 md:w-48 md:h-48 rounded-full bg-white shadow-[0_0_40px_rgba(59,130,246,0.3)] flex items-center justify-center border-4 border-blue-100">
            <div className="text-center">
                <span className="block text-blue-900 font-bold text-xl md:text-2xl">Why</span>
                <span className="block text-blue-600 font-bold text-lg md:text-xl">MSME?</span>
            </div>
          </div>

          <div 
            className="absolute z-10 bg-blue-500/20 backdrop-blur-sm"
            style={{
                top: '50%', 
                left: '45%', 
                width: '140px', 
                height: '60px', 
                transform: 'translateY(-50%)',
                clipPath: 'polygon(0% 20%, 85% 20%, 85% 0%, 100% 50%, 85% 100%, 85% 80%, 0% 80%)'
            }}
          ></div>
        </div>

        {/* ================= RIGHT SIDE: CONTENT ================= */}
        <div className="flex-1 relative min-h-[300px] flex flex-col justify-center pl-12 pr-8">
            {/* CHANGE 2: Added a glass effect here so text is readable if the robot hand passes behind it */}
            <div key={activeIndex} className="animate-fade-in-up mb-8 relative z-10 bg-white/30 backdrop-blur-sm p-8 rounded-2xl border border-white/40 shadow-sm">
                <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6 leading-tight drop-shadow-sm">
                    {points[activeIndex].title}
                </h2>
                <div className="h-1 w-24 bg-blue-500 mb-6 rounded-full"></div>
                <p className="text-xl text-gray-900 leading-relaxed font-medium">
                    {points[activeIndex].desc}
                </p>
            </div>
        </div>

      </div>
      
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default WhyMSME;