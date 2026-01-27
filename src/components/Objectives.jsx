import React, { useEffect, useRef, useState } from 'react';
import objBg from '../assets/obj.png'; // Ensure this path is correct

const Objectives = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const objectives = [
    {
      id: 1,
      title: "3,000+ Tech Solutions",
      desc: "Create innovative, technology-enabled solutions that directly address real-time challenges faced by rural MSMEs across Karnataka.",
    },
    {
      id: 2,
      title: "1,550+ Scalable Products",
      desc: "Design and deploy market-ready, accessible, and scalable tech products that support MSMEs in improving productivity and efficiency.",
    },
    {
      id: 3,
      title: "Strengthen Innovation",
      desc: "Enable rural enterprises to adopt digital tools, automation, and emerging technologies to enhance operational capabilities.",
    },
    {
      id: 4,
      title: "Future-Ready Talent",
      desc: "Train and certify 5,000+ young professionals and grassroots innovators with advanced technology skills.",
    },
    {
      id: 5,
      title: "Economic Growth",
      desc: "Drive inclusive and sustainable economic development by bridging technology gaps and fostering entrepreneurship.",
    },
    {
      id: 6,
      title: "Collaborative Innovation",
      desc: "Build a statewide ecosystem bringing together academia, industry, startups, and government bodies.",
    },
    {
      id: 7,
      title: "Affordable Technology",
      desc: "Ensure solutions remain cost-effective and accessible, especially for micro and nano enterprises with limited resources.",
    }
  ];

  // 1. SCROLL PROGRESS LOGIC (Calculates strictly based on this section's position)
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate 0 to 1 progress as the section passes through the viewport
      const start = rect.top - windowHeight;
      const end = rect.height + windowHeight;
      
      // Math to determine how far we've scrolled past the start of the section
      let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      // Clamp between 0 and 1
      progress = Math.min(Math.max(progress, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. INTERSECTION OBSERVER (Reveals list items)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.scroll-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 px-6 md:px-12 overflow-hidden min-h-[150vh]" 
      id="objectives"
    >
      
      {/* ================= BACKGROUND IMAGE (Restricted to Section) ================= */}
      {/* Changed 'fixed' to 'absolute' so it stays INSIDE this section only */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex items-center justify-center overflow-hidden">
         <img 
            src={objBg} 
            alt="Background Decoration" 
            className="w-[600px] md:w-[900px] object-contain opacity-10 transition-transform duration-75 ease-linear will-change-transform"
            style={{
                // Rotates and scales based on how far you have scrolled IN THIS SECTION
                transform: `rotate(${scrollProgress * 180}deg) scale(${0.8 + scrollProgress * 0.4})`
            }}
         />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* ================= LEFT SIDE: STICKY TITLE ================= */}
        <div className="md:w-1/3">
            <div className="sticky top-32 scroll-hidden left-slide">
                <h2 className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-6 leading-tight">
                    Our <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        Objectives
                    </span>
                </h2>
                <div className="w-20 h-2 bg-blue-600 rounded-full mb-6"></div>
                <p className="text-xl text-gray-700 font-medium">
                    Driving innovation and digital transformation across Karnataka's MSME ecosystem.
                </p>
            </div>
        </div>

        {/* ================= RIGHT SIDE: LIST ITEMS ================= */}
        <div className="md:w-2/3 space-y-8 pb-20">
            {objectives.map((obj, index) => (
                <div 
                    key={obj.id} 
                    className="scroll-hidden bottom-slide group relative bg-white/60 backdrop-blur-md border-l-8 border-blue-600 p-8 rounded-r-2xl shadow-lg hover:bg-white hover:shadow-2xl transition-all duration-300"
                >
                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-blue-900 text-white text-2xl font-bold flex items-center justify-center rounded-lg shadow-md shrink-0 group-hover:scale-110 transition-transform">
                            {obj.id}
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                                {obj.title}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {obj.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>

      <style>{`
        .scroll-hidden { opacity: 0; transition: all 1s ease-out; }
        .left-slide { transform: translateX(-100px); }
        .bottom-slide { transform: translateY(100px); }
        .show { opacity: 1; transform: translateX(0) translateY(0); }
      `}</style>
    </section>
  );
};

export default Objectives;