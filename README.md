# Clon de la Página de Netflix

Este proyecto es un clon de la página principal de Netflix, desarrollado como parte de la práctica de habilidades en HTML, CSS (utilizando SASS), y JavaScript. Además, se han implementado diversas optimizaciones utilizando Gulp y sus complementos para mejorar la eficiencia del código y la optimización de recursos como imágenes.

## Características Principales
- **HTML, CSS, SASS:** El proyecto utiliza HTML para la estructura, CSS y SASS para el diseño y estilos, proporcionando una experiencia visual similar a la página principal de Netflix.

- **JavaScript:** Se ha implementado JavaScript para mejorar la interactividad de la página, permitiendo una experiencia de usuario más dinámica.

- **Gulp y Plugins:** Se ha utilizado Gulp como automatizador de tareas, junto con varios plugins como PostCSS, CSSnano, Autoprefixer, gulp-imagemin, gulp-webp, y gulp-avif para optimizar el CSS y las imágenes, mejorando así la eficiencia del proyecto.

## Instalación

1. **Clonar el Repositorio:**
   ```bash
   git clone https://github.com/juanctorresf/clon-netflix
   cd clon-netflix
   ```

2. **Instalar Dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar Localmente:**
   Te recomiendo usar la extensión en VSC llamada Live Server.
   Esta iniciará un servidor local y abrirá la página en tu navegador predeterminado.

4. **Ejecuta Gulp para construir y optimizar el proyecto:**
    ```bash
    gulp
    ```

## Estructura del Proyecto

- **`index.html`**: Página principal.
- **`/src`**: Contiene subcarpetas como img, scss y videos.
    - **`/img`**: Aquí se encuentra las imagenes usadas en la página.
    - **`/scss`**: Aquí se encuentra los archivos scss de manera organizada correspondiendo su sección para un mejor mantenimiento.
    - **`/videos`**: Aquí se encuentra los videos usados en la página.
- **`/build`**: Carpeta generada por Gulp que contiene los archivos optimizados para producción.
- **`gulpfile.js`**: Configuración de tareas de Gulp para la compilación y optimización.

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes sugerencias para mejorar el proyecto, por favor, abre un problema o una solicitud de extracción.

## Autor

- [Juan Torres](https://github.com/juanctorresf)

<!-- ## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles. -->