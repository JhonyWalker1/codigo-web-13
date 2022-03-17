const objetoActor = JSON.parse(localStorage.getItem("actor"));


console.log("datos",objetoActor)



const imgDetail = document.querySelector("#img-detail");
const nameCharacter = document.querySelector("#name");
const nmGender = document.querySelector("#genero")
const colorOjos= document.querySelector("#colorEyes")
const numPeliculas = document.querySelector("#episodes")
const actorEspec= document.querySelector("#peso")

nameCharacter.innerHTML = objetoActor.name;
imgDetail.src=objetoActor.image;
nmGender.innerHTML=objetoActor.gender;
colorOjos.innerHTML=objetoActor.eye_color;
numPeliculas.innerHTML=objetoActor.films.length;
actorEspec.innerHTML=objetoActor.height