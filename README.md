# Lifeline Landing Page

Base Angular de la landing pública de Lifeline, de RescueBridge.

## Configuración inicial

- Angular 21.2.25 y CLI 21.2.28, fijados por `package-lock.json`.
- Componentes standalone, Angular Router y TypeScript en modo estricto.
- Estilos SCSS y configuración de compilación para producción.
- Node.js compatible: `^20.19.0`, `^22.12.0` o `^24.0.0`.
- Entorno utilizado: Node.js 22.14.0 y npm 11.6.4 para instalar dependencias.

## Instalar y ejecutar

Las dependencias iniciales ya están instaladas. Desde la raíz del repositorio,
en CMD o PowerShell:

```text
npm.cmd start
```

Abrir `http://localhost:4200/`. Los comandos npm utilizan la CLI local del
proyecto. Para instalar desde un clon nuevo o reinstalar exactamente las
versiones de `package-lock.json`:

```text
npm.cmd exec --yes --package=npm@11.6.4 -- npm ci
```

La instalación inicial utilizó npm 11.6.4 de forma puntual porque npm 10.9.2
devolvió un error interno al resolver dependencias. El comando anterior permite
utilizar esa versión sin cambiar la instalación global de npm.

## Compilar

```text
npm.cmd run build
```

La salida de la aplicación se genera en `dist/lifeline-landing-page/browser/`.

## Organización

```text
public/                  Recursos estáticos
src/
├── app/
│   ├── app.ts           Componente raíz standalone
│   ├── app.html         Estructura base (Navbar, RouterOutlet, Footer)
│   ├── app.scss         Estilos de layout raíz
│   ├── app.config.ts    Proveedores y scroll de rutas/anclas
│   ├── app.routes.ts    Definición de rutas públicas
│   ├── pages/
│   │   ├── home/         Landing page principal con todas las secciones
│   │   ├── como-funciona/ Detalle del flujo offline y sincronización
│   │   ├── descargar/    Página de descarga para Android e iOS
│   │   └── privacidad/   Política de privacidad según Ley N° 29733
│   └── shared/
│       ├── navbar/       Barra de navegación fija y menú responsive
│       └── footer/       Pie de página con enlaces y atribución
├── index.html           Metadatos SEO, fuentes (Montserrat/Inter) e iconos
├── main.ts              Arranque de Angular
└── styles.scss          Tokens de diseño (colores, espaciado 8dp, tipografía)
```

## Secciones y Páginas Implementadas

La landing page sigue las especificaciones de diseño UX/UI (sección 6.1 a 6.3 del informe), integrando:

- **SEO & Meta Tags:** Metadatos canónicos, descripción, palabras clave, theme-color (`#0D3B4C`) y jerarquía semántica H1-H3.
- **Style Guidelines:** Paleta cromática oficial (Deep Rescue Teal `#0D3B4C`, Lifeline Cyan `#1CA3C8`, Alert Amber `#F59E0B`, Emergency Red `#DC2626`, Clinical White `#F8FAFC`, Dark Slate `#0F172A`), tipografía Montserrat (títulos) e Inter (cuerpo) y sistema de espaciado basado en grilla de 8dp.
- **Inicio (`/`):**
  - **Hero:** Indicador de modo offline, H1 de valor, CTAs de descarga y mockup de teléfono interactivo.
  - **El problema:** Tarjetas con las tres causas críticas en emergencias post-sismo (telecomunicaciones frágiles, respuesta saturada, poca preparación).
  - **Cómo funciona (`#como-funciona`):** Flujo de 3 pasos (consulta, orientación clara, auxilio profesional) con leyenda de estado de red.
  - **Funciones (`#funciones`):** 6 tarjetas con capacidades clave bajo estrés (multimodalidad, IA offline, checklist claro, alertas, guardado/sincronización, historial).
  - **Roles (`#roles`, `#ciudadanos`, `#medicos`):** Selector interactivo y tarjetas específicas para Ciudadano y Personal Médico.
  - **Fuentes médicas (`#fuentes`):** Acreditación de fuentes oficiales (MINSA, OMS, Cruz Roja Peruana) y aviso importante de alcance clínico.
  - **Descarga (`#descargar`):** Banner urgente de preparación previa al sismo.
  - **Preguntas frecuentes (`#preguntas`):** Acordeón interactivo con las 5 preguntas esenciales.
  - **CTA final:** Llamado a la acción con acceso a tiendas de aplicaciones.
- **Rutas dedicadas:** `/como-funciona`, `/descargar` y `/privacidad`.
