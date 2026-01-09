const btnMobile = document.getElementById('btn-mobile');
const navMenu = document.getElementById('nav-menu');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    
    // Verifica se os elementos existem antes de tentar mudar as classes
    if (navMenu && btnMobile) {
        navMenu.classList.toggle('active');
        btnMobile.classList.toggle('active');
    }
}

// Verifica se o botão existe na página antes de adicionar o "ouvinte"
if (btnMobile) {
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
}

