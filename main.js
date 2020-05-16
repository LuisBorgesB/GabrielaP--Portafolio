/* VARIABLES GLOBALES */

var imgMenu = document.getElementById('imgMenu')
var portada = document.getElementById('portada')


// FUNCION BAJAR PORTADA
imgMenu.addEventListener('click', function () {
    if (portada.className == 'portadaArriba') {
        portada.classList.remove('portadaArriba')
        portada.classList.add('portadaAbajo')
        portada.style.transition='1s'
        imgMenu.style.transform='rotate(0deg)'
        imgMenu.style.transition='1s'
    } else {
        portada.classList.add('portadaArriba')
        portada.classList.remove('portadaAbajo')
        imgMenu.style.transform='rotate(90deg)'
    }
})