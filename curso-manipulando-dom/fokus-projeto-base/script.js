const html = document.querySelector('html') // relaciona a tag HTML do .html para alterar o contexto.
const focoBt = document.querySelector('.app__card-button--foco') // relaciona as classes dos botões para inserir o evento dos clicks
const curtoBt = document.querySelector('.app__card-button--curto') // relaciona as classes dos botões para inserir o evento dos clicks
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `imagens/${contexto}.png`)
}
