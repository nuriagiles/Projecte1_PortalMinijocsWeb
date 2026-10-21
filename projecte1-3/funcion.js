/*TAREA 1*/
//Renderiza la tarjeta
function dibuixaUnivers(columnes, files){
    let variable = `<div class="univers">`
    for(let i = 0; i<files; i++){
        variable += `<div class="fila">`
        for(let l = 0; l<columnes; l++){
            variable += `<div class="celula" data-id="${i}-${l}">${i}-${l}</div>`
        }
        /*TAREA 2*/                                                                                                                            
            variable += `</div>`
    }
        variable += ` </div>`

    document.querySelector("body").innerHTML = variable
    crearMatriu(columnes, files)
}

dibuixaUnivers(5, 5)

/*TASCA 2*/
//Aleatorio
function aleatori(){
    let numero = Math.random()

    return numero < 0.50;

}



console.log("hola")
/*TASCA 3*/ 
function aleatoriPercentatge(percentatge){                
    let NumeroAleatorio = Math.floor(Math.random() * 100);

    if (NumeroAleatorio < percentatge) {
       return true;
    } else {
       return false;     
    }

}
for(let i=0; i < 10000; i++){
    aleatoriPercentatge(30)

}


/*TASCA 4*/
function crearMatriu(columnes, files){
    let Matriz =[]
    let CelulaViva = " "
    for(let i=0; i<files; i++){
        let fila = []
        for(let l=0; l<columnes; l++){
            CelulaViva = aleatori()

            fila.push(CelulaViva)
        }
        Matriz.push(fila)
    }
    console.log(Matriz)

    dibuixaUniversAmbEstat(Matriz)

    return Matriz
}
/*Tasca 5*/
function dibuixaUniversAmbEstat(Matriz){
    let dataVivos = []
    for(let i = 0; i<Matriz.length; i++){
        let filas = document.querySelectorAll(".fila")

        for(let j = 0; j< Matriz[i].length; j++){
            let celulasDeLaFila = filas[i].querySelectorAll(".celula");
            let celula = celulasDeLaFila[j];            
            let dataId = celula.getAttribute('data-id'); 
            

            if(Matriz[i][j] == true){
                celula.classList.add('viva')
                dataVivos.push(dataId.split("-"))                
            }else{
                celula.classList.add('morta')
            }
            
        }
    }
    comptarVeinsVius(Matriz, dataVivos)
}

/*Tasca 6*/
function comptarVeinsVius(Matriz, posicion){
    let cont = 0
    
    console.log(posicion)
}

/*Tasca 7*/ 

