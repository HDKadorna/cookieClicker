//todas las constantes de los cliqueables
const variable = document.getElementById("contador");
const var_aristoteles = document.getElementById("aristoteles");
const var_precio_aristoteles = document.getElementById("aristoteles-price");
const var_diogenes = document.getElementById("diogenes");
const var_precio_diogenes = document.getElementById("diogenes-price");
const var_aleman = document.getElementById("aleman");
const var_precio_aleman = document.getElementById("aleman-price");
const total_ps = document.getElementById("total-cps");

//todas las variables que se transforman en cliqueables
var galleta = 0;
var galletaM = 0;
var precioAristoteles = 5;
var cantAristoteles = 0;
var precioDiogenes = 15;
var cantDiogenes = 0;
var precioAleman = 30;
var cantAleman = 0;
var galps = 0;

var ninverval = 1000;
var intervaMs = 10;

//primera conversion
variable.value = galleta;
var_aristoteles.value = cantAristoteles;
var_precio_aristoteles.value = precioAristoteles;
var_diogenes.value = cantDiogenes;
var_precio_diogenes.value = precioDiogenes;
var_aleman.value = cantAleman;
var_precio_aleman.value = precioAleman;
total_ps.value = galps;


// esta funcion se ejecutara cada 10 milisegundos

setInterval(() => {
    galleta = Math.trunc(galletaM);
    console.log(galletaM);   
    variable.value = galleta;
    galletaM += (cantAristoteles * intervaMs/ninverval) + (cantDiogenes * intervaMs/ninverval * 5) + (cantAleman * intervaMs/ninverval * 10); //sumara al total de las galletas esta cantidad
    galps = (cantAristoteles * 1) + (cantDiogenes * 5) + (cantAleman * 10);
    total_ps.value = galps;
}, intervaMs);

function clickeando() {//funcion del click
    galletaM += 1;
    variable.value = galleta;
}

function arist() {//cada aristoteles que compres se almacena, sube su precio y te produce nivel filosofico
    if (galletaM >= precioAristoteles) {
        cantAristoteles += 1;
        galletaM -= precioAristoteles;
        precioAristoteles = Math.trunc(precioAristoteles *= 1.3);
    } else {
        alert("Cantidad insuficiente")
    }
    variable.value = galletaM;
    var_aristoteles.value = cantAristoteles;
    var_precio_aristoteles.value = precioAristoteles;
}

function diog() {//cada diogenes que compres se almacena, sube su precio y te produce nivel filosofico
    if (galletaM >= precioDiogenes) {
        cantDiogenes += 1;
        galletaM -= precioDiogenes;
        precioDiogenes = Math.trunc(precioDiogenes *= 1.3);
    } else {
        alert("Cantidad insuficiente")
    }
    variable.value = galletaM;
    var_diogenes.value = cantDiogenes;
    var_precio_diogenes.value = precioDiogenes;
}

function niet() {//cada nietzsche que compres se almacena, sube su precio y te produce nivel filosofico
    if (galletaM >= precioAleman) {
        cantAleman += 1;
        galletaM -= precioAleman;
        precioAleman = Math.trunc(precioAleman *= 1.3);
    } else {
        alert("Cantidad insuficiente")
    }
    variable.value = galletaM;
    var_aleman.value = cantAleman;
    var_precio_aleman.value = precioAleman;
}

/*
Creditos a Diego Garcia Arroyo
por haberme ayudado un poco
en la optimizacion del codigo
*/ 