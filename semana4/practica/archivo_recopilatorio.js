

//? variable estable que no cambia
//* const 

//? variabale que cambia
//* let

//? variable global pero ya no es usada
//* var 

//? Numero entero es sin <<" ">>
//* 15

//? tipo cadena (String) se pone entre comillas
//* "Hola"

//? resultao tipo Boolean
//* true or false

//? COMANDO PARA MOSTRAR MENSAJE
//* console.log("Aqui la respuesta")

//? COMANDO PARA MOSTRAR MENSAJE DE ERROR
//* console.error("Error")

//? COMANDO PARA MOSTRAR MENSAJE DE ADVERTENCIA
//* console.warm("Peligro peligro")

//? COMANDO PARA MOSTRAR MENSAJE + RESULTADO DE UNA VARIABLE
//* console.log("Aqui la respuesta" , respuesta)

//? prompt : es una ventana emergente que nos pide valor
//? abre una ventana tipo alerta lo cuial nos permite ingresar un valor
//? y ese valor se guarda en una variable
//* const valor1 = prompt("Ingrese un valor1")
//* const valor2 = prompt("Ingrese un valor2")

//? aqui un ejemplo de extructura simple de if + prompt
 const valor1 = prompt("Ingrese un valor1")
 const valor2 = prompt("Ingrese un valor2")
 const operacion = prompt("Ingrese una operacion, puede ser + - * / %");
 let resultadoCalculadora = 0;
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

//! OPERADORES LOGICOS USUALMENTE DENTRO DE LOS IF Y BUCLES
//* && : Significa Y

//* || : Significa O

//* ! : Significa la negacion, es decir lo inverso

//* === : Para poder si 2 valores son iguales

//* > >= | < <= : Para poder comparaciones entre 2 valores

//* !== : Sirve para saber si 2 valores son distintos

//TODO : ARRAY O ARREGLO

let personas = ["Erick", "Karina", "Patricia", "kjaris", "Bruno","Pepe","Juanito","pepito","Pedro" ,"Carlos"];

//? COMO CONTAR CUANTOS ELEMTOS HAY EN UN ARRAY
console.log("Personas", personas.length);
//* 'Personas' 10

//? IMPRIMIR UN ELEMENTO EXACTO DEL ARRAY <<RECORDAR QUE EN UN ARRAY LOS ELEMENTOS COMIENZAN EN 0>>
personas[6] = "juanito";

//? UN ARRAY PUEDE TENER DIFERENETE VALORES COMO NUMBER, STRING, BOOLEAN 
const Tipo = [100, "Pepe", true , 50.1, "5"]

//? EJEMPLO DE QUE LA POSICION COMIENZA EN 0
const valores = [1]

//TODO Esto es una funcion
function obtenerSegundoValor(valores){

    if(valores[1]=== undefined){
        return "Error: Posicion no encontrada";
    }
    //una forma seria ver su valores [1] === undefined entonces es error
    return valores[1];
}

//TODO funcion operador ternario << ? >> significa "entonces de una respuesta true" , << : >> "sino"
function obtenerValor(valores) {
    return valores[11] === undefined ? "Error" : valores[11];
}

//TODO: arrow function
//TODO: esto es un array vacio
let carrosNuevos=[]

//TODO: funcion flecha array
const llenarCarrosNuevos = (nuevoValor) => {
    // *existe una funcion de js llamada push(parametro)
    // * La cual recibe un valor y lo coloca al final del arreglo

    //* Esto le añade el nuevo valor a array carrosNuevos
    //! solo push a variable array
    carrosNuevos.push(nuevoValor)
}

llenarCarrosNuevos("Meche")
llenarCarrosNuevos("Tesla")
llenarCarrosNuevos("Tesla")
llenarCarrosNuevos("ford");

//? este array seria un elemento de carros nuevos, por ende este es un
//?array dentro de un array
llenarCarrosNuevos (["tico", "Maverik 62", "mitsubichi"]);

console.log(carrosNuevos)

//TODO EJEMPLO DE FUNCION FLECHA CON OPERADOR TERNARIO
const esPar =(nro1)=>{
    return nro1%2 ===0 ?"Es numero par" : "Es numero impar"
}
console.log("numero es" , esPar(11))
