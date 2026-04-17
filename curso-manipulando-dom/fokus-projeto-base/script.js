const html = document.querySelector('html') // relaciona a tag HTML do .html para alterar o contexto
const focoBt = document.querySelector('.app__card-button--foco') // relaciona as classes dos botões para inserir o evento dos clicks
const curtoBt = document.querySelector('.app__card-button--curto') // relaciona as classes dos botões para inserir o evento dos clicks
const longoBt = document.querySelector('.app__card-button--longo')// relaciona as classes dos botões para inserir o evento dos clicks
const banner = document.querySelector('.app__image')// relaciona a classe da imagem para alterar com o evento click
const titulo = document.querySelector('.app__title')// relaciona a classe do título para alterar com o evento click
const botoes = document.querySelectorAll('.app__card-button') // pega todos os elementos que estão com a classe app__card-button
const sartPauseBt = document.querySelector('#start-pause')
const musicaFocoInput = document.querySelector('#alternar-musica') // pega o ID do botão que ativa a musica
const musica = new Audio('sons/luna-rise-part-one.mp3') // adiciona ao JS o arquivo de audio com new Audio
const musicaPlay = new Audio('sons/play.wav')
const musicaPausa = new Audio('sons/pause.mp3')
const audioTempoFinalizado = new Audio('sons/beep.mp3')

let tempoDecorridoEmSegundos = 5 //let inicia o temporizador em 5 segundos
let intervaloId = null // let inicia o temporizador

musica.loop = true;



musicaFocoInput.addEventListener('change', () => {//pega a const musicaFocoInput, passa o parâmetro 'change' para o método addEventListener, para alterar a propriedade do elemento e adiciona uma condicionante 
    if(musica.paused){ // se musica estiver com a propriedade paused pode dar play, pois só pode dar play se estiver pausada.
        musica.play() // dá play na musica
    } else { // se não
        musica.pause() // musica para
    }
})

focoBt.addEventListener('click', () => { //cria evento click (efeito ao clicar no botao) inserindo a função alterarContexto para fazer o efeito de alterar cor de fundo e imagem.
    alterarContexto('foco')
    focoBt.classList.add('active')//classList.add adiciona classe. Ou seja, ao clicar no botão, ele adiciona a classe 'active' do CSS, para que o botão herde a classe e fique visualmente selecionado.
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto){// seleciona a variavel botoes (criada para puxar a classe dos botões). Utiliza o forEach para percorrer todos os botões e alterar cada um criando a função contexto.
        contexto.classList.remove('active')// remove o estilo active de acordo com o contexto (clique).
    })
    html.setAttribute('data-contexto', contexto) // pega o HTML, o atributo 'data-contexto' e muda o contexto
    banner.setAttribute('src', `imagens/${contexto}.png`) // pega o banner (imagem) e muda o contexto (altera imagem ao clicar nos botoes). Pelo fato de contexto ser um elemento JS, é necessário inserir como string concatenada, pois imagens/... é um atributo HTML.
    switch (contexto) {// pega o parametro contexto (que é responsável por fazer o efeito de alterar)
        case 'foco': // é o primeiro contexto, do botão "Foco" do HTML.
            titulo.innerHTML = `Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>` // pega o atributo titulo e usa um método para acessar o HTML e realizar alterações. Nesse caso, alteramos o texto com suas tags e classes. innerHTML é bom quando quer alterar algo do HTML
            break;// para o efeito.
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case 'descanso-longo':
            titulo.innerHTML = `Hora de voltar à superfície<br><strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default: // caso não encontre nenhum desses valores, ele para o código e não altera nada.
            break;
    }
}

const contagemRegressiva = () => { // configura o temporizador para que seja decrementado sempre 1 segundo
    if(tempoDecorridoEmSegundos <= 0){
        audioTempoFinalizado.play()
        alert('Tempo finalizado!')
        zerar() // chama função para para a execução do código
        return
    }
    tempoDecorridoEmSegundos -= 1
    console.log('Temporizador: ' + tempoDecorridoEmSegundos)
}

sartPauseBt.addEventListener('click', iniciarOuPausar) // cria evento de click para inicar o temporizador.

function iniciarOuPausar() {// inicia o temporizador criando o intervalo de 1s para cada decremento.
    if(intervaloId){// se intervaloId for clicado, para o temporizador chamando a função zerar().
        musicaPausa.play();
        zerar()
        return
    }
    musicaPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerar(){//função criada para finalizar a execução do código
    clearInterval(intervaloId)//metodo clearInterval para de executar o intervaloId
    intervaloId = null //retorna null para parar a execução da contagem
}


