const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
const ulTarefas = document.querySelector('.app__section-task-list')

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
    const imagemBotao = document.createElement('img') // puxa a imagem do botão
    imagemBotao.setAttribute('src', 'imagens/edit.png') // aplica a imagem do botão no atributo src
    botao.append(imagemBotao) //append encaixa elemento imagem no botão
    li.append(svg) //append encaixa elemento criado em SVG na lista
    li.append(paragrafo)//append encaixa elemento criado em parágrafo na lista
    li.append(botao)//append encaixa elemento criado em botão na lista
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
    localStorage.setItem('tarefas', JSON.stringify(tarefas)) // guarda a lista inteira de tarefas. JSON.stringfy transforma o objeto em string, guardando o valor adicionado.
    textarea.value = '' // value para que ao adicionar a tarefa, o formulário seja limpo.
    formAdicionarTarefa.classList.add('hidden') // adiciona a classe hidden para esconder formulário novamente após adicionar nova tarefa.
    tarefas.value = ''
})

tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa)
    ulTarefas.append(elementoTarefa)
});


