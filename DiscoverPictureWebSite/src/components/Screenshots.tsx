import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';

// Import des captures d'écran
import screenAccueil from '../assets/images/screen app/accueil.png';
import screenAlbum from '../assets/images/screen app/album.png';
import screenAlbumBloque from '../assets/images/screen app/album_bloqué.png';
import screenCreerAlbum from '../assets/images/screen app/créer un album.png';

import './Screenshots.css';

interface ScreenshotsProps {
  readonly language: Language;
}

export default function Screenshots({ language }: ScreenshotsProps) {
  console.log('Screenshots component rendering with language:', language);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  console.log('Screenshots component rendering with language:', language);
  const content = getCurrentLanguageContent(language);

  // Configuration des captures d'écran avec descriptions
  const screenshots = [
    {
      src: screenAccueil,
      title: content.screenshots.items[0].title,
      description: content.screenshots.items[0].description
    },
    {
      src: screenCreerAlbum,
      title: content.screenshots.items[1].title,
      description: content.screenshots.items[1].description
    },
    {
      src: screenAlbum,
      title: content.screenshots.items[2].title,
      description: content.screenshots.items[2].description
    },
    {
      src: screenAlbumBloque,
      title: content.screenshots.items[3].title,
      description: content.screenshots.items[3].description
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const previousImage = () => {
    setSelectedImage(selectedImage > 0 ? selectedImage - 1 : screenshots.length - 1);
  };
  const nextImage = () => {
    setSelectedImage(selectedImage < screenshots.length - 1 ? selectedImage + 1 : 0);
  };
  return (
    <section id="screenshots" className="screenshots section">
      <div className="container">        <div className="section-header text-center fade-in">
          <h2>{content.screenshots.title}</h2>
          <p className="section-subtitle">{content.screenshots.subtitle}</p>
        </div>
        
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <button 
              key={`screenshot-${screenshot.title}-${index}`}
              className="screenshot-card scale-in"
              onClick={() => openModal(index)}
              type="button"
            >
              <div className="phone-frame">
                <div className="phone-screen">
                  <img 
                    src={screenshot.src} 
                    alt={screenshot.title}
                    className="screenshot-image"
                  />
                </div>
              </div>
              <div className="screenshot-info">
                <h3>{screenshot.title}</h3>
                <p>{screenshot.description}</p>
              </div>
            </button>
          ))}
        </div>        {/* Modal pour voir l'image en grand */}
        {isModalOpen && (
          <div 
            className="screenshot-modal" 
            onClick={closeModal}
            role="dialog"
            tabIndex={-1}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                closeModal();
              }
            }}
          >
            <div 
              className="modal-content" 
              onClick={(e) => e.stopPropagation()}
              role="document"
              tabIndex={0}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={closeModal}>
                <X size={24} />
              </button>
              
              <div className="modal-navigation">
                <button className="nav-button prev" onClick={previousImage}>
                  <ChevronLeft size={24} />
                </button>
                
                <div className="modal-image-container">
                  <div className="modal-phone-frame">
                    <div className="modal-phone-screen">
                      <img 
                        src={screenshots[selectedImage].src}
                        alt={screenshots[selectedImage].title}
                        className="modal-image"
                      />
                    </div>
                  </div>
                </div>
                
                <button className="nav-button next" onClick={nextImage}>
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="modal-info">
                <h3>{screenshots[selectedImage].title}</h3>
                <p>{screenshots[selectedImage].description}</p>
              </div>
                <div className="modal-indicators">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={`indicator-${screenshot.title}-${index}`}
                    className={`indicator ${index === selectedImage ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                    type="button"
                    aria-label={`${content.screenshots.modal.viewLabel} ${screenshot.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
