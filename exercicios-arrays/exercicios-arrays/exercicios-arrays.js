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