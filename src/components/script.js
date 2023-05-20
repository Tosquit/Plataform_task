
var imagen = document.getElementById("imageChange");
var expanded = false;

imagen.onclick = function() {
    if (!expanded) {
        imagen.style.border = "0px solid rgb(255, 123, 0)";
        imagen.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0.2)";
        imagen.style.position = "fixed";
        imagen.style.top = "50%";
        imagen.style.left = "50%";
        imagen.style.transform = "translate(-50%, -50%)";
        imagen.style.width = "90%";
        imagen.style.height = "90%";
        imagen.style.objectFit = "contain";
        imagen.style.zIndex = "9999";
        expanded = true;
    } else {
        imagen.style.position = "";
        imagen.style.top = "";
        imagen.style.left = "";
        imagen.style.transform = "";
        imagen.style.width = "";
        imagen.style.height = "";
        imagen.style.objectFit = "";
        imagen.style.zIndex = "";
        imagen.style.border = "";
        expanded = false;
    }
}
