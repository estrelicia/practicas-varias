//Importante! Para que funcione jsPDF hay que poner esta linea al inicio del script
// https://github.com/parallax/jsPDF/issues/3079
window.jsPDF = window.jspdf.jsPDF

var paso = 0;
var cursos, nombre, apellido, correo, telefono;
mostrarPaso(paso);

function mostrarPaso(n) {
  // Esta función muestra el div correspondiente al paso en curso y oculta los demás.
  // Para eso se crea un array con los divs de los pasos.
  let x = document.getElementsByClassName("pasos");
  x[n].style.display = "block";

  // Si el paso es 0, se oculta el botón de "Anterior" y se muestra el de "Siguiente".
  if (n == 0) {
    document.getElementById("anterior").style.display = "none";
  } else {
    document.getElementById("anterior").style.display = "inline";
  }
  // Si el paso es el último, se cambia el texto del botón "Siguiente" por "Enviar".
  if (n == (x.length - 1)) {
    document.getElementById("siguiente").innerHTML = "Enviar";
  } else {
    document.getElementById("siguiente").innerHTML = "Siguiente";
  }
}

function navegador(n) {
  // Esta funcion permite recorrer los divs/ pasos del formulario.
  // Se crea un array igual que en la función anterior.
  // El evento onclick del html suma o resta 1 al paso actual.
  let x = document.getElementsByClassName("pasos");
  validarFormulario();
  x[paso].style.display = "none";
  paso = paso + n;
  // Verifica que es el ultimo paso y envia el formulario.
  if (paso >= x.length) {
    document.getElementById("formulario").onclick = enviarDatos();
    return false;
  }
  mostrarPaso(paso);
}

function validarFormulario() {
  console.log("Validar Formulario");
}

function enviarDatos() {
  const boton = document.createElement("button");
  boton.textContent = "Enviar PDF";
  // agrega al boton la clase botonPDF con classList.add
  boton.classList.add("botonPDF");
 
  cursos = document.querySelector("input[type='radio']:checked").value;
  nombre = document.querySelector("#nombre").value;
  apellido = document.querySelector("#apellido").value;
  correo = document.querySelector("#correo").value;
  telefono = document.querySelector("#telefono").value;

  document.getElementById("formulario").innerHTML = "<h2>Hemos recibido tu registro correctamente</h2>" + "<strong>Quiero estudiar " + cursos + "</strong><br>Mi nombre es " + nombre + " " + apellido + "<strong><br><br>Datos de Contacto</strong>" + "<br>Correo electrónico: " + correo + "<br>Teléfono: " + telefono;

  // agrega el boton al formulario con appendChild
  document.getElementById("formulario").appendChild(boton);
  boton.addEventListener("click", enviarPDF);
}

function enviarPDF() {
  const doc = new jsPDF();
  doc.setFontSize(22);
  doc.text("Te adjuntamos la constancia de inscripción",20,20);
  doc.setFontSize(16);
  doc.text("Elegiste el curso de: " + cursos ,20,40);
  doc.text("Tus datos son: " + nombre + " " + apellido,20,50);
  doc.text("Información de Contacto",20,60);
  doc.text("Correo electrónico: " + correo, 20, 70);
  doc.text("Teléfono: " + telefono, 20, 80);
  doc.save("ConstanciaInscripcion.pdf");
}