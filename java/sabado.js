let caja = document.getElementById("resultado");
let boton = document.getElementById("boton");

boton.addEventListener("click", function () {
  let trajobebida = confirm("trajiste fernet?");

  if (trajobebida) {
    caja.textContent = "sos bienvenido, pasa 🍷🎉";
    caja.style.backgroundColor = "green";
    caja.style.color = "white";
    caja.style.fontSize = "25px";
  } else {
    caja.textContent = "no, raja de aca 🚫🤣";
    caja.style.backgroundColor = "red";
    caja.style.color = "white";
    caja.style.fontSize = "25px";
  }
});
