

function pares(numeros){
    return {
        pares: numeros.filter(num => num % 2 === 0),
        impares: numeros.filter(num => num % 2 !== 0)
    }
}

console.log(pares([1,2,3,4,5,6,7,8100, 800, 753]));