import enemigosjs from "./enemy.js"
import jugadorjs from "./player.js"

let matriz = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
]


console.log(enemigosjs[1].emoji)
console.log(jugadorjs.fila)



/*Generar las casillas*/
/*Meter los enemigos a la matriz*/
for(let i = 0; i < enemigosjs.length; i++){
    matriz[enemigosjs[i].fila][enemigosjs[i].columna] = 1
}
/*Colocar al jugador en el centro*/ 
matriz[jugadorjs.fila][jugadorjs.columna] = 2

//Generar casillas
let casillaGenerada = " "
for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] == 1)   casillaGenerada += `<div class="casilla enemigo-casilla">${enemigosjs[0].emoji}</div>`;
        if(matriz[i][j] == 2)   casillaGenerada += `<div class="casilla jugador-casilla">${jugadorjs.emoji}</div>`;
        if(matriz[i][j] == 0)   casillaGenerada += `<div class="casilla casilla-normal"></div>`;

    }   

}

document.querySelector(".tablon-juego").innerHTML = casillaGenerada

export default matriz