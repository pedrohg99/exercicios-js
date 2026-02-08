const agora = new Date()

console.log(agora)

console.log('Ano:', agora.getFullYear())
console.log('Mês 0-11: ', agora.getMonth())
console.log('Dia do mês: ', agora.getDate())

const nascimento = new Date(1996, 4, 1)
console.log('Data formato (BR): ', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formato (US): ', nascimento.toLocaleDateString('en-US'))