/**
 * ============================================================
 * Archivo      : js/script.js
 * Proyecto     : Mi Portafolio Personal
 * Autor        : Royman Camilo Erira Benavides
 * Descripción  : Lógica del cliente. Actualmente gestiona el
 *                cambio entre modo claro y oscuro mediante un
 *                botón en la barra de navegación.
 * Última mod.  : 2026-09-18
 * Dependencias : Ninguna (JS puro / Vanilla JS)
 * Uso          : Incluir al final del <body> en cada página:
 *                <script src="js/script.js"></script>
 * ============================================================
 */

/* ============================================================
   1. REFERENCIAS AL DOM
   ============================================================ */

/**
 * Botón que alterna entre modo claro y oscuro.
 * Se obtiene por su id "btn-modo" definido en el HTML.
 * @type {HTMLButtonElement|null}
 */
const btnModo = document.getElementById("btn-modo");

/* ============================================================
   2. CONSTANTES DE CONFIGURACIÓN
   ============================================================ */

/**
 * Nombre de la clase CSS que activa el tema oscuro.
 * Debe coincidir con la definida en css/estilos.css.
 * @constant {string}
 */
const CLASE_MODO_OSCURO = "modo-oscuro";

/**
 * Emoji mostrado cuando la página está en modo claro.
 * Indica la acción que realizará el botón al pulsarlo (activar oscuro).
 * @constant {string}
 */
const ICONO_LUNA = "🌙";

/**
 * Emoji mostrado cuando la página está en modo oscuro.
 * Indica la acción que realizará el botón al pulsarlo (activar claro).
 * @constant {string}
 */
const ICONO_SOL = "☀️";

/* ============================================================
   3. FUNCIONES
   ============================================================ */

/**
 * Actualiza el contenido (emoji) del botón de modo según el
 * estado actual del body.
 *
 * Si el body tiene la clase `modo-oscuro` muestra el sol (☀️);
 * en caso contrario muestra la luna (🌙).
 *
 * @returns {void}
 */
function actualizarIconoModo() {
  const estaOscuro = document.body.classList.contains(CLASE_MODO_OSCURO);
  btnModo.textContent = estaOscuro ? ICONO_SOL : ICONO_LUNA;
}

/**
 * Alterna el tema visual de la página entre claro y oscuro.
 *
 * Acciones:
 *  1. Añade o quita la clase `.modo-oscuro` del `<body>`.
 *  2. Actualiza el icono del botón (`#btn-modo`) acorde al nuevo estado.
 *
 * @returns {void}
 */
function alternarModoOscuro() {
  // Alterna la clase en el body (el CSS se encarga de los colores)
  document.body.classList.toggle(CLASE_MODO_OSCURO);

  // Refresca el emoji del botón para reflejar el nuevo estado
  actualizarIconoModo();
}

/* ============================================================
   4. INICIALIZACIÓN / EVENTOS
   ============================================================ */

// Guarda: solo registrar el listener si el botón existe en el DOM.
// (Evita errores si alguna página no incluye el botón.)
if (btnModo) {
  /**
   * Evento click sobre el botón de modo oscuro.
   * Dispara la alternancia de tema.
   */
  btnModo.addEventListener("click", alternarModoOscuro);
}