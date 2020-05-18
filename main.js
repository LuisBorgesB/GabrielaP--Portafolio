//  VARIABLES GLOBALES
var imgMenu = document.getElementById('imgMenu')
var portada = document.getElementById('portada')
var emergenteTelefono = document.getElementById('emergenteTelefono')
var emergenteCorreo = document.getElementById('emergenteCorreo')
var fondoOscuroGeneral = document.getElementById('fondoOscuroGeneral')
var body = document.querySelector('body')
var telf = document.getElementById('telf')
var correo = document.getElementById('correo')
var copyImgTelf = document.getElementById('imgEmergTelef')
var copyImgCerr = document.getElementById('imgEmergCorreo')
var confirmacionCopy = document.getElementById('confirmacionCopy')
var botonSiguiente = document.getElementById('botonSiguiente')
var botonAtras = document.getElementById('botonAtras')
var proyecto_1 = document.getElementById('proyecto_1')
var proyecto_2 = document.getElementById('proyecto_2')
var proyecto_3 = document.getElementById('proyecto_3')
var proyecto_4 = document.getElementById('proyecto_4')
var proyecto_5 = document.getElementById('proyecto_5')
var proyecto_6 = document.getElementById('proyecto_6')
var proyecto_7 = document.getElementById('proyecto_7')
var proyecto_8 = document.getElementById('proyecto_8')
var proyecto_9 = document.getElementById('proyecto_9')
var foto1 = document.getElementById('dise_1');
var foto2 = document.getElementById('dise_2');
var foto3 = document.getElementById('dise_3');
var foto4 = document.getElementById('dise_4');
var foto5 = document.getElementById('dise_5');
var foto6 = document.getElementById('dise_6');
var foto7 = document.getElementById('dise_7');
var foto8 = document.getElementById('dise_8');
var foto9 = document.getElementById('dise_9');
var contenedorProyectos = document.getElementById('contenedorDetallePortafolio');
var botonCerrar = document.getElementById('cerrar')
// FUNCION VISUALIZAR HASTA QUE TODO ESTE CARGADO
window.onload = function () {
    this.body.style.visibility='visible'
}
// FUNCION CERRAR DETALLES
fondoOscuroGeneral.addEventListener('click', function () {
    botonCerrar.style.visibility="hidden"
    fondoOscuroGeneral.style.visibility="hidden"
    contenedorProyectos.style.visibility="hidden"
    body.style.overflowY=null
    proyecto_1.style.visibility="hidden"
    proyecto_2.style.visibility="hidden"
    proyecto_3.style.visibility="hidden"
    proyecto_4.style.visibility="hidden"
    proyecto_5.style.visibility="hidden"
    proyecto_6.style.visibility="hidden"
    proyecto_7.style.visibility="hidden"
    proyecto_8.style.visibility="hidden"
    proyecto_9.style.visibility="hidden"
})
botonCerrar.addEventListener('click', function () {
    botonCerrar.style.visibility="hidden"
    fondoOscuroGeneral.style.visibility="hidden"
    contenedorProyectos.style.visibility="hidden"
    body.style.overflowY=null
    proyecto_1.style.visibility="hidden"
    proyecto_2.style.visibility="hidden"
    proyecto_3.style.visibility="hidden"
    proyecto_4.style.visibility="hidden"
    proyecto_5.style.visibility="hidden"
    proyecto_6.style.visibility="hidden"
    proyecto_7.style.visibility="hidden"
    proyecto_8.style.visibility="hidden"
    proyecto_9.style.visibility="hidden"
})
// FUNCION ABRIR DETALLES
foto1.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_1.style.visibility="visible"
    botonCerrar.style.visibility='visible'
})
foto2.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_2.style.visibility="visible"
    botonCerrar.style.visibility="visible"
})
foto3.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_3.style.visibility="visible"
})
foto4.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_4.style.visibility="visible"
    botonCerrar.style.visibility="visible"
})
foto5.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_5.style.visibility="visible"
    botonCerrar.style.visibility="visible"
})
foto6.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_6.style.visibility="visible"
    botonCerrar.style.visibility="visible"
})
foto7.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_7.style.visibility="visible"
    botonCerrar.style.visibility="visible"
})
foto8.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_8.style.visibility="visible"
    botonCerrar.style.visibility="visible"
})
foto9.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility="visible"
    contenedorProyectos.style.visibility="visible"
    body.style.overflowY="hidden"
    proyecto_9.style.visibility="visible"
    botonCerrar.style.visibility="visible"
})
// FUNCION SIGUIEN Y ATRAS
botonSiguiente.addEventListener('click', function () {
    if (proyecto_1.style.visibility == "visible") {
        proyecto_1.style.visibility="hidden"
        proyecto_2.style.visibility="visible"
    } else if (proyecto_2.style.visibility == "visible") {
        proyecto_2.style.visibility="hidden"
        proyecto_3.style.visibility="visible"
    } else if (proyecto_3.style.visibility == "visible") {
        proyecto_3.style.visibility="hidden"
        proyecto_4.style.visibility="visible"
    } else if (proyecto_4.style.visibility == "visible") {
        proyecto_4.style.visibility="hidden"
        proyecto_5.style.visibility="visible"
    } else if (proyecto_5.style.visibility == "visible") {
        proyecto_5.style.visibility="hidden"
        proyecto_6.style.visibility="visible"
    } else if (proyecto_6.style.visibility == "visible") {
        proyecto_6.style.visibility="hidden"
        proyecto_7.style.visibility="visible"
    } else if (proyecto_7.style.visibility == "visible") {
        proyecto_7.style.visibility="hidden"
        proyecto_8.style.visibility="visible"
    } else if (proyecto_8.style.visibility == "visible") {
        proyecto_8.style.visibility="hidden"
        proyecto_9.style.visibility="visible"
    }
})
botonAtras.addEventListener('click', function () {
    if (proyecto_2.style.visibility == "visible") {
        proyecto_2.style.visibility="hidden"
        proyecto_1.style.visibility="visible"
    } else if (proyecto_3.style.visibility == "visible") {
        proyecto_3.style.visibility="hidden"
        proyecto_2.style.visibility="visible"
    } else if (proyecto_4.style.visibility == "visible") {
        proyecto_4.style.visibility="hidden"
        proyecto_3.style.visibility="visible"
    } else if (proyecto_5.style.visibility == "visible") {
        proyecto_5.style.visibility="hidden"
        proyecto_4.style.visibility="visible"
    } else if (proyecto_6.style.visibility == "visible") {
        proyecto_6.style.visibility="hidden"
        proyecto_5.style.visibility="visible"
    } else if (proyecto_7.style.visibility == "visible") {
        proyecto_7.style.visibility="hidden"
        proyecto_6.style.visibility="visible"
    } else if (proyecto_8.style.visibility == "visible") {
        proyecto_8.style.visibility="hidden"
        proyecto_7.style.visibility="visible"
    } else if (proyecto_9.style.visibility == "visible") {
        proyecto_9.style.visibility="hidden"
        proyecto_8.style.visibility="visible"
    }
})
// FUNCION COPIAR EN PORTAPAPELES
copyImgTelf.addEventListener('click', function () {
    let inputTemporal = document.createElement('input') 
    inputTemporal.setAttribute('value', document.getElementById('NumTelefono').innerHTML)
    document.body.appendChild(inputTemporal)
    inputTemporal.select()
    document.execCommand('copy')
    document.body.removeChild(inputTemporal)
    function apareceConfirmacion() {
        confirmacionCopy.style.visibility='visible'
        confirmacionCopy.style.transition='2.5s'
        confirmacionCopy.style.transform='translateY(-5em)'
    }
    function desapareceConfirmacion() {
        confirmacionCopy.style.visibility='hidden'
    }
    setTimeout(apareceConfirmacion, 0)
    setTimeout(desapareceConfirmacion, 1000)
})
copyImgCerr.addEventListener('click', function () {
    let inputTemporal = document.createElement('input') 
    inputTemporal.setAttribute('value', document.getElementById('TextoCorreo').innerHTML)
    document.body.appendChild(inputTemporal)
    inputTemporal.select()
    document.execCommand('copy')
    document.body.removeChild(inputTemporal)
    function apareceConfirmacion() {
        confirmacionCopy.style.visibility='visible'
        confirmacionCopy.style.transition='2.5s'
        confirmacionCopy.style.transform='translateY(-5em)'
    }
    function desapareceConfirmacion() {
        confirmacionCopy.style.visibility='hidden'
    }
    setTimeout(apareceConfirmacion, 0)
    setTimeout(desapareceConfirmacion, 1000)
})
// FUNCION DEZPLEGAR VENTANA CORREO Y TELEFONO
telf.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility='visible'
    emergenteTelefono.style.visibility='visible'
    body.style.overflowY='hidden'
})
correo.addEventListener('click', function () {
    fondoOscuroGeneral.style.visibility='visible'
    emergenteCorreo.style.visibility='visible'
    body.style.overflowY='hidden'
})
fondoOscuroGeneral.addEventListener('click', function () {
    if (emergenteTelefono.style.visibility == 'visible' || emergenteCorreo.style.visibility == 'visible') {
        emergenteTelefono.style.visibility='hidden'
        emergenteCorreo.style.visibility='hidden'
        body.style.overflowY=null
        fondoOscuroGeneral.style.visibility='hidden'
    }
})
// FUNCION BAJAR PORTADA
imgMenu.addEventListener('click', function () {
    if (portada.className == 'portadaArriba') {
        portada.classList.remove('portadaArriba')
        portada.classList.add('portadaAbajo')
        portada.style.transition='1s'
        imgMenu.style.transform='rotate(0deg)'
        imgMenu.style.transition='1s'
    } else {
        portada.classList.remove('portadaAbajo')
        portada.classList.add('portadaArriba')
        imgMenu.style.transform='rotate(90deg)'
    }
})
window.addEventListener('scroll', function () {
    if (scrollY >= 80 ) {
        portada.classList.remove('portadaAbajo')
        portada.classList.add('portadaArriba')
        imgMenu.style.transform='rotate(90deg)'
    }
})