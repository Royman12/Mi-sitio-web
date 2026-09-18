const btnModo = document.getElementById("btn-modo");

btnModo.addEventListener("click", function () {
  
  document.body.classList.toggle("modo-oscuro");

  
  if (document.body.classList.contains("modo-oscuro")) {
    btnModo.textContent = "☀️";
  } else {
    btnModo.textContent = "🌙";
  }
});