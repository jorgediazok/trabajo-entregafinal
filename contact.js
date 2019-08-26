var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var pais = document.getElementById("pais");
var correo = document.getElementById("email");
var album = document.getElementById("album");

function validarDatos() {
  nombre.addEventListener("input", corroborarNombre);
  apellido.addEventListener("input", corroborarApellido);
  pais.addEventListener("input", corroborarPais);
  correo.addEventListener("input", corroborarMail);
  album.addEventListener("select", corroborarAlbum);

  corroborarNombre();
  corroborarApellido();
  corroborarPais();
  corroborarMail();
  corroborarAlbum();
}

function corroborarNombre() {
  if (nombre.value == "") {
    nombre.setCustomValidity("Por favor completa tu nombre");
  } else {
    nombre.setCustomValidity("");
  }
}

function corroborarApellido() {
  if (apellido.value == "") {
    apellido.setCustomValidity("Por favor completa tu apellido");
  } else {
    apellido.setCustomValidity("");
  }
}

function corroborarPais() {
  if (pais.value == "") {
    pais.setCustomValidity("Por favor ingresá tu país");
  } else {
    pais.setCustomValidity("");
  }
}

function corroborarMail() {
  if (correo.value == "") {
    correo.setCustomValidity("Por favor ingresá tu mail");
  } else {
    correo.setCustomValidity("");
  }
}

function corroborarAlbum() {
  if (album.value == "") {
    album.setCustomValidity("Elegi un album por favor");
  } else {
    album.setCustomValidity("");
  }
}

window.addEventListener("load", validarDatos, false);
