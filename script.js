document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const navOverlay = document.getElementById("navOverlay");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        navOverlay.classList.toggle("active");
    });

    navOverlay.addEventListener("click", () => {
        navLinks.classList.remove("active");
        navOverlay.classList.remove("active");
    });
});
