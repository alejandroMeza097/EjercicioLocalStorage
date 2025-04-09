

//ACCION DEL BOTON GUARDAR...RECUPERA INFORMACION DEL USUARIO Y LA AÑADE AL LOCALSOTAGE
function recuperarInformacion(){
    let nombreUsuario = document.getElementById("nombre").value;
    localStorage.setItem("usuario",nombreUsuario);
}

//ACCION DEL BOTON ELIMINAR... ELIMINA LA INFORMACION DEL LOCALSTORAGE...
function eliminarInformacion(){
    localStorage.removeItem("usuario");
}


//VALIDACION DE LA INFORMACION DEL LOCALSTORAGE...
let placeholder = document.getElementById("placeholder-usuario");

if(localStorage.getItem("usuario") != null){
    
    let nombre = localStorage.getItem("usuario");
   
    if(nombre === ""){
        placeholder.innerText = `Por favor ve a index e ingresa tu nombre`; 
    }else{
        placeholder.innerText = `Hola, ${nombre}, bienvenida/o de nuevo.`;
    }
    
    
}
else{
   
    placeholder.innerText = `Por favor ve a index e ingresa tu nombre`;  
}







