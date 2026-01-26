import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyMSME from './components/WhyMSME';
import Objectives from './components/Objectives';
import Roadmap from './components/Roadmap';
import Incentives from './components/Incentives';

function App() {
  return (
    <div className="overflow-x-hidden">
      {/* Background wrapper is handled in index.css */}
      
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div id="why-msme">
        <WhyMSME />
      </div>

      <div id="objectives">
        <Objectives/>
      </div>
      
      <div id="program">
        <Roadmap />
      </div>

      <div id="incentives">
        <Incentives />
      </div>
      
      {/* Simple Footer */}
      <footer className="text-center py-8 text-gray-600 text-sm">
        © 2026 SamShoDhana Program. All rights reserved.
      </footer>
    </div>
  );
}

export default App;