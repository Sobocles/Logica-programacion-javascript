

function soloUnaVez(texto){
    let contadores = {};
    resultado = [];
    letras = texto.filter(letra => letra.trim().length >= 1)

    for(letra of texto){
        if(!contadores[letra]){
            contadores[letra] = 1;
        }else{
            contadores[letra]++;
        }
    }
    //Eliminar las letras que se repitan
    for(letra in contadores){
        if(contadores[letra] === 1){
           contadores[letra];
        }
    }
    return [resultado, resultado[0]];
}

console.log(soloUnaVez("frase frase HOY"));