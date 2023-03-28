

function altoBajo(numeros){
    let ordenados = numeros.sort((a,b) => a - b);

    return {
        bajo: ordenados[0],
        alto: ordenados[ordenados.length - 1]
    }
}

console.log(altoBajo([88,100,1,2,3,34,20,12,600,900,200]));