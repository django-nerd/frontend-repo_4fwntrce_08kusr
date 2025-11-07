import React from 'react';

const items = [
  { name: 'Neon Cruffin', desc: 'Laminated pastry with citrus glow glaze', price: '$6' },
  { name: 'Chromatic Éclair', desc: 'Iridescent vanilla beam filling', price: '$5' },
  { name: 'Quantum Croissant', desc: '72-layer butter lattice', price: '$4' },
  { name: 'Photon Cake Slice', desc: 'Dark cocoa with neon sugar shard', price: '$7' },
];

function Menu() {
  return (
    <section id="menu" className="relative bg-[#07070d] text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Menu</h2>
        <p className="mt-2 text-white/60 max-w-2xl">Minimalist flavors, engineered for delight. Each item is hand-finished with a clean, futuristic aesthetic.</p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.name} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/[0.08] transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{it.name}</h3>
                <span className="text-white/70">{it.price}</span>
              </div>
              <p className="mt-2 text-sm text-white/60">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-12 right-12 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
      </div>
    </section>
  );
}

export default Menu;
