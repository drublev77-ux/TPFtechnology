import React, { useState } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { CONTRACT_ADDRESS } from '../constants';
import { SectionId } from '../types';

const ContractAddress: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id={SectionId.CONTRACT} className="py-20 relative overflow-hidden scroll-mt-24">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px]"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Official Token Contract</h2>
        
        <div className="glass-panel p-8 rounded-2xl border border-cyan-500/30 shadow-[0_0_30px_rgba(8,145,178,0.2)]">
          <p className="text-gray-400 mb-4 text-sm uppercase tracking-widest">CAI Contract Address (TON Network)</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-black/40 p-4 rounded-xl border border-gray-700">
            <code className="text-cyan-400 font-mono break-all text-sm md:text-base">
              {CONTRACT_ADDRESS}
            </code>
            <button
              onClick={handleCopy}
              className={`flex items-center px-4 py-2 rounded-lg font-bold transition-all ${
                copied 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                  : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg'
              }`}
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-2" /> Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" /> Copy
                </>
              )}
            </button>
          </div>
          
          <p className="mt-6 text-xs text-gray-500">
            Always verify the contract address before sending any funds. This is the only official CAI token address on the TON blockchain.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContractAddress;