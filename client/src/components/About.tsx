import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-dark-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-neon-cyan/10"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-orbitron text-5xl font-bold mb-6 text-gradient" data-testid="about-title">
              {t.aboutTitle}
            </h2>
            <p className="text-xl mb-6 opacity-80" data-testid="about-description-1">
              {t.aboutSubtitle}
            </p>
            <p className="text-lg mb-8 opacity-70" data-testid="about-description-2">
              {t.aboutDescription}
            </p>
            
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-gold-accent mb-2" data-testid="stat-products">50+</div>
                <div className="text-sm opacity-70">{t.aboutProducts}</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-copper-accent mb-2" data-testid="stat-customers">5k+</div>
                <div className="text-sm opacity-70">{t.aboutCustomers}</div>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-bronze-accent mb-2" data-testid="stat-satisfaction">98%</div>
                <div className="text-sm opacity-70">{t.aboutSatisfied}</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Person using tech device" 
              className="rounded-2xl shadow-2xl"
              data-testid="img-about"
            />
            
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
