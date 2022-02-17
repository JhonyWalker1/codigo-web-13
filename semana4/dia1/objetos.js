//alert ("Funciona")

//? Un objeto es una entidad independiente ahora, este tiene propiedades
//? y atributos

//* Atributos de un carro
//! numero de puertas
//! color
//! placa
//! motor
//! cilindro
//! hp

//? un objeto esta compuesto por un key (llave) y un value (valor)

//? creemos el objeto carro

const carro = {
        color: "azul",
        motor: 1.2,
        modelo: "GTR",
        marca: "Nissan",
        nuevo: true,

}

//? Objeto persona
const persona = {
    edad: 30,
    nombre:"Juanito",
    sexo:"Masculino",
    talla: 1.75,
    estadoCivil: "soltero",
    mayorDeEdad : true,
    donanteDeOrganos: true,
    dni: "74554888",
    tatuajes: true,
    nacionalidad:"Peruano"
}

//? acceder al atributos de persona

console.log("nombre", persona.nombre);
console.log("dni", persona.dni);
console.log("celular", persona.celular);

//? Creen que pueda agregar más atributos?

persona.celular = "999999"
console.log(persona);

//? segunda forma de agregar elemento a un objetos
//? quiero agregar la profesion de una persona

persona["profesion"]= "Ingeniero";

console.log("Persona con profesion" , persona);

//? creando objeto de la forma antigua
//? instanciando a la clase object
//? la clase Object en JS es una clase la cual permite decir que la variable será un objeto

const casa = new Object();
casa["color"] = "rosada";
casa.pintura = "negro";

console.log("casa" , casa);

//! Tercera forma de crear un objeto

const laptop = new Object(),
modelo = "macbook pro",
peso = 2.5,
color = "gris",
ram = "16gb",
memoria = 512;

laptop[color] = "gris"

console.log("laptop" , laptop);

const celular = {
    model: "iphone 11",
    flexible : false,
    tamano: 6.1,
    gama: "Alta",
    color: "gris",
    camara: 2,
    precio: "$700"
}


// como puedo cambiar el valor de atributo?
celular.camara = 4;
celular.memoria= "128gb";

console.log("celular", celular)

// quiero crear una funcion la cuel me retorne el nombre de la memoria y precio de celular


// Celular es un object
const mostrarDetalleCelular = (celular) => {
    return `El modelo es ${celular.model} y tiene ${celular.memoria} de espacio a tan solo ${celular.precio}`;
};

console.log("objeto celular" , mostrarDetalleCelular(celular));

//? Destruturaciion de objetos

const mostrarDetalleCelular2 = (celular) => {
    const { model, memoria , precio} = celular;
    return `El modelo es ${modelo} y tiene ${memoria} de espacio a tan solo ${precio}`;
}

console.log("objeto celular2", mostrarDetalleCelular2(celular));

// creamos el objeto usuario

const usuario = {
    nickName: "loquitoProgramador01",
    email: "loqui@gmail.com",
    password: "******" ,
    carnetVacunacion: true,
    location: "peru",
    level: "pro",
    edad: 18,
}

// crear una funcion la cual valide si el usuario es peru
//si es peru impriman su nickname junto a su nivel,
// si no es de peru impriman "oye tu nickname no eres peruano"

const validarDatos = (usuario) => {
    const { nickName, level, location} = usuario;
     return location==="peru" ?` ${nickName} eres ${level}` : "oye no ers peruano";
}
    //return `El modelo es ${modelo} y tiene ${memoria} de espacio a tan solo ${precio}`;
