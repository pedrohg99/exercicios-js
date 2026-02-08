//function saudacao(nome) { // nome é um parâmetro da função saudação (definição da função)
// console.log('Olá,', nome)
//}

const saudacao = (nome) => {
    console.log('Vida longa e próspera.', nome)
}

saudacao('Pedro') // Argumento (executa função)

//function calcularDobro(numero){
//    return numero * 2
//}

const calcularDobro = (numero) => {
    return numero * 2
}
const numeroDobrado = calcularDobro(4)
console.log('O dobro de 4 é:', numeroDobrado)