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
    ,
    {
        name: "Olho magico para porta",
        service: "Instalação",
        image: "https://blogdocftv.com/wp-content/uploads/2020/02/olho-magico-para-portas.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Gabinete de banheiro",
        service: "Instalação",
        image: "https://images-americanas.b2w.io/produtos/7490453704/imagens/balcao-gabinete-banheiro-milao-com-cuba-100-mdf-60cm/7490453707_1_large.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Espelho",
        service: "Instalação",
        image: "https://m.media-amazon.com/images/I/81ZZzEontiL._AC_SX679_.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Faixa anti derrapante",
        service: "Instalação",
        image: "https://down-br.img.susercontent.com/file/3a5e0169160356e1069c99be9b02d3b5",
        link: "https://google.com"
    }
    ,
    {
        name: "Chuveiro eletrico plastico comum",
        service: "Instalação, troca",
        image: "https://amoedo.vtexassets.com/arquivos/ids/164525-1200-1600?v=638209825055330000&width=1200&height=1600&aspect=true",
        link: "https://google.com"
    }
    ,
    {
        name: "Chuveiro tipo ducha",
        service: "Instalação, troca",
        image: "https://s2-casaejardim.glbimg.com/9r_tjChWaFFj3diV4ONsEUjoIOI=/0x0:888x666/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2024/R/n/To1jbAT0K3tVHA6sBLeA/chuveiro-com-ducha-lorenzetti-acqua-duo-127v-5500w-preto-fosco-7510144-a.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Chuveiro Turbo",
        service: "Instalação, troca",
        image: "https://images.tcdn.com.br/img/img_prod/763413/chuveiro_eletrico_lorenzetti_duo_shower_turbo_multetemperatura_branco_7500w_220v_5973_1_20200429140556.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Acessórios para cozinha",
        service: "Instalação, troca",
        image: "https://blog.thony.com.br/wp-content/uploads/2015/05/acessorios-para-cozinha.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Varal",
        service: "Instalação",
        image: "https://lojamor.vteximg.com.br/arquivos/ids/159683-1000-1000/006023-Varal-Sanfonado-120-1.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Puxador de porta",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/894333/kit_2_puxadores_de_porta_de_correr_classic_uniao_mundial_10_cm_cromado_587_1_75e16cfef6f13addd7ec67037ed4dbb3.png",
        link: "https://google.com"
    }
    ,
    {
        name: "Instalação de ar condicionado",
        service: "Instalação",
        image: "https://www.jefferson.ind.br/uploads/conteudo/conteudo/2017/07/xEWaP/22afb5e14d919910530ec775bdf697f8cd5238b273015b734cpimgpsh-fullsize-distr-D0pHbl_600x450.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Placa de sinalização de ambiente",
        service: "Instalação",
        image: "https://images.tcdn.com.br/img/img_prod/81/placa_de_sinalizacao_ambiente_monitorado_62805_1_1a6f436c5914faffcf438ed1fbe4e037.jpg",
        link: "https://google.com"
    }
    ,
    {
        name: "Movimentação de móveis",
        service: "Movimentação",
        image: "https://bravatransportesemudancas.com.br/wp-content/uploads/2023/08/empresa-de-icamento.webp",
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