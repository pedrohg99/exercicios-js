for (let contador = 0; contador <= 100; contador++) {
    console.log('O número é: ', contador)   
}

let soma = 0
let contador = 1
do{
    soma += contador
    contador++
} while (contador <= 100)

console.log("Soma de 1 a 100: " + soma); 

// 3. Tabuada personalizada 
let numeroTabuada = 5830
let n = 0
do{
    console.log(numeroTabuada + " * " + n + " = " + (numeroTabuada * n)); 
    n++
} while (n <= 10)

// Contagem regressiva
let contagem = 10
do{
    console.log('Contagem em...: ', contagem)
    contagem--
}while (contagem >= 0)
console.log ('Contagem finalizada!')


let numeroDigitado;
let quantidade = 0;
let repeticoes = 0;

do {
  // simulação manual de entrada
  if (repeticoes === 0) {
    numeroDigitado = 5;
  } else if (repeticoes === 1) {
    numeroDigitado = 10;
  } else {
    numeroDigitado = 0;
  }

  if (numeroDigitado !== 0) {
    quantidade++;
  }

  repeticoes++;
} while (numeroDigitado !== 0);

console.log("Total de números digitados: " + quantidade);



let numeroSecreto = 9
let tentativa = 1

do {
    if (tentativa === 1){
        numeroTentado = 3;
        tentativa++
    } else if (tentativa === 2){
        numeroTentado = 5;
    } else {
        numeroTentado = 9;
        tentativa++
    }

    if (numeroTentado === numeroSecreto){
        console.log('Acertou!');
        tentativa++
    } else {
        console.log('Tente novamente');
        tentativa++
    }
} while (tentativa <= 3)