let numeroSecreto = Math.floor(Math.random()*100) + 1;
let intentos = 0;
const MAX_INTENTOS = 10;
let puntaje = 1000;

let botonAdivinar = document.querySelector("#guessButton");
let botonReiniciar = document.querySelector("#restartButton");

console.log(numeroSecreto)
botonAdivinar.addEventListener("click", function() {
    let numeroIntroducido = document.querySelector("#guessInput").value;
    
    let mensaje =
    numeroIntroducido > numeroSecreto
    ? "Demasiado grande"
    : numeroIntroducido < numeroSecreto
    ? "Demasiado pequeño"
    : numeroIntroducido == numeroSecreto
    ? "Correcto!"
    : "???"

    if (numeroIntroducido > numeroSecreto || numeroIntroducido < numeroSecreto){
        intentos++
        puntaje = puntaje - 100
    }

    console.log (`Mensaje: ${mensaje}` + " | " + `Numero de intentos: ${intentos}` + 
        " | " + `Puntaje: ${puntaje}`)

    if (intentos>MAX_INTENTOS){
        botonAdivinar.disabled = true
        console.log("GAME OVER")
    }

})

function limpiarFormulario(){
    document.querySelector("#guessInput").value = "";
}

botonReiniciar.addEventListener("click", function(){
    intentos = 0;
    puntaje = 1000;
    botonAdivinar.disabled = false

    numeroSecreto = Math.floor(Math.random()*100) + 1

    console.log(numeroSecreto)
})

