import content from '../data/content.json';

export type Language = 'fr' | 'en';

export interface LegalSection {
  title: string;
  content: string;
}

export interface SecuritySection {
  title: string;
  items: string[];
}

export interface LegalContent {
  terms: {
    title: string;
    lastUpdated: string;
    version: string;
    sections: LegalSection[];
  };
  privacy: {
    title: string;
    lastUpdated: string;
    version: string;
    sections: LegalSection[];
  };
  security: {
    title: string;
    sections: SecuritySection[];
  };
}

export type ContentType = typeof content;

export function getContent(language: Language): ContentType[Language] {
  return content[language];
}

export function getCurrentLanguageContent(language: Language) {
  return getContent(language);
}
