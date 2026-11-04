import rendererjs from "./renderer.js";
import enemigosjs from "./enemy.js";
import jugadorjs from "./player.js";
import matriz from "./renderer.js";

const fecha = new Date()
let puntaje = 0;
let segundos = fecha.getSeconds()

//Esto es para mover el jugador 
document.addEventListener('keydown', (evento) => {
    let nuevaY = jugadorjs.fila;     // Y = Fila
    let nuevaX = jugadorjs.columna;  // X = Columna

    if (evento.key === 'ArrowUp') nuevaY--;
    if (evento.key === 'ArrowDown') nuevaY++;
    if (evento.key === 'ArrowLeft') nuevaX--;
    if (evento.key === 'ArrowRight') nuevaX++;

    intentarMover(nuevaX, nuevaY);
});

function intentarMover(nuevaX, nuevaY) {
    let filas = matriz.length;
    let columnas = matriz[0].length;
    
    // 1. Validar límites del mapa (Y = filas, X = columnas)
    if (nuevaY < 0 || nuevaY >= filas || nuevaX < 0 || nuevaX >= columnas) {
        console.log("¡Colisión con el borde del mapa!");
        return;
    }

    // ORDEN CORRECTO: matriz[fila][columna] -> matriz[nuevaY][nuevaX]
    let destino = matriz[nuevaY][nuevaX];

    // 2. Limpiamos la posición vieja del jugador en la matriz antes de movernos
    matriz[jugadorjs.fila][jugadorjs.columna] = 0;

    if (destino === 0) {
        // CASILLA NORMAL: Solo movemos al jugador
        jugadorjs.fila = nuevaY;
        jugadorjs.columna = nuevaX;
    } 
    else if (destino === 1) {
        // CASILLA DE ENEMIGO: ¡Lo eliminamos y avanzamos!
        console.log("¡Has derrotado/pisado al enemigo!");
        puntaje = puntaje + 100

        console.log(puntaje)
        
        // Buscamos y eliminamos al enemigo exacto del array 'enemigosjs' usando Y (fila) y X (columna)
        let indexEnemigo = enemigosjs.findIndex(e => e.fila === nuevaY && e.columna === nuevaX);
        if (indexEnemigo !== -1) {
            enemigosjs.splice(indexEnemigo, 1); // Lo borra definitivamente del array
        }

        // La matriz en esa posición pasa a ser suelo normal (0)
        matriz[nuevaY][nuevaX] = 0;

        // Movemos al jugador a la nueva posición
        jugadorjs.fila = nuevaY;
        jugadorjs.columna = nuevaX;
    }

    // 3. Colocamos al jugador con el valor 2 en su nueva posición dentro de la matriz
    matriz[jugadorjs.fila][jugadorjs.columna] = 2;

    // 4. Redibujamos el tablero actualizado
    redibujarTablero(matriz);
}

function redibujarTablero(matriz) {
    let casillaGenerada = "";

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            
            let esJugador = (jugadorjs.fila === i && jugadorjs.columna === j);
            let enemigoEnEstaCasilla = enemigosjs.find(e => e.fila === i && e.columna === j);

            if (esJugador) {
                casillaGenerada += `<div class="casilla jugador-casilla">${jugadorjs.emoji}</div>`;
            } 
            else if (enemigoEnEstaCasilla) {
                casillaGenerada += `<div class="casilla enemigo-casilla">${enemigoEnEstaCasilla.emoji}</div>`;
            } 
            else {
                casillaGenerada += `<div class="casilla casilla-normal"></div>`;
            }
        }
    }

    const tablon = document.querySelector(".tablon-juego");
    tablon.style.gridTemplateColumns = `repeat(${matriz[0].length}, 40px)`;
    tablon.innerHTML = casillaGenerada;

    console.log(matriz)
}