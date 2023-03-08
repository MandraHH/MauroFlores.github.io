// evento click//


let botonvolver;
botonvolver = document.getElementById("botonvolver");
botonvolver.addEventListener("click", () => {
  window.history.back();
});

// Obtener los elementos del DOM
const resumen = document.getElementById("resumen");
const exp = document.getElementById("exp");

// Agregar un evento de clic al elemento "resumen"
resumen.addEventListener("click", function() {
  // Verificar si el elemento "exp" está oculto
  if (exp.style.display === "none") {
    // Mostrar el elemento "exp"
    exp.style.display = "block";
  } else {
    // Ocultar el elemento "exp"
    exp.style.display = "none";
  }
});