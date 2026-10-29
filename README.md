# SEICO · Servicio Integral de Computadoras

Sitio web de SEICO, desarrollado con React y Vite. Incluye un chat flotante con IA, servido por una función de Vercel y conectado a Vercel AI Gateway. Las conversaciones se envían al proveedor de IA para generar respuestas y no se guardan en una base de datos de este proyecto. El chat permite copiar la consulta para continuar por Instagram.

## Trabajar en tu computadora

Necesitás tener instalado Node.js y Git. En una terminal:

```bash
git clone https://github.com/maitesuropp/seico-proyect.git
cd seico-proyect
npm install
npm run dev
```

Vite mostrará una dirección local para abrir el sitio mientras editás. La página principal está en `src/App.jsx` y los estilos en `src/App.css`.

Para usar el chat con IA en tu computadora, creá un archivo `.env.local` en la carpeta principal del proyecto con una clave de AI Gateway:

```text
AI_GATEWAY_API_KEY=tu_clave_de_ai_gateway
```

La clave se crea desde AI Gateway en Vercel. En producción, Vercel puede proporcionar la autenticación del Gateway automáticamente; si el proyecto no la tiene activada, agregá `AI_GATEWAY_API_KEY` como variable de entorno en la configuración del proyecto de Vercel. La cuenta también debe tener AI Gateway habilitado; Vercel puede pedir una tarjeta válida para activar créditos gratuitos. Revisá las condiciones y costos vigentes antes de habilitarlo. Nunca pongas la clave en `src/` ni la compartas públicamente. El uso del modelo puede generar cargos según el proveedor y el uso.

## Guardar cambios en GitHub

```bash
git pull
git add .
git commit -m "Describe el cambio"
git push
```

En otra computadora, descargá el repositorio y repetí la instalación. Antes de trabajar, usá `git pull` para traer los últimos cambios.

## Publicar con Vercel

El proyecto está conectado a `maitesuropp/seico-proyect`. Vercel detecta Vite; el sitio usa `npm run build` y `dist`, y el endpoint de IA está en `api/chat.js`. Al enviar cambios a la rama principal, Vercel publica automáticamente. Para probar localmente, Vite necesita además una función de desarrollo compatible con Vercel; ejecutá `vercel dev` después de vincular el proyecto (`vercel link`) para que `/api/chat` funcione junto con la página.

## Comandos del proyecto

- `npm run dev` — iniciar el servidor local de desarrollo.
- `npm run build` — compilar la versión lista para publicar en `dist/`.
- `npm run preview` — revisar localmente la compilación.
- `vercel dev` — iniciar el front y las funciones `/api` localmente, una vez vinculado el proyecto y configurada la variable de AI Gateway.

