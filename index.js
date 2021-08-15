/*
* ! Guardamos las etiquetas en un varaibles con el mismo nombre de las etiquetas .
*/
const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const progress = document.querySelector("#progress");

/*
! Metodos 
*/

// * La funcion handlePlay y handlePause ponen en pausa y paly el video ademas de ocular las etiquetas de play y pause
const handlePlay = () => {
    video.play();
    play.hidden = true;
    pause.hidden = false;
}

const handlePause = () => {
    video.pause();
    play.hidden = false;
    pause.hidden = true;
}


// los siguientes metodos aumentan 10 segundos de adelanta o retraso al video

const handleBackward = () => {
    video.currentTime -= 10 ;

}

const handleForward = () => {
    video.currentTime += 10 ;
}


// ! en este definimos el tiempo maximo qyue durara nuestro video en la etiqueta input que maneja la barra de carga

const handleLoaded = () => {
    progress.max = video.duration
}

// ? handleTimeUpdate  hace que el value del input de la barra de carga este pendiente al tiempo video.current del video

const handleTimeUpdate = () => {
    progress.value = video.currentTime;
}


// handle imút hace que nosotros podamos asignar el tiempo del vodeo a un punto especifico de la barra 


const handleInput = () => {
    video.currentTime = progress.value;
}





/* 
 ! aqui se les agrega a las etiqietas los eventos que recibiran
*/

backward.addEventListener("click",handleBackward);
forward.addEventListener("click",handleForward);
pause.addEventListener("click",handlePause);
play.addEventListener("click",handlePlay);


video.addEventListener("loadedmetadata",handleLoaded);
video.addEventListener("timeupdate",handleTimeUpdate);

progress.addEventListener("input",handleInput);


