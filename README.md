# SEICO · Servicio Integral de Computadoras

Sitio web de SEICO, desarrollado con React y Vite. El asesor actual es un flujo guiado que corre en el navegador: no guarda las respuestas ni las envía a un servidor. Al terminar, permite copiar un resumen para continuar la consulta por Instagram.

## Trabajar en tu computadora

Necesitás tener instalado Node.js y Git. En una terminal:

```bash
git clone https://github.com/maitesuropp/seico-proyect.git
cd seico-proyect
npm install
npm run dev
```

Vite mostrará una dirección local para abrir el sitio mientras editás. La página principal está en `src/App.jsx` y los estilos en `src/App.css`.

## Guardar cambios en GitHub

```bash
git pull
git add .
git commit -m "Describe el cambio"
git push
```

En otra computadora, descargá el repositorio y repetí la instalación. Antes de trabajar, usá `git pull` para traer los últimos cambios.

## Publicar con Vercel

Importá `maitesuropp/seico-proyect` desde el panel de Vercel. Vercel detecta Vite; usá `npm run build` como comando de compilación y `dist` como directorio de salida. Al conectar el repositorio, los cambios enviados a la rama principal se publican automáticamente.

## Comandos del proyecto

- `npm run dev` — iniciar el servidor local de desarrollo.
- `npm run build` — compilar la versión lista para publicar en `dist/`.
- `npm run preview` — revisar localmente la compilación.

