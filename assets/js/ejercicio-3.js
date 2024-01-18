const buttonCheck = document.querySelector("#buttonCheck");
const mensaje = document.querySelector("#msg-password");

const select1 = document.querySelector("#select1");
const select2 = document.querySelector("#select2");
const select3 = document.querySelector("#select3");

const password = 911;
const password2 = 714;

const action = () => {
  const suma = Number(select1.value + select2.value + select3.value);
  if (suma === password) {
    mensaje.innerHTML = "password 1 correcto";
    return;
  } else if (suma === password2) {
    mensaje.innerHTML = "password 2 correcto";
    return;
  }
  mensaje.innerHTML = "La contraseña es incorrecta";
};

buttonCheck.addEventListener("click", action);
