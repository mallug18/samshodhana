import React from 'react';

const Navbar = () => {
  // Define the links and their target IDs
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Why MSME', href: '#why-msme' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Journey', href: '#journey' },
    { name: 'Benifits', href: '#incentives' }, // Links to Incentives/Programs section
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-white/30 backdrop-blur-md border-b border-white/40 transition-all duration-300">
      
      {/* LOGO SECTION */}
      <a href="#home" className="flex items-center gap-3 cursor-pointer">
        
        <div className="flex flex-col">
            <div className="text-2xl font-bold text-orange-500 leading-none">
            Sam<span className="text-green-600">shodhana</span>
            </div>
            <div className="text-[10px] text-gray-600 font-semibold tracking-wider">
            SKILL | RESEARCH | INNOVATE
            </div>
        </div>
      </a>

      {/* NAVIGATION LINKS */}
      <ul className="hidden md:flex space-x-8 font-semibold text-gray-800">
        {navItems.map((item) => (
            <li key={item.name} className="cursor-pointer hover:text-blue-600 transition-colors relative group">
                {/* The Link Tag */}
                <a href={item.href}>
                    {item.name}
                </a>
                
                {/* Underline Animation */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;