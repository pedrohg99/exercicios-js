const idadeVinny = 36
const minhaIdade = 30

//comparador de igualdade
//const comparacao = idadeVinny == minhaIdade

//maior que
//const comparacao = idadeVinny > minhaIdade

//menor que
//const comparacao = idadeVinny < minhaIdade

//maior ou igual que
const comparacao = idadeVinny < minhaIdade

console.log('São iguais: ', comparacao)

const idade = 29
const idadeIrmao = 18

const souMaiorDeIdade = idade >= 18
const irmaoMaiorDeIdade = idadeIrmao >= 18

console.log('Sou maior de idade? ', souMaiorDeIdade)
console.log('Meu irmao é maior de idade? ', irmaoMaiorDeIdade)

// comparação estrita - não quero que o JS faça a conversão de string para numero
//const comparacaoEscrita = minhaIdade === idadeVinny


const comparacaoEscrita = minhaIdade !== idadeVinny
console.log('São estritamente iguais? ', comparacaoEscrita)