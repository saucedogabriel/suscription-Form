// Código JavaScript del archivo index.html
const FORMULARIO = document.querySelector('.section-form');
const INPUT = document.querySelector('#email');
const SUBMIT = document.querySelector('.submit');
const MAIN = document.querySelector('#main');
const INVALID = document.querySelector('.invalid');
const INVALID_EMAIL = document.querySelector('.invalid-email');

INVALID.style.display = 'none';

const inputFunction = () => {
    if(INPUT.value.trim() !== ''){
        INPUT.classList.remove('invalid-input');
        INVALID.style.display = 'none';
    }
}

const submitFunction = () => {
    const INPUT_USER = INPUT.value.trim();
     if(FORMULARIO.checkValidity()){
        MAIN.innerHTML = `
        <section class="section-succes">
                <article class="container-success">
                    <iconify-icon class="form-icon-success" icon="ph:check-circle-fill"></iconify-icon>
                    <h2 class="title-succes">Thanks for<br> 
                        subscribing!</h2>
                    <p class="text-succes">A confirmation email has been sent to<br>
                        <span>${INPUT_USER}.</span>  Please open it and click 
                         the button inside to confirm your suscription.
                    </p>
                    <input type="button" value="Dissmis mesagge">
                </article>
            </section>
        `
        FORMULARIO.submit();
    }else if(INPUT.value.trim() !== '' && !form) {
        INPUT.classList.add('invalid-input');
        INVALID.style.display = 'block';
    }else if(INPUT.value.trim() == ''){
        INPUT.classList.remove('invalid-input');
    }
}
 
SUBMIT.addEventListener('click', submitFunction );
INPUT.addEventListener('input', inputFunction );

// Código JavaScript del archivo succes.html
const myButtonDissmis = (e) => {
    if (e.target.classList.contains('dissmis_button')) {
        console.log('Diste click en el botón dissmis mesagge');
    }
}

MAIN.addEventListener('click', myButtonDissmis);