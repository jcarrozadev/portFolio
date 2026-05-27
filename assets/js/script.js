document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".project-carousel");

    carousels.forEach((carousel) => {
        const images = carousel.querySelectorAll("img");
        const prevBtn = carousel.querySelector(".carousel-btn.prev");
        const nextBtn = carousel.querySelector(".carousel-btn.next");

        if (images.length <= 1) return;

        let currentIndex = 0;
        let interval = null;
        const intervalTime = Number(carousel.dataset.interval) || 3000;

        images.forEach((img, index) => {
            img.classList.toggle("active", index === 0);
        });

        function showImage(index) {
            images[currentIndex].classList.remove("active");
            currentIndex = (index + images.length) % images.length;
            images[currentIndex].classList.add("active");
        }

        function nextImage() {
            showImage(currentIndex + 1);
        }

        function prevImage() {
            showImage(currentIndex - 1);
        }

        function startAutoplay() {
            stopAutoplay();
            interval = setInterval(nextImage, intervalTime);
        }

        function stopAutoplay() {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                nextImage();
                startAutoplay();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                prevImage();
                startAutoplay();
            });
        }

        carousel.addEventListener("mouseenter", stopAutoplay);
        carousel.addEventListener("mouseleave", startAutoplay);

        startAutoplay();
    });
});