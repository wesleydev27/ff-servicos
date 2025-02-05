//MENU MOBILE
let btnMob = document.querySelector('#menu-button');
let menu = document.querySelector('#menu');

btnMob.addEventListener('click', () => {
    menu.classList.toggle('show');
});


// SCRIPT VOLTA PARA O TOPO - Usando `defer` e melhorias de performance
const backToTopBtn = document.getElementById('back-to-top-btn');
let ticking = false;

function checkScroll() {
    if (!ticking) {
        requestAnimationFrame(() => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPosition = window.pageYOffset;

            // Controle de opacidade do botão
            backToTopBtn.classList.toggle('opacity-0', scrollPosition <= totalHeight / 2);
            backToTopBtn.classList.toggle('opacity-100', scrollPosition > totalHeight / 2);

            ticking = false;
        });
        ticking = true;
    }
}

// Função para voltar ao topo da página com animação suave
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Adiciona o evento de scroll para controlar a visibilidade do botão
window.addEventListener('scroll', checkScroll, { passive: true });
// Adiciona o evento de clique para voltar ao topo
backToTopBtn.addEventListener('click', scrollToTop);
















