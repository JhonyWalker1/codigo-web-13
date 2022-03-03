
function imprimir() {
    console.log("hola mundo desde una funcion")
}
//la idea es tener una funcion que reciba parametro el cual me indique si es + - / *
//en base a ese parametro llama a la funcion que necesie del archivo operaciones y retorno 
//el resultado

function calculadorHTML(operacion) {
    //obtener el valor de los inputs
    const numero1 = document.querySelector("#numero1").value;
    const numero2 = document.querySelector("#numero2").value;
    //validamos que los datos no esten vacios
    if(numero1 === "" || numero2 ===""){
        alert("debe completar los campos");
        return;
    }
    //una vez que valide los campos debo hallar la operacion
    //necesito una variable que se encargue de guardar el resultado
    let resultado = 0;
    if (operacion === "+") {
       resultado= sumar(numero1, numero2) 
    }

    if (operacion === "-") {
        resultado= restar(numero1, numero2) 
     }

     if (operacion === "*") {
        resultado = multiplicar(numero1, numero2) 
     }
     if (operacion === "/") {
        resultado = dividir(numero1, numero2) 
     }
     //para acabar debo mostrar el resultado en html
     const p = document.createElement("p");
     const value = document.createTextNode(resultado);
     p.appendChild(value);
     const contenedor = document.querySelector("#resultado");
     contenedor.appendChild(p)
 }



















function sumar2(){
    const numero1 = document.querySelector("#numero1").value;
    const numero2 = document.querySelector("#numero2").value;

    //contenedor para imprimir mi resultado
    const contenedor = document.querySelector("#resultado")
    // validar si es que los inputs estan vacios
    if (numero1===""|| numero2==="") {
        alert("debe completar los numeros para continuar");
        //cuando los datos esten vacio yo debo detener la ejecucion de mi funcion
        return;
    }

    //estamos haciendo la operacion para poder calular la sula de los inputs
    const suma = +numero1 + +numero2
    //como creo una etiqueta p en js
    const p = document.createElement("p")
    // como puedo asignar un valor a a la etiqueta creada
    const pValor = document.createTextNode(suma)

    p.appendChild(pValor);
    contenedor.appendChild(p)
   
}