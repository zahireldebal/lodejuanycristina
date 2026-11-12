/**
 * LA CARTA — editá acá los platos.
 * - `featured`: platos destacados con foto (cards).
 * - `sections`: el resto de la carta, en lista.
 * No hay precios a propósito.
 */
import type { ImageMetadata } from 'astro';
import raviolones from '../assets/images/raviolones-salsa-puerro.jpg';
import entrada from '../assets/images/entrada-pan-manteca-escabeche.jpg';
import pan from '../assets/images/pan-casero-canasta.jpg';
import carne from '../assets/images/carne-papas-rusticas-boniato.jpg';
import flan from '../assets/images/flan-dulce-de-leche.jpg';
import cheesecake from '../assets/images/cheesecake-salsa-chocolate.jpg';

type T = { es: string; en: string };

export interface FeaturedDish {
  name: T;
  description: T;
  tag?: T;
  image: ImageMetadata;
  alt: T;
}

export const featured: FeaturedDish[] = [
  {
    name: { es: 'Raviolones con salsa de puerro', en: 'Raviolones with leek sauce' },
    description: {
      es: 'Pasta artesanal hecha en casa, con una salsa cremosa de puerro. La especialidad de la casa.',
      en: 'Handmade pasta with a creamy leek sauce. The house specialty.',
    },
    tag: { es: 'Especialidad', en: 'House specialty' },
    image: raviolones,
    alt: {
      es: 'Plato hondo con raviolones caseros cubiertos de salsa cremosa de puerro',
      en: 'Deep plate of homemade raviolones covered in creamy leek sauce',
    },
  },
  {
    name: { es: 'Entrada de la casa', en: 'House starter' },
    description: {
      es: 'Pan casero recién horneado, manteca de hierbas y escabeche. Para arrancar como se debe.',
      en: 'Freshly baked homemade bread, herb butter and escabeche (pickled preserve).',
    },
    image: entrada,
    alt: {
      es: 'Bandeja con pan casero en rodajas, un pocillo de manteca de hierbas y otro de escabeche',
      en: 'Tray with sliced homemade bread, a ramekin of herb butter and one of escabeche',
    },
  },
  {
    name: { es: 'Carne con papas rústicas y boniato', en: 'Meat with rustic potatoes and sweet potato' },
    description: {
      es: 'Carne al horno con papas rústicas y boniato asado, bien de campo.',
      en: 'Oven-roasted meat with rustic potatoes and roasted sweet potato, countryside style.',
    },
    image: carne,
    alt: {
      es: 'Plato blanco con carne asada, papas rústicas doradas y una rodaja de boniato al horno',
      en: 'White plate with roast meat, golden rustic potatoes and a slice of baked sweet potato',
    },
  },
  {
    name: { es: 'Pan casero de la casa', en: 'Homemade house bread' },
    description: {
      es: 'Recién salido del horno, dorado por fuera y tierno por dentro. Llega a la mesa en su canasta.',
      en: 'Fresh from the oven, golden outside and soft inside. It comes to your table in its basket.',
    },
    tag: { es: 'Casero', en: 'Homemade' },
    image: pan,
    alt: {
      es: 'Canasta de mimbre con pan casero dorado recién cortado sobre mantel bordó',
      en: 'Wicker basket with freshly sliced golden homemade bread on a burgundy tablecloth',
    },
  },
  {
    name: { es: 'Flan con dulce de leche', en: 'Flan with dulce de leche' },
    description: {
      es: 'El clásico de siempre, casero, con su caramelo y una buena cucharada de dulce de leche.',
      en: 'The timeless homemade classic, with caramel and a generous spoonful of dulce de leche.',
    },
    tag: { es: 'Postre', en: 'Dessert' },
    image: flan,
    alt: {
      es: 'Flan casero con caramelo y dulce de leche sobre plato blanco, con una cuchara al lado',
      en: 'Homemade flan with caramel and dulce de leche on a white plate, next to a spoon',
    },
  },
  {
    name: { es: 'Cheesecake con salsa de chocolate', en: 'Cheesecake with chocolate sauce' },
    description: {
      es: 'Suave y cremoso, con base crocante y salsa de chocolate por arriba.',
      en: 'Soft and creamy, with a crunchy base and chocolate sauce on top.',
    },
    tag: { es: 'Postre', en: 'Dessert' },
    image: cheesecake,
    alt: {
      es: 'Porción individual de cheesecake con salsa de chocolate y una hoja de menta',
      en: 'Individual cheesecake topped with chocolate sauce and a mint leaf',
    },
  },
];

export interface MenuSection {
  title: T;
  items: Array<{ name: T; note?: T }>;
}

export const sections: MenuSection[] = [
  {
    title: { es: 'Pastas caseras', en: 'Homemade pasta' },
    items: [
      { name: { es: 'Pastas caseras artesanales', en: 'Artisan homemade pasta' }, note: { es: 'La especialidad de la casa', en: 'House specialty' } },
      { name: { es: 'Raviolones con salsa de puerro', en: 'Raviolones with leek sauce' } },
      { name: { es: 'Ñoquis caseros', en: 'Homemade gnocchi' }, note: { es: 'Tradición de los días 29', en: 'A 29th-of-the-month tradition' } },
    ],
  },
  {
    title: { es: 'Cazuelas y del mar', en: 'Stews & seafood' },
    items: [
      { name: { es: 'Cazuela de mariscos', en: 'Seafood stew' } },
      { name: { es: 'Cazuela de cordero', en: 'Lamb stew' } },
      { name: { es: 'Pescados', en: 'Fish' } },
      { name: { es: 'Camarones', en: 'Shrimp' } },
    ],
  },
  {
    title: { es: 'Carnes', en: 'Meats' },
    items: [
      { name: { es: 'Cordero relleno', en: 'Stuffed lamb' } },
      { name: { es: 'Costillas de cerdo asadas', en: 'Roasted pork ribs' } },
      { name: { es: 'Carne con papas rústicas y boniato', en: 'Meat with rustic potatoes and sweet potato' } },
    ],
  },
  {
    title: { es: 'Para empezar y para terminar', en: 'To start & to finish' },
    items: [
      { name: { es: 'Entrada de la casa: pan casero, manteca de hierbas y escabeche', en: 'House starter: homemade bread, herb butter and escabeche' } },
      { name: { es: 'Flan con dulce de leche', en: 'Flan with dulce de leche' } },
      { name: { es: 'Cheesecake con salsa de chocolate', en: 'Cheesecake with chocolate sauce' } },
    ],
  },
];
