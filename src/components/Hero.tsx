import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      {/* Background Layer 1: Animated Blobs (Universe Style) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[900px] h-[900px] rounded-full bg-blue-100/50 blur-[130px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full bg-indigo-100/40 blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      {/* Background Layer 2: Grid & Noise */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.3] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] mix-blend-multiply pointer-events-none"></div>

      {/* Universe Elements: Starfield */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-20 left-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-twinkle"></div>
        <div className="absolute top-40 left-[25%] w-1 h-1 bg-indigo-400 rounded-full animate-twinkle delay-700"></div>
        <div className="absolute top-1/4 right-[20%] w-2 h-2 bg-primary-400 rounded-full animate-twinkle delay-1000"></div>
        <div className="absolute bottom-1/3 left-[10%] w-1.5 h-1.5 bg-blue-300 rounded-full animate-twinkle delay-500"></div>
        <div className="absolute bottom-1/4 right-[15%] w-1 h-1 bg-indigo-300 rounded-full animate-twinkle delay-2000"></div>
      </div>

      {/* Universe Elements: Orbs */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        {/* Main Cosmic Orb */}
        <div className="absolute top-1/4 left-[8%] animate-float">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary-500/20 via-blue-600/10 to-transparent backdrop-blur-xl rounded-full border border-white/30 shadow-[0_0_40px_rgba(37,99,235,0.2)] flex items-center justify-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent animate-pulse"></div>
              <svg className="w-12 h-12 text-primary-600 drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.989-2.386l-.548-.547z" />
              </svg>
            </div>
            {/* Orbital Ring */}
            <div className="absolute -inset-4 border border-blue-200/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
          </div>
        </div>

        {/* Secondary Satellite Orb */}
        <div className="absolute top-1/3 right-[10%] animate-float delay-1000">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-transparent backdrop-blur-lg rounded-full border border-indigo-100/50 flex items-center justify-center shadow-[0_0_30px_rgba(79,70,229,0.1)]">
              <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute -inset-2 border border-indigo-200/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full bg-blue-50/80 border border-blue-100/50 text-primary-700 shadow-sm backdrop-blur-sm animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
              Your Trusted Technology Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-gray-900 tracking-tight leading-[1.05] mb-8">
            We Turn Your Ideas Into <br className="hidden md:block" />
            <span className="relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-indigo-600 to-primary-900 bg-[length:200%_auto] animate-shimmer">
                Impactful Technology
              </span>
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary-200/60" viewBox="0 0 400 12" fill="none">
                <path d="M4 8C100 2 300 2 396 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto font-medium">
            MSCODE menghadirkan layanan pengembangan aplikasi web, aplikasi mobile, dan integrasi AI untuk mempercepat pertumbuhan bisnis Anda.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="#products"
              className="group relative px-10 py-5 rounded-2xl bg-[#ef4444] text-white font-bold text-lg overflow-hidden shadow-[0_15px_30px_rgba(239,68,68,0.2)] transition-all hover:shadow-[0_20px_40px_rgba(239,68,68,0.3)] hover:-translate-y-1 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative">Lihat Produk Kami</span>
            </Link>

            <Link
              href="#services"
              className="px-10 py-5 rounded-2xl bg-white text-gray-800 border border-gray-200 font-bold text-lg hover:border-primary-300 hover:text-primary-600 hover:bg-blue-50/30 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 active:scale-95"
            >
              Pelajari Layanan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
