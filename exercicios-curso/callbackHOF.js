// HOF -> Higher-Order Function === função que recebe outra função como parâmetro

function calcular(numero1, numero2, operacao){
    return operacao(numero1, numero2)
}

function soma(num1, num2){
    return num1 + num2
}

function divisao(num1, num2){
    return num1 / num2
}

const resultadoSoma = calcular(3, 8, soma)
console.log('Resultado da Soma:', resultadoSoma)

const resultadoDivisao = calcular(32, 8, divisao)
console.log('Resultado da divisao:', resultadoDivisao)