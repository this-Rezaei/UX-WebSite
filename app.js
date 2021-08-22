const close = document.querySelector("#close");
const activa = document.querySelector("#activa");
const nav = document.querySelector("#closed");

close.addEventListener("click", () => nav.classList.remove("show"));
activa.addEventListener("click", () => nav.classList.add("show"));
