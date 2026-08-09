# Framework_3Portafolio

Proyecto portfolio construido con Vite + React. Incluye rutas protegidas, edición local de perfil, componentes de portafolio, y despliegue a GitHub Pages.

**Contenido principal**
- Código fuente: [src](src)
- Datos de perfil por defecto: [src/data/profile.js](src/data/profile.js)
- Contexto de perfil editable: [src/context/ProfileContext.jsx](src/context/ProfileContext.jsx)
- Página de edición de perfil: [src/pages/About/About.jsx](src/pages/About/About.jsx)

Requisitos
- Node.js 18+ y `npm` (o `pnpm`/`yarn` si prefieres). Asegúrate de tener `git` configurado.

Instalación local
```bash
git clone https://github.com/NicoleBs554/Framework_3Portafolio.git
cd Framework_3Portafolio
npm install
```

Modo desarrollo
```bash
npm run dev
```
Abre `http://localhost:5173` (o la URL que indique Vite).

Construir para producción
```bash
npm run build
```
Salida de producción en `dist/`.

Previsualizar build local (opcional)
```bash
npx serve dist
```

Despliegue a GitHub Pages
- El proyecto incluye configuración para GitHub Pages y `vite.config.js` con `base: '/Framework_3Portafolio/'`.
- Hay un workflow en `.github/workflows/deploy-pages.yml` que construye y despliega `dist/` automáticamente cuando haces push a `master`.

Edición de perfil (escalable)
- Datos por defecto: [src/data/profile.js](src/data/profile.js). Puedes editar directamente ese archivo para cambiar contenidos mostrados por defecto.
- Edición desde la interfaz: la página `About` ahora tiene un botón **Editar perfil** que abre un formulario inline y persiste cambios en `localStorage` usando `ProfileContext`.

Dónde mirar / cómo extender
- `src/context/ProfileContext.jsx`: exposiciones principales:
	- `profile`: objeto actual del perfil.
	- `saveProfile(next)`: fusiona/guarda los cambios en `localStorage`.
	- `uploadAvatar(file)`: convierte la imagen seleccionada a Data URL y la guarda en `profile.avatar`.
	- `resetProfile()`: restablece a `src/data/profile.js`.

- `src/components/Sidebar/Sidebar.jsx` ahora lee `profile` para mostrar `profile.avatar` y `profile.name` (con fallback a `Perfil.jpg`).
- `src/pages/About/About.jsx` muestra y permite editar `name`, `location`, `phone`, `email`, `bio` (multi‑párrafo) y subir avatar.

Video en Login
- El video incluido `VIDEO1.mp4` se importa y se muestra en la sección de bienvenida de `src/pages/Login/Login.jsx`.
- Actualmente es un asset estático en la raíz del proyecto. Para hacerlo editable desde UI se puede añadir una propiedad en `ProfileContext` (ej. `profile.welcomeVideo`) y un `uploadVideo(file)` similar a `uploadAvatar`.

Cambio de la imagen de perfil por defecto
- Archivo de fallback: `Perfil.jpg` en la raíz del proyecto. Reemplázalo si quieres cambiar la imagen por defecto.

Problemas comunes
- Si PowerShell bloquea `npm` por políticas de ejecución, ejecuta (PowerShell con permisos de usuario):
	```powershell
	Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
	```
- Si el build crece en tamaño, considera dividir el código (`dynamic import`) o ajustar `build.rollupOptions.output.manualChunks` en `vite.config.js`.

Buenas prácticas para producción
- Evita guardar assets binarios grandes en la rama principal si esperas actualizarlos frecuentemente; usa un bucket/CDN o un servicio de almacenamiento.
- Si necesitas que los cambios en perfil sean visibles por varios usuarios, conecta `ProfileContext` con un backend (Supabase/Firebase/Airtable/Strapi).

Contribuir
- Abre un PR contra esta repo, describe tu cambio y añade pruebas visuales si aplica.

Contacto
- nicoleisabellas@gmail.com

---
Si quieres, puedo implementar ahora la edición del video desde la UI y su persistencia en `ProfileContext`.
