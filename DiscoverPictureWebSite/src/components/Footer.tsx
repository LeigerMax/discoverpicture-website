import { Shield, FileText, ExternalLink } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import logoTransparent from '../assets/images/discover_picture_logo_transparant.png';
import './Footer.css';

interface FooterProps {
  readonly language: Language;
  readonly onShowLegal?: (type: 'terms' | 'privacy') => void;
}

export default function Footer({ language, onShowLegal }: FooterProps) {
  const content = getCurrentLanguageContent(language);
  const handleGithubClick = () => {
    window.open('https://github.com/LeigerMax/DiscoverPicture', '_blank', 'noopener,noreferrer');
  };
  const handlePrivacyClick = () => {
    if (onShowLegal) {
      onShowLegal('privacy');
    } else {
      alert(content.footer.alerts.privacyNotImplemented);
    }
  };

  const handleTermsClick = () => {
    if (onShowLegal) {
      onShowLegal('terms');
    } else {
      alert(content.footer.alerts.termsNotImplemented);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">            {/* Logo et description */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logoTransparent} alt="DiscoverPicture" className="footer-logo-img" />
                <span>DiscoverPicture</span>
              </div>              <p className="footer-tagline">
                {content.footer.tagline}
              </p>
            </div>

            {/* Liens principaux */}
            <div className="footer-links">              <div className="footer-section">
                <h4>{content.footer.sections.app.title}</h4>
                <ul>
                  <li><a href="#features">{content.footer.sections.app.features}</a></li>
                  <li><a href="#security">{content.footer.sections.app.security}</a></li>
                  <li><a href="#download">{content.footer.sections.app.download}</a></li>
                  <li><a href="#faq">{content.footer.sections.app.faq}</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>{content.footer.sections.support.title}</h4>
                <ul>
                  <li><a href="#contact">{content.footer.sections.support.contact}</a></li>
                  <li><a href="#faq">{content.footer.sections.support.faq}</a></li>
                  <li><a href="mailto:support@discoverpicture.app">{content.footer.sections.support.technicalSupport}</a></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>{content.footer.sections.legal.title}</h4>
                <ul>
                  <li>
                    <button onClick={handlePrivacyClick} className="footer-link-btn">
                      <Shield size={16} />
                      {content.footer.links.privacy}
                    </button>
                  </li>
                  <li>
                    <button onClick={handleTermsClick} className="footer-link-btn">
                      <FileText size={16} />
                      {content.footer.links.terms}
                    </button>
                  </li>
                </ul>
              </div>              <div className="footer-section">
                <h4>{content.footer.sections.development.title}</h4>
                <ul>                  <li>
                    <button onClick={handleGithubClick} className="footer-link-btn">
                      <span className="github-icon">⚡</span>
                      {content.footer.links.github}
                      <ExternalLink size={14} />
                    </button>
                  </li>
                  <li>
                    <span className="version-info">
                      {content.footer.version}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Barre de copyright */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>{content.footer.copyright}</p>
            </div>
            
            <div className="footer-badges">              <div className="badge android-badge">
                <span>📱</span>
                <div>
                  <small>{content.footer.badges.availableOn}</small>
                  <strong>{content.footer.badges.android}</strong>
                </div>
              </div>
              
              <div className="badge ios-badge coming-soon">
                <span>🍎</span>
                <div>
                  <small>{content.footer.badges.comingSoonOn}</small>
                  <strong>{content.footer.badges.ios}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
