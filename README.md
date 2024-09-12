# AtividadePWEB_AcessoAPIs
Atividade de sala dia 06-09-2024 e Atividade para casa dia 12-09-2024

# Nome da Dupla
* ANDRÉ FILIPE GOMES ROCHA (afgr1@aluno.ifal.edu.br)
* IAN TORREZ GONZALES (ijtg1@aluno.ifal.edu.br)

# Galeria de Imagens da NASA com API

Este projeto é uma galeria de imagens da NASA que utiliza a API de Imagens da NASA para exibir fotos aleatórias relacionadas a diferentes termos de busca. A galeria é atualizada dinamicamente e inclui um botão de "Refresh" para atualizar as imagens a qualquer momento. O projeto também inclui um spinner de carregamento que é exibido enquanto as imagens estão sendo carregadas.

## Índice

- [Descrição](#descrição)
- [Recursos Principais](#recursos-principais)
- [API de Imagens da NASA](#api-de-imagens-da-nasa)
- [Como Configurar o Projeto](#como-configurar-o-projeto)
- [Como Usar](#como-usar)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Licença](#licença)

## Descrição

A aplicação web exibe imagens da NASA usando sua API de busca de imagens. Cada imagem é carregada de forma assíncrona e o usuário pode atualizar as imagens a qualquer momento clicando no botão "Atualizar Imagens". Um spinner de carregamento é exibido enquanto as imagens estão sendo carregadas.

## Recursos Principais

- **Imagens Dinâmicas**: As imagens são carregadas dinamicamente da API de Imagens da NASA.
- **Carregamento Assíncrono**: As imagens são carregadas de forma assíncrona, permitindo que a página continue responsiva.
- **Spinner de Carregamento**: Um spinner é exibido enquanto cada imagem está sendo carregada.
- **Botão de Refresh**: Um botão de "Atualizar Imagens" permite que o usuário recarregue todas as imagens na página.

## API de Imagens da NASA

A API de Imagens da NASA é um serviço gratuito que permite pesquisar e recuperar imagens, vídeos e áudios de diversos eventos e missões da NASA. A API é pública e não requer autenticação.

### Pontos Principais da API

- **Endpoint Principal**: `https://images-api.nasa.gov/search`
- **Parâmetros de Consulta Importantes**:
  - `q`: Termo de pesquisa para encontrar imagens relacionadas. Exemplo: `q=planets`.
  - `media_type`: Tipo de mídia a ser retornada. Para imagens, use `media_type=image`.
- **Resposta da API**: A resposta é em JSON e contém informações como título, descrição, URL da imagem e outros metadados.
- **Exemplo de URL de Requisição**:
https://images-api.nasa.gov/search?q=planets&media_type=image