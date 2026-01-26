import React from 'react';

const Navbar = () => {
  return (
<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-white/30 backdrop-blur-md border-b border-white/40 transition-all duration-300">
        <div className="text-2xl font-bold text-blue-500">Sam<span className="text-green-600">sho</span><span className="text-orange-600">dhana</span>
        <div className="text-xs text-gray-600 font-normal">Skill | Research | Innovate | Enterprise</div>
      </div>
      <ul className="flex space-x-8 font-semibold text-gray-800">
        <li className="cursor-pointer hover:text-blue-600">Home</li>
        <li className="cursor-pointer hover:text-blue-600">Why MSME</li>
        <li className="cursor-pointer hover:text-blue-600">Objectives</li>
        <li className="cursor-pointer hover:text-blue-600">Journey</li>
        <li className="cursor-pointer hover:text-blue-600">Programs</li>
        <li className="cursor-pointer hover:text-blue-600">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;