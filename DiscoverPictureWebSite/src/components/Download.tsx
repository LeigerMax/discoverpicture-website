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
    alert('Le téléchargement sera bientôt disponible !');
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
            </button>

            <div className="download-note">
              <p>⚠️ Installation manuelle requise (APK)</p>
              <p>📱 Autoriser les sources inconnues dans les paramètres</p>
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
            </div>

            <button 
              className="btn btn-secondary btn-large download-platform-btn"
              disabled
            >
              <Clock size={20} />
              Bientôt disponible
            </button>

            <div className="download-note">
              <p>🍎 En cours de soumission à l'App Store</p>
              <p>📧 Inscrivez-vous pour être notifié</p>
            </div>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="download-extra fade-in">
          <div className="extra-info">
            <h4>📋 Instructions d'installation</h4>
            <ol>
              <li>Téléchargez le fichier APK</li>
              <li>Autorisez l'installation depuis des sources inconnues</li>
              <li>Ouvrez le fichier APK téléchargé</li>
              <li>Suivez les instructions d'installation</li>
            </ol>
          </div>

          <div className="extra-info">
            <h4>🔄 Mises à jour</h4>
            <p>L'application vérifie automatiquement les mises à jour au démarrage. Vous serez notifié dès qu'une nouvelle version sera disponible.</p>
          </div>

          <div className="extra-info">
            <h4>🆘 Besoin d'aide ?</h4>
            <p>Consultez notre FAQ ou contactez-nous directement pour toute question sur l'installation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
