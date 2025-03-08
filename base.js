// Função para abrir ou fechar o submenu
function toggleSubBotoes(id) {
    // Seleciona todos os submenus
    var allSubmenus = document.querySelectorAll(".subBtn");

    // Fecha todos os submenus antes de abrir o submenu atual
    allSubmenus.forEach(function(submenu) {
        submenu.classList.remove("active"); // Remove a classe active de todos
    });

    // Pega o submenu atual pelo ID
    
    var submenu = document.getElementById(id);

    // Verifica se o submenu está fechado
    if (!submenu.classList.contains("active")) {
        submenu.classList.add("active"); // Abre o submenu com animação
    } else {
        submenu.classList.remove("active"); // Fecha o submenu
    }
}

// NOVO JS - CHAT GPT //

// Função para fechar o submenu ao clicar no botão "X"
function closeSubMenu(id) {
    var submenu = document.getElementById(id);
    submenu.classList.remove("active"); // Fecha o submenu
}

// Fechar qualquer submenu ao clicar fora dele
window.onclick = function(event) {
    var submenus = document.querySelectorAll('.subBtn');
    var botoes = document.querySelectorAll('.btn');

    // Verifica se o clique foi fora de qualquer submenu ou botão
    submenus.forEach(function(submenu) {
        if (!submenu.contains(event.target) && !submenu.previousElementSibling.contains(event.target)) {
            submenu.classList.remove("active"); // Fecha o submenu
        }
    });
}

