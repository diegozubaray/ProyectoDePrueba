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

/* if(slides[i + 1].classList.contains('d-none')) {
    slides[i + 1].classList.remove('d-none')
    slides[i].classList.add('d-none')
    break
}

if(slides[0].classList.contains('d-none') && slides[2].classList.contains('d-none') && !slides[1].classList.contains('d-none')) {
    slides[2].classList.remove('d-none')
    slides[1].classList.add('d-none')
} */





/* next.addEventListener('click', e => {
    for (let i = 0; i < slides.length;) {        
        if(!slides[i].classList.contains('d-none')) {
            slides[i].classList.add('d-none')
            slides[i + 1].classList.remove('d-none')
        } else {
            slides[i + 1].classList.add('d-none')//SE LE SACA D-NONE AL SIGUIENTE ELEMENTO BOLUDASO!
        }
        slides[i + 1]
        i++
    }
    console.log(e)
})
 */
