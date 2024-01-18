// JS desafio 1

const img = document.querySelector(".dev");

let tieneBordeRojo = false;
const action = () => {
  tieneBordeRojo = !tieneBordeRojo;
  img.style.border = tieneBordeRojo ? "2px solid red" : "none";
};
img.addEventListener("click", action);
