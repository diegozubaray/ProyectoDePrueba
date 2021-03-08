//MENU DESPLEGABLE
var despeglable = document.querySelector('#menu-desp')
var ul = document.querySelector('#links')

function menuDesplegable(param){
    despeglable.addEventListener('mouseover', (e) => {
        ul.classList.add('desplegable')
        ul.classList.remove('d-none')
    })

    despeglable.addEventListener('mouseout', (e) => {
        ul.classList.remove('desplegable')
        ul.classList.add('d-none')
    })
}
menuDesplegable()

//SLIDER
const next = document.querySelector('#btn-next')
const prev = document.querySelector('#btn-prev')
const slides = document.querySelectorAll('#slider > div')

//BOTON SIGUIENTE
next.addEventListener('click', function(e) {
    if((slides[1].classList.contains('d-none') && slides[2].classList.contains('d-none')) && !slides[0].classList.contains('d-none')) {
        slides[0].classList.add('d-none')
        slides[1].classList.remove('d-none')
    } else if((slides[0].classList.contains('d-none') && slides[2].classList.contains('d-none')) && !slides[1].classList.contains('d-none')) {
        slides[1].classList.add('d-none')
        slides[2].classList.remove('d-none')
    } else if(!slides[2].classList.contains('d-none') && (slides[0].classList.contains('d-none') && slides[1].classList.contains('d-none'))) {
        slides[0].classList.remove('d-none')
        slides[2].classList.add('d-none')
    }
})

//BOTON PREVIO
prev.addEventListener('click', e => { 
    if(!slides[0].classList.contains('d-none') && (slides[1].classList.contains('d-none') && slides[2].classList.contains('d-none'))) {
        slides[0].classList.add('d-none')
        slides[2].classList.remove('d-none')
    } else if(!slides[2].classList.contains('d-none') && (slides[1].classList.contains('d-none') && slides[0].classList.contains('d-none'))) {
        slides[2].classList.add('d-none')
        slides[1].classList.remove('d-none')
    } else if(!slides[1].classList.contains('d-none') && (slides[0].classList.contains('d-none') && slides[2].classList.contains('d-none'))) {
        slides[1].classList.add('d-none')
        slides[0].classList.remove('d-none')
    }
})
