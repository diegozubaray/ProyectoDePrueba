//MENU DESPLEGABLE
var despeglable = document.querySelector('#menu-desp')
var ul = document.querySelector('#links')

despeglable.addEventListener('click', (e) => {
    if(ul.classList.contains('d-none')){
        ul.classList.remove('d-none')
        ul.classList.add('desplegable')
    } else {
        ul.classList.add('d-none')
        ul.classList.remove('desplegable')
    }
})