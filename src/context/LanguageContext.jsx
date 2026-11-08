/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { portfolioDataEn } from '../data/portfolioData-en';
import { portfolioDataId } from '../data/portfolioData-id';

const LanguageContext = createContext({
  lang: 'en',
  data: portfolioDataEn,
  otherLang: 'id',
  otherLangPath: '/id/',
});

export function LanguageProvider({ lang = 'en', children }) {
  const data = lang === 'id' ? portfolioDataId : portfolioDataEn;
  const otherLang = lang === 'id' ? 'en' : 'id';
  const otherLangPath = lang === 'id' ? '/' : '/id/';

  return (
    <LanguageContext.Provider value={{ lang, data, otherLang, otherLangPath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
