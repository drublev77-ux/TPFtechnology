import React from 'react';
import { ShieldCheck, Users, Vote, Globe } from 'lucide-react';
import { SectionId } from '../types';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="glass-panel p-8 rounded-2xl hover:bg-gray-800/50 transition-all border border-gray-700/50 hover:border-cyan-500/50 group">
    <div className="w-14 h-14 bg-cyan-900/30 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-gray-900/50 relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Control AI?</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            The influence of AI development shouldn't be concentrated in the hands of a few major corporations or governments. It must be distributed among the global community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Globe />}
            title="Decentralization"
            description="Breaking the monopoly of tech giants. Control AI ensures that the power of artificial intelligence is shared globally, not siloed."
          />
          <FeatureCard 
            icon={<Vote />}
            title="Governance"
            description="Token holders participate directly in decision-making processes, steering the direction of AI development and deployment."
          />
          <FeatureCard 
            icon={<ShieldCheck />}
            title="Ethics"
            description="Community-driven ethical considerations ensure AI is developed safely, responsibly, and for the benefit of humanity."
          />
           <FeatureCard 
            icon={<Users />}
            title="Funding"
            description="Transparent funding allocations determined by the community, supporting open-source and beneficial AI projects."
          />
        </div>
      </div>
    </section>
  );
};

export default About;