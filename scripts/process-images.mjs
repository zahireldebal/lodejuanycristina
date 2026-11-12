// Procesa las fotos originales de ./fotos → src/assets/images
// - Recorta overlays de Google Maps / Instagram
// - Escala suavemente (Lanczos) las imágenes chicas
// - Ajustes suaves de color y nitidez
// Uso: npm run images
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const SRC = 'fotos';
const OUT = 'src/assets/images';
mkdirSync(OUT, { recursive: true });

// crop: { left, top, width, height } en píxeles del original
const jobs = [
  // Fachada principal (hero): saco la flecha "<" de Maps (izq.) y el auto gris (abajo der.)
  { src: 'sitiofisico2', out: 'fachada-restaurante-campo', crop: { left: 26, top: 4, width: 1074, height: 476 }, sat: 1.06 },
  // Fachada con cielo de tormenta: saco el auto de la izquierda
  { src: 'sitiofisico1', out: 'fachada-cielo-tormenta', crop: { left: 150, top: 4, width: 799, height: 430 }, sat: 0.97 },
  // Galería con arcos y vista al campo: saco los controles de Maps
  { src: 'sitiofisico3', out: 'galeria-arcos-vista-campo', crop: { left: 4, top: 0, width: 708, height: 850 } },
  // Camino de entrada: saco tarjeta de usuario, botón compartir, minimapa y tablero del auto
  { src: 'sitiofisico4', out: 'camino-entrada-restaurante', crop: { left: 80, top: 140, width: 1200, height: 590 } },
  // Carteles
  { src: 'logo1', out: 'cartel-artesanos-en-pastas', crop: { left: 0, top: 4, width: 716, height: 837 } },
  { src: 'logo2', out: 'cartel-ruta-son-bienvenidos', crop: { left: 0, top: 0, width: 758, height: 845 } },
  // Platos
  { src: 'comida1', out: 'raviolones-salsa-puerro', crop: { left: 180, top: 132, width: 1030, height: 720 } },
  { src: 'comida2', out: 'pan-casero-canasta', crop: { left: 78, top: 134, width: 1130, height: 720 } },
  { src: 'comida3', out: 'pan-escabeche-vino', crop: { left: 2, top: 4, width: 704, height: 696 } },
  { src: 'comida4', out: 'cheesecake-salsa-chocolate', crop: { left: 0, top: 4, width: 937, height: 484 } },
  { src: 'comida6', out: 'entrada-pan-manteca-escabeche', crop: { left: 0, top: 2, width: 953, height: 430 } },
  { src: 'comida7', out: 'entrada-y-carta-bienvenidos', crop: { left: 0, top: 0, width: 710, height: 858 } },
  { src: 'comida8', out: 'flan-dulce-de-leche', crop: { left: 186, top: 134, width: 1030, height: 720 } },
  { src: 'comida10', out: 'carne-papas-rusticas-boniato', crop: { left: 0, top: 2, width: 955, height: 436 } },
];

const MIN_WIDTH = 1400; // por debajo de esto se escala (máx. x2)

for (const j of jobs) {
  let img = sharp(`${SRC}/${j.src}.png`).extract(j.crop).removeAlpha();
  const w = j.crop.width;
  if (w < MIN_WIDTH) {
    const factor = Math.min(2, MIN_WIDTH / w);
    img = img.resize({ width: Math.round(w * factor), kernel: 'lanczos3' });
  }
  img = img
    .modulate({ saturation: j.sat ?? 1.04, brightness: 1.01 })
    .sharpen({ sigma: 0.7, m1: 0.6, m2: 1.2 });
  const info = await img.jpeg({ quality: 90, mozjpeg: true }).toFile(`${OUT}/${j.out}.jpg`);
  console.log(`${j.src} → ${j.out}.jpg (${info.width}x${info.height})`);
}

// ── Hero: versiones dedicadas (escritorio apaisada / celular vertical) ──
// La foto original más grande de la fachada mide 1492×660 px. Sin Real-ESRGAN,
// se escala con Lanczos en 2 pasos + un contraste y nitidez suaves, que es mejor
// que dejar que el navegador estire una imagen chica.
const heroJobs = [
  // Escritorio: sin la flecha de Maps (izq.) y por encima del auto gris (abajo der.)
  { out: 'hero-fachada-escritorio', crop: { left: 26, top: 4, width: 1080, height: 480 }, width: 2560 },
  // Celular (≈4:5): cuerpo principal de la casa con los arcos, centrado
  { out: 'hero-fachada-celular', crop: { left: 466, top: 30, width: 432, height: 530 }, width: 1080, sharp: { sigma: 0.8, m1: 0.4, m2: 1.1 } },
];
for (const j of heroJobs) {
  const mid = Math.round((j.crop.width + j.width) / 2);
  const step1 = await sharp(`${SRC}/sitiofisico2.png`).extract(j.crop).removeAlpha()
    .resize({ width: mid, kernel: 'lanczos3' }).sharpen({ sigma: 0.6, m1: 0.4, m2: 1 }).toBuffer();
  const info = await sharp(step1)
    .resize({ width: j.width, kernel: 'lanczos3' })
    .linear(1.05, -5)                          // un poco más de contraste
    .modulate({ saturation: 1.06, brightness: 1.01 })
    .sharpen(j.sharp ?? { sigma: 1.1, m1: 0.5, m2: 1.6 }) // nitidez suave, sin halos
    .jpeg({ quality: 92, mozjpeg: true })
    .toFile(`${OUT}/${j.out}.jpg`);
  console.log(`sitiofisico2 → ${j.out}.jpg (${info.width}x${info.height})`);
}
