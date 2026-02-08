const idade = 20
const maiorDeIdade = idade >= 18
const possuiCNH = false

//ela tem que possuir carteira. Verificar se é uma coisa (maior de idade) e outra (se tem CNH)
const podeDirigir = maiorDeIdade && possuiCNH // AND

console.log('Pode dirigir? ', podeDirigir)

const podeViajarSozinha = maiorDeIdade || possuiCNH // OR

console.log('Pode viajar sozinha? ', podeViajarSozinha)


const precisaDeAcompanhante = !maiorDeIdade //NOT

console.log('Precisa de acompanhante? ', precisaDeAcompanhante)
