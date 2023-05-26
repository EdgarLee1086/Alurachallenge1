function encriptar() {
    var frase = document.getElementById("textoIntroducido").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/mg, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/mg, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/mg, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/mg, "ober");
    var textoEncriptado = textoEncriptado.replace(/u/mg, "ufat");

    console.log (textoEncriptado)

    document.getElementById("textoSalida").innerHTML =  textoEncriptado;
    document.getElementById("botonCopiar").style.display ="show";
    document.getElementById("botonCopiar").style.display ="inherit";
    document.getElementById("textoSalida").style.display ="show";
    document.getElementById("textoSalida").style.display ="inherit";
    document.getElementById("desaparecer1").style.display ="none";
    document.getElementById("desaparecer2").style.display ="none";
    document.getElementById("desaparecer3").style.display ="none";
  

}

function desencriptar() {
    var frase = document.getElementById("textoIntroducido").value.toLowerCase();

    var textoDesencriptado = frase.replace(/enter/img, "e");
    var textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    var textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    var textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    var textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");

    console.log (textoDesencriptado)

    document.getElementById("textoSalida").innerHTML = textoDesencriptado;
    document.getElementById("botonCopiar").style.display ="show";
    document.getElementById("botonCopiar").style.display ="inherit";
    document.getElementById("textoSalida").style.display ="show";
    document.getElementById("textoSalida").style.display ="inherit";
    document.getElementById("desaparecer1").style.display ="none";
    document.getElementById("desaparecer2").style.display ="none";
    document.getElementById("desaparecer3").style.display ="none";
}

function copiar () {

    var textoCopiado = document.querySelector("#textoSalida");
    textoCopiado.select();
    document.execCommand("copy");
}