import React, { useEffect, useRef, useState } from 'react';

const Roadmap = () => {
  const sectionRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  const roadmapSteps = [
    {
      id: "01",
      title: "Registration & Selection",
      date: "December 2025",
      desc: "Colleges nominate top students. Teams of 4 are formed. Students register and undergo initial psychometric & skill assessment.",
      icon: "📝"
    },
    {
      id: "02",
      title: "2-Day District Bootcamp",
      date: "January 2026",
      desc: "Selected teams attend intensive training on design thinking, problem identification, and stakeholder mapping at the district level.",
      icon: "🏫"
    },
    {
      id: "03",
      title: "Problem Identification",
      date: "Feb - March 2026",
      desc: "Teams visit local MSMEs, identify real-world pain points, and document requirements validated by the industry partner.",
      icon: "🔍"
    },
    {
      id: "04",
      title: "10-Day Advanced Bootcamp",
      date: "April 2026",
      desc: "Residential bootcamp at Centres of Excellence (CoE). Teams receive advanced technical training and mentorship to build prototypes.",
      icon: "💻"
    },
    {
      id: "05",
      title: "Development & District Demo",
      date: "May - Aug 2026",
      desc: "Iterative product development cycles (Validate -> Build -> Validate). Finished solutions are showcased at District Headquarters.",
      icon: "⚙️"
    },
    {
      id: "06",
      title: "State Demo Day",
      date: "November 2026",
      desc: "Top district winners pitch at the State Level to investors, GCCs, and government officials for funding and scaling opportunities.",
      icon: "🏆"
    }
  ];

  // 1. SCROLL PROGRESS LOGIC
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;

      const startPoint = windowHeight / 2;
      let progress = startPoint - rect.top;
      
      let percentage = (progress / sectionHeight) * 100;
      percentage = Math.min(Math.max(percentage, 0), 100);

      setLineHeight(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. ANIMATION LOGIC
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.2 });

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-24 px-6 md:px-12 overflow-hidden" 
      id="journey"
    >
      
      {/* TITLE SECTION */}
      <div className="max-w-4xl mx-auto text-center mb-20 animate-on-scroll fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
          The SamShoDhana <span className="text-orange-500">Journey</span>
        </h2>
        <div className="w-24 h-1.5 bg-orange-500 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          From registration to investor pitches: A structured year-long pathway for innovation.
        </p>
      </div>

      {/* ROADMAP CONTAINER */}
      <div className="relative max-w-5xl mx-auto">
        
        {/* === BACKGROUND LINES === */}
        {/* 1. Static Gray Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1.5 bg-gray-200 transform md:-translate-x-1/2 rounded-full"></div>

        {/* 2. Dynamic ORANGE Line */}
        <div 
            className="absolute left-8 md:left-1/2 top-0 w-1.5 bg-green-500 transform md:-translate-x-1/2 rounded-full transition-all duration-90 ease-linear shadow-[0_0_10px_rgba(249,115,22,0.6)]"
            style={{ height: `${lineHeight}%` }}
        ></div>

        <div className="space-y-12 md:space-y-24 pt-10 pb-10">
          {roadmapSteps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col md:flex-row items-center md:justify-between group">
              
              {/* CENTER DOT */}
              <div 
                className={`absolute left-8 md:left-1/2 w-6 h-6 rounded-full transform -translate-x-1/2 z-20 border-4 transition-colors duration-500
                    ${lineHeight > ((index + 0.5) / roadmapSteps.length) * 100 ? 'bg-green-500 border-green-200' : 'bg-white border-gray-300'}
                `}
              ></div>

              {/* Layout Spacers */}
              <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-2'}`}></div>

              {/* CONTENT CARD */}
              <div className={`w-full md:w-5/12 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:order-2 md:text-left md:pl-10' : 'md:order-1 md:text-right md:pr-10'}`}>
                
                <div className="animate-on-scroll slide-from-right bg-white p-6 rounded-2xl shadow-md border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-3000 relative group-hover:-translate-y-2">
                  
                  {/* Step Badge */}
                  <span className="absolute -top-4 -right-4 bg-orange-500 text-white font-bold py-1 px-3 rounded-lg shadow-sm text-sm">
                    Step {step.id}
                  </span>

                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  
                  <span className="inline-block bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
                    {step.date}
                  </span>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .animate-on-scroll { opacity: 0; transition: all 0.6s ease-out; }
        .fade-up { transform: translateY(50px); }
        .slide-from-right { transform: translateX(100px); }
        .show { opacity: 1; transform: translate(0, 0); }
      `}</style>
    </section>
  );
};

export default Roadmap;