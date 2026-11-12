/**
 * NUESTRA CARTA — transcripción de la carta impresa (fotos/carta1.png y carta2.png).
 * Precios en pesos uruguayos, tal cual figuran en la carta.
 * Lo dudoso tiene un campo `verify` con [VERIFICAR] (nota interna, no se muestra en el sitio).
 * Si cambia la carta: reemplazá las fotos en fotos/, corré `node scripts/process-carta.mjs`
 * y actualizá este texto.
 */
import exterior from '../assets/images/carta-exterior.jpg';
import interior from '../assets/images/carta-interior.jpg';

type T = { es: string; en: string };

export const cartaFaces = {
  front: {
    image: exterior,
    label: { es: 'Frente', en: 'Front' },
    alt: {
      es: 'Frente de la carta impresa, en tres paneles: a la izquierda la lista de vinos, en el centro los datos de contacto y a la derecha la portada bordó con el chef, el nombre "Lo de Juan y Cristina", la palabra "Bienvenidos" y la frase "Siempre una buena excusa"',
      en: 'Front of the printed menu, in three panels: the wine list on the left, contact details in the middle and, on the right, the burgundy cover with the chef, the name "Lo de Juan y Cristina", the word "Bienvenidos" and the phrase "Siempre una buena excusa"',
    },
  },
  back: {
    image: interior,
    label: { es: 'Dorso', en: 'Back' },
    alt: {
      es: 'Interior de la carta impresa con precios, en tres paneles: pescado, carne y guarniciones; pastas y salsas; postres con historia y bebidas',
      en: 'Inside of the printed menu with prices, in three panels: fish, meat and sides; pasta and sauces; desserts and drinks',
    },
  },
};

export interface CartaSection {
  title: string;
  /** verify: nota interna (no se publica) para lo que hay que confirmar */
  items?: Array<{ name: string; price?: string; verify?: string }>;
  text?: string;
}

/** Transcripción literal (en el idioma original de la carta) */
export const cartaText: CartaSection[] = [
  {
    title: 'Pescado',
    items: [
      { name: 'Miniaturas', price: '$ 660', verify: '[VERIFICAR] Se lee bien, pero no está claro qué plato es' },
      { name: 'Camarones al ajillo', price: '$ 760' },
      { name: 'Salmón grillé', price: '$ 930' },
      { name: 'Salmón a la vasca o gallega', price: '$ 970' },
      { name: 'Salmón con salsa de camarones', price: '$ 990' },
    ],
  },
  {
    title: 'Carne',
    items: [
      { name: 'Baby beef', price: '$ 780' },
      { name: 'Baby beef al champiñón', price: '$ 970' },
      { name: 'Baby beef a la pimienta negra', price: '$ 970' },
      { name: 'Baby beef a la mostaza', price: '$ 970' },
      { name: 'Baby beef al vino tinto', price: '$ 970' },
    ],
  },
  {
    title: 'Guarniciones',
    text: 'Lechuga, tomate, zanahoria, rúcula, cebolla, papas al natural, puré de papas.',
  },
  {
    title: 'Pastas',
    items: [
      { name: 'Raviolones de salmón ahumado, rúcula y ricota', price: '$ 850' },
      { name: 'Raviolones de cordero al curry', price: '$ 780' },
      { name: 'Raviolones de calabaza y parmesano', price: '$ 730' },
      { name: 'Sorrentinos de calabaza y cebolla caramelizada', price: '$ 730' },
      { name: 'Sorrentinos de jamón y queso', price: '$ 680' },
    ],
  },
  {
    title: 'Salsas',
    text: 'Salsa de puerros, salsa de albahaca, salsa filetto, salsa rosa, salsa cuatro quesos, salsa de camarones.',
  },
  {
    title: 'Postres con historia',
    items: [
      { name: 'Postre helado "Brenda" (con salsa de chocolate caliente)', price: '$ 330' },
      { name: 'Flan', price: '$ 220' },
      { name: 'Flan con dulce', price: '$ 260', verify: '[VERIFICAR] Hay una marca a mano al lado del precio' },
      { name: 'Arroz con leche "Guillermina"', price: '$ 270' },
    ],
  },
  {
    title: 'Bebidas',
    items: [
      { name: 'Refrescos Coca y Coca Zero 1 L', price: '$ 250' },
      { name: 'Agua mineral Salus con y sin gas', price: '$ 120' },
      { name: 'Agua saborizada: menta, jengibre y limón', price: '$ 240' },
      { name: 'Cerveza Estrella de Galicia', price: '$ 180' },
      { name: 'Vino por copa Tannat Viognier', price: '$ 350' },
    ],
  },
  {
    title: 'Vinos',
    items: [
      { name: 'Tannat Viognier Altos de la Ballena', price: '$ 1400' },
      { name: 'Rosé Altos de la Ballena', price: '$ 1200' },
      { name: 'Albariño Altos de la Ballena', price: '$ 1200' },
      { name: 'Viognier Altos de la Ballena', price: '$ 1200' },
    ],
  },
];

export type { T as CartaT };
