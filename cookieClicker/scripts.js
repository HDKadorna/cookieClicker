//todas las constantes de los cliqueables
const variable = document.getElementById("contador");
const var_aristoteles = document.getElementById("aristoteles");
const var_precio_aristoteles = document.getElementById("aristoteles-price");
const var_diogenes = document.getElementById("diogenes");
const var_precio_diogenes = document.getElementById("diogenes-price");
const var_aleman = document.getElementById("aleman");
const var_precio_aleman = document.getElementById("aleman-price");

//todas las variables que se transforman en cliqueables
var galleta = 0;
var precioAristoteles = 5;
var cantAristoteles = 0;
var precioDiogenes = 15;
var cantDiogenes = 0;
var precioAleman = 30;
var cantAleman = 0;

//primera conversion
variable.value = galleta;
var_aristoteles.value = cantAristoteles;
var_precio_aristoteles.value = precioAristoteles;
var_diogenes.value = cantDiogenes;
var_precio_diogenes.value = precioDiogenes;
var_aleman.value = cantAleman;
var_precio_aleman.value = precioAleman;

// esta funcion se ejecutara cada 1000 milisegundos
setInterval(() => {
    variable.value = galleta;
    galleta += (cantAristoteles * 1) + (cantDiogenes * 5) + (cantAleman * 10);//sumara al total de las galletas esta cantidad
}, 1000);

function clickeando() {//funcion del click
    galleta += 1;
    variable.value = galleta;
}

function arist() {//cada aristoteles que compres se almacena, sube su precio y te produce nivel filosofico
    if (galleta >= precioAristoteles) {
        cantAristoteles += 1;
        galleta -= precioAristoteles;
        precioAristoteles = Math.trunc(precioAristoteles *= 1.3);
    } else {
        alert("Cantidad insuficiente")
    }
    variable.value = galleta;
    var_aristoteles.value = cantAristoteles;
    var_precio_aristoteles.value = precioAristoteles;
}

function diog() {//cada diogenes que compres se almacena, sube su precio y te produce nivel filosofico
    if (galleta >= precioDiogenes) {
        cantDiogenes += 1;
        galleta -= precioDiogenes;
        precioDiogenes = Math.trunc(precioDiogenes *= 1.3);
    } else {
        alert("Cantidad insuficiente")
    }
    variable.value = galleta;
    var_diogenes.value = cantDiogenes;
    var_precio_diogenes.value = precioDiogenes;
}

function niet() {//cada nietzsche que compres se almacena, sube su precio y te produce nivel filosofico
    if (galleta >= precioAleman) {
        cantAleman += 1;
        galleta -= precioAleman;
        precioAleman = Math.trunc(precioAleman *= 1.3);
    } else {
        alert("Cantidad insuficiente")
    }
    variable.value = galleta;
    var_aleman.value = cantAleman;
    var_precio_aleman.value = precioAleman;
}