
/* Obtener id de cada elemento */
let myEventoBoton = document.querySelector("#obtenerResultado")
let mostrarResultado = document.querySelector("#mostarResultado")
let myData = document.querySelector("#campoEncriptador")
let aciiDesfase = document.querySelector("#numeroACII")
let infoApp = document.querySelector("#info")

//estilos de cada elementos con js
let estilosCss = mostrarResultado.style

//Crear un número randon a cada desfase código ASCII
function setRandom(){
    return Math.floor(Math.random() * 255)
}

function encriptadorPalabras(event){
    //detiene el evento del fromulario
    event.preventDefault()
    let resultado = []
    let data = myData.value
    const desfase = setRandom()
    
    if(data.trim() != 0){
        for(let valor of data.trim()){
            console.log(valor) 
            resultado.push(String.fromCharCode((valor.charCodeAt(valor) + desfase)))
         }
         estilosCss.color = "black"
         mostrarResultado.innerHTML = resultado.join('')
         aciiDesfase.innerHTML = "numero acii para desfase ="+ desfase
    }else{
     
        estilosCss.color = "red"
        estilosCss.fontSize = "1.8em"

        mostrarResultado.innerHTML = "el campo esta vacio"  
        aciiDesfase.innerHTML = "error"
    }

    
    
     
}

infoApp.style.fontSize = "1.5em"

infoApp.innerHTML = `

Encriptador de textos Alura <br>

Desarrollado utilizando:<br>

    *HTML<br>
    *CSS<br>
    *JavaScript<br>

Explicación:<br>
Se desarrolla utilizando los métodos nativos de JavaScript para obtener el número de la letra con 
valor.charCodeAt(valor) + desfase, cambiar el valor y volver a obtener el valor usando String.fromCharCode()
Para obtener el resultado de valor ASCII desfasado a letra, se usa el método String.fromCharCode(valor) que toma como argumento un número que representa 
el código ASCII y devuelve la letra correspondiente. Luego, se imprime el resultado alterando el contenido de la etiqueta HTML que tiene asignado un identificador 
único utilizando el método document.querySelector(id).innerHTML = resultado en pantalla

.


`

/* se activa con 2 eventos enter y click al boton*/
myEventoBoton.onclick = encriptadorPalabras
myEventoBoton.keyup = encriptadorPalabras
