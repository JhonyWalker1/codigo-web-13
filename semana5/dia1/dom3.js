/**
 * *JS tiene el poder de escribr en el dom,
 * *asi como puede obtener elementos, puedes
 * *escrbir, alterar, aumentar, etc en el dom
 * 
 * 
 * * document.write(text) me permite escribir en el DOM,
 * este texto se ubica debajo de la etiqueta script
 */

document.write("Hola Mundo")
document.write("Hola Mundo2")
document.write("Hola Mundo3")


/* 
* Vamos a crear una lista usando JS
* 1) insertar una lista dentro del div que se llama div#container-list
* 2) insertar elementos dentro de mi lista li
*/

/*
const containerList = document.querySelector("#container-list");
//? JS tiene una funcion llamada createElement la cual me permite crear elementos de html

const ul = document.createElement("ul");
ul.className = "lista"

const inputs = Array.from(document.querySelectorAll("input"));
console.log(inputs)

inputs.forEach((input)=>{
const li = document.createElement("li");
const contenido = document.createTextNode(input.value);
//* ahora debemos agregar el conteniedo a li1 y luego li1 a ul
//* En JS existe la funcion appendChild la cual permite agregar un elemento a otro
li.appendChild(contenido);
ul.appendChild(li);
})

console.log(ul);
containerList.appendChild(ul);
 */

//* Retos: Quiero crear una lista con los datos que tengo en los inputs
// aqui convertimos defrente a arrau el queryselecto
 const inputs =Array.from(document.querySelectorAll("input"))

//obtener a mi contenedor
const contenedor = document.querySelector("#container-list")
// vamos a crear un ul desde JS
const ul = document.createElement("ul");
//ahora debo llenar mi list
// ahora debo llenar mi lista para poder llenar debo convertir a un array


inputs.map((input) => {
    // en la iteracion debo crear cada elemento de mi list
    const li = document.createElement("li")
    //Debo crear el valor de mi li, que es en este caso en el input.value
    // createTextNode: crea los valores para elementos html
    const elementText = document.createTextNode(input.value);
    //ahora debo insertar el valor en mi li
    li.appendChild(elementText);
    //debo agregarlo a mi lista
    ul.appendChild(li)

})
contenedor.appendChild(ul)

// para acceder a todo el body
const body = document.body;
body.style.backgroundColor = "yellow";
body.style.fontFamily = "Helvetica";

//head
const head = document.title = "hola js";
