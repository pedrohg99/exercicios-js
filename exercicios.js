// Verificação de maioridade
console.log('Verificação de maioridade')

const idade = 17
const maiorDeIdade = idade >= 18

console.log('Sua idade é: ', idade)
console.log('Você é maior de idade? ', maiorDeIdade)

// Calculadora de média e aprovação
const notaUmAluno = 7.5
const notaDoisAluno = 3.5
const media = (notaUmAluno + notaDoisAluno) / 2
let aprovacao = media >= 7

console.log('Sua nota na atividade de matemática foi: ', notaUmAluno)
console.log('Sua nota na prova de Matemática foi: ', notaDoisAluno)
console.log('Portanto sua média foi de ', media)
console.log('Voce está aprovado? ', aprovacao)

// Simulação de troco
const valorCompra = 35.90
const valorPago = 50
const troco = valorPago - valorCompra
const validacao = valorCompra < valorPago

console.log('O valor da sua compra foi de: R$', valorCompra)
console.log('o valor pago foi de: R$', valorPago)
console.log('Troco a pagar', troco)
console.log('Precisa de Troco?', validacao)

//Controle de Faltas
const totalAulas = 30
const faltas = 8
const limite = totalAulas * 0.25
const validacaoFaltas = faltas < limite

console.log('Uma escola tem uma quantia de aulas de', totalAulas)
console.log('O aluno faltou em', faltas)
console.log('Sabendo que 25% é o limite de faltas, o aluno está aprovado?', validacaoFaltas)

// Verificação de Login
const temLogin = false
const temSenha = false
const temAcesso = temLogin && temSenha

console.log('Tem acesso ao conteúdo? ', temAcesso)

// Valor negado
const disponivel = true
const estaDisponivel = !disponivel

console.log('Está offline? ', disponivel)
console.log('Está disponível para conversar? ', estaDisponivel)

//Condições Compostas
const numeroUm = 2
const numeroDois = 81
//const par = numeroUm % 2 || numeroDois % 2
const validacaoPar = numeroUm % 2 === 0 && numeroDois % 2 === 0
//const validacaoPar = par == 0

console.log('O número um é: ', numeroUm)
console.log('O número dois é: ', numeroDois)
console.log('Ambos são par? ', validacaoPar)