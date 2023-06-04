const FORMULARIO = document.querySelector('.section-form');
const INPUT = document.querySelector('#email');
const SUBMIT = document.querySelector('.submit');
const MAIN = document.querySelector('#main');

const submitFunction = () => {

    let form = FORMULARIO.checkValidity() ;

    if (!form) {
        console.log('El formulario es invalido'); 
    }else if(form){
        main.innerHTML = `
        <section class="section-succes">
                <article class="container-success">
                    <iconify-icon class="form-icon-success" icon="ph:check-circle-fill"></iconify-icon>
                    <h2 class="title-succes">Thanks for<br> 
                        subscribing!</h2>
                    <p class="text-succes">A confirmation email has been sent to<br>
                        <span>pash@gmail.com.</span>  Please open it and click<br> 
                         the button inside to confirm your suscription.
                    </p>
                    <input type="button" value="Dissmis mesagge">
                </article>
            </section>
        `
        console.log('El formulario es valido');
    }
}

SUBMIT.addEventListener('click', submitFunction );