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

const manutencao = {
  jan: 2,
  fev: 0,
  mar: 5,
  abr: 4,
  mai: 0,
  jun: 7
};

let totalDias = 0;
let mesesComParada = 0;

for (let mes in manutencao) {
  const dias = manutencao[mes];
  totalDias += dias;
  if (dias > 0) {
    mesesComParada++;
  }
}
console.log(`Total de dias parados: ${totalDias}`);
console.log(`Meses com manutenção registrada: ${mesesComParada}`);

if (totalDias > 20) {
  console.log("Status: Atenção! Acima do limite anual.");
} else {
  console.log("Status: Dentro do limite anual");
}



const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "João", progresso: 85 },
    { nome: "Ana", progresso: 40 },
    { nome: "Juliano", progresso: 72 },
    { nome: "Patrícia", progresso: 60 }
  ],

  gerarRelatorio: function () {
    let totalProgresso = 0;
    for (let estudante of this.estudantes) {
      const situacao = estudante.progresso >= 70 ? "Aprovado" : "Em andamento";
      console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso}% | Situação: ${situacao}`);
      totalProgresso += estudante.progresso;
    }

    const media = (totalProgresso / this.estudantes.length).toFixed(2);

    console.log(`\nTotal de estudantes: ${this.estudantes.length}`);
    console.log(`Média geral da turma: ${media}%`);
  }
};

curso.gerarRelatorio();

