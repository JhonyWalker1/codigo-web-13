// * Tipo de datos
/** 
* * String
* * number
* * boolean
* *undefined
*/
//? Ejemplos de string

const mensaje = "Hola";
var pepito = "saludando";
let nombre = "Dario";

//? Ejemplos de number
const nombreNumbre = +"nombre";
console.log("Tipo de variable", typeof nombreNumbre)
const edadMayor = 21;
let edad = 10;
const numero = 45;
//! ojo: el typeof solo sirve para decirme que tipo de datos es una variable
//! recuerden que js sabe que tipo es en base al valor de la variable

//? Ejemplos de boolean
let estado = true;
let sexo = true;
let rpta = false;
let aprobado = false;
//? Recuerden cuando una variable no tiene un valor asignado, js interpreta
//? que es un undefined
let componentes;
console.log("por si no le creen", typeof componentes)

//? toString():esta funcion se va a encargar de transformar una variable a tipo string

let dineroEnElBanco = 10;
console.log("por si no me creen", typeof dineroEnElBanco);

// vamos a ver como se transforma de number a strin

console.log("por si no me creen", typeof dineroEnElBanco.toString());

const n1=10;
const n2=20;
console.log("resultado: " +n1.toString() + " + ");

//? Ejemplo
//? Cuando hacemos una peticion y queremos enviarle datos el servidor
//? que tipo de datos requiere
//? quiero creear un usuario
//? nombre ,apellido, edad, celular
//? string ,string, number, number
//* edad.toString()
//* celular.toString()

//? Arreglo de alumnos
//? Arreglo de notas
//? array de juegos

let alumnos=["Luis", "Karen", "Pedro", "Raul"];
let notas = [20,16,18,15]
let juegos = ["domino", "sapito", "cuerda" , "Startcaraft"]

// TODO => Luis tiene  20 en prograacion y juega domino
console.log(
`${alumnos[1]} tiene ${notas[2]} y juega ${juegos[1]}` )

//? Funciones
//! Creen un arrow function que reciba dos parametro y retorne el cuadrado de ambos numero
//* cuadrado de 2 = 2*2

const cuadrado = (nr1, nr2) => { 
    let nro1Cuadrado1 = +nr1 * +nr1;
    let nro2Cuadrado2 = +nr2 * +nr2;
    return nro1Cuadrado1, nro2Cuadrado2
 }
    
//? Math, es una libreria de js la cual nos permite hacer operaciones matematicas
//? Math.pow se usa para poder elevar un numero a la potencia
//? Parametro1 = numero Parametro2 = potencia
//!Math.pow(numero, 2)

//! Tip: usen funcion de una linea cuando la solucion sea corta, si es algo extenso preferible
//! usar las lineas que haga falta

const calcularCuadrados =(num1 , num2) => {
    return `El cuadrado del primer numero es: ${Math.pow(num1,2)}
     El cuadrado del segundo numero es: ${Math.pow(num2, 2)}`;
    }

console.log(calcularCuadrados(1,2));

//! Creen una funcionan la cual pida el nombre, apellido y edad y retorne un mensaje de saludo

const saludar=(nombre,apellido, edad) => {
    return `Hola ${nombre} ${apellido} de ${edad.toString} años, espero estes muy bien`
}

const hallarAreaRectangulo = (b, h) => {
    `El área es ${+b * +h}`
}

//* Cuando uso el return - deben usarlo siempre en funcion a menos que no sea necesario


//* una funcion siempre debe retornar algo y para eso usamos return, hay casos especiales
//* en las que no porque no necesitamos retornar nada

//* el console.log usenlo para probar nada más y luego
//* deberian borrarse

//? del operador ternario

//* Creemos una funcion que recibe la edad de una persona y retorne si es mayor

const esMayor = edad =>{
    if (edad>=18) {
        return "es mayor de edad"
    }else {
        return "es menor de edad"
    }
}

const mayor2 = edad =>{
    return edad >= 18 ? " es mayor de edad" : "es menor de edad"
}

//! creen una funcion que reciba un array y si el length es mayor a 5, entonces retorna arreglo grnado sino arreglo chico

//const hallerTamañoArreglo = array["dina", "pepe" ,"juan", "Mateo" , "pedro" , "Matias"]
 //return array(length)>5 ? "Arreglo grande" : "Arreglo pequeño"

 const hallerTamañoArreglo = array => {
  array.length>5 ? "Arreglo grande" : "Arreglo pequeño" 
 }

 //? Arrow funcion inline
 //? solo funciona cuando voy a ejecutar una linea de codigo

 const salur = (nombre) => `Hola ${nombre}`;

 const saludar = (nombre) =>{
     const nombre = nombre + "pepe"
     return `Hola ${nombre}`
 }