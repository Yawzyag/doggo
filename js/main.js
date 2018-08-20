//idioma
let ln = (x = window.navigator.language || navigator.browserLanguage);
window.onload = document
  .getElementsByTagName("html")[0]
  .setAttribute("lang", ln);
//obtener año
let año = new Date().getFullYear();
var textAño = document.createTextNode(año);
window.onload = document
  .getElementsByClassName("main-footer")[0]
  .appendChild(textAño);

//url
let utlPerrito = "https://dog.ceo/api/breeds/image/random";
//get module element
let modal = document.getElementById("simpleModal");
//Get Open module btn
let modalBtn = document.getElementsByClassName("modalBtn")[0];
let perritoBtn = document.getElementsByClassName("modalBtn")[1];
//get close btn
let closeBtn = document.getElementsByClassName("closeBtn")[0];
//imagen de perrito
let perritoImg = document.getElementById("perritoImg");

//listen for click
modalBtn.addEventListener("click", openModal);
//listen for close
closeBtn.addEventListener("click", closeModal);
//listen for outside click
window.addEventListener("click", clickOutside);
//click para obtener perrito
perritoBtn.addEventListener("click", getPerrito);

//function to open modal
function openModal() {
  modal.style.display = "block";
  perritoImg.attributes.alt.value = "cargando...";
  getPerrito();
}

//function to close modal
function closeModal() {
  modal.style.display = "none";
  perritoImg.attributes.src.value = "";
}

//Close outside window
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    perritoImg.attributes.src.value = "";
  }
}

//fetch perrito api
function getPerrito() {
  fetch(utlPerrito)
    .then(res => res.json())
    .then(data => {
      perritoImg.attributes.src.value = data.message;
    })
    .catch(err => console.log(err));
}
