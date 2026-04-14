const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate'];
console.log ("Segundo item da lista:", listaDeCompras[1]);
listaDeCompras[listaDeCompras.length - 1] = 'fruta';

console.log ("Lista após a modificação:", listaDeCompras);

const despesas = [120, 80, 45.5, 200, 60];
let total = 0;
for (let i = 0; i < despesas.length; i++) {
    total += despesas[i];
}
console.log("Total de despesas: ", total);

const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz'];
for (const elem of estudantes) {
    console.log ("Estudante:", elem)
}

const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado'];
mensagens.forEach(mensagem => {
    console.log("Mensagem enviada:", mensagem);
})

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];
tarefas.push('Pagar boletos');
console.log("Lista após adicionar:", tarefas);
const remover = tarefas.pop()
console.log("Lista após remover a última tarefa:", tarefas);

const pedidos = ['camiseta', 'calça', 'tênis'];
const copiaPedidos = pedidos.slice();

copiaPedidos.push('boné');
console.log("Array original:", pedidos);
console.log("Array copiado:", copiaPedidos);

const livros = ['Dom Casmurro', 'O Cortiço', 'Capitães da Areia', 'Iracema'];
const livroProcurado = 'O Cortiço';
if (livros.indexOf(livroProcurado) !== -1){
    console.log(`O livro "${livroProcurado}" está disponível.`);
} else {
    console.log(`O livro "${livroProcurado}" não está disponível.`);
}

const precos = [100, 80, 50, 120];
let precosDesconto = precos.map(precos => precos * 0.9);
console.log("Preços com desconto: ", precosDesconto);