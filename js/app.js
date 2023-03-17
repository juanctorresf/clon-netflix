// Variables
const idiomas1 = document.querySelector('#idiomas1');
const idiomas2 = document.querySelector('#idiomas2');
const preguntaBoton = document.querySelectorAll('.pregunta__boton');
const preguntaHeading = document.querySelectorAll('.pregunta__heading');
const preguntaImgAbrir = document.querySelectorAll('.pregunta__img-abrir');


// Event Listener
window.addEventListener('resize', cambioIdioma);
document.addEventListener('DOMContentLoaded', addIdioma );
preguntaBoton.forEach( boton => {
    boton.addEventListener('click', mostrarDescripcion );
})



// Funtions
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

// Function for showing answers in question frequently section
function mostrarDescripcion(e) {
    e.preventDefault();

    const imgAbrir = document.querySelectorAll('#imgAbrir');
    const answerQuestion = document.querySelectorAll('#answerQuestion');

    let showId = e.target.id;
    
    for (let i = 0; i < imgAbrir.length; i++) {

        
        if( showId === `${i}` ) {
            
            if( imgAbrir[i].classList.contains('activo') ) {
                imgAbrir[i].classList.remove('activo');
                answerQuestion[i].classList.add('hide');
            } else {
                imgAbrir[i].classList.add('activo');
                answerQuestion[i].classList.remove('hide');
            }
            
        } else {
            if( !answerQuestion[i].classList.contains('hide') && imgAbrir[i].classList.contains('activo') ) {
                answerQuestion[i].classList.add('hide');
                imgAbrir[i].classList.remove('activo');
            }
        }
    }
}