function saudacao(nome = "") {
    if (nome){
        console.log(`Olá, ${nome}! Boas vindas!`);
    } else {
        console.log("Olá! Boas vindas!");
    }
}

saudacao("Lucas");

function calcularDesconto(preco, desconto = 10){
    const valorFinal = preco - (preco * desconto / 100);
    return valorFinal;
}

console.log(calcularDesconto(100, 20));
console.log(calcularDesconto(100));


const calcularMedia = (nota1, nota2) => (nota1 + nota2) / 2;
console.log(calcularMedia(7, 9));


const verificarParidade = (numero) => 
    numero % 2 === 0 ? "Par" : "Ímpar";
console.log(verificarParidade(5));

const calcularFrete (distancia) => {
    if (distancia <= 5) {
        return 5;
    } else if (distancia <= 20) {
        return distancia * 0.50;
    } else {
        return 20;
    }
}
console.log(calcularFrete (35));