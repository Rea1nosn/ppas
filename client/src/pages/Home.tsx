import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useAnimations } from "@/hooks/use-animations";

export default function Home() {
  const { initializeScrollAnimations } = useAnimations();

  useEffect(() => {
    initializeScrollAnimations();
  }, [initializeScrollAnimations]);

  return (
    <div className="bg-dark-bg text-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator" id="scroll-indicator"></div>
      
      <Header />
      <Hero />
      <ProductsSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
