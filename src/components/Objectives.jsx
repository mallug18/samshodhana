import React from 'react';

const Objectives = () => {
  const objectives = [
    {
      id: 1,
      title: "3,000+ Tech Solutions",
      desc: "Create innovative, technology-enabled solutions that directly address real-time challenges faced by rural MSMEs across Karnataka.",
      icon: "💡"
    },
    {
      id: 2,
      title: "1,550+ Scalable Products",
      desc: "Design and deploy market-ready, accessible, and scalable tech products that support MSMEs in improving productivity and efficiency.",
      icon: "🚀"
    },
    {
      id: 3,
      title: "Innovation Capacity",
      desc: "Enable rural enterprises to adopt digital tools, automation, and emerging technologies to enhance operational capabilities.",
      icon: "⚙️"
    },
    {
      id: 4,
      title: "Future-Ready Talent",
      desc: "Train and certify 5,000+ young professionals and grassroots innovators with advanced technology skills for digital transformation.",
      icon: "🎓"
    },
    {
      id: 5,
      title: "Economic Growth",
      desc: "Drive inclusive and sustainable economic development by bridging technology gaps and fostering entrepreneurship.",
      icon: "📈"
    },
    {
      id: 6,
      title: "Collaborative Innovation",
      desc: "Build a statewide ecosystem bringing together academia, industry, startups, and government to co-create impactful solutions.",
      icon: "🤝"
    },
    {
      id: 7,
      title: "Affordable Technology",
      desc: "Ensure solutions remain cost-effective and accessible, especially for micro and nano enterprises with limited resources.",
      icon: "💰"
    }
  ];

  return (
    <section className="relative px-6 md:px-12 py-20 overflow-hidden" id="objectives">
      
      {/* BACKGROUND ANIMATED SHAPES */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float-slower"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16 opacity-0 animate-fade-in" style={{ animationDelay: '0ms' }}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
            Objectives of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">SamShoDhana</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
            A transformative initiative to strengthen Karnataka's rural MSME ecosystem.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectives.map((obj, index) => (
            <div 
              key={obj.id}
              className={`
                group relative bg-white/40 backdrop-blur-md border border-white/60 p-8 rounded-2xl shadow-lg 
                hover:shadow-2xl hover:-translate-y-2 hover:bg-white/60 transition-all duration-300
                opacity-0 animate-fade-in-up
                ${index === 6 ? 'md:col-span-2 lg:col-span-3 lg:w-2/3 lg:mx-auto' : ''} /* Centers the last odd item */
              `}
              style={{ animationDelay: `${index * 150}ms` }} // Staggered delay: 0ms, 150ms, 300ms...
            >
              
              {/* Card Icon Bubble */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-inner flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 border border-white">
                {obj.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-indigo-900 mb-3 group-hover:text-blue-600 transition-colors">
                {obj.id}. {obj.title}
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                {obj.desc}
              </p>

              {/* Decorative Corner Gradient */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-400/10 to-transparent rounded-tr-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>

      {/* STYLES FOR ANIMATIONS */}
      <style>{`
        /* 1. Fade In Title */
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        /* 2. Slide Up Cards */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* 3. Floating Background Blobs */
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
          100% { transform: translate(0, 0); }
        }
        .animate-float-slow {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float 10s ease-in-out infinite reverse;
        }
      `}</style>

    </section>
  );
};

export default Objectives;