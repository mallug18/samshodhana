import React from 'react';

const Roadmap = () => {
  const steps = [
    {
      title: "Collaboration & Scale",
      desc: "Collaboration with 100+ engineering colleges. Selection of 200 students (50 teams) from each district using analytical & psychometric tests."
    },
    {
      title: "2 Days Bootcamp",
      desc: "Selected students undergo dedicated training on soft skills, documentation, industry insights, and stakeholder mapping at the district level."
    },
    {
      title: "10-Day Residential Bootcamp",
      desc: "Deep-dive training at Centres of Excellence (CoEs). Teams research stakeholder operations and validate business/technical models."
    },
    {
      title: "District Demo Day",
      desc: "Developed solutions are showcased at district headquarters to MPs, Ministers, and key authorities to attract local investment."
    },
    {
      title: "State Demo Day",
      desc: "Shortlisted solutions are presented to Global Capability Centers (GCCs) and international investors for hiring or high-level funding."
    },
    {
      title: "Way Forward",
      desc: "Winners secure investment to become founders. Others gain recognition as highly employable talent for startups and corporates."
    }
  ];

  return (
    <section className="px-12 py-16">
      <div className="mb-10">
        <h2 className="text-4xl font-bold text-blue-900 mb-2">How it Works?</h2>
        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold">
          Program Execution Pipeline
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-md border border-blue-100 hover:-translate-y-2 transition-transform duration-300">
            {/* Step Number Bubble */}
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg">
              {idx + 1}
            </div>
            
            <h3 className="text-xl font-bold text-gray-800 mb-3 h-14 flex items-center">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Roadmap;