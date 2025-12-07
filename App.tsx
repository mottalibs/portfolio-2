import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background from './components/Background';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-slate-300">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Process />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}