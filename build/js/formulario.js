(function() {
    const forms = document.querySelectorAll('.suscribe');
    
    
    eventListener();
    function eventListener () {
        document.addEventListener('DOMContentLoaded', () => {
            validarFormulario();
        })
    }
    
    function validarFormulario() {
        forms.forEach( form => {
            form.addEventListener('submit', validar )
        } )
    }
    
    function validar(e) {
        e.preventDefault();
    
        const inputEmail = e.target.firstElementChild.firstElementChild;
        const inputEmailValue = inputEmail.value.trim().toLowerCase();
        const mensajeError = e.target.firstElementChild.children[1];
    
        if(inputEmailValue === '') {
            inputEmail.focus();
            return;
        }
        
        if( !validarEmail(inputEmailValue) ) {
            mensajeError.classList.remove('mensajeHide');
            inputEmail.classList.add('suscribe__borderError');
    
            setTimeout(() => {
                mensajeError.classList.add('mensajeHide');  
                inputEmail.classList.remove('suscribe__borderError');
    
            }, 3000);
        }
    }
    
    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }
}) ();