document.addEventListener("DOMContentLoaded", () => {
    // Gestion du menu burger
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");

    // Lorsque l'icône burger est cliquée
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        burger.classList.toggle("toggle");
    });

    // Fermer le menu burger lorsqu'on clique sur un autre lien, mais ne pas le fermer si on clique sur Projets ou Bilan
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            // Si on clique sur "Projets" ou "Bilan", ne pas fermer le menu burger
            if (link.closest('.dropdown')) {
                e.stopPropagation(); // Empêche la propagation du clic pour ne pas fermer le menu burger
            } else {
                navLinks.classList.remove("active");
                burger.classList.remove("toggle");
            }
        });
    });

    // Gestion des menus déroulants (Projets et Bilan)
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggleMenu = dropdown.querySelector('a'); // Sélectionner le lien "Projets" ou "Bilan"
        
        toggleMenu.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche la redirection vers "#"
            dropdown.classList.toggle('open'); // Ouvre ou ferme le menu déroulant
        });
    });

    // Fermer les menus déroulants si on clique ailleurs sur la page
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('open'); // Ferme les menus déroulants si on clique ailleurs
            });
        }
    });
});
