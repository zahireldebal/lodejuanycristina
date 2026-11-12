// Procesa las fotos de la carta (fotos/carta1.png = exterior, fotos/carta2.png = interior):
// 1. Endereza la perspectiva (homografía desde las 4 esquinas del papel)
// 2. Recorta el borde (mantel) y aplica contraste local (CLAHE) para emparejar la luz
// 3. Contraste y nitidez para leer bien los precios
// Uso: node scripts/process-carta.mjs
import sharp from 'sharp';

const OUT = 'src/assets/images';
const W = 2000, H = 1414; // A4 apaisado: las dos caras con el mismo tamaño

// Esquinas del papel en cada foto [TL, TR, BR, BL] (medidas con un script de detección)
const jobs = [
  { src: 'fotos/carta1.png', out: 'carta-exterior', quad: [[87, 110], [1563, 51], [1574, 1126], [118, 1146]], trim: [0.012, 0.016, 0.012, 0.016] },
  // El interior se sale de la foto por abajo: se usa el borde visible de la imagen
  { src: 'fotos/carta2.png', out: 'carta-interior', quad: [[44, 120], [1599, 58], [1585, 1174], [76, 1174]], trim: [0, 0.012, 0, 0] },
];

// Homografía que lleva (u,v) del rectángulo destino a (x,y) de la foto
function homography(dst, src) {
  const A = [], b = [];
  for (let i = 0; i < 4; i++) {
    const [u, v] = dst[i], [x, y] = src[i];
    A.push([u, v, 1, 0, 0, 0, -u * x, -v * x]); b.push(x);
    A.push([0, 0, 0, u, v, 1, -u * y, -v * y]); b.push(y);
  }
  // Gauss
  for (let c = 0; c < 8; c++) {
    let p = c; for (let r = c + 1; r < 8; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]]; [b[c], b[p]] = [b[p], b[c]];
    for (let r = 0; r < 8; r++) if (r !== c) {
      const f = A[r][c] / A[c][c];
      for (let k = c; k < 8; k++) A[r][k] -= f * A[c][k];
      b[r] -= f * b[c];
    }
  }
  return b.map((v, i) => v / A[i][i]);
}

for (const j of jobs) {
  const { data, info } = await sharp(j.src).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const sw = info.width, sh = info.height;
  const h = homography([[0, 0], [W - 1, 0], [W - 1, H - 1], [0, H - 1]], j.quad);
  const out = Buffer.alloc(W * H * 3);
  for (let v = 0; v < H; v++) {
    for (let u = 0; u < W; u++) {
      const d = h[6] * u + h[7] * v + 1;
      const x = Math.min(sw - 1.001, Math.max(0, (h[0] * u + h[1] * v + h[2]) / d));
      const y = Math.min(sh - 1.001, Math.max(0, (h[3] * u + h[4] * v + h[5]) / d));
      const x0 = x | 0, y0 = y | 0, fx = x - x0, fy = y - y0;
      for (let c = 0; c < 3; c++) {
        const p = (yy, xx) => data[(yy * sw + xx) * 3 + c];
        const val = p(y0, x0) * (1 - fx) * (1 - fy) + p(y0, x0 + 1) * fx * (1 - fy)
          + p(y0 + 1, x0) * (1 - fx) * fy + p(y0 + 1, x0 + 1) * fx * fy;
        out[(v * W + u) * 3 + c] = val;
      }
    }
  }

  // Recorte de un margen chico (saca el mantel rojo de los bordes curvos del papel)
  // trim = [izq, arriba, der, abajo] en proporción (el interior tiene texto casi al borde)
  const [tl, tt, tr, tb] = j.trim.map((f, i) => Math.round(f * (i % 2 ? H : W)));
  const info2 = await sharp(out, { raw: { width: W, height: H, channels: 3 } })
    .extract({ left: tl, top: tt, width: W - tl - tr, height: H - tt - tb })
    .resize(W, H, { kernel: 'lanczos3' })
    .normalise({ lower: 1, upper: 99.5 })      // estira el rango: papel más blanco
    .clahe({ width: 160, height: 160, maxSlope: 2 }) // contraste local: texto nítido sin lavar el bordó
    .linear(1.22, -22)                         // papel más claro, texto más oscuro
    .modulate({ saturation: 1.1, brightness: 1.06 })
    .sharpen({ sigma: 0.9, m1: 0.6, m2: 2 })
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(`${OUT}/${j.out}.jpg`);
  console.log(`${j.src} → ${j.out}.jpg (${info2.width}x${info2.height})`);
}
