/**
 * NUESTRAS PASTAS — editá acá las pastas del carrusel.
 *
 * Por ahora están las que figuran en la carta impresa, más los ñoquis del 29.
 * ⚠️ COMPLETAR: si hacen otras (tallarines, lasaña, canelones...), agregalas acá.
 *
 * - `image` es opcional. Sin foto, la card usa fondo bordó con el ícono `icon`.
 *   Para agregar una foto: copiala a src/assets/images/, importala arriba
 *   y poné `image: miFoto` y `alt: { es, en }`.
 * - `icon`: 'raviolon' | 'sorrentino' | 'noqui'
 */
import type { ImageMetadata } from 'astro';

type T = { es: string; en: string };

export interface Pasta {
  name: T;
  line: T;
  icon: 'raviolon' | 'sorrentino' | 'noqui';
  tag?: T;
  image?: ImageMetadata;
  alt?: T;
}

export const pastas: Pasta[] = [
  {
    name: { es: 'Raviolones de salmón ahumado, rúcula y ricota', en: 'Smoked salmon, rocket & ricotta raviolones' },
    line: { es: 'Rellenos de salmón ahumado, rúcula y ricota.', en: 'Filled with smoked salmon, rocket and ricotta.' },
    icon: 'raviolon',
  },
  {
    name: { es: 'Raviolones de cordero al curry', en: 'Curried lamb raviolones' },
    line: { es: 'Rellenos de cordero, con su toque de curry.', en: 'Filled with lamb, with a touch of curry.' },
    icon: 'raviolon',
  },
  {
    name: { es: 'Raviolones de calabaza y parmesano', en: 'Pumpkin & parmesan raviolones' },
    line: { es: 'Calabaza y parmesano adentro.', en: 'Pumpkin and parmesan inside.' },
    icon: 'raviolon',
  },
  {
    name: { es: 'Sorrentinos de calabaza y cebolla caramelizada', en: 'Pumpkin & caramelised onion sorrentinos' },
    line: { es: 'Calabaza con cebolla caramelizada.', en: 'Pumpkin with caramelised onion.' },
    icon: 'sorrentino',
  },
  {
    name: { es: 'Sorrentinos de jamón y queso', en: 'Ham & cheese sorrentinos' },
    line: { es: 'Los de siempre: jamón y queso.', en: 'The classic: ham and cheese.' },
    icon: 'sorrentino',
  },
  {
    name: { es: 'Ñoquis caseros', en: 'Homemade gnocchi' },
    line: { es: 'Los hacemos cada 29.', en: 'We make them every 29th.' },
    icon: 'noqui',
    tag: { es: 'Los 29', en: 'On the 29th' },
  },
];

/** Salsas para acompañar (tal cual figuran en la carta) */
export const salsas: T[] = [
  { es: 'Puerros', en: 'Leek' },
  { es: 'Albahaca', en: 'Basil' },
  { es: 'Filetto', en: 'Filetto (tomato)' },
  { es: 'Rosa', en: 'Rosa (tomato & cream)' },
  { es: 'Cuatro quesos', en: 'Four cheese' },
  { es: 'Camarones', en: 'Shrimp' },
];
