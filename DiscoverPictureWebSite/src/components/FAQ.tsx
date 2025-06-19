import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { getCurrentLanguageContent } from '../utils/content';
import type { Language } from '../utils/content';
import './FAQ.css';

interface FAQProps {
  readonly language: Language;
}

export default function FAQ({ language }: FAQProps) {
  const content = getCurrentLanguageContent(language);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-header text-center fade-in">
          <h2>{content.faq.title}</h2>
        </div>

        <div className="faq-list">
          {content.faq.items.map((item, index) => (
            <div key={item.question} className="faq-item fade-in">
              <button
                className={`faq-question ${openItems.includes(index) ? 'active' : ''}`}
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="question-text">{item.question}</span>
                <span className="question-icon">
                  {openItems.includes(index) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`faq-answer ${openItems.includes(index) ? 'open' : ''}`}
                aria-hidden={!openItems.includes(index)}
              >
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
