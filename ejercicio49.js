

function existePropiedad(objeto, propiedad){
    if(typeof objeto === 'object' && 
    typeof propiedad === "string" &&
    objeto.hasOwnProperty(propiedad)
    ) {  
        return true;
    }
    return false;
}
    let usuario = {
        nombre: "Victor",
        apellido: "Robles"
    };
    console.log(existePropiedad(usuario,"nombre"));
