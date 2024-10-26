'use client';
import React, { createContext, useState, useContext, useEffect } from "react";
import { Locale } from "@/lib/i18n-config";

type LanguageContextType = {
  currentLanguage: Locale;
  setLanguage: (lang: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Locale>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("locale") as Locale;
    if (storedLang) {
      setCurrentLanguage(storedLang);
    }
  }, []);

  const setLanguage = (lang: Locale) => {
    setCurrentLanguage(lang);
    localStorage.setItem("locale", lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
