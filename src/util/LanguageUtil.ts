
import localization from '../localization/localization.json'
export const getTranslatedText = (label: keyof typeof localization, lang: 'en' | 'si'): string => {
  return localization[label][lang];
};
