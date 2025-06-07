// Log pour confirmer le chargement du script
console.log("Page 'À Propos' chargée et interactive.");

// S'assure que le DOM est entièrement chargé avant d'exécuter le code
document.addEventListener("DOMContentLoaded", () => {

    // Logique du menu burger pour la navigation responsive
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            burger.classList.toggle("toggle");
        });
    }
});
