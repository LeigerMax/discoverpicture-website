import { Shield, Server, Eye, Key, FileText } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import './Security.css';

interface SecurityProps {
  readonly language: Language;
}

export default function Security({ language }: SecurityProps) {
  const content = getCurrentLanguageContent(language);

  const securityIcons = [Shield, Server, Eye, Key, FileText];

  return (
    <section id="security" className="security section">
      <div className="container">
        <div className="security-content">
          <div className="security-text fade-in">
            <h2>{content.security.title}</h2>
            <p className="security-subtitle">{content.security.subtitle}</p>
            <p className="security-description">{content.security.description}</p>
            
            <div className="security-features">
              {content.security.features.map((feature, index) => {
                const IconComponent = securityIcons[index];
                return (
                  <div key={feature} className="security-feature">
                    <div className="security-feature-icon">
                      <IconComponent size={20} />
                    </div>
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="security-visual scale-in">
            <div className="security-illustration">
              <div className="shield-container">
                <div className="shield-main">
                  <Shield size={48} />
                </div>
                <div className="security-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
              </div>
              
              <div className="security-elements">
                <div className="security-element lock">
                  <Key size={24} />
                </div>
                <div className="security-element server">
                  <Server size={24} />
                </div>
                <div className="security-element eye">
                  <Eye size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
