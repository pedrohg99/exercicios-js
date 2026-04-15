const pessoa = {
    nome: 'Roberta r',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie',]
};

// imprima no terminal o nome da pessoa e um dos troféus.
console.log(pessoa.nome);
console.log(pessoa.trofeus[0]);

// exclua uma propriedade do objeto.
delete pessoa.cpf;
console.log(pessoa);

// criar uma função para alterar os troféus.
function exibeTrofeus(listaTrofeus) {
    for (const trofeu of listaTrofeus) {
        console.log(`tem o troféu ${trofeu}`);
    }
}
exibeTrofeus(pessoa.trofeus);

// adicione ao obj um método para calcular a idade da pessoa e retornar o valor no terminal como string.
const user = {
    nome: 'Roberta r',
    nascimento: '2020-01-01',
    cpf: '23445667889',
    pontuacao: 4576,
    trofeus: ['speedrunner', 'indie',]
};

// calcula a idade da pessoa para retornar o valor no terminal.
user.calculaIdade = function calculaIdade(){
    const anoNasc = parseInt(this.nascimento.slice(0, 4)); //extrai o ano de nascimento, selecionando somente o ano com slice. parseInt converte para string para number.
    const idade = new Date().getFullYear() - anoNasc; // idade recebe a data atual com new Date().getFullYear() e faz o calculo.
    console.log(`A idade é ${idade}`);
}
user.calculaIdade();

// acesse um array de objetos e imprima no terminal os nomes e status de ativação de cada pessoa.
const clientes = [
    {
        nome: 'Marina M',
        ativo: true,
    },
    {
        nome: 'Rafael R',
        ativo: false,
    },
    {
        nome: 'Fabio F',
        ativo: false,
    },
]

for(const cliente of clientes) {
    const status = cliente.ativo ? 'ativo' : 'inativo';
    console.log(`Status cliente ${cliente.nome}: ${status}`);
}