// Fecha y hora de fin del temporizador
const finTemporizador = new Date('2024-09-17T00:00:00');
let pestañaAbierta = false;


document.addEventListener('DOMContentLoaded', function() {
// Elementos HTML necesarios
const temporizadorElement = document.getElementById('temporizador');
const pantallaFinElement = document.getElementById('pantalla-fin');
const contraElement = document.getElementById('contrasenia');

const acertijoElements = document.querySelectorAll('.acertijo > div');

// Función para actualizar el temporizador
function actualizarTemporizador() {
  const ahora = new Date();
  const diferencia = finTemporizador - ahora;

  // Calcula los días, horas, minutos y segundos restantes
  const diasRestantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horasRestantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutosRestantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundosRestantes = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Formatea la cadena de texto para mostrar el temporizador
  const textoTemporizador = `${diasRestantes} días, ${horasRestantes} horas, ${minutosRestantes} minutos y ${segundosRestantes} segundos`;
  // Actualiza el texto del elemento HTML
  temporizadorElement.innerText = textoTemporizador;


  // Verifica si el temporizador ha terminado
  if (diferencia <= 0) {
    // Oculta el elemento del temporizador
    temporizadorElement.style.display = 'none';

    // Muestra la pantalla de fin
    pantallaFinElement.style.display = 'block';
    contraElement.style.display='block';
    // Abre una nueva pestaña
    // Abre una nueva pestaña solo si no se ha abierto antes

 
  }
}

  // Función para mostrar los acertijos
  function mostrarAcertijo() {
    let indiceAcertijo = 0;

    function mostrarSiguienteAcertijo() {
      if (indiceAcertijo < acertijoElements.length) {
        acertijoElements[indiceAcertijo].style.display = 'block';
        setTimeout(() => {
          acertijoElements[indiceAcertijo].style.display = 'none';
          indiceAcertijo++;
          if (indiceAcertijo === acertijoElements.length) {
            indiceAcertijo = 0; // Vuelve a mostrar el primer acertijo
          }
          mostrarSiguienteAcertijo();
        }, 10000);
      }
    }

    mostrarSiguienteAcertijo();
  }

// Inicia el temporizador
setInterval(actualizarTemporizador, 1000);
mostrarAcertijo();

//Funcion del boton

});

function btnaccept() {
    const contra = document.getElementById('pass');
    if (contra.value === '170921') {
      window.location.href = 'carta.html'; // Reemplaza con la URL deseada
    }else{
      alert("Contraseña incorrecta")
      contra.value="";
    }
    // Cierra la pestaña actual
    window.close();
  
}