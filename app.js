window.addEventListener('DOMContentLoaded', () => {
    const airPlane = document.querySelector('.light-aircraft');

    let isDragging = false;
    let startX, startY;

    let currentX = 0;
    let currentY = 0;

    // Eventos para dispositivos táctiles
    airPlane.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    });

    airPlane.addEventListener("touchmove", (e) => {
        if (!isDragging) return;

        const deltaX = e.touches[0].clientX - startX;
        const deltaY = e.touches[0].clientY - startY;

        currentX -= deltaY * 0.8;
        currentY += deltaX * 0.8;

        airPlane.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;

        e.preventDefault(); // Evita el scroll por defecto en dispositivos táctiles
    });

    airPlane.addEventListener("touchend", () => {
        isDragging = false;
    });

    airPlane.addEventListener("touchcancel", () => {
        isDragging = false;
    });

    // Eventos para mouse
    airPlane.addEventListener("mousedown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;

        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;

        currentX -= deltaY * 0.8;
        currentY += deltaX * 0.8;

        airPlane.style.transform = `rotateX(${currentX}deg) rotateY(${currentY}deg)`;

        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });

    document.addEventListener("mouseleave", () => {
        isDragging = false;
    });
});
