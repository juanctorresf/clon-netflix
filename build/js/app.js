// Selector de select de idiomas
const idiomas1 = document.querySelector('#idiomas1');
const idiomas2 = document.querySelector('#idiomas2');

// Selectores de botones de preguntas
const preguntaBoton = document.querySelectorAll('.pregunta__boton');
const preguntaDescripcion = document.querySelectorAll('.pregunta__descripcion');
const imgAbrir = document.querySelectorAll('#imgAbrir');

// Event Listener
window.addEventListener('resize', addIdioma);
document.addEventListener('DOMContentLoaded', addIdioma );


// Funcion para mostrar descripcion en la seccion de preguntas
preguntaBoton.forEach( (boton, i) => {
    
    // Agrega en cada boton el evento de click
    boton.addEventListener('click', () => {
        // Verifica que si no se muestra la descripcion al hacer click
        if(preguntaDescripcion[i].classList.contains('hide')) {
            // Cierra todas las descripiones
            preguntaDescripcion.forEach( preg => {
                preg.classList.add('hide');
            } )

            // Mostrar descripcion donde se hizo click
            preguntaDescripcion[i].classList.remove('hide');
            
            // Cambiar rotación de todos los botones para parecer a "+"
            imgAbrir.forEach( img => {
                img.classList.remove('open');
            } )

            // Cambia rotacion del boton cuando una descripcion de muestra "x"
            imgAbrir[i].classList.add('open');

        } else {
            preguntaDescripcion[i].classList.add('hide');
            imgAbrir[i].classList.remove('open');
        }
    })
})    


// Funtions para quitar simbolo del idioma conforma al tamaño de pantalla
function addIdioma() {
    // width of screen
    const screenWidth = window.innerWidth;

    leeWidth(screenWidth);
}

function leeWidth(screenWidth) {
    if(screenWidth < 600) {
        idiomas1.value = '';
        idiomas2.value = '';
    } else {
        idiomas1.value = 'espanol';
        idiomas2.value = 'espanol';
    }
}