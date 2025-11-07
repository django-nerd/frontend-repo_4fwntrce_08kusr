import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter',sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
