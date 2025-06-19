import { Download, Smartphone } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import logoTransparent from '../assets/images/discover_picture_logo_transparant.png';
import './Hero.css';

interface HeroProps {
  readonly language: Language;
}

export default function Hero({ language }: HeroProps) {
  const content = getCurrentLanguageContent(language);
  const handleDownload = () => {
    // Placeholder pour le lien de téléchargement
    console.log('Téléchargement de l\'APK');
    window.open('#download', '_self');
  };

  return (
    <section id="hero" className="hero section-large">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in">
            <h1 className="hero-title">
              {content.hero.title}
            </h1>
            <p className="hero-subtitle">
              {content.hero.subtitle}
            </p>
            
            <div className="hero-actions">
              <button
                onClick={handleDownload}
                className="btn btn-primary btn-large download-btn"
              >
                <Download size={20} />
                {content.hero.downloadButton}
              </button>
              
              <div className="availability-info">
                <Smartphone size={18} />
                <span>{content.hero.availableOn}</span>
              </div>
            </div>
          </div>
          
          <div className="hero-visual scale-in">
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-preview">                    <div className="app-header">
                      <div className="app-logo">
                        <img src={logoTransparent} alt="DiscoverPicture" className="app-logo-img" />
                      </div>
                      <h3>DiscoverPicture</h3>
                    </div>
                    <div className="app-content">
                      <div className="qr-placeholder">
                        <div className="qr-squares">
                          <div className="qr-square"></div>
                          <div className="qr-square"></div>
                          <div className="qr-square"></div>
                          <div className="qr-square"></div>
                        </div>
                      </div>
                      <p className="app-text">Scannez pour découvrir</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Éléments décoratifs flottants */}
            <div className="floating-elements">
              <div className="floating-element qr-icon">📱</div>
              <div className="floating-element photo-icon">🖼️</div>
              <div className="floating-element lock-icon">🔒</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vague de séparation */}
      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="var(--background)"/>
        </svg>
      </div>
    </section>
  );
}
