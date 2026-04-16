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