//* while tambien sirve para poder hacer una accion un numero determinado de veces
//* es decir es un bucle

//* la estructura del while siempre va acompañada de un contador

let contador = 0;
while (contador<10) {
    console.log("contador", contador);
    //! no se olviden de alterar el contador en cada vuelta
    contador ++;
}

//* 1 => Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces.
const imprimirDiezVeces = (palabra) =>{
    let contador = 0;

    while (contador < 10) {
        console.log(palabra);
        contador++;
    };
}
//* Escribnir una programa de tabla de multiplcar del 1 al 10
const imprimirTablaMultiplicar = (numero) => {
    let contador = 0

    while (contador <= 10) {
        console.log(numero*contador);
        contador ++;
    }
};
console.log("tabla del 1");
imprimirTablaMultiplicar(1);
console.log("tabla del 2");
imprimirTablaMultiplicar(2);
console.log("tabla del 3");
imprimirTablaMultiplicar(3);

//* Escribir un programa que pida al usuario un numero entero positivo
//* y muestre por pantalla todos los numeros impares hasta ese nro
// todo: 10
//! resultado: 1,3,5,7,9

//const imprimirImpar = (num) =>{
  //  let contador = 0;
  //  let resultado=""
    

 //   while (contador <=num) {
   //     if(contador%2 !== 0){
     //       resultado += `${contador}, `;
       // }
       // contador ++;
    //}

    //return resultado
//};

//console.log("numeros impares", imprimirImpar(11));

const imprimirImparFor = (num) =>{
    if(num<=0){
        return "solo numeros positivos";
    }
    let resultado="";
    for (let i = 0; contador <= num; i++) {
        if(i%2 !== 0){
        resultado += `${i}, `
        }
    }
    
    return resultado;
};

console.log("numeros impares", imprimirImparFor(15));


//* Escribir un programa que pida al usuario un número entero y
//* muestre por pantalla si es un número primo o no.
//? 1 => 1
//? 2 => 1, 2
//? 3 => 1, 3
//? 4 => 1, 2, 4
//? 5 => 1, 6
//? 6 => 1, 2, 3, 6
//? 7 => 1, 7

const hallarNumeroPrimo = (numero) => {
    //? como sabeos si un numero es entero
    if (numero % 1 !== 0) {
      return "El numero es un decimal";
    }
  
    if (numero === 1) {
      return "No es un numero primo";
    }
  
    let contador = 0;
    let contadorDeDivisores = 0;
  
    while (contador <= numero) {
      if (numero % contador === 0) {
        contadorDeDivisores++;
      }
      contador++;
    }
    //* que estoy guardando en la variable contadorDeDivisores
    return contadorDeDivisores === 2
      ? "Si es un numero primo"
      : "No es un numero primo";
  };