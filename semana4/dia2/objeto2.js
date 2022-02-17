//! Creen un objeto persona
//? creen que un objeto puede contener una function?

const persona = {
    nombre: "Juanito",
    edad: 30,
    talla: 1.5,
    estadoCivil: "casado",
    calcularEdad: function() {
        console.log("calculando la edad");
    },
};
//* 1 forma para llamar una funcion que esta dentro de un objeto
console.log("1er forma");
persona.calcularEdad();

//* 2da forma, es parecida sin embargo no se usan parentesis

console.log("2da forma");
//* Esa solo funciona si la funcion tiene un return
persona.calcularEdad;


//? vamois a ver como acceder a las propiedad del objeto
//? desde una funcion interna
const computadora = {
    pantalla: "Acer",
    memoriaRam: "16gb",
    color: "verde",
    nuevo:true,
    mostrarDetalle: function () {
        console.log("color", this.color);
    },
    mostrarDetalleCompleto: function(){
        //! en los arrow funcion this no existe
        console.log("Detalle", `Color: ${this.color} es nuevo? ${this.nuevo ? "si":"no"}`);
    }
}
computadora.mostrarDetalle();
computadora.mostrarDetalleCompleto();

const computadora2 = {
    color: "amarillo",
    marca: "lenovo",
    nuevo: false,
    imprimirDetalle: function(){
        console.log(this.color);
    },
    mostrarDetalle: function (){
        console.log("color", this.color);
    }
}

computadora2.mostrarDetalle();
computadora2.imprimirDetalle();

//? objetos con array
const alumno = {
    nombre: "Juanito",
    notas: [10,5,8,9],
    cursos: ["html", "CSS", "js" , "React"],
};

console.log("notas", alumno.notas);

//? Crear un array de objetos?
const alumnos = [
    {
        nombre: "Luciano",
        edad:18,
        promedio:15,
    },
    {
        nombre: "El pepe",
        edad:21,
        promedio: 14,
        direccion: "Av siempre 123",
    },
]
// como puedo imprimir nota de luciano

console.log(`nota de ${alumnos[0].nombre}`, alumnos[0].promedio);

//* En una web siempre estan presnetes los array de objetos
//* creemos un array de laptops


//? Esta estructura es conocida como JSON

//? JSON; es un formato de archivos


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

console.log(laptops);

//? CReen que los keys puedan ser numeros?
const listaDeUtiles= {
    1: "hojas bond",
    2: "plumones",
    3: "lapicero",
};

console.log(listaDeUtiles[1]);

//? Objetos dentro de objetos
const components = {
    nombre: "Lenovo IPAD",
    caracteristicas: {
        ram:16,
        tarjeta: "3090 super",
        memoria: 512,
        extra: {
            pantalla:"4k"
        },
        1: {
            teclado: "español"
        }
    },
};
console.log("tarjeta" ,components.caracteristicas.tarjeta);

console.log("pantalla" ,components.caracteristicas.extra.pantalla);

console.log("teclado" ,components.caracteristicas["1"].teclado);

//? Crear un array de objetos de la sgt tienda: b&h

const bh = [
    {
    nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, Space Gray)",
    shippingRestriction: "No Shipping to Perú",
    calificacion: 5,
    keyFeatures: {
        procesador: "Apple m1 pro 10-Core chip",
        memoria:"16gb Unified RAM | 1tb SDD",
        pantalla: "16.2 3456 x 2234 Liquid Retina XDR Screen",
        core: "16-Core GPU | 16-Core Neural Engine",
    },
},

{
    nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, silver)",
    shippingRestriction: "No Shipping to Perú",
    calificacion: 5,
    keyFeatures: {
        procesador: "Apple m1 pro 10-Core chip",
        memoria:"16gb Unified RAM | 1tb SDD",
        pantalla: "16.2 3456 x 2234 Liquid Retina XDR Screen",
        core: "16-Core GPU | 16-Core Neural Engine",
    },
},

{
    nombre: "Apple 16.2 MacBook Pro with M1 Pro Chip (Late 2021, green)",
    shippingRestriction: "No Shipping to Perú",
    calificacion: 5,
    keyFeatures: {
        procesador: "Apple m1 pro 10-Core chip",
        memoria:"64gb Unified RAM | 20tb SDD",
        pantalla: "18.2 3456 x 2234 Liquid Retina XDR Screen",
        core: "32-Core GPU | 32-Core Neural Engine",
    },
},
]