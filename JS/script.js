document.addEventListener('DOMContentLoaded', function() {
    const menu = document.getElementById('menu');
    const closeButton = document.getElementById('close');
    const menuIcon = document.getElementById('menu-icon');

    menuIcon.addEventListener('click', function() {
        menu.classList.remove('hidden'); // Affiche le menu
    });

    closeButton.addEventListener('click', function() {
        menu.classList.add('hidden'); // Cache le menu
        menu.classList.remove('fixed', 'top-0', 'right-0', 'w-auto'); // retire les classes de fixation
        menu.classList.add('fixed', 'w-auto', 'top-0', 'right-0'); // remet les classes de positionnement initial
        closeButton.style.display = 'block'; // affiche le bouton close
    });
});

        