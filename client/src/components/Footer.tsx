import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-dark-bg py-12 border-t border-tobacco-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-orbitron text-2xl font-bold text-gradient mb-4" data-testid="footer-logo">
              {t.heroTitle}
            </div>
            <p className="text-gray-400" data-testid="footer-description">
              {t.footerDescription}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footerCatalog}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-cigarettes">{t.footerCigarettes}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-ecigs">{t.footerEcigs}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-heated">{t.footerHeated}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-disposable">{t.footerDisposable}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footerSupport}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-delivery">{t.footerCash}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-returns">{t.footerPickup}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-warranty">{t.footerQuality}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-faq">{t.footerFaq}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t.footerCompany}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-about">{t.about}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-careers">{t.footerCareers}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-partners">{t.footerPartners}</a></li>
              <li><a href="#" className="hover:text-gold-accent transition-colors" data-testid="footer-link-contact">{t.contact}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-tobacco-secondary/30 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="footer-copyright">&copy; 2024 {t.heroTitle}. {t.footerRights}</p>
        </div>
      </div>
    </footer>
  );
}
