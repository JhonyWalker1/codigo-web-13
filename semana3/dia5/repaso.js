// quiero un arreglfo de 10 personas
let personas = ["Erick", "Karina", "Patricia", "kjaris", "Bruno","Pepe","Juanito","pepito","Pedro" ,"Carlos"];
console.log("Personas", personas.length);

personas[6] = "juanito";

const Tipo = [100, "Pepe", true , 50.1, "5"]

const valores = [1]

function obtenerSegundoValor(valores){

    if(valores[1]=== undefined){
        return "Error: Posicion no encontrada";
    }
    //una forma seria ver su valores [1] === undefined entonces es error
    return valores[1];
}



function obtenerValor(valores) {
    return valores[11] === undefined? "Error" : valores[11];
}

//arrow function
// esto es un array vacio
let carrosNuevos=[]

//funcion flecha array
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

//este array seria un elemento de carros nuevos, por ende este es un
//array dentro de un array
llenarCarrosNuevos (["tico", "Maverik 62", "mitsubichi"]);

console.log(carrosNuevos)


const esPar =(nro1)=>{
    return nro1%2 ===0 ?"Es numero par" : "Es numero impar"
}
console.log("numero es" , esPar(11))