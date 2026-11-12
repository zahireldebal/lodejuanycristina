/**
 * ─────────────────────────────────────────────────────────────
 *  DATOS DEL NEGOCIO — editá este archivo para cambiar teléfonos,
 *  dirección, redes y horarios. Todo el sitio (y el SEO) lee de acá.
 * ─────────────────────────────────────────────────────────────
 */
import { SITE_URL } from './site-url.mjs';

export const site = {
  url: SITE_URL,
  name: 'Lo de Juan y Cristina',
  slogans: {
    es: ['Restaurante de Campo', 'Artesanos en Pastas', 'Como en casa', 'Todo casero', 'Siempre una buena excusa'],
    en: ['Countryside Restaurant', 'Artisan Pasta Makers', 'Just like home', 'All homemade', 'Always a good excuse'],
  },

  address: {
    street: 'Ruta 12, km 387',
    locality: 'Pueblo Edén',
    region: 'Maldonado',
    city: 'San Carlos',
    country: 'UY',
    countryName: { es: 'Uruguay', en: 'Uruguay' },
  },

  // Coordenadas del pin de la ficha oficial de Google Maps.
  geo: { latitude: -34.7081576, longitude: -55.0509651 },

  googleMaps: {
    // Ficha oficial del restaurante en Google Maps (todos los botones "Cómo llegar" / "Abrir en Google Maps")
    link: 'https://www.google.com/maps/place/Lo+de+Juan+y+Cristina/@-34.7097075,-55.0547542,15.5z/data=!4m6!3m5!1s0x9575390021649c1f:0x765d376b8f12d311!8m2!3d-34.7081576!4d-55.0509651!16s%2Fg%2F11w2fd7pwh',
    // Embed oficial (sin API key) apuntando a la misma ficha: muestra el pin con el nombre del restaurante.
    // 1d = metros visibles (zoom) · 2d/3d = longitud/latitud · 1s = ID de la ficha
    embed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9000!2d-55.0509651!3d-34.7081576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9575390021649c1f%3A0x765d376b8f12d311!2sLo%20de%20Juan%20y%20Cristina!5e0!3m2!1ses-419!2suy!4v1731400000000!5m2!1ses-419!2suy',
  },

  phones: [
    { display: '091 393 469', intl: '+59891393469', whatsapp: '59891393469' },
    { display: '099 881 630', intl: '+59899881630', whatsapp: '59899881630' },
  ],

  social: {
    instagram: { handle: '@lodejuany', url: 'https://instagram.com/lodejuany' },
    facebook: { handle: '@lodejuanycristina', url: 'https://facebook.com/lodejuanycristina' },
  },

  /**
   * HORARIOS — ⚠️ PLACEHOLDER: completar.
   * Mientras `hours` esté vacío ([]), el sitio muestra "Abrimos todos los días,
   * consultá el horario por WhatsApp" y el JSON-LD no publica openingHours.
   *
   * Formato de cada fila:
   *   days:  días en formato Schema.org (Mo Tu We Th Fr Sa Su)
   *   label: cómo se muestra en el sitio (es / en)
   *   open / close: "HH:MM" en 24 h
   *
   * Ejemplo:
   *   { days: ['Mo','Tu','We','Th','Fr'], label: { es: 'Lunes a viernes', en: 'Monday to Friday' }, open: '12:00', close: '16:00' },
   *   { days: ['Sa','Su'], label: { es: 'Sábados y domingos', en: 'Saturday & Sunday' }, open: '12:00', close: '23:30' },
   */
  hours: [] as Array<{
    days: Array<'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su'>;
    label: { es: string; en: string };
    open: string;
    close: string;
  }>,

  openEveryDay: true,
  servesCuisine: ['Uruguaya', 'Casera', 'Pastas artesanales', 'Cocina de campo'],

  /** MÉTODOS DE PAGO — se muestran en Contacto, en el footer y en el JSON-LD (paymentAccepted). */
  payments: [
    { id: 'cash', icon: 'cash', label: { es: 'Efectivo', en: 'Cash' }, schema: 'Cash' },
    { id: 'debit', icon: 'card', label: { es: 'Tarjeta de débito', en: 'Debit card' }, schema: 'Debit Card' },
    { id: 'credit', icon: 'card-credit', label: { es: 'Tarjeta de crédito', en: 'Credit card' }, schema: 'Credit Card' },
    { id: 'transfer', icon: 'bank', label: { es: 'Transferencia bancaria', en: 'Bank transfer' }, schema: 'Bank Transfer' },
  ],

  /**
   * PASTAS A DOMICILIO — ⚠️ PLACEHOLDERS: completar.
   * Mientras un valor siga entre corchetes [ ... ], el sitio muestra
   * "Lo coordinamos por WhatsApp" en su lugar (no se publica el corchete).
   */
  delivery: {
    zones: { es: '[ZONAS DE ENVÍO]', en: '[DELIVERY AREAS]' },
    schedule: { es: '[DÍAS Y HORARIOS DE ENTREGA]', en: '[DELIVERY DAYS & TIMES]' },
    minimum: { es: '[PEDIDO MÍNIMO / COSTO DE ENVÍO]', en: '[MINIMUM ORDER / DELIVERY FEE]' },
    waMessage: {
      es: 'Hola! Quiero hacer un pedido de pastas.',
      en: 'Hi! I would like to order some pasta.',
    },
  },
} as const;

export type Lang = 'es' | 'en';

/** true si un dato todavía es un placeholder entre corchetes */
export const isPlaceholder = (v: string) => /^\s*\[.*\]\s*$/.test(v);

/** Link de WhatsApp con mensaje predefinido */
export const waLink = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
