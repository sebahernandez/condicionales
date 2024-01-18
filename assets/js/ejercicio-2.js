const inputs = document.querySelectorAll("input");
const totalStickers = document.querySelector("#total-stickers");
const mensaje = document.createElement("p");
const verificar = document.querySelector("#verificar");
let stock = 10;

const verificarNumero = () => {
  let total = 0;
  let inputLimpios = false;
  let entradaInvalida = false;

  inputs.forEach((input) => {
    const valor = Number(input.value);
    if (input.value) {
      inputLimpios = true;
    }
    if (isNaN(valor)) {
      entradaInvalida = true;
    } else {
      total += valor;
    }
  });

  mensaje.classList.remove(
    "mensaje-success",
    "mensaje-warning",
    "mensaje-error"
  );

  if (entradaInvalida) {
    mensaje.innerHTML = `No has ingresado un número válido`;
    mensaje.classList.add("mensaje-warning");
  } else if (!inputLimpios) {
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
};

verificar.addEventListener("click", verificarNumero);
