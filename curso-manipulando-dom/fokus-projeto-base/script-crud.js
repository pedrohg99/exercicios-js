const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
let tarefaSelecionada = null
let liTarefaSelecionada = null //cria a constante com o mesmo objetivo da tarefa selecionada
const ulTarefas = document.querySelector('.app__section-task-list')
const btnCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description')
const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas')

function atualizarTarefas () {
    localStorage.setItem('tarefas', JSON.stringify(tarefas)) // cria função para armazenamento na localStorage
}

function criarElementoTarefa (tarefa) {
    const li = document.createElement('li') // cria o <li> baseado na referencia do html apresentado em tarefa.html.
    li.classList.add('app__section-task-list-item') // adiciona uma classe css ao <li>
    const svg = document.createElement('svg') // cria o SVG que esta na referencia html, em tarefa.html
    svg.innerHTML = // cria elemento SVG utilizando o innerHTML
    `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
                <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `
    const paragrafo = document.createElement('p') // cria elemento P (parágrafo)
    paragrafo.classList.add('app__section-task-list-item-description') // adiciona uma classe css ao <p>
    paragrafo.textContent = tarefa.descricao // paragrafo receberá o que for digitado no formulário, objeto guardado em tarefa.
    const botao = document.createElement('button') // cria botão
    botao.classList.add('app_button-edit')

    botao.onclick = () => {// cria ação ao botão Editar.
        const novaDescricao = prompt('Qual é o novo nome da tarefa?') // cria uma constante para guardar o retorno do que será digitado no prompt e configura mensagem que aparecerá no prompt
        if (novaDescricao){ // condicional para impedir criação de tarefa vazia
            paragrafo.textContent = novaDescricao // sobrescreve o conteúdo inserido via tarefa.descricao no parágrafo e substitui pelo conteúdo inserido em novaDescricao
            tarefa.descricao = novaDescricao
            atualizarTarefas() // chama função de armazenamento localSotrage para que seja aplicada a alteração da tarefa também.
        }
    }

    const imagemBotao = document.createElement('img') // puxa a imagem do botão
    imagemBotao.setAttribute('src', 'imagens/edit.png') // aplica a imagem do botão no atributo src

    botao.append(imagemBotao) //append encaixa elemento imagem no botão
    li.append(svg) //append encaixa elemento criado em SVG na lista
    li.append(paragrafo)//append encaixa elemento criado em parágrafo na lista
    li.append(botao)//append encaixa elemento criado em botão na lista

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete') // adicione a classe css para ficar verde o botão
        botao.setAttribute('disabled', 'disabled') // desabilite o botão editar.         
    } else {
        li.onclick = () => { //cria efeito onclick substituindo o textcontent pela tarefa criada
            document.querySelectorAll('.app__section-task-list-item-active') // busca todos os elementos com a classe css 
                .forEach(elemento => { //percorre todos os elementos encontrados e 
                    elemento.classList.remove('app__section-task-list-item-active')//PARA CADA elemento ele remove a classe CSS indicada entre ()
                })
            if (tarefaSelecionada == tarefa){ // se no clique, a tarefa selecionada for igual a tarefa clicada
                paragrafoDescricaoTarefa.textContent = ''// primeiro: retire-a da lista onde ela aparece (textContent) vazio
                tarefaSelecionada = null // bordas do efeito focus será nulo, ou seja, removido.
                liTarefaSelecionada = null
                return // pare de executar o if
            }
            tarefaSelecionada = tarefa
            liTarefaSelecionada = li
            paragrafoDescricaoTarefa.textContent = tarefa.descricao//cria efeito onclick substituindo o textcontent pela tarefa criada
    
            li.classList.add('app__section-task-list-item-active') // adiciona a classe CSS active ao clicar na tarefa.
        }
    }

    return li
}

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const tarefa = { //guarda a tarefa cadastrada
        descricao: textarea.value // cria um objeto com o valor da tarefa
    }
    tarefas.push(tarefa) // joga os valores do array para dentro da const tarefa
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa) // append para o elementoTarefa (tarefa criada) apareça na lista.
    atualizarTarefas() // guarda a lista inteira de tarefas via função criada.
    textarea.value = '' // value para que ao adicionar a tarefa, o formulário seja limpo.
    formAdicionarTarefa.classList.add('hidden') // adiciona a classe hidden para esconder formulário novamente após adicionar nova tarefa.

})

tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});

const limparFormulario = () => {
    textarea.value = '';  // Limpe o conteúdo do textarea
    formularioTarefa.classList.add('hidden');  // Adicione a classe 'hidden' ao formulário para escondê-lo
}
btnCancelar.addEventListener('click', limparFormulario);

document.addEventListener('FocoFinalizado', () => { // puxa o aviso inserido em script.js
    if (tarefaSelecionada && liTarefaSelecionada) { // se tarefa selecionada e a lista da tarefa selecionada estiver finalizado
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active') //remova a classe css que permite o foco deselecionando
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete') // adicione a classe css para ficar verde o botão
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled') // desabilite o botão editar.
        tarefaSelecionada.completa = true
        atualizarTarefas()
    }
})

btnRemoverConcluidas.onclick = () => { // cria função onclick para a opção remover tarefas concluidas
    const seletor = ".app__section-task-list-item-complete" // puxa a classe CSS para identificar as tarefas concluídas da lista
    document.querySelectorAll(seletor).forEach(elemento =>{ // chama todas as tarefas definidas na constante seletor e percorre via foreach todas elas para aplicar a função de remover elemento.
        elemento.remove()
    })
    tarefas = tarefas.filter(tarefa => !tarefa.completa) // lista de tarefas recebe lista de tarefas filtrada por por tarefa de tarefa completa
    atualizarTarefas() // atualiza localStoarage
}


