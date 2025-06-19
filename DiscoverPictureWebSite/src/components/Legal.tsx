import { ArrowLeft, FileText, Shield, AlertTriangle } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import './Legal.css';

interface LegalProps {
  readonly language: Language;
  readonly type: 'terms' | 'privacy';
  readonly onBack: () => void;
}

export default function Legal({ language, type, onBack }: LegalProps) {
  const content = getCurrentLanguageContent(language);
  const legalContent = content.legal[type];

  const getIcon = () => {
    switch (type) {
      case 'terms':
        return <FileText size={32} />;
      case 'privacy':
        return <Shield size={32} />;
      default:
        return <FileText size={32} />;
    }
  };

  return (
    <div className="legal-page">
      <div className="legal-header">
        <button onClick={onBack} className="back-button">
          <ArrowLeft size={20} />
          {language === 'fr' ? 'Retour' : 'Back'}
        </button>
        
        <div className="legal-title-section">
          <div className="legal-icon">
            {getIcon()}
          </div>
          <h1>{legalContent.title}</h1>
          <div className="legal-meta">
            <p className="last-updated">{legalContent.lastUpdated}</p>
            <p className="version">{legalContent.version}</p>
          </div>
        </div>
      </div>      <div className="legal-content">
        <div className="container">
          {legalContent.sections.map((section, index) => (
            <div key={`section-${index}-${section.title}`} className="legal-section">
              <h2>{section.title}</h2>
              <div className="section-content">
                <p>{section.content}</p>
              </div>
            </div>
          ))}

          {type === 'terms' && content.legal.security && (
            <div className="security-addendum">
              <div className="security-header">
                <AlertTriangle size={24} />
                <h2>{content.legal.security.title}</h2>
              </div>
              
              {content.legal.security.sections.map((section, index) => (
                <div key={`security-${index}-${section.title}`} className="security-section">
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item: string, itemIndex: number) => (
                      <li key={`item-${index}-${itemIndex}-${item.substring(0, 20)}`}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="legal-footer">            <p>
              {content.legal.footer.contactMessage}
            </p>
            <p className="contact-email">
              <a href={`mailto:${content.about.contact.email}`}>
                {content.about.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
