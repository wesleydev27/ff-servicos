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
    },
    {
        name: "Persiana",
        service: "Instalação",
        image: "https://persianas2go.com.br/cdn/shop/files/Persiana-Double-Vision-Semi-Blackout-XL-Perola_d032abd2-aec2-43f7-b3a5-f5cd6587b04f.png",
        link: "https://google.com"
    }
    ,
    {
        name: "Protetor passaros telhado",
        service: "Instalação",
        image: "https://http2.mlstatic.com/D_NQ_NP_857629-MLB52182776350_102022-O.webp",
        link: "https://google.com"
    }
    ,
    {
        name: "Painel para tv",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/631328/painel_suspenso_para_tv_de_ate_55_lets_moveis_hb_5215_1_79039580b40be89d75b188d189a382a0.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Número de imovel",
        service: "Instalação",
        image: "https://acdn.mitiendanube.com/stores/002/823/094/products/placa-numero-de-casa-acrilico-41-acb139332adef42d1216812213129442-1024-1024.webp",
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
const displayProducts = (filteredProducts, query = '') => {
    productsContainer.innerHTML = ''; // Limpa o container antes de adicionar os produtos
    if (filteredProducts.length > 0) {
        filteredProducts.forEach((product, index) => {
            const card = document.createElement("div");
            card.className = "relative bg-cover bg-center p-4 shadow rounded text-center w-full flex justify-center items-center flex-col gap-1 before:absolute before:inset-0 before:bg-[var(--primary)] before:opacity-60 before:rounded p-8 transition-transform duration-300 hover:scale-105 cursor-pointer";
            card.style.backgroundImage = `url('${product.image}')`;
            card.setAttribute('data-index', index);

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

            // Se houver uma busca, destacamos o primeiro resultado e centralizamos
            if (query && index === 0) {
                setTimeout(() => {
                    highlightProduct(card);
                }, 300); // Tempo de espera curto para garantir que o elemento seja renderizado
            }
        });

        noResultsModal.classList.add('hidden'); // Esconde o modal de "Nenhum produto encontrado"
    } else {
        noResultsMessage.textContent = "Nenhum produto encontrado";
        noResultsModal.classList.remove('hidden'); // Exibe o modal de "Nenhum produto encontrado"
        searchModalOverlay.classList.add('hidden'); // Esconde o modal de busca ao mostrar o de "Nenhum produto encontrado"
        searchInput.value = ''; // Limpa o campo de busca
    }
};

// Destacar e centralizar um produto encontrado
const highlightProduct = (productElement) => {
    searchModalOverlay.classList.add('hidden'); // Fecha o modal de busca
    productElement.classList.add('border-4', 'border-yellow-500', 'animate-pulse'); // Adiciona borda e animação

    // Centraliza o produto na tela
    productElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    // Remove o destaque após 2 segundos
    setTimeout(() => {
        productElement.classList.remove('border-4', 'border-yellow-500', 'animate-pulse');
    }, 2000);
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
        displayProducts(filteredProducts, query);
    } else {
        // Se a busca tiver menos de 3 caracteres, exibe todos os produtos
        displayProducts(products);
    }
});

// Abrir o modal de busca
const openSearchModal = () => {
    searchModalOverlay.classList.remove('hidden');
    searchInput.value = ''; // Limpa o campo de busca ao abrir o modal
    searchInput.focus(); // Foca no input automaticamente
    displayProducts(products); // Exibe todos os produtos novamente ao abrir o modal
};

// Fechar o modal de busca
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
const searchButton = document.getElementById('open-search-button');
if (searchButton) {
    searchButton.addEventListener('click', openSearchModal);
} else {
    console.error("O botão de busca não foi encontrado no DOM.");
}