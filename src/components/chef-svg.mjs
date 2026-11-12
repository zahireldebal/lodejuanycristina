// Chef ilustrado del logo (recreado del cartel) como SVG reutilizable.
// variant: 'color' (fondos claros) | 'white' (fondos oscuros / bordó)
export function chefPaths(variant = 'color') {
  const white = variant === 'white';
  const cloth = '#ffffff';
  const stroke = white ? 'none' : '#2b1a1e';
  const sw = white ? 0 : 1.6;
  const pants = white ? '#f3b6c4' : '#c8323a';
  const shoes = white ? '#ffffff' : '#2b1a1e';
  const skin = '#f2c4a0';
  const tie = white ? '#6e1d37' : '#2b1a1e';
  return `
  <g stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round" stroke-linecap="round">
    <!-- gorro -->
    <path fill="${cloth}" d="M24 19 C17 18 17 8 24 8 C25 2 33 0 36 5 C40 1 48 4 46 11 C51 13 49 20 43 19 Z"/>
    <rect fill="${cloth}" x="24" y="17" width="19" height="6" rx="1.5"/>
    <!-- cabeza -->
    <circle fill="${skin}" cx="33.5" cy="29" r="6"/>
    <!-- brazo levantado (presenta el nombre) -->
    <path fill="none" stroke="${white ? cloth : stroke}" stroke-width="${white ? 5 : 7}" d="M43 40 L52 37 L60 33"/>
    ${white ? '' : `<path fill="none" stroke="${cloth}" stroke-width="4.2" d="M43 40 L52 37 L60 33"/>`}
    <circle fill="${skin}" cx="61.5" cy="32.3" r="2.6"/>
    <!-- brazo en la cintura -->
    <path fill="none" stroke="${white ? cloth : stroke}" stroke-width="${white ? 5 : 7}" d="M24 40 L17 50 L24 57"/>
    ${white ? '' : `<path fill="none" stroke="${cloth}" stroke-width="4.2" d="M24 40 L17 50 L24 57"/>`}
    <!-- chaqueta -->
    <path fill="${cloth}" d="M23 38 Q33.5 33 44 38 L45 62 L22 62 Z"/>
    <!-- pantalón -->
    <path fill="${pants}" d="M23.5 74 L32.5 74 L32 109 L25 109 Z"/>
    <path fill="${pants}" d="M34.5 74 L43.5 74 L42 109 L35 109 Z"/>
    <!-- zapatos -->
    <path fill="${shoes}" d="M23 109 L33 109 L33 113 L21 113 Q21 110 23 109 Z"/>
    <path fill="${shoes}" d="M34.5 109 L44 109 Q46 110 46 113 L34.5 113 Z"/>
    <!-- delantal -->
    <path fill="${cloth}" d="M24.5 52 L42.5 52 L45 76 Q33.5 81 22 76 Z"/>
    <path fill="none" stroke="${tie}" stroke-width="1.6" d="M24.5 52.5 L42.5 52.5"/>
    <path fill="none" stroke="${tie}" stroke-width="1.2" d="M29 63 Q33.5 67 38 63"/>
  </g>`;
}

export function chefSvg(variant = 'color', attrs = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="12 0 54 116" ${attrs}>${chefPaths(variant)}</svg>`;
}

/** Logo completo (chef + texto serif) como SVG independiente */
export function logoSvg(variant = 'color') {
  const text = variant === 'white' ? '#ffffff' : '#8a2846';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 130" role="img" aria-label="Lo de Juan y Cristina">
  <g transform="translate(0,7)">${chefPaths(variant)}</g>
  <g fill="${text}" font-family="Lora, Georgia, 'Times New Roman', serif" font-size="34" font-weight="500">
    <text x="80" y="40">Lo de</text>
    <text x="80" y="78">Juan y</text>
    <text x="80" y="116">Cristina</text>
  </g>
</svg>`;
}

/** Ícono cuadrado: chef blanco sobre bordó */
export function iconSvg(size = 512) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 120 120">
  <rect width="120" height="120" rx="26" fill="#8a2846"/>
  <g transform="translate(20,3)">${chefPaths('white')}</g>
</svg>`;
}
