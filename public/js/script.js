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
const formulario =  document.getElementById("formulario");

let visitas = 0;
confirmacion.setAttribute("style","display:none;")
function submit() {
    
    if(nombre.value === "" || telefono.value === "" || email.value === "" || asunto.value === "" || contenido.value === ""){
        nombre.value ==="" ? nombre.setAttribute('style', 'border-color:red;') : nombre.setAttribute('style', 'border-color:white;');
        telefono.value == "" ? telefono.setAttribute('style', 'border-color:red;') : telefono.setAttribute('style', 'border-color:white;');
        email.value === "" ? email.setAttribute('style', 'border-color:red;') : email.setAttribute('style', 'border-color:white;');
        asunto.value === "" ? asunto.setAttribute('style', 'border-color:red;') : asunto.setAttribute('style', 'border-color:white;');
        contenido.value === "" ? contenido.setAttribute('style', 'border-color:red;') : contenido.setAttribute('style', 'border-color:white;');
        confirmacion.setAttribute("style","display:inherit;")
    }else {
        formulario.setAttribute("onsubmit","return true");
        formulario.submit()
    }
}

function nombreMargin() {
    nombre.setAttribute('style', 'border-color:white;');
    confirmacion.setAttribute('style','display:none;');
}
function telefonoMargin() {
    telefono.setAttribute('style', 'border-color:white;')
    confirmacion.setAttribute('style','display:none;');
}
function emailMargin() {
    email.setAttribute('style', 'border-color:white;')
    confirmacion.setAttribute('style','display:none;');
}
function asuntoMargin() {
    asunto.setAttribute('style', 'border-color:white;')
    confirmacion.setAttribute('style','display:none;');
}
function contenidoMargin() {
    contenido.setAttribute('style', 'border-color:white;')
    confirmacion.setAttribute('style','display:none;');
}
buttonSubmit.addEventListener('click',()=>submit());
nombre.addEventListener('change', () => nombreMargin());
telefono.addEventListener('change', () => telefonoMargin());
email.addEventListener('change', () => emailMargin());
asunto.addEventListener('change', () => asuntoMargin());
contenido.addEventListener('change', () => contenidoMargin());

icon.setAttribute("style", "font-size:30px;")
let visible = false;
listMenu.setAttribute("style","display:none;");

function limpiarFormulario() {
    nombre.value="";
    telefono.value="";
    email.value="";
    asunto.value="";
    contenido.value="";
    const text = "Mensaje Enviado";
    msgenviado.setAttribute("style","color:white; font-size:20px;")
    msgenviado.append(text);
    
}

function clickIcon() {
    if(visible === false) {
        visible = true;
        listMenu.setAttribute("style","display:inherit; padding:20px"); 
    } else {
        listMenu.setAttribute("style","display:none;");
        visible = false;
    }
}
function clickMenuSection() {
    listMenu.setAttribute("style","display:none;");
    visible = false;
}


icon.addEventListener("click",  () => clickIcon());
menuInicio.addEventListener("click",  () => clickMenuSection());
menuSobremi.addEventListener("click",  () => clickMenuSection());
menuSkills.addEventListener("click",  () => clickMenuSection());
menuMitrabajo.addEventListener("click",  () => clickMenuSection());
menuContacto.addEventListener("click",  () => clickMenuSection());

window.onbeforeunload = limpiarFormulario;

