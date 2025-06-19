import { User, Mail, Copy } from 'lucide-react';
import { useState } from 'react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import './Contact.css';

interface ContactProps {
  readonly language: Language;
}

export default function Contact({ language }: ContactProps) {
  const content = getCurrentLanguageContent(language);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(content.about.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback pour les navigateurs plus anciens
      console.log('Impossible de copier automatiquement');
    }
  };  let copyButtonTitle, copyButtonText;
  
  if (copied) {
    copyButtonTitle = language === 'fr' ? 'Copié !' : 'Copied!';
    copyButtonText = language === 'fr' ? 'Copié !' : 'Copied!';
  } else {
    copyButtonTitle = language === 'fr' ? 'Copier l\'email' : 'Copy email';
    copyButtonText = language === 'fr' ? 'Copier' : 'Copy';
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">        <div className="contact-content">          <div className="contact-info fade-in">
            <div className="contact-header">
              <User size={48} className="contact-icon" />
              <h2>{content.about.title}</h2>
            </div>
            
            <p className="contact-description">
              {content.about.description}
            </p>              <div className="contact-email">
              <h3>{content.about.contact.directContactTitle}</h3>
              <div className="contact-buttons">
                <button 
                  onClick={() => window.location.href = `mailto:${content.about.contact.email}`}
                  className="email-button primary"
                >
                  <Mail size={20} />
                  {content.about.contact.buttonText}
                </button>                <button 
                  onClick={handleCopyEmail}
                  className="email-button secondary"
                  title={copyButtonTitle}
                >
                  <Copy size={20} />
                  {copyButtonText}
                </button>
              </div>
              <p>{content.about.contact.description}</p>
            </div>
          </div>
        </div>

        {/* Informations développeur */}
        <div className="developer-info fade-in">
          <div className="dev-card">
            <div className="dev-avatar">
              <User size={32} />
            </div>            <div className="dev-details">
              <h4>{content.contact.developer.title}</h4>
              <p>{content.contact.developer.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
