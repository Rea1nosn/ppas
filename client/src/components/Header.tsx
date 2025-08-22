import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300" id="navbar" data-testid="header-nav">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-orbitron text-2xl font-bold text-gradient" data-testid="logo">
            {t.heroTitle}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:text-gold-accent transition-colors"
              data-testid="nav-link-home"
            >
              {t.home}
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="hover:text-gold-accent transition-colors"
              data-testid="nav-link-products"
            >
              {t.ourProducts}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-gold-accent transition-colors"
              data-testid="nav-link-about"
            >
              {t.about}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-gold-accent transition-colors"
              data-testid="nav-link-contact"
            >
              {t.contact}
            </button>
            <Link href="/admin">
              <button 
                className="hover:text-gold-accent transition-colors"
                data-testid="nav-link-admin"
              >
                {t.admin}
              </button>
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button and Language Switcher */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button 
              className="text-white" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-button"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-secondary" data-testid="mobile-menu">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="block hover:text-gold-accent transition-colors w-full text-left"
              data-testid="mobile-nav-link-home"
            >
              {t.home}
            </button>
            <button 
              onClick={() => scrollToSection('products')} 
              className="block hover:text-gold-accent transition-colors w-full text-left"
              data-testid="mobile-nav-link-products"
            >
              {t.ourProducts}
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block hover:text-gold-accent transition-colors w-full text-left"
              data-testid="mobile-nav-link-about"
            >
              {t.about}
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block hover:text-gold-accent transition-colors w-full text-left"
              data-testid="mobile-nav-link-contact"
            >
              {t.contact}
            </button>
            <Link href="/admin">
              <button 
                className="block hover:text-gold-accent transition-colors w-full text-left"
                data-testid="mobile-nav-link-admin"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.admin}
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
