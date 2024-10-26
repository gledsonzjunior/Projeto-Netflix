const buttonSound = document.querySelector(".img-logo");
const video = document.querySelector(".video");
const modal = document.querySelector(".modal");
const btnInfos = document.querySelector(".link-infos");
const buttonTudum = document.querySelector(".btn-logo");
const tudum = document.querySelector(".tudum-audio");

// LIGAR SOM DO VIDEO
function ativarSom() {
	video.muted = false;
}

buttonSound.addEventListener("click", ativarSom);

// MOSTRAR MODAL COM INFORMAÇOES DO FILME

btnInfos.addEventListener("click", mostrarInfos);
function mostrarInfos() {
	modal.style.display = "block";
}

// REMOVER MODAL COM INFORMAÇOES

modal.addEventListener("click", removerModal);

function removerModal() {
	modal.style.display = "none";
}

// FAZER TUDUM

buttonTudum.addEventListener("click", playTudum());

function playTudum() {
	playTudum.play(); //
}
