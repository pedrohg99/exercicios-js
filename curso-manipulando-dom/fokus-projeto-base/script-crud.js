const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formAdicionarTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')
const tarefas = []

btnAdicionarTarefa.addEventListener('click', () => {
    formAdicionarTarefa.classList.toggle('hidden')
})

formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const tarefa = { //guarda a tarefa cadastrada
        descricao: textarea.value // cria um objeto com o valor da tarefa
    }
    tarefas.push(tarefa) // joga os valores do array para dentro da const tarefa
    localStorage.setItem('tarefas', JSON.stringify(tarefas)) // guarda a lista inteira de tarefas. JSON.stringfy transforma o objeto em string, guardando o valor adicionado.
<<<<<<< HEAD
})
=======
})

>>>>>>> 3ca961a281932dbc8a6b584077647a27aedd2ab5
