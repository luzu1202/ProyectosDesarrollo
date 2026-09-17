document.getElementById("anio").textContent = new Date().getFullYear();

var boton = document.getElementById("toggleHabilidades");
var lista = document.getElementById("listaHabilidades");

console.log("Habilidades listadas:", lista.children.length);

boton.addEventListener("click", function () {
  var visible = !lista.classList.toggle("oculto");
  boton.setAttribute("aria-expanded", String(visible));
  boton.textContent = visible ? "Ocultar habilidades" : "Mostrar habilidades";
});