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
const slides = document.querySelectorAll('div[data-slide]')

next.addEventListener('click', e => {
    for (let i = 0; i < slides.length;) {
        if(slides[i].classList.contains('d-none') && i < slides.length - 1) {
            slides[i].classList.remove('d-none')
        } else {
            slides[0].classList.add('d-none')
        }
        i++
    }
})

