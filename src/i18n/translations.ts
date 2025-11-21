import type { I18nStrings, Language } from './types';

const translations: Record<Language, I18nStrings> = {
  en: {
    logoAlt: 'Arizona Family Connections',
    cta: 'Get Started',
    about: 'About',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    language: 'Language',
    menuItems: [
      { label: 'Home', url: '/' },
      { label: 'About', url: '/about' },
      { label: 'Services', url: '/services' },
      { label: 'Resources', url: '/resources' },
      { label: 'Contact', url: '/contact' },
    ],
  },
  es: {
    logoAlt: 'Arizona Family Connections',
    cta: 'Comenzar',
    about: 'Acerca de',
    quickLinks: 'Enlaces Rápidos',
    contact: 'Contacto',
    language: 'Idioma',
    menuItems: [
      { label: 'Inicio', url: '/es/' },
      { label: 'Acerca de', url: '/es/about' },
      { label: 'Servicios', url: '/es/servicios' },
      { label: 'Recursos', url: '/es/recursos' },
      { label: 'Contacto', url: '/es/contacto' },
    ],
  },
};

export default translations;