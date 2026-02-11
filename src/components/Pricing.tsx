import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-slate-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Penawaran Harga</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Fleksibilitas Kerjasama
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Pilih model investasi teknologi yang paling sesuai dengan cashflow dan strategi bisnis Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* SaaS Model */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:transform hover:-translate-y-1 transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">SaaS (Subscription)</h3>
            <p className="text-gray-500 mb-6 min-h-[60px]">
              Model berlangganan bulanan atau tahunan. Cocok untuk perusahaan yang ingin biaya operasional rendah di awal.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700">Biaya awal rendah</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700">Termasuk maintenance rutin</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700">Update fitur berkala</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700">Support prioritas</span>
              </li>
            </ul>
             <a href="https://wa.me/628558833244" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 text-center rounded-lg border-2 border-primary-600 text-primary-600 font-bold hover:bg-primary-50 transition-colors">
              Hubungi Sales
            </a>
          </div>

          {/* On-Premise Model */}
          <div className="bg-white rounded-2xl shadow-xl border border-primary-100 p-8 relative overflow-hidden transform md:scale-105 z-10">
            <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Beli Lepas (On-Premise)</h3>
            <p className="text-gray-500 mb-6 min-h-[60px]">
              Kepemilikan penuh atas lisensi software. Cocok untuk perusahaan dengan regulasi data ketat atau investasi jangka panjang.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700">Sekali bayar (One-time payment)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700">Instalasi di server sendiri</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700">Full kontrol data</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span className="text-gray-700">Garansi bug fix</span>
              </li>
            </ul>
            <a href="https://wa.me/628558833244" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 text-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold hover:from-primary-700 hover:to-primary-800 shadow-md transition-all">
              Minta Penawaran
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
