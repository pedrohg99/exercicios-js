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

const calcularFrete = (distancia) => {
    if (distancia <= 5) {
        return 5;
    } else if (distancia <= 20) {
        return distancia * 0.50;
    } else {
        return 20;
    }
}
console.log(calcularFrete (35));



function processarPedido(nome, tipoCliente, callback) {
    console.log(`Processando pedido de ${nome}...`);
    callback(nome, tipoCliente);
}
 
function mensagemPersonalizada(nome, tipo) {
    if (tipo === "vip") {
        console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`);
    } else if (tipo === "novo") {
        console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`);
    } else {
        console.log(`Obrigado pela sua compra, ${nome}!`);
    }
}

processarPedido("Lucas", "vip", mensagemPersonalizada);


function responderUsuario(nomeUser, callbackUser) {
    console.log(`Processando sua pergunta...`);
    setTimeout(() => callbackUser(nomeUser), 3000);
}
function mostrarResposta (nomeUser){
    console.log(`Olá, ${nomeUser}! Aqui está a resposta para sua dúvida.`)
}

responderUsuario("Camila", mostrarResposta);