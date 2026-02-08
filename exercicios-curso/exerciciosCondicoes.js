// Verificação de idade para compra de bebida
let idade = 50
if (idade >= 18) {
    console.log('Pode comprar bebida alcóolica')
} else {
    console.log('Não pode comprar bebida alcóolica')
}

// Saudação de acordo com a hora
let horaAtual = 15
horaAtual <= 12 ? console.log('Bom dia') : horaAtual <= 18 ? console.log('Boa tarde') : console.log('Boa noite')

// Verificação de número positivo ou negativo
let numeral = 6
numeral < 0 ? console.log('Número negativo') : numeral > 0 ? console.log('Número positivo') : console.log('Igual a zero')

//Conversão de nota em conceito
let nota = 7
if (nota > 0 && nota < 10){
    if (nota >= 9) {
        console.log('A nota é A')
    } else if (nota >= 8) {
        console.log('B')
    } else if (nota >= 6) {
        console.log('C')
    } else if (nota >= 4) {
        console.log('D')
    } else {
        console.log('E')
    }
} else{
    console.log('Número inválido! Digite um número de 0 a 10')
}


// Número par ou ímpar com ternário
let numero = 6565454665596

numero % 2 === 0 ? console.log('É par') : console.log('É ímpar')

// Menu com switch-case
let opcao = 1
switch(opcao) {
    case 1:
        console.log('Cadastrar');
    break
    case 2:
        console.log('Listar');
    break
    case 3:
        console.log('Sair');
    break
    default:
        console.log('Opção inválida!')
    break
}

// Validação de campo obrigatório
const email = "pedrohg99@yahoo.com";
if (email) {
    console.log('E-mail válido! Seu e-mail é: ', email)
}else{
    console.log('Preencha o campo de e-mail')
}

// Validação de senha segura
const senha = ""
const senhaValida = true

if (senha) {
    console.log('A senha é válida')
}else{
    console.log('A Senha é inválida')
}