import { useState, useEffect } from 'react';
import { useScrollAnimation } from './hooks/useAnimations';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Security from './components/Security';
import DownloadComponent from './components/Download';
import FAQComponent from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Legal from './components/Legal';
import type { Language } from './utils/content';
import './styles/global.css';

function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [showLegal, setShowLegal] = useState<'terms' | 'privacy' | null>(null);
  
  // Initialiser les animations de scroll
  useScrollAnimation();
  
  // Détecter la langue du navigateur au premier chargement
  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2) as Language;
    if (browserLang === 'en' || browserLang === 'fr') {
      setLanguage(browserLang);
    }
  }, []);

  const handleShowLegal = (type: 'terms' | 'privacy') => {
    setShowLegal(type);
  };

  const handleCloseLegal = () => {
    setShowLegal(null);
  };

  if (showLegal) {
    return (
      <Legal 
        language={language} 
        type={showLegal} 
        onBack={handleCloseLegal}
      />
    );
  }

  return (
    <div className="App">
      <Navigation 
        language={language} 
        onLanguageChange={setLanguage} 
      />
      
      <main>
        <Hero language={language} />
        <Features language={language} />
        <Screenshots language={language} />
        <Security language={language} />
        <DownloadComponent language={language} />
        <FAQComponent language={language} />
        <Contact language={language} />
      </main>
      
      <Footer 
        language={language} 
        onShowLegal={handleShowLegal}
      />
    </div>
  );
}

export default App;
