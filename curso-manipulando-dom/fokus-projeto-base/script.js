const html = document.querySelector('html') // relaciona a tag HTML do .html para alterar o contexto.
const focoBt = document.querySelector('.app__card-button--foco') // relaciona as classes dos botões para inserir o evento dos clicks
const curtoBt = document.querySelector('.app__card-button--curto') // relaciona as classes dos botões para inserir o evento dos clicks
const longoBt = document.querySelector('.app__card-button--longo')

focoBt.addEventListener('click', () => { //evento de click
    html.setAttribute('data-contexto', 'foco') // pega o atributo HTML, seta o atributo data-contexto, e altera a propriedade para as configurações do 'foco' que está no CSS.
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})

