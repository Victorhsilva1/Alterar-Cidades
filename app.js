/*
* Descriçoes para meu melhor entendimento do projeto
* “use scrict” (para cobrança)
* const nao se muda no caso, constante sempre será o mesmo
* getElementById é para fazer a busca por uma id 
* a funçao .valeu.trim foi inserida para remover os espaços em branco desnecessários
* criei constantes para cada cidade com suas imagens estilizadas no css e a procura e também sua descriçao 
* 
*/

"use strict";

document.getElementById('trocar-imagem').addEventListener('click', function() {
    const cidade = document.getElementById('campo-pesquisa').value.trim();
    const imagem = document.getElementById('imagem');
    const descricao = document.getElementById('descricao');

    const cidades = {
        'san andreas': {
            src: 'img/Andreas.jpg',
            alt: 'San Andreas, Colômbia',
            descricao: 'San Andreas - Colômbia'
        },
        'berna': {
            src: 'img/berna.jpg',
            alt: 'Berna, Suíça',
            descricao: 'Berna - Suíça'
        },
        'forks': {
            src: 'img/forks.jpg',
            alt: 'Forks, Estados Unidos',
            descricao: 'Forks - Estados Unidos'
        },
        'warwick': {
            src: 'img/Warwick.jpg',
            alt: 'Warwick, Inglaterra',
            descricao: 'Warwick - Inglaterra'
        },
        'willemstad': {
            src: 'img/Willemstad.jpg',
            alt: 'Willemstad, Curaçao',
            descricao: 'Willemstad - Curaçao'
        }
    };


    // utilizei if e else para caso nao encontre a cidade procurada 
    // e inseri a descriçao cidade nao encontrada para caso nao seja possivel localizar
    if (cidades[cidade]) {
        imagem.src = cidades[cidade].src;
        imagem.alt = cidades[cidade].alt;
        descricao.textContent = cidades[cidade].descricao;
    } else {
        alert('Cidade não encontrada');
    }
});
