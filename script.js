
// text animation with infinite loop

const texto = "Olá, Bem vindo a KamaCar Services Lda."
let i = 0;
const velocidade = 90;

function escreverTexto (){
    if(i < texto.length){
        document.getElementById("boasVindas").textContent += texto.charAt(i)
        i++;
        setTimeout(escreverTexto, velocidade);
    } else{
        setTimeout (() => {
            document.getElementById("boasVindas").textContent = "";
            i = 0
            escreverTexto()
        }, 1000)
    }
}

document.addEventListener("DOMContentLoaded", escreverTexto);



const slides = document.querySelector('.slides');
const radios = document.querySelectorAll('.radio');
let indexActual = 0;
const totalDeSlides = radios.length

function mostrarSlide(index){

    const offset = index * -100;

    slides.style.transform = `translateX(${offset}%)`;

    radios.forEach(radio => radio.classList.remove('active'));

    radios[index].classList.add('active');
}

function proximoSlide(){

    indexActual = (indexActual + 1) % totalDeSlides;
    mostrarSlide(indexActual)
}

radios.forEach(radio => {
    radio.addEventListener('click', () => {
        indexActual = parseInt(radio.getAttribute('data-index'));
        mostrarSlide(indexActual)
    });
});

setInterval(proximoSlide, 5000)

// Menu Responsivo
document.addEventListener('DOMContentLoaded', function() {
    const menuResponsivo = document.querySelector('.menuResponsivo');
    const menu = document.querySelector('.menu ul');

    menuResponsivo.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});