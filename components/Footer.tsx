import React from 'react';
import { SOCIALS } from '../constants';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.COMMUNITY} className="bg-black py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold font-orbitron text-white mb-8">Join the Revolution</h3>
          
          <div className="flex space-x-6 mb-8">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-gray-900 rounded-full hover:bg-cyan-900/30 transition-all duration-300"
                aria-label={social.platform}
              >
                <div className="absolute inset-0 rounded-full border border-gray-700 group-hover:border-cyan-400 transition-colors"></div>
                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p className="mb-2">TPFtechnology &copy; {new Date().getFullYear()} Control AI Token.</p>
            <p>Decentralized Governance for the Future of Intelligence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;