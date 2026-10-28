const enemigo = [
    {
        fila: 0,
        columna : 0,
        vivo: true
    },
    {
        fila: 0,
        columna : 0,
        vivo: true
    },
    {
        fila: 0,
        columna : 0,
        vivo: true
    },
    {
        fila: 0,
        columna : 0,
        vivo: true
    },
    {
        fila: 0,
        columna : 0,
        vivo: true
    }
]

numeroRandom()
function numeroRandom(){
    for(let i = 0; i<enemigo.length; i++){
        enemigo[i].fila = Math.floor(Math.random()*16)
        enemigo[i].columna = Math.floor(Math.random()*16)
    }    
}

export default enemigo;