/**
 * * querySelector y querySelectorAll
 * * querySelector es el hermano menor de 
 * * getEleemntbyId, getElementByClassName y getElementByTagName
 * 
 * 
 * * Ambas funciones me permite poder usar elementos de html en js
 * * Ejemplo
 * ! El querySelector solo devuelve 1 elemento
 */

// ESTO ES CON CLASS
const inputName= document.querySelector(".input_name");
console.log(inputName.value)
//ESTO ES CON ID
const inputEmail = document.querySelector("#input_email")
console.log(inputEmail.value);
//ESTO ES CON TAGNAME
const form = document.querySelector("form")
console.log(form)

/**
 * *querySelectorAll : Permite obtener más de un elemento a la vez
 */

//! PENDIENTE POR REVISAR
const inputs = document.querySelectorAll("input");
console.log(inputs);
//* quiero filtar a los inpunts que sean tipo texto
const arrayInputsText=[];
inputs.forEach((input)=>{
 if(input.type === "text"){
    arrayInputsText.push(input);
 }
});
console.log(arrayInputsText);

const arrayConvertidoInputs = Array.from(inputs)
console.log(arrayConvertidoInputs)

const arrayConvertidoFilter =arrayConvertidoInputs.filter(
    (input) => input.type==="text"
);
console.log("arrayConvertidoFilter", arrayConvertidoFilter);
