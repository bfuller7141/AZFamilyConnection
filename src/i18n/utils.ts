import type { Language, I18nStrings } from './types';
import translations from './translations';

export function getI18n(language: Language): I18nStrings {
  return translations[language] || translations.en;
}

export function getLanguageFromUrl(url: URL): Language {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const lang = segments[0];

  if (lang === 'es') return 'es';
  if (lang === 'en') return 'en';

  return 'en';
}

export function getLocalizedPath(
  path: string,
  language: Language
): string {
  // Remove existing language prefix if present
  const cleanPath = path.replace(/^\/[a-z]{2}/, '');
  return `/${language}${cleanPath}`;
}