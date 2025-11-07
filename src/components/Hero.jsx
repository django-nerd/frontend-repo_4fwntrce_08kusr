import React from 'react';
import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#0b0d15] to-[#0c0c14] text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-40 pb-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Futuristic Bakery, Crafted in Light
        </h1>
        <p className="mt-4 max-w-xl text-white/70">
          Minimal ingredients. Maximum delight. Explore pastries reimagined with a
          sleek, cyber-inspired twist.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#menu"
            className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
          >
            View Menu
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:border-white/40 transition-colors"
          >
            Our Vision
          </a>
        </div>
      </div>

      {/* Neon gradient accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
    </section>
  );
}

export default Hero;
