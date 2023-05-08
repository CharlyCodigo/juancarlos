const icon = document.getElementById("icon");
const listMenu = document.getElementById("list-menu");
const menuInicio = document.getElementById("menu-inicio");
const menuSobremi = document.getElementById("menu-sobremi");
const menuSkills = document.getElementById("menu-skills");
const menuMitrabajo = document.getElementById("menu-mitrabajo");
const menuContacto = document.getElementById("menu-contacto");

let visible = false;
listMenu.setAttribute("style","display:none;");

function clickIcon() {
    if(visible === false) {
        visible = true;
        listMenu.setAttribute("style","display:inherit;"); 
    } else {
        listMenu.setAttribute("style","display:none;");
        visible = false;
    }
}
function clickMenuSection() {
    console.log("entro");
    listMenu.setAttribute("style","display:none;");
    visible = false;
}


icon.addEventListener("click",  () => clickIcon());
menuInicio.addEventListener("click",  () => clickMenuSection());
menuSobremi.addEventListener("click",  () => clickMenuSection());
menuSkills.addEventListener("click",  () => clickMenuSection());
menuMitrabajo.addEventListener("click",  () => clickMenuSection());
menuContacto.addEventListener("click",  () => clickMenuSection());

