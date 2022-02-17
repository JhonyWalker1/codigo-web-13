//* Un bucle es una estructura repetitiva, es decir hacer algo muchas veces

//* los bucles son usados para poder leer arrays , porque un bucle me va a permite
//* ñlee cada elemento independiemente

//iterador => indice de mi bucle
// i++
//i = i+1
//indica que será de uno en uno

for (let i = 0; i < 10; i++) {
    console.log("iterador", i);
}

for (let i = 5; i < 20; i++) {
    console.log("iterador 2", i);
}

for (let j = 10; j < 50; j++) {
    console.log("iterador 3", j);
}


//const alumnos = ["pepe", "juana", "stephanie", "carlos","luis"]

//for (let i = 0; i < alumnos.length; i++) {
//  console.log(alumnos[i]);

//}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
    }
}


const laptops = [
    {
        marca: "Lenovo",
        imagen: "https://logo.com",
        nombre: "ide centre AIO i3",
        vendedor: "Falabella",
        precioOferta: 1599,
        precioNormal: 3599,
        calificacion: 2,
        caracteristicas: {
            procesador: "i3",
            tarjetaDeVideo: "integrada",
            discoDuro: "1tb",
            discoDuroSolido: "no aplica"
        },

    },
    {
        marca: "Acer",
        imagen: "https://logo.com",
        nombre: "AN515 15.6",
        vendedor: "Falabella",
        precioOferta: 3399,
        precioNormal: 4999,
        calificacion: 5,
        caracteristicas: {
            procesador: "i5",
            tarjetaDeVideo: "GTX 1650",
            discoDuro: "No tiene",
            discoDuroSolido: "256gb"
        },

    },
];



for (o = 0; o < laptops.length; o++) {
    console.log(laptops[o].marca);
}


//array de objetos de alumnos

/*const alumnos =[
    {
        nombre: "pepe",
        edad:"21",
    },
    {
       nombre: "Juan",
       edad:"30",
   },
   {
       nombre: "Lucho",
       edad:"22",
   },
] */

//* .length devuelve el numero de elementos de un array
//! recuerden que el indice de una array inical en 0
//for (let obj = 0; obj < alumnos.length; obj++) {
//  console.log("obj", obj);
// console.log(alumnos[obj]);
//console.log(alumnos[obj].nombre)
//console.log(alumnos[obj].nombre);
//console.log(alumnos[obj].edad);
// console.log("----------");
// console.log("Imprimir solo si la edad del alumno es menmor 30");
//if (alumnos[obj].edad<30) {
//  console.log(alumnos[obj])  
// }
//  console.log("----------------");
//}
//* sim solo quiero mostrar a los alumnos menores de 30
//   if(alumnos[obj].edad<30){
//     console.log(alumnos[obj].nombre);
// }
// }


const contarVocales = (frase) => {
    const fraseMayuscula = frase.toUpperCase();
    //para saber cuantoas vocales tengo necesito un contador
    //este se va encargar de guardar cuantas vocales tengo
    let contador = 0

    for (let i = 0; i < fraseMayuscula.length; i++) {
        const letra = fraseMayuscula[i];
        if (letra === "A" || letra === "E" || letra === "I" || letra === "O" || letra === "U") {
            contador++;
        }
    }
    console.log(`La frase tiene ${contador} vocales`);
}

contarVocales("Hola me llamo juan")

//paso1 debemos hallar los numeros divisibles
//10 => 1,2,5,10


const hallarDivisoresComunes = (numero1, numero2) => {
    //como puedo hallar los divisores de un numero ?
    //para poder hallar los divisores de ese numero, necesito un for
    //for (let i = 1; i <= numero1; i++) {
        //para saber si un numero es divisible por otro, el residuo debe ser 0
        //si quiero imprimir a los divisor debe imprimir a i porque en cada
        //vuelta el valor de i cambia
        //! ojo no imprimo numero1 porque numero1 siempre va a valer 10
       // if (numero1 % i === 0) {
      //    console.log(i);
    //    }

  //  }
  //  for (let j = 1; j <= numero2; j++) {
        //para saber si un numero es divisible por otro, el residuo debe ser 0
        //si quiero imprimir a los divisor debe imprimir a i porque en cada
        //vuelta el valor de i cambia
        //! ojo no imprimo numero1 porque numero1 siempre va a valer 10
    //    if (numero2 % j === 0) {
      //      console.log(j);
       // }

    //}
    const divisores1= hallarDivisores(numero1);
    const divisores2= hallarDivisores(numero2);
    

    console.log("divisores1", divisores1);
    console.log("divisores2", divisores2);

};

const hallarDivisores = (numero) => {
    let divisores = [];

    for (let j = 1; j <= numero; j++) {
        if (numero % j === 0) {
            //push sirve para agregar elemento en la ultima posicion en un array
            divisores.push(j)
        }
    }
    return divisores;
}

hallarDivisoresComunes(10, 2);