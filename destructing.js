const pessoa = {
    nome: 'Pedro',
    idade: 29,
    profissao: 'Frontend Developer'
}

const { nome, idade } = pessoa

console.log(nome)
console.log(idade)

function saudacao({ nome }){
    console.log('Olá,',nome)
}

saudacao(pessoa)