// JS desafio 2

const inputs = document.querySelectorAll("input");
const totalStickers = document.querySelector("#total-stickers");
const mensaje = document.createElement("p");
const verificar = document.querySelector("#verificar");

let stock = 10;

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = isNaN(input.value) ? "" : input.value;
  });
});

verificar.addEventListener("click", () => {
  let total = 0;
  let inputLimpios;

  inputs.forEach((input) => {
    if (input.value) {
      inputLimpios = true;
      const valor = Number(input.value);
      total += valor;
    }
  });

  mensaje.classList.remove(
    "mensaje-success",
    "mensaje-warning",
    "mensaje-error"
  );

  if (!inputLimpios) {
    mensaje.innerHTML = `No has ingresado stickers`;
    mensaje.classList.add("mensaje-warning");
  } else if (total < 5) {
    mensaje.innerHTML = `Podrías sumar algunos stickers más`;
    mensaje.classList.add("mensaje-warning");
  } else if (total <= stock) {
    mensaje.innerHTML = `Llevas ${total} stickers`;
    mensaje.classList.add("mensaje-success");
  } else {
    mensaje.innerHTML = `Llevas demasiados stickers`;
    mensaje.classList.add("mensaje-error");
  }

  totalStickers.parentNode.appendChild(mensaje);
});
