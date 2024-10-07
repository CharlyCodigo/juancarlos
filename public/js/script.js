const body = document.getElementsByTagName("body");
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const contenido = document.getElementById("contenido");
const confirmacion = document.getElementById("confirmacion");
const msgenviado = document.getElementById("msgenviado");
const icon = document.getElementById("icon");
const listMenu = document.getElementById("list-menu");
const menuInicio = document.getElementById("menu-inicio");
const menuSobremi = document.getElementById("menu-sobremi");
const menuSkills = document.getElementById("menu-skills");
const menuMitrabajo = document.getElementById("menu-mitrabajo");
const menuContacto = document.getElementById("menu-contacto");
const buttonSubmit = document.getElementById("boton");
const formulario = document.getElementById("formulario");

icon.setAttribute("style", "font-size:30px;");
let visible = false;
listMenu.setAttribute("style", "display:none;");

function clickIcon() {
  if (visible === false) {
    console.log(visible);
    visible = true;
    listMenu.setAttribute("style", "display:inherit; padding:20px");
  } else {
    listMenu.setAttribute("style", "display:none;");
    visible = false;
  }
}
function clickMenuSection() {
  listMenu.setAttribute("style", "display:none;");
  visible = false;
}

icon.addEventListener("click", () => clickIcon());
menuInicio.addEventListener("click", () => clickMenuSection());
menuSobremi.addEventListener("click", () => clickMenuSection());
menuSkills.addEventListener("click", () => clickMenuSection());
menuMitrabajo.addEventListener("click", () => clickMenuSection());
menuContacto.addEventListener("click", () => clickMenuSection());

window.onbeforeunload = limpiarFormulario;
