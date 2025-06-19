import { Download, Smartphone, Apple, Clock, FileText } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import './Download.css';

interface DownloadProps {
  readonly language: Language;
}

export default function DownloadComponent({ language }: DownloadProps) {
  const content = getCurrentLanguageContent(language);
  const handleDownloadAPK = () => {
    // En production, ceci serait le lien vers le vrai APK
    console.log('Téléchargement APK');
    alert(content.download.alerts.downloadSoon);
  };

  return (
    <section id="download" className="download section">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2>{content.download.title}</h2>
          <p className="section-subtitle">{content.download.subtitle}</p>
        </div>

        <div className="download-platforms">
          {/* Android */}
          <div className="platform-card android-card scale-in">
            <div className="platform-header">
              <div className="platform-icon android">
                <Smartphone size={32} />
              </div>
              <h3>{content.download.android.title}</h3>
            </div>

            <div className="platform-info">
              <div className="info-item">
                <FileText size={16} />
                <span>{content.download.android.description}</span>
              </div>
              <div className="info-item">
                <Download size={16} />
                <span>{content.download.android.size}</span>
              </div>
              <div className="info-item">
                <Smartphone size={16} />
                <span>{content.download.android.requirements}</span>
              </div>
            </div>

            <button 
              onClick={handleDownloadAPK}
              className="btn btn-primary btn-large download-platform-btn"
            >
              <Download size={20} />
              {content.download.android.button}
            </button>            <div className="download-note">
              <p>⚠️ {content.download.notes.manualInstall}</p>
              <p>📱 {content.download.notes.allowUnknown}</p>
            </div>
          </div>

          {/* iOS */}
          <div className="platform-card ios-card scale-in">
            <div className="platform-header">
              <div className="platform-icon ios">
                <Apple size={32} />
              </div>
              <h3>{content.download.ios.title}</h3>
            </div>

            <div className="platform-info">
              <div className="info-item">
                <Clock size={16} />
                <span>{content.download.ios.description}</span>
              </div>
              <div className="status-badge">
                <span>{content.download.ios.status}</span>
              </div>
            </div>            <button 
              className="btn btn-secondary btn-large download-platform-btn"
              disabled
            >
              <Clock size={20} />
              {content.download.notes.comingSoon}
            </button>

            <div className="download-note">
              <p>🍎 {content.download.notes.appStoreSubmission}</p>
              <p>📧 {content.download.notes.notifyMe}</p>
            </div>
          </div>
        </div>

        {/* Informations supplémentaires */}        <div className="download-extra fade-in">
          <div className="extra-info">
            <h4>📋 {content.download.instructions.title}</h4>            <ol>
              {content.download.instructions.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="extra-info">
            <h4>🔄 {content.download.updates.title}</h4>
            <p>{content.download.updates.description}</p>
          </div>

          <div className="extra-info">
            <h4>🆘 {content.download.help.title}</h4>
            <p>{content.download.help.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
