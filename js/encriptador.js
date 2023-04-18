
/* DOM */
let myEventoBoton = document.querySelector("#obtenerResultado")
let mostrarResultado = document.querySelector("#mostarResultado")
let myData = document.querySelector("#campoEncriptador")
let aciiDesfase = document.querySelector("#numeroACII")
let infoApp = document.querySelector("#textoResultado")

/* variables */
let desfase = 0
let desencriptar = []
let resultado = []

//estilos de cada elementos con js
let estilosCss = mostrarResultado.style

//constante 
const maximo = 128
const minimo = 30


//Crear un número randon a cada desfase código ASCII
function setRandom(){
   
    return Math.floor((Math.random()  * (maximo - minimo ) + minimo)) 
}

function encriptadorTexto(event){
    //detiene el evento del fromulario
    event.preventDefault()
    let data = myData.value
    desfase = setRandom()

    if(data.trim() != 0){
        arrayCharts =  data.split("")
        
        for(let valor of arrayCharts){
            resultado.push(String.fromCharCode(( valor.charCodeAt(0) + desfase)))
        }

        estilosCss.color = "black"
        mostrarResultado.innerHTML = resultado.join('')
        infoApp.innerHTML = "Texto encriptado:"
        aciiDesfase.innerHTML = "numero acii para desfase ="+ desfase
        myEventoBoton.value = "Desencriptar"
        myData.style.display = "none"
        estilosCss.fontSize = "1.5em"
        myData.value = " "

    }else{
        
        estilosCss.color = "red"
        estilosCss.fontSize = "1.8em"
        mostrarResultado.innerHTML = "el campo esta vacio"  
        aciiDesfase.innerHTML = "error"
    }

}


function desencriptarTexto(event){
    event.preventDefault()
    for(let valor of resultado){
        desencriptar.push(String.fromCharCode((valor.charCodeAt(valor) - desfase)))
    }
    estilosCss.color = "black"
    mostrarResultado.innerHTML = desencriptar.join('')
    myEventoBoton.value = "Enctiptar"
    myData.style.display = "block"
    infoApp.innerHTML = "Texto desencriptado:"

    resultado.length = 0
    desencriptar.length = 0

}


function main(event){

    if(myEventoBoton.value === "Enctiptar"){
        encriptadorTexto(event)
    }else{
        desencriptarTexto(event)
    }

}



/* se activa con 2 eventos enter y click al boton*/
myEventoBoton.onclick = main
myEventoBoton.keyup = main

    


