const readline = require ('readline')

const qs = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-vindo(a) ao Quiz!')

let acertos = 0;

qs.question('Qual é o seu nome?', (nome) => {
    console.log('Olá, ' + nome + ' Vamos começar?!\n\n')

    qs.question('1) Qual palavra usamos para criar uma função?\n[A] define\n [B] function\n [C] create\n>', (resposta1) => {
        if (resposta1 == 'B') {
            acertos++
        }

        qs.question('2) Qual dessas é uma estrutura de repetição?\n [A] loopar\n [B] repeat\n [C] for\n>', (resposta2) =>{
            if (resposta2 == 'C') {
                acertos++
            }

            qs.question('3) Qual valor é considerado falsy em JavaScript?\n[A]1\n[B] 0\n[C] "texto"\n>', (resposta3) => {
                if (resposta3 == 'B') {
                    acertos++
                }
                if (acertos == 1) {
                    console.log('Muito bom! Continue melhorando')
                }else if (acertos == 2){
                    console.log('Muito bom! Continue assim!')
                }else if (acertos == 3){
                    console.log('Parabéns! Acertou todas!')
                }else{
                    console.log('Continue praticando!')
                }
                qs.close();
            })
        })
    })
})