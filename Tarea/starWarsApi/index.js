const contenedor = document.querySelector("#container-elements")
const ULR_STAR_WARS = "https://swapi.dev/api/people";
const ULR_SW_IMAGES = "https://akabab.github.io/starwars-api/api/all.json";

const getDataFromStarWars = async () => {
  const response = await fetch(ULR_STAR_WARS);
  const data = await response.json();
  await getImageFromStarWars(data.results);
};

const showDetail = async (actorUrl, urlImg) => {

   const url = "/Tarea/starWarsApi/detalle.html";
   const response = await fetch(actorUrl);
   const data = await response.json();

   data.image= urlImg;
   // como poder guardar un objeto en localStorage
   // JSON.Stringfy => Permite parsear un JSON a un string
   // de esta formar podemos guardar un objeto en localStorage
  //localStorage.setItem("img", JSON.stringify(dataImg));
   localStorage.setItem("actor", JSON.stringify(data));
  //localStorage.setItem("img",urlImg)
 
   window.location.href = url;
   
 };


const getImageFromStarWars = async (actors) => {
  const response = await fetch(ULR_SW_IMAGES);
  const imagenes = await response.json();
  actors.map((actor) => {
    // la idea es que por cada iteracion se pueda extraer la foto del API de ULR_SW_IMAGES
    const resultado = imagenes.filter((imagen) => imagen.name === actor.name);
    actor.imageFromAPI = resultado[0].image;
      const html = `
      <div class="col-md-3 mb-5">
            <div class="card link" onclick="showDetail('${actor.url}','${actor.imageFromAPI}')"
            >
              <div
                class="card-body card-custom-body"
                style="
                  background: linear-gradient(
                      0deg,
                      rgba(0, 0, 0, 0.3),
                      rgba(0, 0, 0, 0.3)
                    ),
                    url(${actor.imageFromAPI});
                "
              >
                <h4 class="text-white mt-2">${actor.name}</h4>
                <div class="d-flex justify-content-between w-100 text-white">
                  <div>
                    <span
                      ><i class="fa-solid fa-earth-americas"></i>&nbsp;${actor.eye_color}</span
                    >
                  </div>
                  <div>
                    <span><i class="fa-solid fa-clapperboard"></i>&nbsp;${actor.birth_year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        contenedor.innerHTML += html;
    });
  };
  
getDataFromStarWars();


