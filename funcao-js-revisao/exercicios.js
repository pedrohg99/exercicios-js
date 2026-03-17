// FUNCTION

// elevar um número x a uma potência y

function calculaPotencia(num, pow) {
    let resultado = 1;
    for (let i = 0; i < pow; i++) {
        resultado = resultado * num;
    }
    return resultado;
};

console.log(calculaPotencia(4, 5));


//criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! nultiplicação de n por seu antecessores maiores ou iguais a 1 
// ex: 5! = 5 x 4 x 3 x 2 x 1
const fatorial = function f(num){
    if (num === 0 || num === 1) return 1;
    return num * f(num - 1);
}
console.log(fatorial(5));


// criar uma função para calcular juros compostos 
// função deve receber os valores no formato inteiro: valor, % de juros e tempo 
// fórmula: valor * (juro elevado a tempo)



//CALLBACKS

// criar uma função que faça operações matemáticas entre 2 valores (soma e multiplicação) 
// função deve receber por parâmetro: operação desejada, valor1 e valor2

const operacaoMatematica = (operacao, valor1, valor2) => {
    if (operacao === 'soma') {
        return valor1 + valor2;       
    } if (operacao === 'multiplicacao') {
        return valor1 * valor2;       
    }
    return 'Operação inválida';
}
console.log(operacaoMatematica('multiplicacao', 2, 3));


// criar uma função que emita uma mensagem caso o usuário 
// x não esteja interagindo com o sistema após uma quantidade y de tempo
