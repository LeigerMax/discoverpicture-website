import { Shield, QrCode, Wifi, Lock, Eye, Globe } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import './Features.css';

interface FeaturesProps {
  readonly language: Language;
}

export default function Features({ language }: FeaturesProps) {
  const content = getCurrentLanguageContent(language);

  const icons = [Shield, QrCode, Wifi, Lock, Eye, Globe];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2>{content.features.title}</h2>
          <p className="section-subtitle">{content.features.subtitle}</p>
        </div>

        <div className="features-grid">          {content.features.items.map((feature, index) => {
            const IconComponent = icons[index];
            return (
              <div key={feature.title} className="feature-card card fade-in">
                <div className="feature-icon">
                  <IconComponent size={24} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}        </div>
      </div>
    </section>
  );
}
