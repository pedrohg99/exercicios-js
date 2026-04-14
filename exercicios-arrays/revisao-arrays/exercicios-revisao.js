function criaArrNum(inicio, fim){
    const arr = [];
    let elemento = inicio;

    for (let i = 0, j = 0; j < fim; i++, elemento++) {
        arr[i] = elemento;
        j = elemento;
    }
    return arr;
}

console.log(criaArrNum(12, 30));

const arr1 = [[1, 2], 2, 3];

const copiaArray = (arr) => {
    const copia = [];
    arr.forEach((elem) => {
        if (Array.isArray(elem)) {
            copia.push(copiaArray(elem));
        } else {
            copia.push(elem);
        }
    })
    return copia;
}

const arr2 = copiaArray(arr1);
arr1[0][0] = 5;

console.log(arr1);
console.log(arr2);


//filtrar um array e alterar valores específicos
// ex: alterar números para strings

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];
const result = cpfs.map(cpf => typeof cpf === 'string' ? cpf : cpf.toString())

console.log(result);