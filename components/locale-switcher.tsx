"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { i18n, type Locale } from "@/lib/i18n-config";
import { useLanguage } from "@/components/LanguageContext";

const langMap: Record<Locale, string> = {
  en: "en",
  zh: "中",
};

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const router = useRouter();
  const { setLanguage } = useLanguage();

  // 使用 useCallback 来记忆 getCurrentLocale 函数
  const getCurrentLocale = useCallback((): Locale => {
    const segments = pathName?.split("/") ?? [];
    return i18n.locales.includes(segments[1] as Locale)
      ? (segments[1] as Locale)
      : "en";
  }, [pathName]);

  const [currentLocale, setCurrentLocale] = useState<Locale>(getCurrentLocale);

  useEffect(() => {
    setCurrentLocale(getCurrentLocale());
  }, [getCurrentLocale]);

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    if (i18n.locales.includes(segments[1] as Locale)) {
      segments[1] = locale;
    }
    return segments.join("/");
  };

  const handleLocaleSwitch = () => {
    const nextLocaleIndex =
      (i18n.locales.indexOf(currentLocale) + 1) % i18n.locales.length;
    const nextLocale = i18n.locales[nextLocaleIndex];
    setLanguage(nextLocale);
    localStorage.setItem("locale", nextLocale);
    localStorage.setItem("lang", nextLocale);

    router.push(redirectedPathName(nextLocale));
    setCurrentLocale(nextLocale);
  };

  const fontColor = currentLocale === "en" ? "text-green-600" : "text-blue-600";

  return (
    <button
      onClick={handleLocaleSwitch}
      className="flex items-center space-x-2 rounded-lg transition-all duration-300 ease-in-out"
    >
      <span
        className={`font-bold uppercase font-serif bg-gray-200 px-1 py-1 rounded-full w-8 h-8
        flex items-center justify-center ${fontColor}`}
      >
        {langMap[currentLocale]}
      </span>
    </button>
  );
}
