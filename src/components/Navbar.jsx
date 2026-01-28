import React, { useState } from 'react';

const Navbar = () => {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Define the links and their target IDs
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Why MSME', href: '#why-msme' },
    { name: 'Objectives', href: '#objectives' },
    { name: 'Journey', href: '#journey' },
    { name: 'Benifits', href: '#incentives' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/200 backdrop-blur-md border-b border-white/40 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 md:px-8">
        
        {/* LOGO SECTION (Your Custom Text) */}
        <a href="#home" className="flex items-center gap-3 cursor-pointer">
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-blue-500 leading-none">
              Sam<span className="text-green-600">Sho</span><span className='text-orange-500'>Dhana</span>
            </div>
            <div className="text-[10px] text-gray-600 font-semibold tracking-wider">
              SKILL | RESEARCH | INNOVATE
            </div>
          </div>
        </a>

        {/* DESKTOP MENU (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-8 font-semibold text-gray-900">
          {navItems.map((item) => (
            <li key={item.name} className="cursor-pointer hover:text-blue-600 transition-colors relative group">
              <a href={item.href}>
                {item.name}
              </a>
              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* MOBILE HAMBURGER BUTTON (Visible ONLY on Mobile) */}
        <button 
          className="md:hidden text-gray-800 focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            // Close Icon (X)
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            // Hamburger Icon (Lines)
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>

      </div>

      {/* MOBILE MENU DROPDOWN (Conditionally Rendered) */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg flex flex-col items-center py-6 space-y-6 animate-fade-in-down">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-lg font-medium text-gray-800 hover:text-blue-600 hover:bg-gray-50 w-full text-center py-2"
              onClick={() => setIsOpen(false)} // Close menu when a link is clicked
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;