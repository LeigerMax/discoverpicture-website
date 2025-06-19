import type { Language } from '../utils/content';

interface ScreenshotsProps {
  readonly language: Language;
}

export default function ScreenshotsTest({ language }: ScreenshotsProps) {
  console.log('ScreenshotsTest component rendering with language:', language);
  
  return (
    <section id="screenshots" className="screenshots section">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2>Screenshots Section Test</h2>
          <p className="section-subtitle">This should be visible - Language: {language}</p>
        </div>
        <div style={{ background: 'red', padding: '20px', margin: '20px 0', color: 'white' }}>
          <p>DEBUG: Screenshots component is rendering! Language: {language}</p>
        </div>
      </div>
    </section>
  );
}
