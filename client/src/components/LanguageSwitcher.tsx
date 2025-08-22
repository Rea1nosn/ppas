import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-tobacco-secondary/30 hover:bg-tobacco-primary/20 transition-colors text-white">
        <Languages className="w-4 h-4" />
        <span className="text-sm">{currentLanguage?.flag}</span>
        <span className="text-sm hidden sm:block">{currentLanguage?.name}</span>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="bg-dark-secondary border-tobacco-secondary/30">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center space-x-2 px-3 py-2 cursor-pointer hover:bg-tobacco-primary/20 ${
              language === lang.code ? 'bg-tobacco-primary/30 text-gold-accent' : 'text-white'
            }`}
            data-testid={`language-option-${lang.code}`}
          >
            <span>{lang.flag}</span>
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}