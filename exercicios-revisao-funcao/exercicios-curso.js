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
    console.log(`Olá, ${nomeUser}! Aqui está a resposta para sua dúvida.`);
}

responderUsuario("Camila", mostrarResposta);




function avaliarDesempenho(pontuacao, callback) {
    let status = ""; 
    if (pontuacao >= 70) {
        status = "aprovado";
    } else if (pontuacao >= 50) {
        status = "reforco";
    } else {
        status = "reprovado";
    }
    callback(pontuacao, status);
}
 
function gerarMensagem(pontuacao, status) {
    console.log(`Pontuação: ${pontuacao}`); 
    if (status === "aprovado") {
        console.log("Parabéns! Você foi aprovado!");
    } else if (status === "reforco") {
        console.log("Atenção! Você precisa de reforço.");
    } else {
        console.log("Infelizmente, você foi reprovado. Tente novamente.");
    }
} 
avaliarDesempenho(82, gerarMensagem);


function calcularConsumo (potencia, horasPorDia){
    return (potencia * horasPorDia * 30) / 1000;
}
function classificarConsumo (consumo){
    if (consumo < 50){
        return "Baixo consumo";
    }else if (consumo > 200){
        return "Consumo moderado";
    }else{
        return "Alto consumo!";
    }
}
function exibirResumo (nomeAparelho, consumo, classificacao){
    console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificada como ${classificacao} consumo`);
}

const nomeAparelho = "Geladeira";
const consumo = calcularConsumo(150, 4);
const classificacao = classificarConsumo(consumo);
exibirResumo (nomeAparelho, consumo, classificacao);


const sortearParticipante = (lista) => {
    const indice = Math.floor(Math.random() * lista.length);
    return lista[indice];
};
const avaliarPontuacao = (pontuacao) => {
    if (pontuacao > 80) {
        return "Parabéns, você foi premiado!";
    } else if (pontuacao >= 50) {
        return "Você quase conseguiu! Fique de olho nos próximos sorteios.";
    } else {
        return "Infelizmente, não foi dessa vez.";
    }
};
const exibirResultado = (participante) => {
    console.log("Sorteando...");
    setTimeout(() => {
        console.log(`Participante sorteado: ${participante.nome}`);
        console.log(`Pontuação: ${participante.pontuacao}`);
        console.log(avaliarPontuacao(participante.pontuacao));
    }, 2000);
};
function realizarSorteio(lista) {
    const sorteado = sortearParticipante(lista);
    exibirResultado(sorteado);
}
const participantes = [
    { nome: "Laura", pontuacao: 92 },
    { nome: "Pedro", pontuacao: 67 },
    { nome: "Clara", pontuacao: 44 }
];

realizarSorteio(participantes);


    