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

const participantes = [
  { nome: 'Ana', idade: 17 },
  { nome: 'Bruno', idade: 22 },
  { nome: 'Carla', idade: 19 },
  { nome: 'Daniel', idade: 15 },
  { nome: 'Eduarda', idade: 25 }
];

const autorizados = participantes.filter(p => {
    p.idade >= 18 ? console.log(`Acesso libarado para: ${p.nome}`) : false; return p.idade >= 18
});

const aprovados = autorizados.map(p => p.nome);

console.log("lista de aprovados", aprovados);


const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];
let relatorio = ''; 
let produtosMaisVendidos = ''; 
let totalPorProduto = ''; 
const maisLucrativo = { nome: '', totalVendas: 0 }; 
produtos.forEach(prod => { 
  const totalVendidoProduto = prod.preco * prod.quantidadeVendida; 
  relatorio += `Produto: ${prod.nome} | Preço: ${prod.preco} | Quantidade vendida: ${prod.quantidadeVendida}\n`; 
  if (prod.quantidadeVendida > 100) { 
    produtosMaisVendidos += `${prod.nome}\n` 
  } 
  totalPorProduto += `${prod.nome}: R$ ${totalVendidoProduto}\n`; 
  if (totalVendidoProduto > maisLucrativo.totalVendas) { 
    maisLucrativo.nome = prod.nome; 
    maisLucrativo.totalVendas = totalVendidoProduto; 
  } 
}) 
console.log('Relatório de produtos vendidos:'); 
console.log(relatorio); 
console.log('Produtos com alto volume de vendas (> 100 unidades):'); 
console.log(produtosMaisVendidos); 
console.log('Total de vendas por produto:'); 
console.log(totalPorProduto); 
console.log('Produto mais lucrativo:'); 
console.log(`${maisLucrativo.nome} com R$ ${maisLucrativo.totalVendas} em vendas.`);
