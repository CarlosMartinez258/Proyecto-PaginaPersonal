// Menú responsive
const menuBoton = document.getElementById("menu-boton");
const navEnlaces = document.querySelector(".nav-enlaces");

menuBoton.addEventListener("click", () => {
    navEnlaces.classList.toggle("activo");
});