import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full overflow-hidden opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary-400 to-primary-600 blur-3xl opacity-50"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-200 to-indigo-100 blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block px-5 py-2 mb-8 rounded-full bg-gradient-to-r from-[#1e40af] to-[#3b82f6] shadow-lg shadow-blue-500/30 border border-blue-400/20 backdrop-blur-sm transform hover:scale-105 transition-transform duration-300 cursor-default">
            <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercasedrop-shadow-sm">
              Your Trusted Technology Partner
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
            We Turn Your Ideas Into Impactful <span className="bg-clip-text bg-gradient-to-r from-primary-600 to-primary-900">Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            MSCODE menghadirkan layanan pengembangan sistem informasi, aplikasi mobile, dan integrasi AI untuk mempercepat pertumbuhan bisnis Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#products"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ef4444] to-[#dc2626] text-white font-bold text-lg hover:from-[#dc2626] hover:to-[#b91c1c] transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transform hover:-translate-y-1"
            >
              Lihat Produk Kami
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 rounded-xl bg-white text-gray-800 border border-gray-200 font-bold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
            >
              Pelajari Layanan
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
    </section>
  );
}
