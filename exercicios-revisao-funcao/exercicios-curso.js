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