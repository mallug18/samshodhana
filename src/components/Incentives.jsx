import React from 'react';

const Incentives = () => {
  const items = [
    { id: 1, title: "AI Fundamentals Certificate", desc: "Earn a prestigious certification endorsed by a top global MNC." },
    { id: 2, title: "Masterclass Series", desc: "Learn cutting-edge AI tools and real-world applications across core domains." },
    { id: 3, title: "Hands-on Workshop", desc: "Solve live MSME challenges and gain practical problem-solving experience." },
    { id: 4, title: "Exciting Rewards", desc: "Win up to ₹2,00,000 in cash prizes and gain incubation support." },
    { id: 5, title: "Industry Internship", desc: "Get placed with leading MSMEs for internships with potential job offers." },
    { id: 6, title: "Exclusive Goodies", desc: "Grab official event merchandise, T-shirts, and more!" },
  ];

  return (
    <section className="px-12 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="bg-gradient-to-b from-indigo-900 to-slate-800 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group">
            {/* Number Watermark */}
            <div className="absolute top-4 left-4 text-6xl font-bold text-white/10">{item.id}</div>
            
            <div className="relative z-10 mt-8">
                <h3 className="text-xl font-bold mb-3 text-blue-200">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                {item.desc}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Incentives;