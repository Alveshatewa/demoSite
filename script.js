
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

// Animação de fade up para os itens de serviço
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.item-service');
    services.forEach((service, index) => {
        setTimeout(() => {
            service.style.opacity = 1;
            service.style.animationDelay = `${index * 0.5}s`;
        }, index * 500);

        const toggleArrow = service.querySelector('.toggle-arrow');
        const description = service.querySelector('.description');

        toggleArrow.addEventListener('click', () => {
            if (description.style.display === 'none' || description.style.display === '') {
                description.style.display = 'block';
                toggleArrow.textContent = '▲'; // Mudar para seta para cima
            } else {
                description.style.display = 'none';
                toggleArrow.textContent = '▼'; // Mudar para seta para baixo
            }
        });
    });
});

// Mostrar ou ocultar a descrição dos itens de serviço

function toggleDescription(button) {
    const description = button.previousElementSibling;
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        button.textContent = "▲";
    } else {
        description.style.display = "none";
        button.textContent = "▼";
    }
}