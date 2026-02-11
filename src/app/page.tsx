import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <Services />
      <Products />
      <Pricing />
      <About />
      <Footer />
      <BackToTop />
    </main>
  );
}
