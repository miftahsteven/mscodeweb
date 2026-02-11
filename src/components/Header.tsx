"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Produk", href: "#products" },
    { name: "Layanan", href: "#services" },
    { name: "Harga", href: "#pricing" },
    { name: "Tentang MSCODE", href: "#about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-900 tracking-tight">
              <Image src="/logo.png" alt="Logo" width={170} height={170} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/628558833244"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 rounded-full bg-[#1e40af] text-white font-semibold shadow-md hover:bg-[#172554] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1e40af] transition-all duration-300 transform hover:scale-105"
            >
              Kontak Kami
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary-600 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 bg-opacity-60"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/628558833244"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center mt-4 px-5 py-3 rounded-md bg-[#1e40af] text-white font-bold hover:bg-[#172554]"
            >
              Kontak Kami
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
