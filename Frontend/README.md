# PruebasDVDR

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.5.

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Generación de código

Ejecuta `ng generate component nombre-del-componente` para generar un nuevo componente. También puedes usar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.

## Ejecución de pruebas unitarias

Ejecuta `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecución de pruebas end-to-end

Ejecuta `ng e2e` para ejecutar las pruebas end-to-end a través de una plataforma de tu elección. Para usar este comando, primero necesitas agregar un paquete que implemente capacidades de pruebas end-to-end.

## Instalación de Tailwind CSS

Este proyecto utiliza Tailwind CSS para el diseño. Para instalar Tailwind CSS, sigue estos pasos:

1. Instala Tailwind CSS a través de npm:

   ```sh
   npm install -D tailwindcss
   ```

2. Crea el archivo de configuración de Tailwind CSS:

   ```sh
   npx tailwindcss init
   ```

3. Configura Tailwind CSS en tu archivo `tailwind.config.js` y en `src/styles.scss`:

   ```js
   // tailwind.config.js
   module.exports = {
     content: ["./src/**/*.{html,ts}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

   ```scss
   /* src/styles.scss */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## Instalación de ngxtension

Este proyecto también utiliza [`ngxtension`]. Para instalarlo, sigue estos pasos:

1. Instala [`ngxtension`] a través de npm:
   ```sh
   npm install ngxtension
   ```

## Ayuda adicional

Para obtener más ayuda sobre Angular CLI, usa [`ng help`] o visita la [página de referencia y visión general de Angular CLI](https://angular.dev/tools/cli).
