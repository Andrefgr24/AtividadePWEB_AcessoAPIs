function addSpinner(card) {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    card.appendChild(spinner);
    return spinner;
}

function removeSpinner(spinner) {
    spinner.remove();
}

async function fetchDataAndUpdateCard(query, sectionId) {
    const card = document.getElementById(sectionId);
    const imageElement = card.querySelector('.card-image');
    const titleElement = card.querySelector('.card-title');

    const spinner = addSpinner(card);

    try {
        // Fazendo a requisição para a API da NASA
        const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`);
        
        // Verificando se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error(`Erro ao buscar dados da NASA: ${response.statusText}`);
        }

        const data = await response.json();

        const items = data.collection.items;
        if (items.length === 0) {
            throw new Error('Nenhuma imagem encontrada para o termo de busca fornecido.');
        }

        const randomIndex = Math.floor(Math.random() * items.length);
        const imageUrl = items[randomIndex].links[0].href;
        const imageTitle = items[randomIndex].data[0].title;

        // Atualizando o conteúdo do card com a imagem e o título
        imageElement.src = imageUrl;
        imageElement.alt = imageTitle;
        titleElement.textContent = imageTitle;

        imageElement.onload = () => {
            imageElement.style.display = 'block'; 
            removeSpinner(spinner); 
        };

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        titleElement.textContent = 'Erro ao carregar imagem';
        removeSpinner(spinner); // Remover o spinner em caso de erro também
    }
}

// Termos de busca para imagens diferentes
const queries = ['planets', 'stars', 'galaxies', 'moon'];

// Função para atualizar todas as imagens
function refreshImages() {
    fetchDataAndUpdateCard(queries[0], 'section1');
    fetchDataAndUpdateCard(queries[1], 'section2');
    fetchDataAndUpdateCard(queries[2], 'section3');
    fetchDataAndUpdateCard(queries[3], 'section4');
}

// Evento de clique para o botão de Refresh
document.getElementById('refreshButton').addEventListener('click', refreshImages);

// Atualiza as imagens ao carregar a página
refreshImages();
