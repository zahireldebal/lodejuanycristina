/**
 * NUESTRA CARTA (tríptico) — el contenido de la carta impresa, como texto.
 *
 * Para cambiar un precio, cambiá el número (en pesos uruguayos).
 * `price: null` = el ítem no lleva precio.
 * `verify` = nota interna con [VERIFICAR] para algo que no se leyó con seguridad
 *            en la foto (NO se muestra en el sitio).
 *
 * Cómo se arma el tríptico (pliegue envolvente, como la carta real):
 *   Hoja izquierda:  interior = interior.left    · exterior = PORTADA
 *   Hoja central:    interior = interior.center  · exterior = CONTRATAPA
 *   Hoja derecha:    interior = interior.right   · exterior = VINOS (la solapa)
 * Fuente: fotos/carta1.png (exterior) y fotos/carta2.png (interior).
 */

export interface CartaItem {
  name: string;
  price: number | null;
  verify?: string;
}

export interface CartaSection {
  title: string;
  items?: CartaItem[];
  /** Texto corrido (para guarniciones y salsas) */
  text?: string;
}

export const carta = {
  currency: '$',

  exterior: {
    portada: {
      title: 'Bienvenidos',
      tagline: 'Siempre una buena excusa',
    },
    contratapa: {
      name: 'Lo de Juan y Cristina',
      phones: 'Cel.: 099881630 - 091393469',
      address: ['Ruta 12 Km 387, Pueblo Edén', 'Maldonado, Uruguay'],
    },
    vinos: {
      title: 'Vinos',
      items: [
        { name: 'Tannat Viognier Altos de la Ballena', price: 1400 },
        { name: 'Rosé Altos de la Ballena', price: 1200 },
        { name: 'Albariño Altos de la Ballena', price: 1200 },
        { name: 'Viognier Altos de la Ballena', price: 1200 },
      ],
    } as CartaSection,
  },

  interior: {
    left: [
      {
        title: 'Pescado',
        items: [
          { name: 'Miniaturas', price: 660, verify: '[VERIFICAR] Se lee "Miniaturas", pero no está claro qué plato es' },
          { name: 'Camarones al Ajillo', price: 760 },
          { name: 'Salmón Grillé', price: 930 },
          { name: 'Salmón a la Vasca ó Gallega', price: 970 },
          { name: 'Salmón con Salsa de Camarones', price: 990 },
        ],
      },
      {
        title: 'Carne',
        items: [
          { name: 'Baby Beef', price: 780 },
          { name: 'Baby Beef al Champiñón', price: 970 },
          { name: 'Baby Beef a la Pimienta Negra', price: 970 },
          { name: 'Baby Beef a la Mostaza', price: 970 },
          { name: 'Baby Beef al Vino Tinto', price: 970 },
        ],
      },
      {
        title: 'Guarniciones',
        text: 'Lechuga, Tomate, Zanahoria, Rúcula, Cebolla, Papas al Natural, Puré de Papas.',
      },
    ] as CartaSection[],

    center: [
      {
        title: 'Pastas',
        items: [
          { name: 'Raviolones de Salmón Ahumado, Rúcula y Ricota', price: 850 },
          { name: 'Raviolones de Cordero al Curry', price: 780 },
          { name: 'Raviolones de Calabaza y Parmesano', price: 730 },
          { name: 'Sorrentinos Calabaza y Cebolla Caramelizada', price: 730 },
          { name: 'Sorrentinos de Jamón y Queso', price: 680 },
        ],
      },
      {
        title: 'Salsas',
        text: 'Salsa de Puerros, Salsa de Albahaca, Salsa Filetto, Salsa Rosa, Salsa Cuatro Quesos, Salsa de Camarones.',
      },
    ] as CartaSection[],

    right: [
      {
        title: 'Postres con historia',
        items: [
          { name: 'Postre Helado "Brenda" (con Salsa de Chocolate Caliente)', price: 330 },
          { name: 'Flan', price: 220 },
          { name: 'Flan con Dulce', price: 260, verify: '[VERIFICAR] Hay una marca a mano al lado del precio ($ 260)' },
          { name: 'Arroz con Leche "Guillermina"', price: 270 },
        ],
      },
      {
        title: 'Bebidas',
        items: [
          { name: 'Refrescos Coca y Coca Zero 1 Lts.', price: 250 },
          { name: 'Agua Mineral Salus con y sin Gas', price: 120 },
          { name: 'Agua Saborizada: Menta, Jengibre y Limón', price: 240 },
          { name: 'Cerveza Estrella de Galicia', price: 180 },
          { name: 'Vino por Copa Tannat Viognier', price: 350 },
        ],
      },
    ] as CartaSection[],
  },
};

/** "$ 1.400" con separador de miles uruguayo */
export const formatPrice = (n: number) => `${carta.currency} ${n.toLocaleString('es-UY')}`;
