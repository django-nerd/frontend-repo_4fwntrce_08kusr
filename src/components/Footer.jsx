import React from 'react';

function Footer() {
  return (
    <footer id="contact" className="bg-black text-white/70 py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">© {new Date().getFullYear()} Neon Bakery — Crafted in Light</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">X</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
