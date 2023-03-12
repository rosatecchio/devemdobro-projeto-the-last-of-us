
// - passo 1: dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// - passo 2: dar um jeito de identificar o clique do ususário no botão
/*para não ter que colocar um id em cada botão e fazer vários códigos repetidos para cada botão, vamos fazer um laço de repetiçao usando o forEach (para cada). O "() => {}" significa uma função */
botoesCarrossel.forEach((botao, indice) => {
    //o indice é o i para numerarmos as imagens
    botao.addEventListener('click', () => {
        // - passo 3: desmarcar o botão selecionado anteriormente
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        /*o classList vai listar todas as classes presentes naquele elemento, que no caso são 'botao' e 'selecionado'*/

        // - passo 4: marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado');

        // - passo 5: esconder a imagem de fundo
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        // - passo 6: fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
    })
})