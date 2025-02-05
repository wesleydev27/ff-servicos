// ARRAY DE PRODUTOS
const products = [
    {
        name: "Assento para vaso sanitário",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_817625-MLU75151960170_032024-F.webp",
        link: "https://google.com"
    },
    {
        name: "Suporte de tv e tv até 50",
        service: "Instalação",
        image: "https://a-static.mlcdn.com.br/800x560/suporte-tv-50-58-60-65-70-75-polegadas-articulado-elg/amplinet/3657-1135/4af3dba0854d0d7e6172881f91c4f439.jpg",
        link: "https://google.com"
    },
    {
        name: "Tela de animais linear",
        service: "Instalação",
        image: "https://www.telasparana.com.br/img/produtos/b6d9ae10bb34f1dada8c694b8010d94f.jpg",
        link: "https://google.com"
    },
    {
        name: "Pega ladrão para porta",
        service: "Instalação",
        image: "https://cdn.leroymerlin.com.br/products/trinco_pega_ladrao_aco_niquelado_1_peca_90398546_f849_600x600.jpg",
        link: "https://google.com"
    }
];

// SELECIONANDO ELEMENTOS NO HTML
const productsContainer = document.getElementById("products-container");
const searchModalOverlay = document.getElementById('search-modal-overlay');
const searchForm = searchModalOverlay.querySelector('form');
const searchInput = searchForm.querySelector('input');
const noResultsModal = document.getElementById('no-results-modal');
const noResultsMessage = noResultsModal.querySelector('.message');
const closeNoResultsButton = noResultsModal.querySelector('.close-button');

// FUNÇÃO PARA EXIBIR TODOS OS PRODUTOS
const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = ''; // Limpa o container antes de adicionar os produtos
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const card = document.createElement("div");
            card.className = "relative bg-cover bg-center p-4 shadow rounded text-center w-full flex justify-center items-center flex-col gap-1 before:absolute before:inset-0 before:bg-[var(--primary)] before:opacity-60 before:rounded p-8 transition-transform duration-300 hover:scale-105 cursor-pointer";
            card.style.backgroundImage = `url('${product.image}')`;

            card.innerHTML = `
                <h3 class="relative text-sm font-semibold bg-[var(--secondary)] text-[var(--white)] p-2 rounded-xl opacity-90">
                    ${product.name}
                </h3>
                <p class="relative text-[var(--black)] text-sm font-bold">Serviço: ${product.service}</p>
                <a href="${product.link}" class="relative flex items-center mx-auto bg-[var(--green-whatsapp)] text-[var(--white)] px-10 py-2 rounded-md transition-all duration-300 font-medium">
                    Solicite agora
                </a>
            `;
            productsContainer.appendChild(card);
        });
        noResultsModal.classList.add('hidden'); // Esconde o modal de "Nenhum produto encontrado"
    } else {
        noResultsMessage.textContent = "Nenhum produto encontrado";
        noResultsModal.classList.remove('hidden'); // Exibe o modal de "Nenhum produto encontrado"
        searchModalOverlay.classList.add('hidden'); // Esconde o modal de busca ao mostrar o de "Nenhum produto encontrado"
        searchInput.value = ''; // Limpa o campo de busca
    }
};
// Exibe todos os produtos inicialmente
displayProducts(products);




// FILTRO DE BUSCA DE PRODUTOS
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();

    if (query.length >= 3) {
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query) || product.service.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts);
    } else {
        // Se a busca tiver menos de 3 caracteres, exibe todos os produtos
        displayProducts(products);
    }
});

// Seleciona o modal de busca e o botão de abrir
const openSearchModal = () => {
    searchModalOverlay.classList.remove('hidden');
};

const closeSearchModal = () => {
    searchModalOverlay.classList.add('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao fechar o modal
};

// Evento para fechar o modal de busca ao clicar fora
searchModalOverlay.addEventListener('click', (e) => {
    if (e.target === searchModalOverlay) {
        closeSearchModal();
    }
});

// Função para fechar o modal de "Nenhum produto encontrado"
const closeNoResultsModal = () => {
    noResultsModal.classList.add('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao fechar o modal de erro
    displayProducts(products); // Exibe todos os produtos novamente
};

// Evento de fechamento do modal de "Nenhum produto encontrado"
closeNoResultsButton.addEventListener('click', closeNoResultsModal);

// Para abrir o modal de busca (por exemplo, em um botão ou outra ação)
document.getElementById('open-search-button').addEventListener('click', openSearchModal);
