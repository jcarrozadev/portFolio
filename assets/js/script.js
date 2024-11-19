const toggleButton = document.getElementById("theme-toggle");
const rootElement = document.documentElement;

toggleButton.addEventListener("click", () => {
    const isDarkMode = rootElement.classList.toggle("dark-mode");
});


// Si deseas animar con JS puedes agregarlo aquí
document.querySelectorAll('.proyecto-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});
