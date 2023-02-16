
window.onload=function(){alert('Bienvenido a esta pagina');
}

console.log('hola mundo')

document.getElementById('boton').onclick = function (){
document.getElementById('datos').innerHTML = "Nacida en 1981, en Rosario, República Argentina";
};


document.getElementById("enviarMensaje").addEventListener ('click', function elClickDificil() {
        let nombre = document.getElementById("Nombre").value
        let apellido = document.getElementById("Apellido").value
        let remitente=  nombre+ " "+apellido+" su mensaje ha sido enviado con exito"
        document.getElementById("respuesta").innerHTML=  remitente
        document.getElementById("paraLaRespuesta").style.display= 'block';
        console.log("esta función costo bastante")
})      

//tarde mucho en descubrir que el script src va al final del body y por eso no funcionaba antes

document.getElementById("Contacto").addEventListener('click',function(){
    document.getElementById(Contacto).style.backgroundColor = 'black'
})

;

