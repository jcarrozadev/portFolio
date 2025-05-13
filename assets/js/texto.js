document.addEventListener("DOMContentLoaded", () => {
  const typewriter = document.getElementById("typewriter");
  const phrases = [
    "Full-Stack Developer",
    "Desarrollador Frontend",
    "Desarrollador Backend",
    "Apasionado del diseño web"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    const currentText = currentPhrase.slice(0, charIndex);

    typewriter.textContent = currentText;

    if (!isDeleting && charIndex < currentPhrase.length) {
      charIndex++;
      setTimeout(typeEffect, 120);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 60);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
      } else {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeEffect, 500);
      }
    }
  }

  typeEffect();
});