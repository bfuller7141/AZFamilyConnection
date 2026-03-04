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
      { label: 'About', url: '/about/' },
      { label: 'Services', url: '/services/' },
      {
        label: 'Locations',
        children: [
          { label: 'Phoenix', url: '/locations/phoenix/' },
          { label: 'Kingman', url: '/locations/kingman/' },
          { label: 'Prescott', url: '/locations/prescott/' },
          { label: 'Portland', url: '/locations/portland/' },
        ],
      },
      { label: 'Resources', url: '/resources/' },
      { label: 'Contact', url: '/contact/' },
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
      { label: 'Acerca de', url: '/es/about/' },
      { label: 'Servicios', url: '/es/services/' },
      {
        label: 'Ubicaciones',
        children: [
          { label: 'Phoenix', url: '/es/locations/phoenix/' },
          { label: 'Kingman', url: '/es/locations/kingman/' },
          { label: 'Prescott', url: '/es/locations/prescott/' },
          { label: 'Portland', url: '/es/locations/portland/' },
        ],
      },
      { label: 'Recursos', url: '/es/resources/' },
      { label: 'Contacto', url: '/es/contact/' },
    ],
  },
};

export default translations;

