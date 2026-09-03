# ECUASECURITY — Sitio web corporativo

Sitio web oficial de **ECUASECURITY**, empresa ecuatoriana de seguridad privada. Construido con HTML5, CSS3 y JavaScript vanilla (sin frameworks ni build tools), listo para publicarse en GitHub Pages.

## Estructura del proyecto

```
ecuasecurity-web/
├── index.html              # Página principal (una sola página, secciones ancladas)
├── assets/
│   ├── css/
│   │   ├── variables.css   # Tokens de diseño: colores, tipografía, espaciados
│   │   ├── base.css        # Reset y estilos base
│   │   ├── layout.css      # Header, footer, secciones, grids
│   │   ├── components.css  # Botones, cards, formulario, WhatsApp, etc.
│   │   ├── animations.css  # Keyframes y animaciones (scroll-reveal, radar, hero)
│   │   └── responsive.css  # Media queries (tablet / móvil) y estilos del hero
│   ├── js/
│   │   ├── main.js         # Navegación, menú móvil, dropdown, link activo
│   │   └── scrollReveal.js # Animaciones al hacer scroll (IntersectionObserver)
│   └── img/
│       └── favicon.svg
└── README.md
```

## Secciones del sitio

1. Inicio
2. Nosotros
3. Servicios
4. Seguridad física
5. Monitoreo y seguridad electrónica
6. Control de rondas
7. GPS y localización
8. Certificaciones y cumplimiento
9. Contacto
10. Botón flotante de WhatsApp

## Cómo ver el sitio localmente

Al no usar build tools, basta con abrir `index.html` en un navegador, o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

## Publicar en GitHub Pages

1. Subir el repositorio a GitHub.
2. En **Settings → Pages**, seleccionar la rama `main` y la carpeta raíz (`/`).
3. El sitio quedará disponible en la URL que GitHub Pages asigne.

## Contenido pendiente (placeholders)

El sitio incluye información real de la estructura y los servicios, pero **no inventa datos empresariales**. Los siguientes campos están marcados en el código con comentarios `TODO` y, cuando corresponde, con la etiqueta visual **"Dato pendiente"**, y deben completarse con información oficial de ECUASECURITY antes de publicar en producción:

- Misión, visión e historia de la empresa (sección Nosotros).
- Estadísticas empresariales (años de trayectoria, clientes, personal, cobertura).
- Certificaciones, permisos de funcionamiento y normativa aplicable.
- Teléfono, correo electrónico, dirección y horario de atención (sección Contacto y footer).
- Número de WhatsApp del botón flotante (actualmente `593000000000` como marcador).
- Enlaces a redes sociales (Facebook, Instagram, LinkedIn).
- Conexión del formulario de contacto a un servicio de envío real (backend propio, Formspree u otro).
- Imagen social (`og:image`) para vista previa en redes sociales.
- URL final del sitio (dominio propio o GitHub Pages) para las etiquetas `canonical` y Open Graph.
