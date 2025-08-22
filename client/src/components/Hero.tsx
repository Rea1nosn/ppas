import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-accent rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-copper-accent rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-16 h-16 bg-bronze-accent rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="font-orbitron text-6xl md:text-8xl font-bold mb-6 parallax-element" data-testid="hero-title">
          <span className="text-gradient">{t.heroTitle.split(' ')[0]}</span><br />
          <span className="text-white">{t.heroTitle.split(' ')[1]}</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-80 parallax-element" data-testid="hero-description">
          {t.heroSubtitle}
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center parallax-element">
          <button 
            onClick={scrollToProducts}
            className="btn-neon bg-tobacco-primary hover:bg-tobacco-secondary px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 animate-glow"
            data-testid="button-view-products"
          >
            {t.heroButton}
          </button>
          <button 
            className="btn-neon border-2 border-gold-accent hover:bg-gold-accent hover:text-dark-bg px-8 py-4 rounded-full font-semibold transition-all duration-300"
            data-testid="button-learn-more"
          >
            {t.heroButtonSecondary}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold-accent" />
      </div>
    </section>
  );
}
