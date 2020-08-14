# Pug-Sass con nodejs y gulp

Esta es una plantilla tomada de [Github](https://github.com/sulistryono/pug-sass-starter) extendida con bootstrap 4.5 y Fontawesome 5.14

Usando Sass se puede personalizar los estilos de bootstrap, tal como en el archivo _variables.scss [Ver Más](https://getbootstrap.com/docs/4.5/getting-started/theming/)

## Requerimientos

Instalar [Node JS](https://nodejs.org) y [NPM](https://www.npmjs.com)

## Modo de Uso

* Abrir la carpeta en VSCode
* Abrir una nueva **Terminal**
* Ejecutar "`npm install`".

## Ejecutar

* Para comenzar a usar la plantilla ejecute "`npm start`".
* Seguido abra `http://localhost:8080/` en su navegador.
* Ya puede modificar sus archivos .pug, .scss y .js

## Desplegar

Este proyecto está configurado para desplegar la carpeta public en github pages

* Para asegurar la compilación de todos los archivo ejecute "`npm run build`".
* Seguido ejecute `npm run deploy`.

## Estructura de Carpetas

```none
+ public: Contiene la versión final del proyecto
  + css : Este folder contiene los archivos de css compilados de Sass
  + fonts : Guarde aquí sus fuentes
  + icons : Guarde aquí sus iconos
  + images : Guarde aquí sus imagenes
  + js : Este folder contiene los archivos de js compilados
  - index.html : Archivos de html compilados de pug en la carpeta pages

+ src : Contiene el código editable del proyecto
  + js
    - scripts.js : Use este archivo para agregar código javascript
  
  + pug
    + base
      - _mixins.pug : Use este archivo para sus mixins
      - _variables.pug : Use este archivo para sus variables globales;
      - base.pug: Estructura general de cualquier archivo HTML
    + layout
      - default.pug : Archivo por defecto para el layout general de las páginas
    + partials
      - _footer.pug : Archivo del Footer
      - _header.pug : Archivo del Header
      - _navbar.pug : Archivo del navbar
    - index.pug : Página de inicio
  + sass
    + base
      - _global.sass : Use este archivo para Estilos globales, como html, body, etc.
      - _mixins.sass : Use este archivo para sus mixins
      - _placeholders.sass : Use este archivo para sus placeholders;
      - _variables.sass : Use este archivo para sus variables;
    + bootstrap: Esta carpeta contiene todos los archivos sass de bootstrap
    + components
      - _components.sass : Use este archivo para sus componentes, como botones, modals, etc;
    + layouts
      - default.pug: Estilos particulares del layout por defecto
    + pages
      - _index.sass : Estilos particulares para la página principal
    + partials
      - _footer.sass : Estilos del footer
      - _header.sass : Estilos del header
    - styles.sass : Aquí se importan todos los archivos de Sass para ser compilado a css
```
