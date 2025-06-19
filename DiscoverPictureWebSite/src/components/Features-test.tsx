import type { Language } from '../utils/content';

interface FeaturesProps {
  readonly language: Language;
}

export default function FeaturesTest({ language }: FeaturesProps) {
  console.log('FeaturesTest component rendering with language:', language);
  
  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2>Features Section Test</h2>
          <p className="section-subtitle">This should be visible - Language: {language}</p>
        </div>
        <div style={{ background: 'green', padding: '20px', margin: '20px 0', color: 'white' }}>
          <p>DEBUG: Features component is rendering! Language: {language}</p>
        </div>
      </div>
    </section>
  );
}
