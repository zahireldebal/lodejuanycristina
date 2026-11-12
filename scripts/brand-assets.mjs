// Genera logo, favicon, íconos e imagen para compartir (Open Graph) en /public
// Uso: node scripts/brand-assets.mjs
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { logoSvg, iconSvg } from '../src/components/chef-svg.mjs';

const P = 'public';
writeFileSync(`${P}/logo.svg`, logoSvg('color'));
writeFileSync(`${P}/logo-blanco.svg`, logoSvg('white'));
writeFileSync(`${P}/favicon.svg`, iconSvg(64));

for (const [name, size] of [['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512], ['favicon-32.png', 32]]) {
  await sharp(Buffer.from(iconSvg(size))).png().toFile(`${P}/${name}`);
}

// Imagen OG 1200x630: fachada + banda bordó con el logo
const W = 1200, H = 630;
const photo = await sharp('src/assets/images/fachada-restaurante-campo.jpg')
  .resize(W, H, { fit: 'cover', position: 'centre' }).toBuffer();
const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#4a1225" stop-opacity=".96"/><stop offset=".62" stop-color="#6e1d37" stop-opacity=".86"/><stop offset="1" stop-color="#6e1d37" stop-opacity=".15"/></linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <g transform="translate(70,150) scale(2)">${logoSvg('white').replace(/^<svg[^>]*>/, '').replace('</svg>', '')}</g>
  <text x="72" y="470" fill="#fbf5ec" font-family="Georgia, serif" font-size="36" font-style="italic">Restaurante de campo · Artesanos en pastas</text>
  <text x="72" y="520" fill="#fbf5ec" font-family="Arial, sans-serif" font-size="26" opacity=".9">Ruta 12 km 387 · Pueblo Edén · Maldonado</text>
</svg>`;
await sharp(photo).composite([{ input: Buffer.from(overlay) }]).jpeg({ quality: 82, mozjpeg: true }).toFile(`${P}/og-image.jpg`);
console.log('brand assets ok');
