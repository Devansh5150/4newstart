document.addEventListener('DOMContentLoaded', () => {
    const windows = document.querySelectorAll('.window');

    // Optional: scale container on resize to keep it responsive
    const container = document.getElementById('house-container');
    function resize() {
        const scale = Math.min(
            window.innerWidth / 1536,
            window.innerHeight / 1024
        );
        container.style.transform = `scale(${scale})`;
    }

    window.addEventListener('resize', resize);
    resize();

    // Add click events to toggle the "open" class for 3D animations
    windows.forEach(win => {
        win.addEventListener('click', () => {
            win.classList.toggle('open');
        });
    });
});