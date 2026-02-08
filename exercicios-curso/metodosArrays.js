const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filtrar numeros pares
const numerosPares = numeros.filter((numero) => {
    return numero % 2 == 0
})

// filtrar numeros impares
const numerosImpares = numeros.filter((numero) => {
    return numero % 2 != 0
})

// Mapear números dobrados
const numerosDobrados = numeros.map((numero) => {
    return numero * 2
})

console.log('Todos os números', numeros)
console.log('Todos os números pares: ', numerosPares)
console.log('Todos os números ímpares: ', numerosImpares)
console.log('Nossa lista mapeada', numerosDobrados)