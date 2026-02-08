let pessoa = {
    nome: 'Pedro',
    idade: 29,
    profissao: 'Dev Frontend'
}

// Spread - clona primeiro objeto
const pessoa2 = {...pessoa}
pessoa2.idade = 30

console.log(pessoa)
console.log(pessoa2)

pessoa = {
    ...pessoa2,
    profissao: 'Dev Fullstack',
    possuiCNH: true
}

console.log(pessoa)

// rest - separa propriedades
const {nome, ...resto} = pessoa
console.log(nome)
console.log(resto)