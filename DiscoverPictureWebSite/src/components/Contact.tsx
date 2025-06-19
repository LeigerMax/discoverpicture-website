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
            <div className="contact-form">              <h3>
                <MessageCircle size={24} />
                {content.contact.form.title}
              </h3>
              
              <form className="message-form" onSubmit={(e) => {
                e.preventDefault();
                alert(content.contact.form.alertMessage);
              }}>
                <div className="form-group">
                  <label htmlFor="name">{content.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder={content.contact.form.namePlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{content.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder={content.contact.form.emailPlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">{content.contact.form.subject}</label>
                  <select id="subject" name="subject" required>
                    <option value="">{content.contact.form.subjectPlaceholder}</option>
                    <option value="bug">{content.contact.form.subjectOptions.bug}</option>
                    <option value="feature">{content.contact.form.subjectOptions.feature}</option>
                    <option value="help">{content.contact.form.subjectOptions.help}</option>
                    <option value="other">{content.contact.form.subjectOptions.other}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">{content.contact.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder={content.contact.form.messagePlaceholder}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  <Send size={20} />
                  {content.contact.form.sendButton}
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
