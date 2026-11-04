//Declarar variables
let BolaDiv = document.querySelector(".bola")
const posicionBola = BolaDiv.getBoundingClientRect()

let BarraSuperior = document.querySelector(".Limite-superior")
const posicionSuperior = BarraSuperior.getBoundingClientRect()
const posicionSuperiorX = posicionSuperior.x
const posicionSuperiorY = posicionSuperior.y

let BarraDerecho = document.querySelector(".Limite-derecho")
const posicionDerecho = BarraDerecho.getBoundingClientRect()
const posicionDerechoX = posicionDerecho.x
const posicionDerechoY = posicionDerecho.y


let BarraIzquierdo = document.querySelector(".Limite-izquierdo")
const posicionIzquierdo = BarraIzquierdo.getBoundingClientRect()
const posicionIzquierdoX = posicionIzquierdo.x
const posicionIzquierdoY = posicionIzquierdo.y

let nuevaX = 5
let nuevaY = 600 

//Declaramos la posicion inicial de la bola
const bola = {
    positionX: 0,
    positionY: 0,
}
const barras = {
    arriba:{
        positionX: posicionSuperiorX,
        positionY: posicionSuperiorY
    },
    izquierda:{
        positionX: posicionIzquierdoX,
        positionY: posicionIzquierdoY
    },
    derecha:{
        positionX: posicionDerechoX,
        positionY: posicionDerechoY
    }
}
console.log(posicionSuperior)
console.log(posicionBola)
/*FUNCIONES*/
//Colision con la barra superior
setInterval(MoverBola, 60)

function MoverBola(){
    nuevaY = nuevaY - 5

    BolaDiv.style.top = nuevaY + "px"

    if(posicionSuperior.top == BolaDiv.top){
        BolaDiv.style.top = "10px" 
    }
}
