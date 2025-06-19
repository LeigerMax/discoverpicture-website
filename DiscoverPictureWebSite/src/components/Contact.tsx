import { User, Mail } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import './Contact.css';

interface ContactProps {
  readonly language: Language;
}

export default function Contact({ language }: ContactProps) {
  const content = getCurrentLanguageContent(language);

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
              <button 
                onClick={() => window.location.href = `mailto:${content.about.contact.email}`}
                className="email-button"
              >
                <Mail size={20} />
                {content.about.contact.buttonText}
              </button>
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
