import React from 'react';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        <a href="#" className="text-lg font-semibold tracking-widest">NEON BAKERY</a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#menu" className="hover:text-white transition-colors">Menu</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
