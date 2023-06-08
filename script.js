const FORMULARIO = document.querySelector('.section-form');
const INPUT_EMAIL = document.querySelector('#email');
const INPUT_SUBMIT = document.querySelector('.submit');
const MAIN = document.querySelector('#main');
const INVALID_TEXT = document.querySelector('.invalid');
const INVALID_EMAIL = document.querySelector('.invalid-email');

INVALID_TEXT.style.display = 'none';

const inputFunction = () => {
    if(INPUT_EMAIL.value.trim() !== ''){
        INPUT_EMAIL.classList.remove('invalid-input');
        INVALID_TEXT.style.display = 'none';
    }
}

const submitFunction = () => {
    const INPUT_USER = INPUT_EMAIL.value.trim();
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
                    <div class="text-succes-container">
                        <p class="text-succes-btn">
                            <a href="./index.html" class="dissmis_button">Dissmis mesagge</a>
                        </p>
                    </div>
                </article>
            </section>
        `
        FORMULARIO.submit();
    }else if(INPUT_EMAIL.value.trim() !== '' && !FORMULARIO.checkValidity()) {
        INPUT_EMAIL.classList.add('invalid-input');
        INVALID_TEXT.style.display = 'block';
    }else if(INPUT_EMAIL.value.trim() == ''){
        INPUT_EMAIL.classList.remove('invalid-input');
    }
}
 
INPUT_SUBMIT.addEventListener('click', submitFunction );
INPUT_EMAIL.addEventListener('input', inputFunction );

