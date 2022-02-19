//* map => crea un nuevo array con los elementos del array original
//* forEach => itera sobre cada elemento arrar

const mascotas=[
    {
        nombre:"pulga",
        edad:2,
    },
    {
        nombre:"pug",
        edad:12,
    },
    {
        nombre:"gatito",
        edad:15,
    },
    {
        nombre:"perro",
        edad:4,
    },
    {
        nombre:"araña",
        edad:8,
    },
    {
        nombre:"burro",
        edad:1,
    },
    {
        nombre:"conejo",
        edad:5,
    },

];

const mascotasEdadSumada= mascotas.map((mascota)=>{
    return {
        nombre: mascota.nombre,
        edad:mascota.edad +2 ,
    };
});
console.log(mascotasEdadSumada);

const  nuevoArregloMascota =[]



const arregloCursos = [
    {
      nombre: "React JS",
      tec: "JS",
    },
    {
      nombre: "django",
      tec: "Python",
    },
    {
      nombre: "Angular",
      tec: "JS",
    },
    {
      nombre: "Flask",
      tec: "Python",
    },
    {
      nombre: "Laravel",
      tec: "PHP",
    },
  ];

  const filterCursosTec=(arrayCursos, tecFiltro) =>{
      return arrayCursos.filter((curso)=> curso.tec === tecFiltro);
  }
const cursoJS= filterCursosTec(arregloCursos, "JS");
const cursoPython= filterCursosTec(arregloCursos, "Python");
const cursoPHP= filterCursosTec(arregloCursos, "PHP");