/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import { portfolioDataEn } from '../data/portfolioData-en';
import { portfolioDataId } from '../data/portfolioData-id';

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  toggleLang: () => {},
  data: portfolioDataEn,
});

export function LanguageProvider({ defaultLang = 'en', children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lucky_portfolio_lang');
      if (saved === 'id' || saved === 'en') return saved;
    }
    return defaultLang;
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lucky_portfolio_lang', newLang);
      document.documentElement.lang = newLang;
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const data = lang === 'id' ? portfolioDataId : portfolioDataEn;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
