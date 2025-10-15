// Obtém o ícone de menu e a lista de links
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

// Função para alternar a visibilidade do menu
function toggleMenu() {
    menuList.classList.toggle('is-open');
}

// Adiciona um evento de clique no ícone de menu
menuIcon.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    toggleMenu();
});

// Obtém todos os links internos do menu
const linksInternos = document.querySelectorAll('.menu-list a[href^="#"]');

// Adiciona um evento de clique para cada link do menu
linksInternos.forEach(link => {
    link.addEventListener('click', (event) => {
        // Rola a página para a seção
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        
        // Esconde o menu depois de clicar em um link
        menuList.classList.remove('is-open');
    });
});
    




 
