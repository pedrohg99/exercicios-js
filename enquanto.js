//let contador = 1
//while(contador <= 10){
//    console.log('Número atual: ', contador)
//    contador++
//}

//let numero = 1
//
//do {
//    console.log('Número atual: ', numero)
//    numero++
//} while (numero <= 10)
//
//let number = 0
//while(number <= 15){
//    if(number % 2 == 0){
//        console.log('Número par encontrado: ', number)
//        number++
//    } else{
//        console.log('Número ímpar encontrado: ', number)
//        number++
//    }
//}

//let number = 0
//do {
//    if(number % 2 == 0){
//        console.log('Número par encontrado: ', number)
//        number++
//    } else{
//        console.log('Número ímpar encontrado: ', number)
//        number++
//    }
//} while (number <= 15)

//const palavra = 'Pedro'
//let cont = 0
//
//while (cont < palavra.length){
//    console.log(palavra[cont])
//    cont++
//}

//const palavra = 'Pedro'
//let cont = 0
//
//do{
//    console.log(palavra[cont])
//    cont++
//} while (cont < palavra.length)


let totalNumerosPares = 0
let totalNumerosImpares = 0
let contador = 0

do {
    if(contador % 2 == 0){
        totalNumerosPares++
        contador++
    }else{
        totalNumerosImpares++
        contador++
    }
} while (contador <= 100)

console.log('Total de números pares: ', totalNumerosPares)
console.log('total de número ímpares: ', totalNumerosImpares)