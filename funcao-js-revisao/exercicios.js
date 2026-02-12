// FUNCTION

// elevar um número x a uma potência y

function calculaPotencia (num, pow) {
    let resultado = 1;
    for (let i = 0; i < pow; i++) {
        resultado = resultado * num;
    }
    return resultado;
};

console.log (calculaPotencia(4, 3));
console.log (calculaPotencia(4, 3));
console.log (calculaPotencia(5, 5));
console.log (calculaPotencia(5, 5));

//criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! nultiplicação de n por seu antecessores maiores ou iguais a 1 
// ex: 5! = 5 x 4 x 3 x 2 x 1

const fatorial = function f(num) {
    if (num === 0 || num === 1) return 1;
    return num * f(num -1);
}
console.log (fatorial(5));