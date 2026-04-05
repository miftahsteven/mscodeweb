"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { name: "Cholilnafis.id", logo: "/cholilnafis.png" },
  { name: "Amanah Zakat", logo: "/lazia.webp" },
  { name: "Pesantren Cendekia Amanah", logo: "/cendekiaamanah.webp" },
  { name: "MCNID", logo: "/logomcnid.jpeg" },
  { name: "Kemenag RI", logo: "/kemenag.png" },
  { name: "BNPB", logo: "/bnpb.png" },
  { name: "ARANA TEKNOLOGI INDONESIA", logo: "/arana.webp" },
  { name: "Kita Sehat", logo: "/kitasehat.jpeg" },
  { name: "Kemenkes RI", logo: "/kemenkes.png" },
  { name: "Indosat Ooredoo Hutchison", logo: "/Indosat_Ooredoo_Hutchison.png" },
  { name: "MyTimses", logo: "/mytimses.png" },
  { name: "Kemendagri", logo: "/kemendagri.png" },
  { name: "ZISINDOSAT", logo: "/zisindosat.png" },
  { name: "Limanara", logo: "/limanara.png" },
];

export default function Clients() {
  // Duplicate the list to create a seamless loop
  const duplicatedClients = [...clients, ...clients, ...clients]; // Triple for smoother loop on larger screens

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-base text-[#1e40af] font-semibold tracking-wide uppercase">Kepercayaan Klien Kami</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Telah Dipercaya Oleh Lembaga Nasional & Perusahaan Multinasional
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
          Dedikasi kami dalam menghadirkan solusi teknologi terbaik telah membantu berbagai sektor membangun sistem yang handal.
        </p>
      </div>

      <div className="relative group">
        {/* Gradient overlays for smooth fade effect at edges */}
        <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        <div className="flex w-fit animate-marquee group-hover:[animation-play-state:paused]">
          {duplicatedClients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-6 w-40 sm:w-56 h-36 bg-gray-50/30 rounded-2xl border border-gray-100 hover:border-primary-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 group/item p-6"
            >
              <div className="relative w-full h-20 filter grayscale opacity-50 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-700 ease-in-out">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="mt-4 text-[10px] font-bold text-gray-400 group-hover/item:text-primary-600 text-center uppercase tracking-[0.1em] transition-colors duration-300">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
