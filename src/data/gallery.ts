/** Fotos de "El lugar" — editá alt y orden acá. */
import type { ImageMetadata } from 'astro';
import fachada from '../assets/images/fachada-restaurante-campo.jpg';
import arcos from '../assets/images/galeria-arcos-vista-campo.jpg';
import camino from '../assets/images/camino-entrada-restaurante.jpg';
import cartel from '../assets/images/cartel-artesanos-en-pastas.jpg';

export interface GalleryImage {
  src: ImageMetadata;
  alt: { es: string; en: string };
  /** clase de tamaño en la grilla: 'wide' | 'tall' | 'big' | 'pano' | 'normal' */
  span?: 'wide' | 'tall' | 'big' | 'pano' | 'normal';
}

export const gallery: GalleryImage[] = [
  {
    src: arcos,
    span: 'tall',
    alt: {
      es: 'Galería con arcos bordó, una mesa redonda con mantel rojo y dos sillones, con vista al campo y las sierras',
      en: 'Arched burgundy porch with a round table in a red tablecloth and two chairs, overlooking the fields and hills',
    },
  },
  {
    src: fachada,
    span: 'big',
    alt: {
      es: 'Fachada roja de dos plantas con galería de arcos, rodeada de árboles y césped bajo un cielo azul',
      en: 'Two-storey red façade with an arched porch, surrounded by trees and lawn under a blue sky',
    },
  },
  {
    src: cartel,
    span: 'tall',
    alt: {
      es: 'Cartel bordó en forma de arco con el chef ilustrado: "Artesanos en pastas — Lo de Juan y Cristina — Restaurante de campo"',
      en: 'Burgundy arch-shaped sign with the illustrated chef: "Artesanos en pastas — Lo de Juan y Cristina — Restaurante de campo"',
    },
  },
  {
    src: camino,
    span: 'pano',
    alt: {
      es: 'Camino de tierra que lleva a la casa roja del restaurante, en medio del campo y bajo un cielo despejado',
      en: 'Dirt road leading to the red restaurant house, in open countryside under a clear sky',
    },
  },
];
