/**
 *  * Existe dentro de js el document, este atributo de JS me va a permitir
 *  * obtener los elementos de HTML
 */

/**
 * *oBTENIENDO ELEMENTO EN BASE A SU TAG
 *  * tag = etiquetar
 * <h1></h1> tagname = h1
 * <input /> tagname = input
 * <form></form>
 */
//? Como tengo 4 elementos con el tagname input esto sera un array de input
const inputs = document.getElementsByTagName("input");
//! Recordemos que input es un HTMLCollection, pero para poder ser interado debe ser convertido
//! a array normal
//! vamos a usar Array.from para convertir este HTMLCollection a un array normal
const newInputs = Array.from(inputs)
console.log("inputs", inputs);
console.log("newInputs", newInputs);
// un map a nuestro inputs
newInputs.map((newInput) => {
    console.log("newInput", newInput);
});

const form = document.getElementsByTagName("form")


const button = document.getElementsByTagName("button")



const divContent = document.getElementsByTagName("div");
console.log("divContent", divContent);

const newDivContent = Array.from(divContent);

newDivContent.forEach((element)=>{
    //Aca solo quiero que imprima algo en consola
    console.log(element);
});

/**
 * *otra forma de acceder a los elementos del DOM es utilizando el ID
 * TODO: Recuerden que podemos asignarle un id a cualquier elemento de html
 */

 const inputEmail= document.getElementById("input_email");
 inputEmail.style.backgroundColor="#000"
 inputEmail.style.color="#fff"
 // de esta forma estoy accediendo al value de mi input
 console.log(inputEmail.value);
 console.log(inputEmail);
 // usando puedo acceder directamente a las propiedad de mi input

 
 const inputPassword= document.getElementById("input_password");
 inputPassword.style.backgroundColor="#f01"
 // de esta forma estoy accediendo al value de mi input
 console.log(inputPassword.value);
 console.log(inputPassword);

 /**
  * * Vamos a Obtener a elementos por su class
  * * en JS el class se traduce como className
  */

 const inputsName = document.getElementsByClassName("input_name");
 console.log(inputsName)

 const newInputsname = Array.from(inputsName);


 newInputsname.forEach((input)=> {
     console.log(input.value)
 })

 const buttons = document.getElementsByClassName("btn-registro");
 console.log(buttons)