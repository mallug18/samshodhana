import React, { useEffect, useRef } from 'react';

const Incentives = () => {
  // DATA: Extracted strictly from the PDF "Benefits for Students" section
  const benefits = [
    {
      id: 1,
      title: "AI Fundamentals Certificate",
      desc: "Earn a prestigious certification endorsed by a top global MNC, validating your skills in cutting-edge technology.",
      icon: "📜",
      color: "from-blue-500 to-cyan-400"
    },
    {
      id: 2,
      title: "Masterclass Series",
      desc: "Learn cutting-edge AI tools and real-world applications across core engineering domains from industry experts.",
      icon: "🎓",
      color: "from-purple-500 to-pink-400"
    },
    {
      id: 3,
      title: "Hands-on Workshop",
      desc: "Solve live MSME challenges and gain practical problem-solving experience by working on real ground-level issues.",
      icon: "🛠️",
      color: "from-orange-500 to-amber-400"
    },
    {
      id: 4,
      title: "Exciting Rewards",
      desc: "Win up to ₹2,00,000 in cash prizes and gain incubation support to turn your innovative ideas into a startup.",
      icon: "🏆",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      id: 5,
      title: "Internship & Jobs",
      desc: "Get placed with leading MSMEs for internships, with the potential for direct job offers based on your performance.",
      icon: "💼",
      color: "from-green-500 to-emerald-400"
    },
    {
      id: 6,
      title: "Exclusive Goodies",
      desc: "Grab official event merchandise, T-shirts, and swag kits as a part of the SamShoDhana community.",
      icon: "🎁",
      color: "from-red-500 to-rose-400"
    }
  ];

  // SCROLL ANIMATION LOGIC
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.animate-card');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => hiddenElements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 relative overflow-hidden" id="incentives">
      
      {/* Background Decor (Optional Subtle Blobs) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-16 animate-card fade-up">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
            Benefits for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Students</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Why join SamShoDhana? Here is what you gain from this transformative journey.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="animate-card pop-in group relative bg-white/60 backdrop-blur-xl border border-white/50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              style={{ transitionDelay: `${index * 100}ms` }} // Staggered delay for effect
            >
              
              {/* Icon Bubble */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed font-medium">
                {benefit.desc}
              </p>

              {/* Hover Line Effect */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${benefit.color} w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl`}></div>
            </div>
          ))}
        </div>

      </div>

      {/* CSS STYLES */}
      <style>{`
        /* 1. Base Hidden State */
        .animate-card {
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* 2. Animation Types */
        .fade-up { transform: translateY(40px); }
        .pop-in { transform: scale(0.9); }

        /* 3. Visible State */
        .show {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
};

export default Incentives;