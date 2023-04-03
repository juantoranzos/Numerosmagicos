//seleccionar elementos del HTML
let title = document.querySelector('h1');
let numeroInput = document.querySelector('#numero-input');
let btnInit = document.querySelector('.btn-init');
let btnSubmit = document.querySelector('.btn-submit')
let numeroRandom = generarNumeroRandom();
//generar un numero random
function generarNumeroRandom(){
    return Math.floor(Math.random() * 80 ) + 1;
}

btnInit.addEventListener('click', () =>{
title.textContent = 'Porfavor, ingresa un Núm entre 1 y 80';
numeroInput.classList.remove('d-none');
btnInit.style.display = 'none';
btnSubmit.classList.remove('d-none')
numeroRandom = generarNumeroRandom();
});
 //detector de eventos para submit
btnSubmit.addEventListener('click', () =>{
    if(+numeroRandom === + numeroInput.value) {
        alert(`EL NUMERO ${+numeroInput.value} ES IGUAl, ADIVINASTE!!`);
        title.textContent = 'Adivina el numero magico';
        btnInit.style.display = 'block';
        numeroInput.classList.add ('d-none');
        btnSubmit.classList.add ('d-none');
    }else if (+numeroRandom > +numeroInput.value){
        alert(`EL NUMERO ${numeroRandom} ES MAYOR QUE ${+numeroInput.value}`);
    }else{
        alert(`EL NUMERO ${+numeroRandom} ES MENOR QUE ${+numeroInput.value}`);
    }
    numeroRandom = generarNumeroRandom();
    numeroInput.value = "";
    numeroInput.focus();
})