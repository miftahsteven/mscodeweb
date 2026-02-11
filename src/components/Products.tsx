import React from "react";

export default function Products() {
  const products = [
    {
      title: "HCIS (Human Capital Information System)",
      description: "Kelola data karyawan, payroll, kinerja, dan pengembangan karir dalam satu platform terintegrasi. Solusi tepat untuk efisiensi HRD.",
      tag: "Enterprise",
      color: "bg-blue-500",
    },
    {
      title: "Aplikasi Absensi Digital",
      description: "Sistem absensi berbasis mobile dengan validasi lokasi (Geo-tagging) dan deteksi wajah. Real-time monitoring kehadiran tim Anda.",
      tag: "Best Seller",
      color: "bg-indigo-500",
    },
    {
      title: "Monitoring Sosial Media",
      description: "Pantau sentimen publik, tren, dan aktivitas brand Anda di berbagai platform sosial media secara real-time dengan dashboard analitik.",
      tag: "Analytics",
      color: "bg-cyan-500",
    },
    {
      title: "Sistem Zakat Infaq Sedekah",
      description: "Platform manajemen penerimaan dan penyaluran dana sosial keagamaan yang transparan, akuntabel, dan mudah digunakan.",
      tag: "Non-Profit",
      color: "bg-teal-500",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Produk Unggulan</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Software Siap Pakai Untuk Kebutuhan Anda
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Gunakan produk kami dengan model sewa (SaaS) atau beli lepas (on-premise) sesuai kebijakan perusahaan Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl hover:border-primary-200 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-400 text-white text-xs font-bold rounded-full shadow-md uppercase tracking-wider">
                {product.tag}
              </div>
              <div className={`w-12 h-12 rounded-lg ${product.color} mb-6 flex items-center justify-center opacity-90`}>
                {/* Simple shape placeholder for product icon */}
                <div className="w-6 h-6 bg-white rounded-md opacity-50"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>
              <div className="border-t border-gray-100 pt-6 mt-auto">
                <span className="text-sm font-medium text-gray-500">Tersedia model:</span>
                <div className="flex gap-2 mt-2">
                  <span className="px-3 py-1 rounded-md bg-green-50 text-green-700 text-sm font-semibold border border-green-100">SaaS (Sewa)</span>
                  <span className="px-3 py-1 rounded-md bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-100">Jual Lepas</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-900 to-primary-800 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl overflow-hidden relative">
           <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
           <div className="relative z-10">
             <h3 className="text-3xl font-bold mb-4">Butuh Custom Solution atau Beli Lepas?</h3>
             <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
               Hubungi admin kami untuk diskusi lebih lanjut mengenai kebutuhan spesifik perusahaan Anda atau detail lisensi beli lepas.
             </p>
             <a
               href="https://wa.me/628558833244"
                target="_blank"
                rel="noopener noreferrer"
               className="inline-block bg-white text-primary-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg"
             >
               Hubungi MSCODE Admin
             </a>
           </div>
        </div>
      </div>
    </section>
  );
}
