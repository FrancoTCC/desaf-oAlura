function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; 
    return regex.test(texto);
}

function mostrarAdvertencia(mensaje) {
    const aviso = document.getElementById("aviso");
    aviso.innerHTML = `<div class="exclamation">!</div> <p>${mensaje}</p>`;
    aviso.style.display = "flex";
}

function ocultarAdvertencia() {
    const aviso = document.getElementById("aviso");
    aviso.style.display = "none";
}

function encriptar() {
    var texto = document.getElementById("area-texto").value.toLowerCase().trim();

    if (texto === "") {
        mostrarAdvertencia("El campo de texto no puede estar vacío.");
        document.getElementById("resultado").value = "";
        document.getElementById("copiar").style.display = "none";
        mostrarMensaje(false); // Mostrar mensaje sin encriptar
        return;
    }

    if (!validarTexto(texto)) {
        mostrarAdvertencia("Por favor, ingrese solo letras minúsculas y sin acentos.");
        document.getElementById("resultado").value = "";
        document.getElementById("copiar").style.display = "none";
        mostrarMensaje(false); // Mostrar mensaje sin encriptar
        return;
    }

    ocultarAdvertencia();

    var textoCifrado = texto
        .replace(/e/igm, "enter")
        .replace(/o/igm, "ober")
        .replace(/i/igm, "imes")
        .replace(/a/igm, "ai")
        .replace(/u/igm, "ufat");

    document.getElementById("resultado").value = textoCifrado;
    mostrarMensaje(true); // Mostrar mensaje encriptado
}

// Función para desencriptar texto
function desencriptar() {
    var texto = document.getElementById("area-texto").value.toLowerCase().trim();

    if (texto === "") {
        mostrarAdvertencia("El campo de texto no puede estar vacío.");
        document.getElementById("resultado").value = "";
        document.getElementById("copiar").style.display = "none";
        mostrarMensaje(false); // Mostrar mensaje sin encriptar
        return;
    }

    if (!validarTexto(texto)) {
        mostrarAdvertencia("Por favor, ingrese solo letras minúsculas y sin acentos.");
        document.getElementById("resultado").value = "";
        document.getElementById("copiar").style.display = "none";
        mostrarMensaje(false); // Mostrar mensaje sin encriptar
        return;
    }

    ocultarAdvertencia();

    var textoCifrado = texto
        .replace(/enter/igm, "e")
        .replace(/ober/igm, "o")
        .replace(/imes/igm, "i")
        .replace(/ai/igm, "a")
        .replace(/ufat/igm, "u");

    document.getElementById("resultado").value = textoCifrado;
    mostrarMensaje(true); // Mostrar mensaje encriptado
}

// Función para copiar texto al portapapeles
function copy() {
    var contenido = document.querySelector("#resultado");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}


function mostrarMensaje(mensajeEncriptado) {
    const mensajeSinEncriptar = document.getElementById("mensaje-sin-encriptar");
    const mensajeEncriptadoDiv = document.getElementById("mensaje-encriptado");

    if (mensajeEncriptado) {
        mensajeSinEncriptar.style.display = "none";
        mensajeEncriptadoDiv.style.display = "block";
    } else {
        mensajeEncriptadoDiv.style.display = "none";
        mensajeSinEncriptar.style.display = "block";
    }
}


window.onload = function() {
    mostrarMensaje(false); 
};
