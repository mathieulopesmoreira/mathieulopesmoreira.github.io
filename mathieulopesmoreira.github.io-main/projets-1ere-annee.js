document.addEventListener('DOMContentLoaded', () => {
    // --- Gestion des modales ---
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const overlay = document.getElementById('overlay');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalTarget;
            // Vérification si modalId commence par '#' pour compatibilité, sinon l'ajouter.
            const modalSelector = modalId.startsWith('#') ? modalId : '#' + modalId;
            const modal = document.querySelector(modalSelector);
            if (modal) {
                openModal(modal);
            } else {
                console.error("Modal not found for target:", modalId);
            }
        });
    });

    if (overlay) {
        overlay.addEventListener('click', () => {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        });
    }

    const closeModalButtons = document.querySelectorAll('.modal .close-button');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    function openModal(modal) {
        if (modal == null) return;
        modal.classList.add('active');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (modal == null) return;
        modal.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const activeModal = document.querySelector('.modal.active');
            if (activeModal) {
                closeModal(activeModal);
            }
        }
    });

    // --- Animation d'apparition au scroll ---
    // Cible les sections et les cartes de projet pour l'animation.
    // Ton styles.css définit l'animation pour `section.appear`.
    // Ton projets-1ere-annee.css définit l'animation pour `.project-card.appear`.
    const elementsToAppear = document.querySelectorAll('section, .project-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 10% de l'élément visible pour sections, peut être ajusté pour cartes
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observerInstance.unobserve(entry.target); // Arrête d'observer une fois visible
            }
        });
    }, observerOptions);

    elementsToAppear.forEach(el => {
        observer.observe(el);
    });

    // La gestion du menu burger et des menus déroulants est assurée par ton script.js global.
});
