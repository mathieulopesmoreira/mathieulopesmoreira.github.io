// Log pour confirmer le chargement du script
console.log("Page bilan-3eme-annee.js chargée.");

// --- Logique du menu burger (copiée pour la cohérence) ---
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    if (burger && navLinks) {
        burger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            burger.classList.toggle("toggle");
        });
    }
});
// --- NOUVELLE ANIMATION DE PROGRESSION ---
function animateTyping() {
    const title = document.querySelector('.content-container h1');

    if (!title) {
        return;
    }

    const text = title.textContent;
    let index = 0;

    title.textContent = '';
    title.classList.add('typing-effect');

    const typeLetter = () => {
        if (index < text.length) {
            title.textContent += text.charAt(index);
            index++;
            setTimeout(typeLetter, 150);
        }
    };

    typeLetter();
}

animateTyping(); // Appel de la fonction d'animation
