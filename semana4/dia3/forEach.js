//* forEach tambien es un bucle
//* es como una mezcla de map y for
//* pero a diferencia del map este no retorna nada
//* Sirve para iterar un arreglo

const numeros=[1,2,3,4,5,6,7,8,9,10];

numeros.forEach((numero, index)=>{
        console.log(numero);
});

const productos = [
    {
        name:"laptop",
        price: 1500
    },
    {
        name:"celuar",
        price: 200
    },
    {
        name:"pc",
        price: 3500
    },
];

productos.forEach((producto)=>{
    console.log(producto);
})

productos.forEach((producto)=>console.log(producto.name));