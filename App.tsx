import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import NetworkPreview from './components/NetworkPreview';
import ContractAddress from './components/ContractAddress';
import AIChat from './components/AIChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-cyan-500/30 selection:text-cyan-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <NetworkPreview />
        <ContractAddress />
        <AIChat />
      </main>
      <Footer />
    </div>
  );
}

export default App;