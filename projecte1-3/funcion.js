/*TAREA 1*/
//Renderiza la tarjeta
function dibuixaUnivers(columnes, files){
    let variable = `<div class="univers">`
    variable += `<div class="fila">`
    for(let i = 0; i<3; i++){
        variable += `<div class="celula" data-id="0-${i}">0-${i}</div>`
    }
    /*TAREA 2*/                                                                                                                            
    variable += `</div>`
    variable += `<div class="fila">`
    for(let i = 0; i<3; i++){
        variable += `<div class="celula" data-id="1-${i}">1-${i}</div>`
    }
        variable += ` </div>`
        variable += ` </div>`

    document.querySelector("body").innerHTML = variable
       
}

dibuixaUnivers()

/*TASCA 2*/
//Aleatorio

function aleatori(){
    let numero = Math.random()

    if(numero<0.50){
        console.log(true)
        
        return true
        
    }else{

        console.log(false)
        return false
    }

}


let cont = 0
let resultado = 0

/*TASCA 3*/ 
function aleatoriPercentatge(percentatge){                
    aleatori()
    resultado = aleatori()
    if(resultado == 1){
        cont++
    }

    if(cont<3000){
        console.log(cont)
    }
    
    

}
for(let i=0; i < 10000; i++){
    aleatoriPercentatge(30)

}




