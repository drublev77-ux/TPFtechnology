import React, { useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => scrollTo(SectionId.HERO)}>
            <Cpu className="h-8 w-8 text-cyan-400 mr-2" />
            <span className="font-bold text-xl tracking-wider text-white">
              TPF<span className="text-cyan-400">technology</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollTo(SectionId.ABOUT)} className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</button>
              <button onClick={() => scrollTo(SectionId.NETWORK)} className="group relative hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">
                CAI Network
                <span className="absolute top-2 right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
              </button>
              <button onClick={() => scrollTo(SectionId.CONTRACT)} className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Token Contract</button>
              <button onClick={() => scrollTo(SectionId.CHAT)} className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">AI Chat</button>
              <button onClick={() => scrollTo(SectionId.COMMUNITY)} className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Community</button>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => scrollTo(SectionId.ABOUT)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">About</button>
            <button onClick={() => scrollTo(SectionId.NETWORK)} className="text-cyan-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left font-bold">CAI Network</button>
            <button onClick={() => scrollTo(SectionId.CONTRACT)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Contract</button>
            <button onClick={() => scrollTo(SectionId.CHAT)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">AI Chat</button>
            <button onClick={() => scrollTo(SectionId.COMMUNITY)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">Community</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;