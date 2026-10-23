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
│   ├── app.html         Vista inicial de Lifeline
│   ├── app.scss         Estilos del componente raíz
│   ├── app.config.ts    Proveedores de la aplicación
│   └── app.routes.ts    Definición de rutas
├── index.html           Idioma español y metadatos iniciales
├── main.ts              Arranque de Angular
└── styles.scss          Estilos globales
```

La siguiente etapa incorpora las secciones y páginas de la landing según los
modelos acordados: inicio, cómo funciona, ciudadanos, personal médico, descarga
y privacidad. Las rutas y enlaces definitivos se completarán con esos flujos.
