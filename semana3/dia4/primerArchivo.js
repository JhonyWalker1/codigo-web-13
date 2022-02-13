// alert("Hola mundo")

/*
const numero1=10;
const numero2=20;
let resultado=0;

resultado = numero1 + numero2

// recuerden 
//alert : es una alerta en el navegador
//console.log: Escribe un mensaje en la consola del navegador
console.log("Resultado: "+numero1 + " + " + numero2 + " = " + resultado);


//otra propiedad del console.log es poder darle un key a un valor
console.log("Resultado",resultado);


//Existe el console.error y el console.warn
// el console.error es para errores
//el console.warn es para advertencia
console.error("Suma error: ", resultado)
console.error("equivocado ", resultado)
console.error("mala suma ", resultado)

console.log("Resultado",resultado);
console.log("El resultado es",resultado);
console.log("la sumita",resultado);

console.warn("Peligro", resultado);

resultado = numero1 - numero2
console.warn("el resultado es" , resultado)

//vamos a usar una calculadora con JS
// restricciones debemos validar la division /0


//prompt : es una ventana emergente que nos pide valor
// abre una ventana tipo alerta lo cuial nos permite ingresar un valor
// y ese valor se guarda en una variable

const valor1 = prompt("Ingrese un valor1")
const valor2 = prompt("Ingrese un valor2")
//necesito que el usuarui ingrese el tipo de operacion
// ** Puede ser => + , - , * ,/
const operacion = prompt("Ingrese una operacion, puede ser + - * / %");
let resultadoCalculadora = 0;

//para poder hacer calculos debe converit de string a number
//parseInt : convierte strin a numbre
// + : Colocamos el simvolo delante de la varuanle y esta se convierte en number

if (operacion ==="+"){
    resultadoCalculadora = +valor1 + +valor2
    console.log("Resultado", resultadoCalculadora)
}else if (operacion ==="-"){
    resultadoCalculadora = +valor1 - +valor2
    console.log("Resultado", resultadoCalculadora)
}else if (operacion ==="*"){
    resultadoCalculadora = +valor1 * +valor2
    console.log("Resultado", resultadoCalculadora)
}else if (operacion ==="/"){
    if(+valor2 !== 0) {
        resultadoCalculadora = +valor1 / +valor2;
        console.log("Resultado" , resultadoCalculadora)
    }else{
        console.warn("el divisor debe ser distinto a 0")
    }
    } else {
        console.error("operacion no validad");
}


const numeroPar = 10;

if(numeroMultiplo % 2 === 0) {
    console.log("Numero par",numeroMultiplo)
}
if(numeroMultiplo %3 === 0) {
    console.log("Numero multiplo de 3", numeroMultiplo);
} */


//escriban un algoritmo que pida 2 numero usando promop e impriman el nro mayor

/*const nro1 = +prompt("Ingrese un valor1")
const nro2 = +prompt("Ingrese un valor2")

if(nro1>nro2){
    console.log("el numero mayor es", nro1)
} else {
    console.log("el numero mayor es" , nro2)
} */

//vamos a ver como usar los operadores and y or
//and: &&
//or : ||
// ** Esto podemos usalo en los if
const edadMayor = 18;
const nombreMayor= "Juan";

// !! se usa para poder concatenar condiciones
// !! Pueden poner una cantidad ilimitada de condiciones
if (edadMayor === 18 && nombreMayor ==="Juan"){
    console.log("El usuario es Juan y tiene 18 años");
}

//!! al menos una de las dos condiciones debe cumplir para entrar al if
if (edadMayor === 19 || nombreMayor ==="Juan"){
    console.log("El usuario es Juan y tiene 18 años");
}

// ** Consejo de vida: traten de no usar mucho el else

const nro1 = +prompt("Ingrese un valor1")
const nro2 = +prompt("Ingrese un valor2")
const nro3 = +prompt("Ingrese un valor3")

let rpt = console.log("Numero mayor es ",nro3) 

if(nro1>nro2 && nro1 >nro3){
    console.log("el numero mayor es", nro1)
} else if(nro2>nro3 && nro2>nro1)  {
    console.log("el numero mayor es" , nro2)
}