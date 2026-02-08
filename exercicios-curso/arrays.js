//const frutas = ['Uva', 'Banana', 'Kiwi', 'Morango']
//console.log(frutas)
//console.log('Última fruta:', frutas[3])
//console.log('Total de frutas:', frutas.length)
//frutas.push('Melancia')
//console.log('Total de Frutas depois de adicionar melancia', frutas.length)

const frutas = ['Uva', 'Kiwi', 'Banana', 'Melancia', 'Morango']
console.log(frutas)

// Como remover um ítem de um array
frutas.splice(2, 1)
console.log('Depois de remover', frutas)

for(let i = 0; i < frutas.length; i++){
    console.log('indice: ', i)
    console.log(frutas[i])
}

frutas.forEach((valor, indice) => {
    console.log('Indice ', indice, valor)
})

for(const fruta of frutas){
    console.log('Fruta da vez: ', fruta)
}