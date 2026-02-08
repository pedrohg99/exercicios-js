const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Bem-vondo(a) ao Quiz de JavaScript!');
console.log('Responda com a letra correta: A, B ou C\n');

let acertos = 0;

rl.question('1) Qual palavra usamos para criar uma função?\n[A] define\n [B] function\n [C] create\n> ', (resposta) => {
        if (resposta == 'B') {
            acertos ++;
        }
        rl.question('2) Qual dessas é uma estrutura de repetição?\n [A] loopar\n [B] repeat\n [C] for\n>', (resposta2) => {
        if (resposta2 == 'C'){
            acertos ++;
        }
        rl.question('3) Qual valor é considerado falsy em JavaScript?\n[A]1\n[B] 0\n[C] "texto"\n>', (resposta3) => {
            if (resposta3 == 'B'){
                acertos ++;
            }
        if (acertos == 3) {
            console.log('Parabéns! Seus acertos foram de: ' + acertos + ' respostas certas')
        }else if (acertos == 1){
            console.log('Muito bom! Continue melhorando')
        }else if (acertos == 2){
            console.log('Muito bom! Continue assim!')
        }else{
            console.log('Continue praticando!')
        }

        rl.close();
    });
});
});