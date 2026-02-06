const idade = 6
//if (idade >= 18){
 //   console.log('É maior de idade')
//}
//else{
//    console.log('É menor de idade')
//}

idade >= 18 ? console.log('Maior de idade') : console.log('Menor de idade')



//if(idade < 18){
//    console.log('É menor de idade')
//}

//entre 9 e 10: excelente
// entre 7 e 8: bom
// entre 4 e 6: médio
// entre 0 e 3: ruim

const notaDoAluno = 6

//if(notaDoAluno >= 9){
//console.log('Excelente')
//}
//else if(notaDoAluno >= 7){
//    console.log('Bom')
//}
//else if(notaDoAluno >= 4){
//    console.log('médio')
//}
//else{
//    console.log('ruim')
//}

notaDoAluno >= 9 ? console.log('excelente') :
    notaDoAluno >= 7 ? console.log('boa') :
        notaDoAluno >= 4 ? console.log('mediana') :
            console.log('ruim')
