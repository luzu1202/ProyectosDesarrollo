$(function () {
  function cargarTareas() {
    const guardadas = localStorage.getItem("tareasJQ");
    return guardadas ? JSON.parse(guardadas) : [];
  }
  let tareas = cargarTareas();

  function guardarTareas() {
    localStorage.setItem("tareasJQ", JSON.stringify(tareas));
  }

  function renderizar() {
    $("#lista").empty();
    tareas.forEach(function (texto, indice) {
      const $li = $("<li>");
      const $span = $("<span>").text(texto);
      const $btn = $("<button>").text("Eliminar").attr("data-indice", indice);
      $li.append($span).append($btn);
      $("#lista").append($li);
    });
  }

  $("#agregar").on("click", function () {
    const texto = $("#tarea").val().trim();
    if (texto === "") {
      $("#mensaje").text("Escribe una tarea.").fadeIn(200);
      return;
    }
    $("#mensaje").fadeOut(200);
    tareas.push(texto);
    guardarTareas();
    renderizar();
    $("#tarea").val("");
  });

  $("#lista").on("click", "button", function () {
    const indice = $(this).attr("data-indice");
    tareas.splice(indice, 1);
    guardarTareas();
    renderizar();
  });

  renderizar();
});