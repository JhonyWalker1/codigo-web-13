/**
 * Este archivo se va a encargar de gestionar mis servicios GET POST PUT DELETE
 */

 const URL = "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies";

 /**
  * 
  * Funcion para listar las peliculas
  */

 const getMovies = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const storeMovie = async(movie)=> {
    try{
        const response = await fetch(URL, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
          });
        
          await response.json();
    
          // Falta limpiar los inputs
    
          
         // function limpiarFormulario() {
            document.getElementById("miForm").reset();
        //}
    
    
          Swal.fire({
              icon: 'success',
              title: "",
              text: "Se creo la pelicula"
          })
        
          //console.log("data", data);
    }catch(error){
        Swal.fire({
            icon: "error",
            title: "Error",
            text:error.message
        })
    }
    
    };

    
// para poder eliminar un regitsro solo necesito el id de este
const deleteItem=async(id)=>{
    try{
        //profe y donde va el id?
        //el id va en la url
        //ejemplo: "https://62281ff09fd6174ca81b97f8.mockapi.io/api/v1/movies/1";

        const response = await fetch(`${URL}/${id}`,{
            method: "DELETE",
            headers:{
                Accept: "application/json",
              "Content-Type": "application/json",
            }
        });
await response.json();
Swal.fire({
    icon:"success",
    title: "",
    text : "Se elimino la pelicula",
});

    }catch(error){
        Swal.fire({
            icon:"error",
            title: "",
            text : "No se pudo eliminar la pelicula",
        });
    }
}
  