// Selector de select de idiomas
const idiomas1 = document.querySelector('#idiomas1');
const idiomas2 = document.querySelector('#idiomas2');

// Selectores de botones de preguntas
const preguntaBoton = document.querySelectorAll('.pregunta__boton');
const preguntaDescripcion = document.querySelectorAll('.pregunta__descripcion');
const imgAbrir = document.querySelectorAll('#imgAbrir');

// Event Listener
window.addEventListener('resize', cambioIdioma);
document.addEventListener('DOMContentLoaded', addIdioma );


// Funcion para mostrar descripcion en la seccion de preguntas
preguntaBoton.forEach( (boton, i) => {
    
    // Agrega en cada boton el evento de click
    boton.addEventListener('click', () => {
        // Verifica que si no se muestra la descripcion al hacer click
        if(preguntaDescripcion[i].classList.contains('hide')) {
            // itera sobre todas las descripciones y agrega la clase de ".hide"
            preguntaDescripcion.forEach( preg => {
                preg.classList.add('hide');
            } )
            // Le quita la clase ".hide" para ser mostrada
            preguntaDescripcion[i].classList.remove('hide');
            
            // Itera sobre cada imagen de "X" para quitar la clase ".open"
            imgAbrir.forEach( img => {
                img.classList.remove('open');
            } )
            // Agrega la clase ".open" en el boton que hagamos click.
            imgAbrir[i].classList.add('open');
        } else {
            preguntaDescripcion[i].classList.add('hide');
            imgAbrir[i].classList.remove('open');
        }
    })
})    




// Funtions para quitar simbolo del idioma conforma al tamaño de pantalla
function cambioIdioma() {
    // width of screen
    const screenWidth = window.innerWidth;

    leeWidth(screenWidth);
}

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