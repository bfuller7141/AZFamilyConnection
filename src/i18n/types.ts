export type Language = 'en' | 'es';

export interface MenuItem {
  label: string;
  url: string;
}

export interface I18nStrings {
  logoAlt: string;
  cta: string;
  about: string;
  quickLinks: string;
  contact: string;
  language: string;
  menuItems: MenuItem[];
}