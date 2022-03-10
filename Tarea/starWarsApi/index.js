const contenedorElemento = document.querySelector("#container-elements");
const ULR_SW_IMAGES = "https://akabab.github.io/starwars-api/api/all.json";
const ULR_STAR_WARS = "https://swapi.dev/api/people";

const getDataFromStarWars = async () => {
  const response = await fetch(ULR_STAR_WARS);
  const data = await response.json();
  //console.log(data);
  renderData(data.results)
  getImageFromStarWars(data.results)
};

const showDetail = async (actorUrl) => {
    const url = "/Tarea/starWarsApi/detalle.html";
    const response = await fetch(actorUrl);
    const dataActor = response.json();
    localStorage.setItem("actor", JSON.stringify(dataActor));
    window.location.href = url; 
}

const getImageFromStarWars = async (actors) => {
    const response = await fetch(ULR_SW_IMAGES);
    const imagenes = await response.json();
  
    actors.map((actores) => {
      // la idea es que por cada iteracion se pueda extraer la foto del API de ULR_SW_IMAGES
      const resultado = imagenes.filter((imagen) => imagen.name === actores.name);
      actores.imageFromAPI = resultado[0].image;
    });
  };
  
  getDataFromStarWars();


 const renderData =  (data, actors) => {
    data.map((actor)=>{
    const html = `
    <div class="col-md-3 mb-5">
          <div class="card link" onclick="showDetail('${actor.url}')">
            <div
              class="card-body card-custom-body"
              style="
                background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0.3),
                    rgba(0, 0, 0, 0.3)
                  ),
                  url(${actors.image})";
              
            >
              <span class="badge bg-success"></span>
              <h4 class="text-white mt-2">${actor.name}</h4>
              <div class="d-flex justify-content-between w-100 text-white">
                <div>
                  <span
                    ><i class="fa-solid fa-earth-americas"></i>&nbsp;${actor.homeworld}</span
                  >
                </div>
                <div>
                  <span><i class="fa-solid fa-fingerprint"></i>&nbsp;${actor.gender}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

  contenedorElemento.innerHTML += html;

  });
};

getDataFromStarWars(); 