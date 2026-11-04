const enemigo = [
    {
        fila: 0,
        columna : 0,
        vivo: true,
        emoji: "👻"
    },
    {
        fila: 0,
        columna : 0,
        vivo: true,
        emoji: "👻"
    },
    {
        fila: 0,
        columna : 0,
        vivo: true,
        emoji: "👻"
    },
    {
        fila: 0,
        columna : 0,
        vivo: true,
        emoji: "👻"
    },
    {
        fila: 0,
        columna : 0,
        vivo: true,
        emoji: "👻"
    }
]

numeroRandom()
function numeroRandom(){
    for(let i = 0; i<enemigo.length; i++){
        enemigo[i].fila = Math.floor(Math.random()*15)
        enemigo[i].columna = Math.floor(Math.random()*15)
    }    
}

export default enemigo;