import { Download, Smartphone, Apple, Clock, FileText } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getCurrentLanguageContent } from '../utils/content';
import { downloadAPK, getAPKInfo } from '../utils/download';
import type { Language } from '../utils/content';
import './Download.css';

interface DownloadProps {
  readonly language: Language;
}

export default function DownloadComponent({ language }: DownloadProps) {
  const content = getCurrentLanguageContent(language);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'downloading' | 'success' | 'error'>('idle');
  const [apkInfo, setApkInfo] = useState<{ exists: boolean; sizeFormatted?: string | null }>({ exists: false });

  // Vérifier l'existence du fichier APK au chargement
  useEffect(() => {
    const checkAPK = async () => {
      const info = await getAPKInfo('DiscoverPicture.apk');
      setApkInfo(info);
    };
    checkAPK();
  }, []);

  // Fonctions utilitaires pour simplifier le JSX
  const getButtonClass = () => {
    if (downloadStatus === 'success') return 'btn btn-success btn-large download-platform-btn';
    if (downloadStatus === 'error') return 'btn btn-danger btn-large download-platform-btn';
    return 'btn btn-primary btn-large download-platform-btn';
  };

  const getButtonText = () => {
    if (downloadStatus === 'downloading') {
      return language === 'fr' ? 'Téléchargement...' : 'Downloading...';
    }
    if (downloadStatus === 'success') {
      return language === 'fr' ? 'Téléchargé !' : 'Downloaded!';
    }
    if (downloadStatus === 'error') {
      return language === 'fr' ? 'Erreur' : 'Error';
    }
    return content.download.android.button;
  };

  const handleDownloadAPK = async () => {
    setDownloadStatus('downloading');
    
    await downloadAPK({
      fileName: 'DiscoverPicture.apk',
      version: '1.0.0',
      onDownloadStart: () => {
        console.log('Début du téléchargement...');
      },
      onDownloadComplete: () => {
        setDownloadStatus('success');
        setTimeout(() => setDownloadStatus('idle'), 3000);
      },
      onDownloadError: (error) => {
        console.error('Erreur de téléchargement:', error);
        setDownloadStatus('error');
        setTimeout(() => setDownloadStatus('idle'), 3000);
      }
    });
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
              </div>              <div className="info-item">
                <Download size={16} />
                <span>{apkInfo.sizeFormatted ?? content.download.android.size}</span>
              </div>
              <div className="info-item">
                <Smartphone size={16} />
                <span>{content.download.android.requirements}</span>
              </div>
            </div>            <button 
              onClick={handleDownloadAPK}
              className={getButtonClass()}
              disabled={downloadStatus === 'downloading' || !apkInfo.exists}
            >
              <Download size={20} />
              {getButtonText()}
            </button><div className="download-note">
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
