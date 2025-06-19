import { MessageCircle, User, Send } from 'lucide-react';
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
      <div className="container">
        <div className="contact-content">          <div className="contact-info fade-in">
            <div className="contact-header">
              <User size={48} className="contact-icon" />
              <h2>{content.about.title}</h2>
            </div>
            
            <p className="contact-description">
              {content.about.description}
            </p>
          </div>

          <div className="contact-form-container scale-in">
            <div className="contact-form">
              <h3>
                <MessageCircle size={24} />
                Envoyez-nous un message
              </h3>
              
              <form className="message-form" onSubmit={(e) => {
                e.preventDefault();
                alert('Formulaire de contact bientôt disponible ! Utilisez l\'email pour le moment.');
              }}>
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Votre nom complet"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="votre@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <select id="subject" name="subject" required>
                    <option value="">Choisissez un sujet</option>
                    <option value="bug">Signaler un bug</option>
                    <option value="feature">Suggestion de fonctionnalité</option>
                    <option value="help">Demande d'aide</option>
                    <option value="other">Autre</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Décrivez votre demande ou question..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Informations développeur */}
        <div className="developer-info fade-in">
          <div className="dev-card">
            <div className="dev-avatar">
              <User size={32} />
            </div>
            <div className="dev-details">
              <h4>Développeur</h4>
              <p>DiscoverPicture est développé avec passion pour révolutionner le partage de photos. Cette application combine sécurité, innovation et simplicité d'utilisation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
