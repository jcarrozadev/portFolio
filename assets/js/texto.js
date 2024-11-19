const typewriter = document.getElementById("typewriter");
const nameToType = "Javier Arias Carroza"; 
let index = 0;
let isDeleting = false;

function typeEffect() {
  const delay = isDeleting ? 100 : 200; // Velocidad de borrado y escritura

  if (!isDeleting && index < nameToType.length) {
    // Escribiendo
    typewriter.textContent = nameToType.slice(0, index + 1);
    index++;
  } else if (isDeleting && index > 0) {
    // Borrando
    typewriter.textContent = nameToType.slice(0, index - 1);
    index--;
  } else if (!isDeleting && index === nameToType.length) {
    // Pausa antes de borrar
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && index === 0) {
    // Pausa antes de escribir nuevamente
    isDeleting = false;
    setTimeout(typeEffect, 500);
    return;
  }

  setTimeout(typeEffect, delay);
}

// Inicia el efecto
typeEffect();
