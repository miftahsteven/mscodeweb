import React from "react";

export default function Products() {
  const products = [
    {
      title: "HCIS (Human Capital Information System)",
      description: "Kelola data karyawan, payroll, kinerja, dan pengembangan karir dalam satu platform terintegrasi. Solusi tepat untuk efisiensi HRD.",
      tag: "Enterprise",
      color: "bg-blue-500",
      footer: {
        type: "contact",
        label: "Info lebih lanjut:",
        value: "admin@mscode.id",
        link: "mailto:admin@mscode.id"
      }
    },
    {
      title: "Aplikasi Absensi Digital",
      description: "Sistem absensi berbasis mobile dengan validasi lokasi (Geo-tagging) dan deteksi wajah. Real-time monitoring kehadiran tim Anda.",
      tag: "Best Seller",
      color: "bg-indigo-500",
      footer: {
        type: "links",
        label: "Unduh di Google Play:",
        links: [
          { name: "Hadir", url: "https://play.google.com/store/apps/details?id=com.limanara.hcis&hl=id" },
          { name: "Arana Hadir", url: "https://play.google.com/store/apps/details?id=com.myarana.app&hl=id" }
        ]
      }
    },
    {
      title: "Monitoring Sosial Media",
      description: "Pantau sentimen publik, tren, dan aktivitas brand Anda di berbagai platform sosial media secara real-time dengan dashboard analitik.",
      tag: "Analytics",
      color: "bg-cyan-500",
      footer: {
        type: "contact",
        label: "Tertarik mencoba?",
        value: "admin@mscode.id",
        link: "mailto:admin@mscode.id"
      }
    },
    {
      title: "Sistem Zakat Infaq Sedekah",
      description: "Platform manajemen penerimaan dan penyaluran dana sosial keagamaan yang transparan, akuntabel, dan mudah digunakan.",
      tag: "Non-Profit",
      color: "bg-teal-500",
      footer: {
        type: "client",
        label: "Contoh web client kami:",
        name: "amanahzakat.id",
        url: "https://amanahzakat.id"
      }
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Produk Unggulan</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Aplikasi Siap Pakai Untuk Kebutuhan Anda
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Gunakan produk kami dengan model sewa (SaaS) atau beli lepas (on-premise) sesuai kebijakan perusahaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl hover:border-primary-200 transition-all duration-300 flex flex-col"
            >
              <div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-400 text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
                {product.tag}
              </div>
              <div className={`w-12 h-12 rounded-lg ${product.color} mb-6 flex items-center justify-center opacity-90`}>
                <div className="w-6 h-6 bg-white rounded-md opacity-50"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
              <p className="text-gray-600 mb-8 flex-grow">{product.description}</p>

              <div className="border-t border-gray-100 pt-6">
                <span className="text-sm font-medium text-gray-500 block mb-3">{product.footer.label}</span>

                {product.footer.type === 'contact' && (
                  <a
                    href={product.footer.link}
                    className="text-primary-600 font-semibold hover:text-primary-700 flex items-center gap-2 transition"
                  >
                    <span>📧</span> {product.footer.value}
                  </a>
                )}

                {product.footer.type === 'links' && (
                  <div className="flex flex-wrap gap-3">
                    {product.footer.links?.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-all shadow-sm"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.523 15.3414L20.355 12.1134L17.523 8.88544V15.3414ZM16.347 16.4334L5.653 22.5674L16.347 16.4334ZM3.626 21.4934L16.476 12.1134L3.626 2.73344V21.4934ZM5.653 1.65944L16.347 7.79344L5.653 1.65944Z" />
                        </svg>
                        <div className="flex flex-col">
                          <span className="text-[10px] leading-none opacity-80">GET IT ON</span>
                          <span className="text-sm font-bold leading-none">{link.name}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}

                {product.footer.type === 'client' && (
                  <a
                    href={product.footer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold border-b-2 border-primary-100 hover:border-primary-600 transition-all pb-0.5"
                  >
                    {product.footer.name} <span>↗️</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-950 rounded-[2.5rem] p-10 md:p-16 text-center text-white shadow-2xl overflow-hidden relative border border-blue-900">
          {/* Elegant background effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-900/40 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-600/20 blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-[100px]"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">
              Butuh Custom Solution atau Beli Lepas?
            </h3>
            <p className="text-blue-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Tim ahli kami siap membantu membangun solusi teknologi yang tepat sesuai dengan kebutuhan spesifik bisnis Anda. 
              Mulai dari kustomisasi modul hingga skema lisensi beli lepas.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/628558833244"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center bg-white text-primary-900 font-bold py-4 px-10 rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] active:scale-95"
              >
                <span>Hubungi MSCODE Admin</span>
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="text-blue-200/60 text-sm font-medium">Konsultasi Gratis • Respon Cepat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
