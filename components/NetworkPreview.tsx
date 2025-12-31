import React from 'react';
import { SectionId } from '../types';
import { Zap, Shield, Cpu, Share2 } from 'lucide-react';

const NetworkPreview: React.FC = () => {
  return (
    <section id={SectionId.NETWORK} className="py-24 relative overflow-hidden bg-black border-y border-cyan-900/20 scroll-mt-24">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ 
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.1) 1px, transparent 1px)', 
        backgroundSize: '30px 30px' 
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-cyan-950/50 border border-cyan-500/30 rounded-full px-4 py-1 mb-6">
               <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
               <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Under Development</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold font-orbitron text-white mb-6 leading-tight">
              The Next Evolution: <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">CAI Network</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We are not just a token; we are building the infrastructure for the future. TPFtechnology is actively developing the <strong>CAI Network</strong>—a sovereign blockchain optimized for decentralized AI governance and high-throughput model inference.
            </p>

            <div className="space-y-8">
              {/* Feature 1: Consensus */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800/80 rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-amber-500/50 transition-colors">
                   <Zap className="w-6 h-6 text-amber-400" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">High-Velocity DAG Consensus</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We utilize an asynchronous <strong>Directed Acyclic Graph (DAG)</strong> structure with aBFT consensus. This architecture guarantees <strong>instant finality</strong> and sub-second latency, essential for coordinating real-time autonomous AI agents.
                  </p>
                </div>
              </div>
              
              {/* Feature 2: Proof of Intelligence */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800/80 rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-cyan-500/50 transition-colors">
                   <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">Proof of Intelligence (PoI)</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    A revolutionary validation layer using <strong>Zero-Knowledge Proofs (ZK-SNARKs)</strong>. Nodes cryptographically audit the <strong>ethical compliance</strong> and logic integrity of every AI inference against the community-governed constitution without exposing proprietary model weights.
                  </p>
                </div>
              </div>

               {/* Feature 3: Scalability */}
               <div className="flex items-start group">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-800/80 rounded-xl flex items-center justify-center border border-gray-700 group-hover:border-purple-500/50 transition-colors">
                   <Share2 className="w-6 h-6 text-purple-400" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">Bio-Mimetic Neural Sharding</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Our dynamic sharding protocol mimics biological neural plasticity. It partitions network state based on computational load, achieving <strong>linear scalability</strong> that supports millions of concurrent complex vector operations without degradation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Roadmap/Graphic */}
          <div className="lg:w-1/2 w-full">
            <div className="relative bg-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px]"></div>
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Cpu className="mr-2 text-cyan-400" /> Roadmap Status
              </h3>

              <div className="space-y-8 relative">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-700"></div>

                {/* Step 1 */}
                <div className="relative flex items-center group">
                  <div className="w-10 h-10 rounded-full bg-green-900/30 border border-green-500 flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 flex-1 bg-gray-800/50 p-4 rounded-lg border border-green-500/30">
                    <h4 className="text-white font-bold text-sm">Token Launch</h4>
                    <p className="text-xs text-gray-400 mt-1">CAI Token deployed on TON. Community governance activated.</p>
                  </div>
                </div>

                {/* Step 2 (Active) */}
                <div className="relative flex items-center">
                  <div className="w-10 h-10 rounded-full bg-cyan-900/30 border border-cyan-400 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-ping absolute"></div>
                    <div className="w-3 h-3 bg-cyan-400 rounded-full relative"></div>
                  </div>
                  <div className="ml-4 flex-1 bg-gray-800 p-4 rounded-lg border border-cyan-500 shadow-lg">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-white font-bold text-sm">Network Development</h4>
                      <span className="text-[10px] bg-cyan-900 text-cyan-300 px-2 py-0.5 rounded uppercase font-bold">In Progress</span>
                    </div>
                    <p className="text-xs text-gray-300 mt-1">Developing DAG consensus, ZK-PoI algorithms, and Neural Sharding protocol.</p>
                    <div className="w-full bg-gray-700 h-1.5 mt-3 rounded-full overflow-hidden">
                      <div className="bg-cyan-500 h-full w-[65%]"></div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative flex items-center opacity-50">
                  <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center relative z-10">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                  <div className="ml-4 flex-1 bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-white font-bold text-sm">Mainnet Launch</h4>
                    <p className="text-xs text-gray-400 mt-1">Migration to CAI Network. Full decentralized AI governance.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NetworkPreview;