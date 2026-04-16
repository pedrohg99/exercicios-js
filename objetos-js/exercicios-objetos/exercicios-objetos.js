const produto = {
    nome: 'Fone de Ouvido',
    preco: '149.9',
    disponivel: true,
};
console.log(produto);

const configuracoes = {
    tema: 'escuro',
    notificacoes: '',
    idioma: 'pt-BR',
};
console.log("Tema: ", configuracoes.tema);
console.log("Idioma: ", configuracoes['idioma']);

const receita = {
    nome: 'Bolo de Fubá com Milho',
    ingredientes: ['leite', 'ovo', 'farinha de trigo', 'fubá', 'milho'],
    tempoPreparo: '1h45min',
}

console.log("Ingrediente complementar: ", receita.ingredientes[2]);

const carro = {
  marca: 'Toyota',
  modelo: 'Corolla',
  ano: 2022,
  modeloAntigo: 'Corolla XEi'
};
delete carro.modeloAntigo;
console.log(carro);

const dispositivos = [
    {
        nome: 'Impressora',
        status: 'ativo',
    },
    {
        nome: 'Scanner',
        status: 'inativo',
    },
    {
        nome: 'Projetor',
        status: 'ativo',
    },
];
for (const dispositivo of dispositivos) {
    console.log(`Dispositivo: ${dispositivo.nome} | Status ${dispositivo.status}`);
}

const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
  exibirStatus: function (){
    if (this.funcionando){
        console.log(`A máquina ${maquina.nome} está em funcionamento`);
    } else {
        console.log(`A máquina ${maquina.nome} está parada`);
    }
}
};
maquina.exibirStatus();


const dados = [
    ['nome', 'João'],
    ['idade', 30],
    ['cidade', 'Curitiba']
]

function montarObjeto(dado){
    const resultado = {};
    for (const [chave, valor] of dado) {
        resultado[chave] = valor;
    }
    return resultado;
}

console.log(montarObjeto(dados));

// MEU EXERCICIO
const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

console.log("Categorias avaliadas: ", Object.keys(relatorio));
console.log("Valores Registrados: ", Object.values(relatorio));
console.log("Detalhamento:");

for (const [chave, valor] of Object.entries(relatorio)){
    if (valor > 50){
        console.log (`${chave}: Alerta!`);
    } else {
        console.log (`${chave}: Ok!`);
    }
}

// GABARITO
const relatorio = {
  temperatura: 75,
  vibracao: 40,
  pressao: 55,
  nivelRuido: 30
};

const categorias = Object.keys(relatorio);
const valores = Object.values(relatorio);
const entradas = Object.entries(relatorio);

console.log("Categorias avaliadas:", categorias);
console.log("Valores registrados:", valores);

console.log("\nDetalhamento:");
for (let [chave, valor] of entradas) {
  const status = valor > 50 ? "alerta" : "ok";
  console.log(`${chave}: ${valor} (${status})`);
}



