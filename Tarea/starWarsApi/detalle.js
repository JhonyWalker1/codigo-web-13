const objetoActor = JSON.parse(localStorage.getItem("actor"));


const imgDetail = document.querySelector("#img-detail");
const statusCharacter = document.querySelector("#status");
const nameCharacter = document.querySelector("#name");

const locationCharacter = document.querySelector("#location");
const origin = document.querySelector("#origin");
const episodes = document.querySelector("#episodes");
const species = document.querySelector("#species");


//imgDetail.src = objetoActor.image; 

nameCharacter.innerHTML = objetoActor.name;