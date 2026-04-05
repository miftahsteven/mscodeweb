import React from "react";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight mb-4 inline-block">
              PT. MSCODE INOVASI DIGITAL @2026
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi teknologi terdepan untuk transformasi digital bisnis Anda.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Layanan</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-primary-400 transition">Sistem Informasi</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition">Mobile Development</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition">AI Integration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Produk</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#products" className="hover:text-primary-400 transition">HCIS Enterprise</Link></li>
              <li><Link href="#products" className="hover:text-primary-400 transition">E-Absensi</Link></li>
              <li><Link href="#products" className="hover:text-primary-400 transition">Sistem Zakat</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-200">Kontak</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span> Bogor, Jawa Barat, Indonesia
              </li>
              <li className="flex items-start gap-2">
                <span>📞</span>
                <a href="https://wa.me/628558833244" target="_blank" className="hover:text-primary-400">0855-8833-244</a>
              </li>
              <li className="flex items-start gap-2">
                <span>✉️</span> <a href="mailto:mscodx@gmail.com" className="hover:text-primary-400">mscodx@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; MSCODE@{new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
