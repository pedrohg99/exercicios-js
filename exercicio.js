// IF/ELSE
// definir um fluxo para somar ou multiplicar dois números usando if/else

    const num1 = 2;
    const num2 = 4;
    const operacao = 'divisão';

    if (operacao === 'soma') {
        console.log(num1 + num2);
    } else if (operacao === 'multiplicação') {
        console.log(num1 * num2);
    } else {
        console.log ('Operação não identificada');
    }

    // localizar númvel de bônus de acordo com o a faixa salarial
    // ex: $11000 e acima: 3% de bônus
    //     $10999 e acima: 5% de bônus
    //     $ 6999 a $4000: 7% de bônus
    //     $ 3999 p baixo: 9% de bônus

    const salario = 200;
    
    if (salario >= 11000) {
        console.log ('3% de bônus')
    } else if (salario < 11000 && salario >= 7000) {
        console.log ('5% de bônus')
    } else if (salario < 7000 && salario >= 4000){
        console.log ('7% de bônus')
    } else {
        console.log ('9% de bônus')
    }

    // OPERADORES
    // verificar se um ano é bissexto.
    // um ano é bissexto quando:
    // deve ser divisível por 4 mas NÃO divisível por 100
    // ou
    // deve ser divisível por 100 e por 400

    const ano = 2000
    
    if (((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)) {
        console.log(`${ano} é bissexto`)        
    } else {
        console.log(`${ano} não é bissexto`)
    }

    // OP CONDICIONAL E SWITCH
    // Verificar se estudante receberá bônus na nota.
    // Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas.

    const nome = "Roberta";
    const nota = 8;
    const faltas = 1;

    console.log ("Olá", nome)
    console.log ("Sua nota foi", nota)
    const recebeBonus = (nota >= 8) && (faltas <= 2)
        ? `${nome} recebe bônus`
        : `${nome} não recebe bônus`;
    console.log(recebeBonus);


    // criar um fluxo que identifica o tipo de usuário e comunica de acordo.
    // ex: usuário free tem acesso limitado ao app
    //     usuário premium tem acesso a todas as funções
    //     usuário super premium tem acesso total e bônus especiais

    const plano = 'Free';

    switch (plano){
        case 'Free':
            console.log('Acesso limitado ao app');
        break;
        case 'Premium':
            console.log('Acesso a todas as funções do app');
        break;
        case 'Super Premium':
            console.log('Acesso total e bônus especiais!');
        break;
        default:
            console.log('Opção inválida!');
        break;
    }

    // Crie um programa que, dado o valor da idade, verifique se a pessoa pode ou não entrar no evento. 
    // Exiba a mensagem informando se o acesso foi ou não permitido.
    // Para entrar, a pessoa precisa ter 18 anos ou mais.

    const idadePermissao = 20;

    const permissao = idadePermissao >= 18 ? 'Acesso permitido.' : 'Acesso negado.';
    console.log (permissao);

    //Você está desenvolvendo um sistema meteorológico para informar sobre o clima do dia. Com base na temperatura, o sistema deve classificar o dia conforme os critérios abaixo:
    // Menor que 15: "Frio"
    // De 15 a 25: "Agradável"
    // Acima de 25: "Quente"
    // Escreva um programa que, dado um valor de temperatura e imprima a mensagem correspondente.

    const temperatura = 32;

    if (temperatura < 15) {
        console.log('Frio');
    } else if (temperatura >= 15 && temperatura <= 25){
        console.log('Agradável');
    } else{
        console.log('Quente')
    }

    //Você é uma pessoa desenvolvedora de um sistema para uma escola que organiza atividades para diferentes faixas etárias. As regras são:
    // Se a pessoa tiver menos de 12 anos, ela deve ser classificada como "Infantil". 
    // Se a pessoa tiver 12 anos ou mais, mas menos de 18 anos, ela deve ser classificada como "Juvenil".
    // Se a pessoa tiver 18 anos ou mais, ela deve ser classificada como "Adulto".

    const idadePessoa = 20;

    if (idadePessoa < 12) {
        console.log('Infantil');
    } else if (idadePessoa >= 12 && idadePessoa < 18) {
        console.log('Juvenil');
    } else{
        console.log('Adulto');
    }

    // Você está desenvolvendo um sistema para controlar o horário de funcionamento de uma loja. Durante a semana, a loja abre das 9h às 18h, mas aos sábados e domingos, ela abre em horário especial, das 10h às 14h.
    // Crie um programa que, dado o dia da semana em formato numérico:
    // 0: Domingo
    // 1: Segunda-feira
    // 2: Terça-feira
    // 3: Quarta-feira
    // 4: Quinta-feira
    // 5: Sexta-feira
    // 6: Sábado
    // Verifique se a loja está aberta e qual o horário de funcionamento.
    // Se for sábado (6) ou domingo (0), a loja estará aberta em horário especial.
    // Nos outros dias, a loja estará aberta no horário normal.

    const diaDaSemana = 0;

    if (diaDaSemana >= 1 && diaDaSemana < 6) {
        console.log('A loja está aberta no horário normal: 9h às 18h.');
    } else if (diaDaSemana === 6 || diaDaSemana === 0){
        console.log('A loja está aberta em horário especial: 10h às 14h.');
    } else {
        console.log('Dia da semana inválido!')
    }

    // Você está criando um sistema de autenticação de usuários para um site. O sistema deve verificar se o usuário digitado é "admin". Se o usuário for "admin", o login será bem-sucedido e será exibida a mensagem "Login bem-sucedido!". Caso contrário, o sistema deve exibir "Usuário inválido."
    // Crie um programa utilizando o operador ternário que realize essa verificação e exiba a mensagem correspondente.

    const usuario = "admin";
    const userPermission = (usuario === 'admin') ? 'Login bem-sucedido!' : 'Usuário inválido.';
    console.log(userPermission);