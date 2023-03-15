// Variables
const idiomas1 = document.querySelector('#idiomas1');
const idiomas2 = document.querySelector('#idiomas2');

// Event Listener
window.addEventListener('resize', cambioIdioma);
document.addEventListener('DOMContentLoaded', addIdioma );


// Funciones
function cambioIdioma() {
    // width de pantalla
    const screenWidth = window.innerWidth;

    leeWidth(screenWidth);
}

function addIdioma() {
    // width de pantalla
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