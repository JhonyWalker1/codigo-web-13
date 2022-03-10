//Promesa: sirve para poder ejecutar algo asyncrono
//cuando hacemos una peticion a un API esta tiene un tiempo de espera

//Primera forma en la cual vamos a crear una promesa
//la clase que se encarga de instanciar se llama new Promise()

//resolve: es el encagrado de retornar la respuesta cuando todo es correcto
//reject: es el encargado de retornar la respuesta cuando algo esta mal
//* ambos son funciones que retornar algo
//* cuando creamos una promesa esta no tiene return solo RESOLVE Y REJECT
const promesa = new Promise((resolve, reject)=>{
    //vamos a simular un tiempo de espera
    setTimeout(()=>{
        //Esta funcion va a esperar 3 segundos para poder retornar el resolve
        resolve("todo good")
    }, 3000)

});

//como hacemos para poder ejecutar la promesa
/* console.log(promesa); */
async function getDataFromPromesa(){
    const respuesta = await promesa;
    console.log(respuesta);
}

getDataFromPromesa();

// existe otra forma de poder leer una promesa, esta forma existia antes del async await
//.them()=> entonces || luego

//.then(callback)
//un callback es una funciona que ejecuta algo en base a un resultado

promesa.then((respuesta)=>{

    //cuando acabes de ejecutar la promesa, obtener su valor y guardalo en "respuesta"
    console.log(respuesta);
})

//que pasaria si tenemos muchas peticiones anidadas
// supongamos que tenemos 5 peticiones

/* async function peticiones(){
    const primera = await fetch("primera")
    const resprimera=await primera.json();
    const segunda = await fetch("segunda")
    const ressegunda=await segunda.json();
    const tercera = await fetch("tercera")
    const restercera=await tercera.json();
    const cuarta = await fetch("cuarta")
    const rescuarta=await cuarta.json();
    const quinta = await fetch("quinta")
    const resquinta=await quinta.json();

}

peticiones
.then((primera)=>{})
.then((segunda)=>{})
.then((tercera)=>{})
.then((cuarta)=>{})
.then((quinta)=>{}); */

//veamos una promesa con errores
const promesaConError = (validacion) =>{
    return new Promise((resolve, reject)=>{
        if(validacion){
            resolve("la validacion esta ok")
        }else{
            // new Error es una clase de JS la cual nos permite retornar un error o un mensaje
            reject(new Error("Error en la validacion"))
        }
    });
};

//veamos como poder validad un error usando el .then()
 promesaConError(false).then((respuesta)=>{
    console.log(respuesta);
    // para poder detectar un error usamos el .cath()
        //si algo esta mal automaticamente entra al .catch()
 }).catch((error)=>{
     console.log(error.message);
 });

 // vamos a validar un error usando async await
 const validacionAsync= async()=>{
     // la forma en la cual podemos validar el error en una funcion normal es usando
     //con try catch
     try{
            //aca va a intentar obtener el resultado de la peticion
            const respuesta = await promesaConError(false);
            console.log("validacionAsync", respuesta);
     }catch(error){
        //si detecta un error automaticamente entra al catch
        console.log("validacionAsync", error.message);
     }
 }
 validacionAsync();
 //! Recomendacion
 //*Siempre que hagamos una peticion acompañemos esta de un try catch

 //ejemplo real
/*  const getUserGitHub = async()=>{
     try{
            const response= await fetch("");
            //en el caso de que el responde sea un error 404
            const data = await response.json();
            return data;
     }catch(error){
        console.log(error.message)
     }
 } */

 //veamos un poco de lo que es un status code
 //un status code es un numero que retorna un peticion
 //200,500,404,201,512
 //Si una peticion nos devuelve un status que sea 200,201
 //que la respuesta es ok
 //200= ok
 //201= ok y ademas significa  que algo ha sido creado
 //Si la url responde un 500,404,512
 //hay un error
 //404=> es el error que muestra cuando no encuentra la url, es decir la direcion no existe
 //500=> es el error que retorna cuando hay un problema en el servidor
 //512=> es un error de espacio en el servidor

 //* GET => obtener datos(informacion)
 //* POST => enviar/crear datos
 //* PUT => Actualizar datos
 //* DELETE => Borrar/Eliminar datos