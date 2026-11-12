# Lo de Juan y Cristina — sitio web

Sitio informativo (one-page) del restaurante de campo **Lo de Juan y Cristina**, en Ruta 12 km 387, Pueblo Edén (Maldonado, Uruguay).

- **Astro 7** con salida 100 % estática, **Tailwind CSS 4** e imágenes optimizadas (AVIF/WebP responsive).
- Español (`/`) e inglés (`/en/`).
- Tema claro/oscuro/automático, 3 tamaños de letra e idioma, desde el botón **Tт** del header.
- Sin reservas, sin login, sin base de datos: el contacto es por WhatsApp y teléfono.

## Requisitos

- Node.js **22.23.4 o superior** (recomendado: 24 LTS).

## Comandos

| Comando           | Qué hace                                                       |
| ----------------- | -------------------------------------------------------------- |
| `npm install`     | Instala dependencias                                           |
| `npm run dev`     | Servidor local en http://localhost:4321                        |
| `npm run build`   | Genera el sitio en `dist/`                                     |
| `npm run preview` | Sirve `dist/` para probar el build                             |
| `npm run images`  | Reprocesa las fotos de `fotos/` → `src/assets/images/`         |
| `npm run brand`   | Regenera logo, favicon, íconos y la imagen para compartir (OG) |

## Dónde se edita cada cosa

| Qué                                                   | Archivo                         |
| ----------------------------------------------------- | ------------------------------- |
| Teléfonos, dirección, redes, mapa, **horarios**       | `src/config/site.ts`            |
| Dominio del sitio (sitemap, canonical, OG)            | `src/config/site-url.mjs`       |
| Formas de pago y **pastas a domicilio** (placeholders) | `src/config/site.ts`           |
| Pastas del carrusel y salsas                          | `src/data/pastas.ts`            |
| Carta impresa en texto (platos y precios)             | `src/data/carta.ts`             |
| Platos de "Nuestra cocina" (con foto + lista)         | `src/data/menu.ts`              |
| Fotos de la galería y sus textos alternativos         | `src/data/gallery.ts`           |
| Textos de todas las secciones (ES / EN)               | `src/i18n/ui.ts`                |
| Colores, tipografías                                  | `src/styles/global.css`         |
| Logo (chef SVG)                                       | `src/components/chef-svg.mjs`   |

### Cargar los horarios

En `src/config/site.ts`, completá `hours` (hay un ejemplo comentado):

```ts
hours: [
  { days: ['Mo','Tu','We','Th','Fr'], label: { es: 'Lunes a viernes', en: 'Monday to Friday' }, open: '12:00', close: '16:00' },
  { days: ['Sa','Su'], label: { es: 'Sábados y domingos', en: 'Saturday & Sunday' }, open: '12:00', close: '23:30' },
],
```

Al completarlos se muestran en la sección **Contacto** y se publican en los datos estructurados (`openingHours`) para Google.

### Cambiar o agregar fotos

1. Copiá la foto a `src/assets/images/` (nombre en minúscula con guiones, p. ej. `cazuela-de-cordero.jpg`).
2. Importala en `src/data/menu.ts` o `src/data/gallery.ts` y escribí su `alt` en español e inglés.

Astro genera automáticamente las versiones AVIF/WebP en varios tamaños.

### Pastas a domicilio

En `src/config/site.ts`, dentro de `delivery`, reemplazá `[ZONAS DE ENVÍO]`, `[DÍAS Y HORARIOS DE ENTREGA]` y `[PEDIDO MÍNIMO / COSTO DE ENVÍO]` (en español y en inglés). Mientras sigan entre corchetes, el sitio muestra "Lo coordinamos por WhatsApp".

### La carta (tríptico 3D)

La carta está recreada en HTML/CSS (no usa fotos) a partir de `src/data/carta.ts`. Para cambiar un precio, cambiá el número; para agregar un plato, sumá una línea en la sección que corresponda. Lo que quedó por confirmar tiene un campo `verify` con [VERIFICAR] (no se muestra en el sitio).

Cómo se arma, igual que la carta real: la hoja izquierda tiene la **portada** por fuera y Pescado/Carne por dentro; la central, la **contratapa** y Pastas/Salsas; la derecha (solapa), **Vinos** y Postres/Bebidas.

### Foto del hero

El hero usa dos recortes dedicados de la misma foto: `hero-fachada-escritorio.jpg` (apaisado, 2560 px) y `hero-fachada-celular.jpg` (vertical, 1080 px). Los genera `npm run images` a partir de `fotos/sitiofisico2.png`. Si el restaurante manda una foto original de mayor resolución, ponela en `fotos/`, ajustá los recortes en `heroJobs` dentro de `scripts/process-images.mjs` y volvé a correr `npm run images`.

## Publicar

### Netlify

1. Subí el proyecto a un repositorio de GitHub, GitLab o Bitbucket.
2. En Netlify: **Add new site → Import an existing project** y elegí el repo.
3. La configuración ya está en `netlify.toml` (build `npm run build`, carpeta `dist`). Tocá **Deploy**.
4. *Alternativa sin repo:* corré `npm run build` y arrastrá la carpeta `dist/` a https://app.netlify.com/drop

### Vercel

1. Subí el proyecto a GitHub.
2. En Vercel: **Add New → Project**, importá el repo. Detecta Astro solo (también está `vercel.json`).
3. Tocá **Deploy**.

### Dominio propio

1. Conectá el dominio desde el panel de Netlify o Vercel (sección *Domains*).
2. Actualizá `SITE_URL` en `src/config/site-url.mjs` con ese dominio.
3. Volvé a publicar. Así el sitemap, `robots.txt` y la imagen al compartir por WhatsApp usan la URL correcta.

## Notas técnicas

- **Windows:** si VS Code abre el proyecto como `c:\...` (minúscula), Vite pierde el vínculo entre página y CSS. `astro.config.mjs` ya normaliza la letra de unidad, no hace falta hacer nada.
- La carpeta `fotos/` (capturas originales) **no está en el repositorio** porque contiene nombres de usuarios de Google Maps. El sitio usa las versiones ya recortadas de `src/assets/images/`. Para volver a correr `npm run images`, copiá las originales a `fotos/` localmente.
- Las fotos originales (`fotos/`) se recortaron para quitar la interfaz de Google Maps (botones, flechas, tarjetas de usuario, minimapa). Los recortes exactos están en `scripts/process-images.mjs`.
- El mapa embebido y todos los botones "Cómo llegar" usan la ficha oficial de Google Maps del restaurante (`googleMaps` en `src/config/site.ts`). El embed no necesita API key.
