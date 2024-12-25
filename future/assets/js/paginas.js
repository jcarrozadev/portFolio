
const navItems = document.querySelectorAll('.nav-item');

const contentSections = document.querySelectorAll('.content-section');

navItems.forEach(navItem => {
  navItem.addEventListener('click', (event) => {
    event.preventDefault(); 

    contentSections.forEach(section => {
      section.classList.remove('active');
    });

    const targetSectionId = navItem.textContent.toLowerCase(); 

    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});