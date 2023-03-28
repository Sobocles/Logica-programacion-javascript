

function suspensos(alumnos){

    for(alumno of alumnos){
        if(alumno[1] >= 5){
            aprobados++;
        }else{
            suspensos++;
        }
    }
    return {
        "aprobados": aprobados,
        "suspensos": suspensos,
    };
}

console.log(suspensos([
    ["victor", 10],
    ["juan", 5],
    ["pepe", 4],
    ["Maria",8],
    ["Marta",3]
]));