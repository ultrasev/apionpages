export const i18n = {
  defaultLocale: "en",
  locales: ["en", "zh"],
} as const;

export type Locale = (typeof i18n)["locales"][number];

export interface Tribute {
  [lang: string]: string;
}

export const hermes = (lang: Locale, tribute: Tribute) => {
  return tribute[lang] || tribute[Object.keys(tribute)[0]];
};
