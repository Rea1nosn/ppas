import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert(t.contactSend);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-5xl font-bold mb-4 text-gradient" data-testid="contact-title">
            {t.contactTitle}
          </h2>
          <p className="text-xl opacity-80 max-w-2xl mx-auto" data-testid="contact-description">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-tobacco-primary/30 to-transparent p-8 rounded-2xl border border-tobacco-secondary/30">
            <h3 className="font-orbitron text-2xl font-bold mb-6" data-testid="form-title">
              {t.contactSend}
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder={t.contactName} 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-dark-bg border border-tobacco-secondary/30 rounded-lg px-4 py-3 focus:border-gold-accent focus:outline-none transition-colors text-white placeholder-gray-400"
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder={t.contactEmail} 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-dark-bg border border-tobacco-secondary/30 rounded-lg px-4 py-3 focus:border-gold-accent focus:outline-none transition-colors text-white placeholder-gray-400"
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <textarea 
                  rows={4} 
                  name="message"
                  placeholder={t.contactMessage} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-dark-bg border border-purple-500/30 rounded-lg px-4 py-3 focus:border-neon-cyan focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                  required
                  data-testid="textarea-message"
                />
              </div>
              <button 
                type="submit" 
                className="btn-neon w-full bg-tobacco-primary hover:bg-tobacco-secondary py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                data-testid="button-send-message"
              >
                {t.contactSend}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4" data-testid="contact-address">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-accent to-copper-accent rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-dark-bg" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contactAddress}</h4>
                <p className="text-gray-300">{t.contactAddressText}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" data-testid="contact-phone">
              <div className="w-12 h-12 bg-gradient-to-br from-copper-accent to-bronze-accent rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-dark-bg" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contactPhone}</h4>
                <p className="text-gray-300">+972-3-123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" data-testid="contact-email">
              <div className="w-12 h-12 bg-gradient-to-br from-tobacco-primary to-tobacco-secondary rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-dark-bg" />
              </div>
              <div>
                <h4 className="font-semibold">{t.contactEmail}</h4>
                <p className="text-gray-300">info@electroisrael.co.il</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-gold-accent to-copper-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  data-testid="link-instagram"
                >
                  <FaInstagram className="w-5 h-5 text-dark-bg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-copper-accent to-bronze-accent rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  data-testid="link-telegram"
                >
                  <FaTelegram className="w-5 h-5 text-dark-bg" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-br from-tobacco-primary to-tobacco-secondary rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  data-testid="link-youtube"
                >
                  <FaYoutube className="w-5 h-5 text-dark-bg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
