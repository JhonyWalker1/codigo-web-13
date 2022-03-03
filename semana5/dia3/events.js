//* addEventListener
//* La forma de JS moderno me permite agregar los eventos de una forma
//* más legible

const btnPrueba = document.querySelector("#btn-prueba");

function showAlert(icon, title, text) {
    Swal.fire({
        icon,
        title,
        text,
    })
}

const btnPregunta = document.querySelector("#btn-pregunta")
const btnError = document.querySelector("#btn-error")
const btnWarning = document.querySelector("#btn-warning")

btnPrueba.onclick= function (event) {
    console.log("click desde el boton");
    console.log(event);
    Swal.fire("Hola mundo")
}

btnPregunta.onclick = function () {
    Swal.fire("Alguna pregunta", "aca el texto de la pregunta", "question")
}
btnError.onclick = function () {

     showAlert("error", "Hubo un error", "email or password erroneos")

};

btnWarning.onclick = function () {
    showAlert("warning", "Hay una alerta de peligro", "el peligro se acerca")
}

const btnSuccess = document.querySelector("#btn-success")

btnSuccess.onclick = function (){
    showAlert("success", "todo ok", "todo salio bien")
}

const btnInfo = document.querySelector("#btn-info")
btnInfo.onclick= function(){
    showAlert("info", "todo informao", "textito")
}

const btnAlertaBotones = document.querySelector("#btn-alerta-botones")
btnAlertaBotones.onclick = function () {
    Swal.fire({
        title: 'alerta',
        text: 'Texto de alerta',
        showDenyButton: true,
        showCancelButton: true ,
        confirmButtonText: "guardar",
        denyButtonText: "nel pastel",
    }).then((resultado) =>{
        if(resultado.isConfirmed){
            showAlert("success", "confirmado", "se confirmo la operacion")
            console.log("marco la confirmacion");
        }
        if(resultado.isDenied){
            console.log("marco la negacion");
        }
        if(resultado.isDismissed){
            console.log("marco la cancel");
        }
    });
}

const btnAlertNotification = document.querySelector("#btn-alerta-notificacion")
// 1000 => 1 segundo
btnAlertNotification.onclick= function(){
    Swal.fire({
        position: "top-end", // top, center, top-start, center-start, center-end, bottom, bottom-start,bottom-end
        icon: "success",
        title: "notificacion",
        showConfirmationButton: false,
        timer: 1500,
    })

}

const urlMarvel = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"

const btnAlertaImagen = document.querySelector("#btn-alerta-imagen")
btnAlertaImagen.onclick = function(){
    Swal.fire({
        title: "imagen",
        text: "Alerta con imagen",
        imageUrl: 
        urlMarvel,
        imageWidth: 300,
        imageHeight: 300,
    })
}

const btnAlertCustom = document.querySelector("#alerta-custom")
btnAlertCustom.onclick= function(){
    Swal.fire({
        title: "custom alert",
        text: "alerta customisable",
        background: `url(${urlMarvel})`,
        color:"#fff",
        backdrop: `
        rgba(0,0,0,0.3)
        url(https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif)
        left top
        no-repeat`,

    })
}

const btnAlertInput = document.querySelector("#btn-alerta-inputs")
btnAlertInput.onclick= function(){
    Swal.fire({
        title: "input para email",
        input: "email",
        inputLabel: "ingrese su correo",
        inputPlaceholder: "el correo debe ser valido",
    }).then((resultado)=>{
        //obtengo el resultado de lo que escribio el usuario en el input
        console.log(resultado.value);
    })
}

const paises = document.querySelector("#select-opciones")

//vmaos a agregar el evento onchange

paises.onchange= function (event) {
    const {value, options} = event.target;


    console.log("probamos el evento de cambio" , value);
    const index = options.selectedIndex;
    console.log("index" , index);
    console.log("texto",options[index].text);
}