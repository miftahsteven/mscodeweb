import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-primary-900 opacity-20"></div>
                {/* Abstract placeholder visual since we don't have real images */}
               <div className="h-96 w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 font-bold text-4xl opacity-20">MSCODE OFFICE</span>
               </div>
             </div>
          </div>
          
          <div>
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Tentang MSCODE</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Mitra Teknologi Terpercaya
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              MSCODE adalah perusahaan teknologi yang berfokus pada pengembangan solusi digital inovatif. Kami menggabungkan keahlian teknis mendalam dengan pemahaman bisnis yang kuat untuk membantu klien kami mencapai tujuan mereka.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Tim kami terdiri dari engineer, desainer, dan analis berpengalaman yang berdedikasi untuk menciptakan produk software berkualitas tinggi, mulai dari aplikasi skala enterprise hingga solusi mobile yang user-friendly.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="block text-4xl font-bold text-primary-600 mb-1">50+</span>
                <span className="text-gray-500 font-medium">Proyek Selesai</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary-600 mb-1">20+</span>
                <span className="text-gray-500 font-medium">Klien Puas</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary-600 mb-1">5+</span>
                <span className="text-gray-500 font-medium">Tahun Pengalaman</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-primary-600 mb-1">24/7</span>
                <span className="text-gray-500 font-medium">Support System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
