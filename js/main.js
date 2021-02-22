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