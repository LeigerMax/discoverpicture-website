import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useScrollToSection } from '../hooks/useAnimations';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import logoTransparent from '../assets/images/discover_picture_logo_transparant.png';
import './Navigation.css';

interface NavigationProps {
  readonly language: Language;
  readonly onLanguageChange: (language: Language) => void;
}

export default function Navigation({ language, onLanguageChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollToSection } = useScrollToSection();
  
  const content = getCurrentLanguageContent(language);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);  const navigationItems = [
    { key: 'features', label: content.nav.features, id: 'features' },
    { key: 'screenshots', label: content.nav.screenshots, id: 'screenshots' },
    { key: 'security', label: content.nav.security, id: 'security' },
    { key: 'download', label: content.nav.download, id: 'download' },
    { key: 'faq', label: content.nav.faq, id: 'faq' },
    { key: 'contact', label: content.nav.contact, id: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    onLanguageChange(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <nav className={`navigation ${isScrolled ? 'nav-sticky scrolled' : 'nav-sticky'}`}>
      <div className="container">
        <div className="nav-content">          {/* Logo */}
          <div className="nav-logo">
            <button
              onClick={() => handleNavClick('hero')}
              className="logo-button"
              aria-label="Retour à l'accueil"
            >
              <img src={logoTransparent} alt="DiscoverPicture" className="nav-logo-img" />
              <span className="logo-text">DiscoverPicture</span>
            </button>
          </div>

          {/* Navigation desktop */}
          <div className="nav-links desktop">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="nav-actions">
            {/* Sélecteur de langue */}
            <button
              onClick={toggleLanguage}
              className="language-toggle"
              aria-label={`Changer vers ${language === 'fr' ? 'English' : 'Français'}`}
            >
              <Globe size={20} />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="menu-toggle mobile"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div className={`nav-menu mobile ${isMenuOpen ? 'open' : ''}`}>
          {navigationItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.id)}
              className="nav-link-mobile"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
