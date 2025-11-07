import React from 'react';

function About() {
  return (
    <section id="about" className="bg-[#080811] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">About Neon Bakery</h2>
          <p className="mt-4 text-white/70">
            We design pastries like products: precise, minimal, and luminous. Our kitchen blends
            classical technique with computational precision, delivering textures that feel
            impossible and flavors that are instantly familiar.
          </p>
          <p className="mt-4 text-white/60">
            Expect sleek lines, dark chocolate, and subtle neon accents. This is dessert—reimagined
            for a high‑tech world.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-video w-full rounded-xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 to-cyan-500/20" />
        </div>
      </div>
    </section>
  );
}

export default About;
