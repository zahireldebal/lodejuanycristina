/**
 * NUESTRA COCINA — editá acá los platos.
 * - `featured`: platos destacados con foto (cards). El primero va más ancho.
 * Las pastas tienen su propio archivo: src/data/pastas.ts
 * La carta impresa con precios está en src/data/carta.ts
 */
import type { ImageMetadata } from 'astro';
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
    name: { es: 'La entrada de la casa', en: 'Our house starter' },
    description: {
      es: 'Antes que nada llega esto a la mesa: pan casero, manteca de hierbas y escabeche.',
      en: 'This is the first thing on your table: homemade bread, herb butter and escabeche.',
    },
    tag: { es: 'Para empezar', en: 'To start' },
    image: entrada,
    alt: {
      es: 'Bandeja con pan casero en rodajas, un pocillo de manteca de hierbas y otro de escabeche',
      en: 'Tray with sliced homemade bread, a ramekin of herb butter and one of escabeche',
    },
  },
  {
    name: { es: 'Carne con papas rústicas y boniato', en: 'Meat with rustic potatoes and sweet potato' },
    description: {
      es: 'Al horno, con papas rústicas y boniato asado.',
      en: 'Oven roasted, with rustic potatoes and roasted sweet potato.',
    },
    image: carne,
    alt: {
      es: 'Plato blanco con carne asada, papas rústicas doradas y una rodaja de boniato al horno',
      en: 'White plate with roast meat, golden rustic potatoes and a slice of baked sweet potato',
    },
  },
  {
    name: { es: 'Nuestro pan', en: 'Our bread' },
    description: {
      es: 'Lo horneamos acá y llega calentito, en la canasta.',
      en: 'We bake it here and it comes to the table warm, in its basket.',
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
      es: 'Con su caramelo y una buena cucharada de dulce de leche al costado.',
      en: 'With its caramel and a good spoonful of dulce de leche on the side.',
    },
    tag: { es: 'Postre', en: 'Dessert' },
    image: flan,
    alt: {
      es: 'Flan casero con caramelo y dulce de leche sobre plato blanco, con una cuchara al lado',
      en: 'Homemade flan with caramel and dulce de leche on a white plate, next to a spoon',
    },
  },
  {
    name: { es: 'Postre helado', en: 'Ice-cream dessert' },
    description: {
      es: 'Con salsa de chocolate caliente por arriba.',
      en: 'With hot chocolate sauce on top.',
    },
    tag: { es: 'Postre', en: 'Dessert' },
    image: cheesecake,
    alt: {
      es: 'Porción individual de postre helado con salsa de chocolate y una hoja de menta',
      en: 'Individual ice-cream dessert topped with chocolate sauce and a mint leaf',
    },
  },
];
