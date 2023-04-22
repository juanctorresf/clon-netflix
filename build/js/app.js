// Event Listener
document.addEventListener('DOMContentLoaded', iniciarApp );

function iniciarApp() {
    window.addEventListener('resize', addIdioma);

    // Selector de select de idiomas
    const idiomas = document.querySelectorAll('#idioma');
    
    // Selectores de botones de preguntas
    const preguntaBoton = document.querySelectorAll('.pregunta__boton');
    const preguntaDescripcion = document.querySelectorAll('.pregunta__descripcion');
    const imgAbrir = document.querySelectorAll('#imgAbrir');

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
    
    
    // Function para quitar simbolo del idioma conforma al tamaño de pantalla
    function addIdioma() {
        
        const screenWidth = window.innerWidth;
    
        if(screenWidth < 600) {
            idiomas.forEach( idioma => {
                idioma.value = '';
            } )
        } else {
            idiomas.forEach( idioma => {
                idioma.value = 'espanol';
            } )
        }
    }
}